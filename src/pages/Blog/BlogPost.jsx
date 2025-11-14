import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '../../contexts/ThemeContext';
import LazyImage from '../../components/LazyImage/LazyImage';
import './Blog.css';
import './BlogPost.css';

const BlogPost = () => {
  const { postId } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  
  // Get the specific blog post
  const allPosts = t('blog.posts', { returnObjects: true, defaultValue: {} });
  const post = allPosts[postId];
  
  // Set mounted state for animations
  useEffect(() => {
    setIsMounted(true);
    
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Track page view
    if (post) {
      document.title = `${post.title} | ${t('site.title')}`;
      
      // You can add analytics tracking here
      // trackPageView(`/blog/${postId}`, post.title);
    }
    
    return () => {
      setIsMounted(false);
    };
  }, [post, postId, t]);

  // Reading progress indicator
  useEffect(() => {
    const updateReadingProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', updateReadingProgress);
    updateReadingProgress(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
    };
  }, []);

  // If post doesn't exist, redirect to blog home
  useEffect(() => {
    if (Object.keys(allPosts).length > 0 && !post) {
      navigate('/blog', { replace: true });
    }
  }, [post, allPosts, navigate]);

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-lg">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  // Format the date using only Gregorian calendar
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      calendar: 'gregory'
    };
    return new Date(dateString).toLocaleDateString(
      i18n.language === 'ar' ? 'ar-EG' : 'en-US', 
      options
    );
  };

  // Format tags for display with enhanced styling
  const renderTags = () => {
    if (!post.tags || post.tags.length === 0) return null;
    
    return (
      <div className="tags flex flex-wrap gap-3 mt-8">
        {post.tags.map((tag, index) => (
          <span key={index} className="tag">
            #{tag}
          </span>
        ))}
      </div>
    );
  };

  // Format content with proper paragraphs and enhanced rendering
  const renderContent = () => {
    if (!post.content) return null;
    
    return post.content.split('\n\n').map((paragraph, index) => {
      // Check if paragraph is a list item
      if (paragraph.startsWith('• ')) {
        const listItems = paragraph.split('• ').filter(Boolean);
        return (
          <ul key={index} className="list-disc pl-6 mb-6 space-y-3">
            {listItems.map((item, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-300">{item.trim()}</li>
            ))}
          </ul>
        );
      }
      
      // Check if paragraph is a heading
      if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-3xl font-bold mt-10 mb-6 text-gray-900 dark:text-white">{paragraph.substring(3)}</h2>;
      }
      
      if (paragraph.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-200">{paragraph.substring(4)}</h3>;
      }
      
      // Check for code blocks
      if (paragraph.startsWith('```')) {
        const code = paragraph.substring(3, paragraph.length - 3).trim();
        return (
          <pre key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto my-6 border border-gray-700">
            <code className="text-sm leading-relaxed">{code}</code>
          </pre>
        );
      }
      
      // Check for blockquotes
      if (paragraph.startsWith('> ')) {
        return (
          <blockquote key={index} className="border-l-4 border-blue-500 pl-6 my-6 italic text-lg text-gray-600 dark:text-gray-400">
            {paragraph.substring(2)}
          </blockquote>
        );
      }
      
      // Regular paragraph with enhanced styling
      return (
        <p key={index} className="mb-6 leading-relaxed text-gray-800 dark:text-gray-200">
          {paragraph}
        </p>
      );
    });
  };
  
  return (
    <div className={`blog-post ${i18n.language === 'ar' ? 'rtl' : ''} ${theme === 'dark' ? 'dark' : ''} transition-colors duration-300`}>
      <Helmet>
        <title>{post.title} | {t('blog.title')}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags ? post.tags.join(', ') : ''} />
      </Helmet>

      {/* Reading Progress Indicator */}
      <div 
        className="reading-progress" 
        style={{ width: `${readingProgress}%` }}
      />

      <article className={`container mx-auto px-4 py-12 max-w-4xl transition-opacity duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-12">
          <button 
            onClick={() => navigate(-1)} 
            className="back-button flex items-center transition-all duration-300"
            aria-label={t('common.back')}
          >
            <svg 
              className={`w-5 h-5 ${i18n.language === 'ar' ? 'ml-2' : 'mr-2'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('common.back')}
          </button>

          <div className="meta">
            <time dateTime={post.date} className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              {formatDate(post.date)}
            </time>
            <span className="divider">•</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {post.readTime || t('blog.readTime', { minutes: 5 })}
            </span>
            {post.author && (
              <>
                <span className="divider">•</span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {post.author}
                </span>
              </>
            )}
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light">
              {post.excerpt}
            </p>
          )}
          
          {renderTags()}
        </div>

        {/* Featured image if available */}
        {post.image && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <LazyImage
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        )}

        <div className="content prose prose-lg dark:prose-dark max-w-none">
          {renderContent()}
        </div>
        
        {/* Article actions and navigation */}
        <div className="mt-16 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <button 
              onClick={() => navigate(-1)} 
              className="back-button flex items-center transition-all duration-300"
            >
              <svg 
                className={`w-5 h-5 ${i18n.language === 'ar' ? 'ml-2' : 'mr-2'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t('common.backToBlog')}
            </button>
            
            <div className="flex items-center space-x-4">
              {/* Share buttons */}
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {t('blog.share', 'Share:')}
                </span>
                <button 
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: post.title,
                        text: post.excerpt,
                        url: window.location.href
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label={t('blog.shareArticle', 'Share article')}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
              </div>
              
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                aria-label={t('common.scrollToTop')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
