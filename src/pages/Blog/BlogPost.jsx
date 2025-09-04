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

  // Format the date based on the current language
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(
      i18n.language === 'ar' ? 'ar-SA' : 'en-US', 
      options
    );
  };

  // Format tags for display
  const renderTags = () => {
    if (!post.tags || post.tags.length === 0) return null;
    
    return (
      <div className="tags flex flex-wrap gap-2 mt-6">
        {post.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    );
  };

  // Format content with proper paragraphs and lists
  const renderContent = () => {
    if (!post.content) return null;
    
    return post.content.split('\n\n').map((paragraph, index) => {
      // Check if paragraph is a list item
      if (paragraph.startsWith('• ')) {
        const listItems = paragraph.split('• ').filter(Boolean);
        return (
          <ul key={index} className="list-disc pl-6 mb-4">
            {listItems.map((item, i) => (
              <li key={i} className="mb-2">{item.trim()}</li>
            ))}
          </ul>
        );
      }
      
      // Check if paragraph is a heading
      if (paragraph.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.substring(3)}</h2>;
      }
      
      // Check for code blocks
      if (paragraph.startsWith('```')) {
        const code = paragraph.substring(3, paragraph.length - 3).trim();
        return (
          <pre key={index} className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
            <code>{code}</code>
          </pre>
        );
      }
      
      // Regular paragraph
      return <p key={index} className="mb-6 leading-relaxed">{paragraph}</p>;
    });
  };
  
  return (
    <div className={`blog-post ${i18n.language === 'ar' ? 'rtl' : ''} ${theme === 'dark' ? 'dark' : ''} transition-colors duration-300`}>
      <Helmet>
        <title>{post.title} | {t('blog.title')}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags ? post.tags.join(', ') : ''} />
      </Helmet>

      <article className={`container mx-auto px-4 py-12 max-w-4xl transition-opacity duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="mb-10">
          <button 
            onClick={() => navigate(-1)} 
            className="back-button flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 transition-colors"
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

          <div className="meta flex items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
            <time dateTime={post.date} className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              {formatDate(post.date)}
            </time>
            <span className="divider mx-3">•</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {post.readTime || t('blog.readTime', { minutes: 5 })}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
          )}
          
          {renderTags()}
        </div>

        <div className="content prose dark:prose-dark max-w-none">
          {renderContent()}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigate(-1)} 
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center"
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
            
            <div className="flex space-x-2">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
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
