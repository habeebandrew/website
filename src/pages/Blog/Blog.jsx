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
        <div className="blog-header">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {t('blog.title')}
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="blog-filters">
          <div className="category-buttons">
            <button
              key="all"
              onClick={() => handleCategoryChange('all')}
              className={`category-btn ${
                activeCategory === 'all' || !activeCategory
                  ? 'active'
                  : ''
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
                  className={`category-btn ${
                    activeCategory === category
                      ? 'active'
                      : ''
                  }`}
                >
                  {t(`blog.categories.${category}`, { defaultValue: category })}
                </button>
              ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="featured-posts">
            <h2 className="featured-title">
              {t('blog.featured')}
            </h2>
            <div className="featured-grid">
              {featuredPosts.map((post) => (
                <article key={post.id} className="featured-post">
                  <div className="post-image">
                    <LazyImage
                      src={post.image || '/placeholder-image.jpg'}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="post-badge">
                      {t(`blog.categories.${post.category}`, post.category)}
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <time dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      <span>•</span>
                      <span>{post.readTime || t('blog.readTime', { minutes: 5 })}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h3 className="post-title">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="post-excerpt">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="post-tags">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="post-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <Link
                      to={`/blog/${post.id}`}
                      className="post-read-more"
                    >
                      {t('blog.readMore')} →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="featured-title">
            {activeCategory === 'all' || !activeCategory
              ? t('blog.latestArticles') 
              : t('blog.categoryArticles', { category: t(`blog.categories.${activeCategory}`, { defaultValue: activeCategory }) })}
          </h2>
          
          {regularPosts.length > 0 ? (
            <div className="blog-grid">
              {regularPosts.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="card-image">
                    <LazyImage
                      src={post.image || '/placeholder-image.jpg'}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="card-content">
                    <div className="post-meta">
                      <span className="post-category">
                        {t(`blog.categories.${post.category}`, post.category)}
                      </span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h3 className="post-title">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="post-excerpt">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="post-tags">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="post-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="card-footer">
                      <div className="post-meta">
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                        <span>•</span>
                        <span className="post-read-time">
                          {post.readTime || t('blog.readTime', { minutes: 5 })}
                        </span>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="post-read-more"
                      >
                        {t('blog.readMore')} →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-posts">
              <h3>
                {t('blog.noArticles')}
              </h3>
              <p>
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