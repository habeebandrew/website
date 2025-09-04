import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LazyImage from '../../components/LazyImage/LazyImage';
import { useTheme } from '../../contexts/ThemeContext';
import './Blog.css';

const Blog = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Initialize loading state
    setIsLoading(true);
    
    // Simulate loading data
    const timer = setTimeout(() => {
      try {
        const blogPosts = t('blog.posts', { returnObjects: true, defaultValue: {} });
        
        if (Array.isArray(blogPosts)) {
          // If it's an array (fallback), convert to object with IDs
          const postsObject = {};
          blogPosts.forEach((post, index) => {
            postsObject[`post-${index}`] = {
              ...post,
              id: `post-${index}`
            };
          });
          setPosts(postsObject);
          setFeaturedPost(postsObject['post-0'] || null);
        } else if (typeof blogPosts === 'object' && blogPosts !== null) {
          // If it's already an object, ensure each post has an ID
          const postsWithIds = {};
          Object.entries(blogPosts).forEach(([id, post]) => {
            postsWithIds[id] = {
              ...post,
              id: id
            };
          });
          setPosts(postsWithIds);
          
          // Set the first post as featured
          const postIds = Object.keys(postsWithIds);
          if (postIds.length > 0) {
            setFeaturedPost(postsWithIds[postIds[0]]);
          }
        }
      } catch (error) {
        console.error('Error loading blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      setIsMounted(false);
    };
  }, [t, i18n.language]);

  // Get all blog posts from i18n
  const allPosts = useMemo(() => {
    try {
      const blogPosts = t('blog.posts', { returnObjects: true, defaultValue: {} });
      if (Array.isArray(blogPosts)) {
        return blogPosts.map((post, index) => ({
          id: `post-${index}`,
          ...post,
          category: post.category ? post.category.toLowerCase() : 'uncategorized',
          categories: post.categories || [post.category || 'uncategorized']
        }));
      }
      return Object.entries(blogPosts).map(([key, post]) => ({
        id: key,
        ...post,
        category: post.category ? post.category.toLowerCase() : 'uncategorized',
        categories: post.categories || [post.category || 'uncategorized']
      }));
    } catch (error) {
      console.error('Error parsing blog posts:', error);
      return [];
    }
  }, [t]);

  // Get unique categories from posts
  const categories = useMemo(() => {
    const cats = new Set(['all']);
    allPosts.forEach(post => {
      if (post.categories && Array.isArray(post.categories)) {
        post.categories.forEach(cat => cats.add(cat));
      } else if (post.category) {
        cats.add(post.category);
      }
    });
    return Array.from(cats);
  }, [allPosts]);

  // Category filter handler
  const handleCategoryChange = (category) => {
    setActiveCategory(category === 'all' ? 'all' : category);
    // Optional: Scroll to top when changing categories
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter posts by selected category
  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all' || !activeCategory) {
      return allPosts;
    }
    return allPosts.filter(post => 
      (post.categories && post.categories.includes(activeCategory)) || 
      post.category === activeCategory
    );
  }, [allPosts, activeCategory]);

  // Format the date based on the current language
  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    try {
      const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        calendar: i18n.language === 'ar' ? 'islamic-umalqura' : 'gregory'
      };
      
      const date = new Date(dateString);
      return date.toLocaleDateString(
        i18n.language === 'ar' ? 'ar-SA' : 'en-US',
        options
      );
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateString;
    }
  };

  // Separate featured and regular posts
  const { featuredPosts, regularPosts } = useMemo(() => {
    const featured = [];
    const regular = [];
    
    filteredPosts.forEach(post => {
      if (post && post.featured) {
        featured.push(post);
      } else if (post) {
        regular.push(post);
      }
    });
    
    // If no featured posts, use the first post as featured
    if (featured.length === 0 && regular.length > 0) {
      const [first, ...rest] = regular;
      return { 
        featuredPosts: [first], 
        regularPosts: rest 
      };
    }
    
    return { 
      featuredPosts: featured, 
      regularPosts: regular 
    };
  }, [filteredPosts]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`blog min-h-screen ${i18n.language === 'ar' ? 'rtl' : ''} ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Helmet>
        <title>{t('blog.title')} | {t('site.title')}</title>
        <meta name="description" content={t('blog.subtitle')} />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {t('blog.title')}
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
          <button
            key="all"
            onClick={() => handleCategoryChange('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'all' || !activeCategory
                ? 'bg-blue-600 text-white dark:bg-blue-700'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {t('blog.categories.all', 'All')}
          </button>
          {categories
            .filter(cat => cat !== 'all')
            .map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white dark:bg-blue-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {t(`blog.categories.${category}`, { defaultValue: category })}
              </button>
            ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              {t('blog.featured')}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 transition-transform hover:scale-105">
                  <div className="flex-shrink-0 h-48 overflow-hidden">
                    <LazyImage
                      src={post.image || '/placeholder-image.jpg'}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {t(`blog.categories.${post.category}`, post.category)}
                      </p>
                      <Link to={`/blog/${post.id}`} className="block mt-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                          {post.excerpt}
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <span className="sr-only">Author</span>
                          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <span className="text-gray-600 dark:text-gray-300">
                              {post.author?.[0] || 'A'}
                            </span>
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {post.author || 'Admin'}
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                            <time dateTime={post.date}>
                              {formatDate(post.date)}
                            </time>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        {post.readTime || t('blog.readTime', { minutes: 5 })}
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-base font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        {t('blog.readMore')} →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            {activeCategory === 'all' || !activeCategory
              ? t('blog.latestArticles') 
              : t('blog.categoryArticles', { category: t(`blog.categories.${activeCategory}`, { defaultValue: activeCategory }) })}
          </h2>
          
          {regularPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post) => (
                <div key={post.id} className="flex flex-col rounded-lg shadow overflow-hidden bg-white dark:bg-gray-800 transition-transform hover:scale-105 h-full">
                  <div className="flex-shrink-0 h-48 overflow-hidden">
                    <LazyImage
                      src={post.image || '/placeholder-image.jpg'}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {t(`blog.categories.${post.category}`, post.category)}
                      </p>
                      <Link to={`/blog/${post.id}`} className="block mt-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                          {post.excerpt}
                        </p>
                      </Link>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <span className="sr-only">Author</span>
                          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <span className="text-gray-600 dark:text-gray-300">
                              {post.author?.[0] || 'A'}
                            </span>
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {post.author || 'Admin'}
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                            <time dateTime={post.date}>
                              {formatDate(post.date)}
                            </time>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        {post.readTime || t('blog.readTime', { minutes: 5 })}
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-base font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        {t('blog.readMore')} →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {t('blog.noArticles')}
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {t('blog.noArticlesDesc')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;