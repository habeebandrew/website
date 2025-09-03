import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import LazyImage from '../../components/LazyImage/LazyImage';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Flutter Development',
      excerpt: 'Learn the fundamentals of Flutter and how to build your first mobile application with this comprehensive guide.',
      content: 'Flutter is Google\'s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase...',
      category: 'Flutter',
      author: 'Habeeb Andraws',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      tags: ['Flutter', 'Mobile', 'Development', 'Beginner'],
      featured: true
    },
    {
      id: 2,
      title: 'React Best Practices for 2024',
      excerpt: 'Discover the latest React patterns and best practices that will make your applications more maintainable and performant.',
      content: 'React has evolved significantly over the years, and with it, the best practices for building React applications...',
      category: 'React',
      author: 'Habeeb Andraws',
      date: '2024-01-10',
      readTime: '7 min read',
      image: '/api/placeholder/400/250',
      tags: ['React', 'JavaScript', 'Best Practices'],
      featured: false
    },
    {
      id: 3,
      title: 'Building Responsive Web Applications',
      excerpt: 'Master the art of creating web applications that work seamlessly across all devices and screen sizes.',
      content: 'Responsive design is no longer optional in today\'s web development landscape...',
      category: 'Web Development',
      author: 'Habeeb Andraws',
      date: '2024-01-05',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
      tags: ['CSS', 'Responsive', 'Web Design'],
      featured: true
    },
    {
      id: 4,
      title: 'State Management in Flutter',
      excerpt: 'Compare different state management solutions in Flutter and learn when to use each approach.',
      content: 'State management is one of the most important aspects of Flutter development...',
      category: 'Flutter',
      author: 'Habeeb Andraws',
      date: '2024-01-01',
      readTime: '8 min read',
      image: '/api/placeholder/400/250',
      tags: ['Flutter', 'State Management', 'Architecture'],
      featured: false
    },
    {
      id: 5,
      title: 'Modern JavaScript Features',
      excerpt: 'Explore the latest JavaScript features and how they can improve your code quality and developer experience.',
      content: 'JavaScript continues to evolve with new features being added regularly...',
      category: 'JavaScript',
      author: 'Habeeb Andraws',
      date: '2023-12-28',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
      tags: ['JavaScript', 'ES2024', 'Modern'],
      featured: false
    },
    {
      id: 6,
      title: 'UI/UX Design Principles for Developers',
      excerpt: 'Learn essential UI/UX design principles that every developer should know to create better user experiences.',
      content: 'Good design is not just about making things look pretty...',
      category: 'Design',
      author: 'Habeeb Andraws',
      date: '2023-12-25',
      readTime: '4 min read',
      image: '/api/placeholder/400/250',
      tags: ['UI/UX', 'Design', 'User Experience'],
      featured: true
    }
  ];

  const categories = [t('blog.categories.all'), 'Flutter', 'React', t('blog.categories.webDev'), 'JavaScript', t('blog.categories.design')];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setPosts(blogPosts);
      setFilteredPosts(blogPosts);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedCategory === t('blog.categories.all')) {
      setFilteredPosts(posts);
    } else {
      // Map translated categories back to original categories for filtering
      let filterCategory = selectedCategory;
      if (selectedCategory === t('blog.categories.webDev')) filterCategory = 'Web Development';
      if (selectedCategory === t('blog.categories.design')) filterCategory = 'Design';
      
      setFilteredPosts(posts.filter(post => post.category === filterCategory));
    }
  }, [selectedCategory, posts, t]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  if (isLoading) {
    return (
      <section className="blog-section">
        <div className="container">
          <div className="blog-loading">
            <div className="loading-spinner"></div>
            <p>{t('blog.loading')}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog - Habeeb Andraws | Software Engineering Insights</title>
        <meta name="description" content="Read the latest articles about Flutter, React, web development, and software engineering by Habeeb Andraws." />
        <meta name="keywords" content="Flutter blog, React tutorials, web development, software engineering, programming articles" />
      </Helmet>

      <section className="blog-section">
        <div className="container">
          <div className="blog-header">
            <h1 className="section-title">{t('blog.title')}</h1>
            <p className="section-subtitle">
              {t('blog.subtitle')}
            </p>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="featured-posts">
              <h2 className="featured-title">{t('blog.featured')}</h2>
              <div className="featured-grid">
                {featuredPosts.map(post => (
                  <article key={post.id} className="featured-post">
                    <div className="post-image">
                      <LazyImage
                        src={post.image}
                        alt={post.title}
                        className="full-width"
                      />
                      <div className="post-badge">{t('blog.featured')}</div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="post-category">{post.category}</span>
                        <span className="post-date">{formatDate(post.date)}</span>
                        <span className="post-read-time">{post.readTime}</span>
                      </div>
                      <h3 className="post-title">{post.title}</h3>
                      <p className="post-excerpt">{post.excerpt}</p>
                      <div className="post-tags">
                        {post.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="post-tag">{tag}</span>
                        ))}
                      </div>
                      <button className="post-read-more">{t('blog.readMore')}</button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="blog-filters">
            <h3>{t('blog.filterTitle')}</h3>
            <div className="category-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Regular Posts */}
          <div className="blog-grid">
            {regularPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="card-image">
                  <LazyImage
                    src={post.image}
                    alt={post.title}
                    className="full-width"
                  />
                </div>
                <div className="card-content">
                  <div className="post-meta">
                    <span className="post-category">{post.category}</span>
                    <span className="post-date">{formatDate(post.date)}</span>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="card-footer">
                    <span className="post-read-time">{post.readTime}</span>
                    <button className="post-read-more">{t('blog.readMore')}</button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-posts">
              <h3>{t('blog.noArticles')}</h3>
              <p>{t('blog.noArticlesDesc')}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;