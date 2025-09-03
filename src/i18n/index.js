import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        about: "About",
        services: "Expertise", 
        projects: "Projects",
        blog: "Blog",
        testimonials: "Testimonials",
        contact: "Contact"
      },
      // Home Page
      home: {
        greeting: "Hi, I'm",
        name: "Habeeb",
        title: "Flutter Developer & Software Engineer",
        subtitle: "Building High-Performance Apps",
        description: "I build high-performance mobile, web, and desktop applications focused on clean design and great user experience.",
        viewProjects: "View Projects",
        contactMe: "Contact Me"
      },
      // About Page
      about: {
        title: "About Me",
        subtitle: "Learn more about my journey and expertise",
        heading: "Software Engineering Student & Flutter Developer",
        description1: "I hold a Bachelor's degree in Software Engineering from the Faculty of Informatics Engineering at Damascus University. I'm passionate about building production-ready applications and solving real-world problems through innovative technology solutions.",
        description2: "With experience delivering prototypes and collecting feedback from real clients, I focus on creating applications with exceptional UI/UX design, solid system architecture, and seamless backend integration.",
        techStack: "Tech Stack",
        stats: {
          projects: "Major Projects", 
          experience: "Years Experience"
        }
      },
      // Services Page
      services: {
        title: "My Expertise",
        subtitle: "Services I provide to bring your ideas to life",
        mobile: {
          title: "Mobile Development",
          description: "Cross-platform mobile apps using Flutter"
        },
        web: {
          title: "Web Development", 
          description: "Modern web applications using React and other technologies"
        },
        desktop: {
          title: "Desktop Development",
          description: "Desktop applications for Windows, macOS, and Linux"
        }
      },
      // Projects Page
      projects: {
        title: "My Projects",
        subtitle: "A showcase of my recent work and achievements",
        viewProject: "View Project",
        liveDemo: "Live Demo",
        sourceCode: "Source Code"
      },
      // Blog Page
      blog: {
        title: "Latest Articles",
        subtitle: "Insights, tutorials, and thoughts on software development, design, and technology",
        featured: "Featured Articles",
        filterTitle: "Filter by Category",
        categories: {
          all: "All",
          flutter: "Flutter",
          react: "React", 
          webDev: "Web Development",
          javascript: "JavaScript",
          design: "Design"
        },
        readMore: "Read More",
        readTime: "min read",
        noArticles: "No articles found",
        noArticlesDesc: "Try selecting a different category or check back later for new content.",
        loading: "Loading articles..."
      },
      // Testimonials Page
      testimonials: {
        title: "What Clients Say",
        subtitle: "Feedback from clients and collaborators"
      },
      // Contact Page
      contact: {
        title: "Get In Touch",
        subtitle: "Let's discuss your project and bring your ideas to life",
        name: "Name",
        email: "Email",
        subject: "Subject", 
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again."
      },
      // Footer
      footer: {
        description: "Flutter Developer & Software Engineer creating innovative applications",
        rights: "All rights reserved.",
        builtWith: "Built with",
        social: "Follow me on social media"
      },
      // Common
      common: {
        loading: "Loading...",
        error: "Something went wrong",
        tryAgain: "Try Again",
        goBack: "Go Back",
        refresh: "Refresh Page",
        darkTheme: "Dark",
        lightTheme: "Light",
        language: "Language"
      },
      // Error Boundary
      error: {
        title: "Oops! Something went wrong",
        description: "We're sorry, but something unexpected happened. Please try refreshing the page.",
        details: "Error Details (Development Only)"
      }
    }
  },
  ar: {
    translation: {
      // Navigation
      nav: {
        home: "الرئيسية",
        about: "حولي",
        services: "خبراتي",
        projects: "المشاريع", 
        blog: "المدونة",
        testimonials: "التوصيات",
        contact: "التواصل"
      },
      // Home Page
      home: {
        greeting: "مرحباً، أنا",
        name: "حبيب",
        title: "مطور Flutter ومهندس برمجيات",
        subtitle: "بناء تطبيقات عالية الأداء",
        description: "أقوم ببناء تطبيقات الجوال والويب وسطح المكتب عالية الأداء مع التركيز على التصميم النظيف وتجربة المستخدم الرائعة.",
        viewProjects: "عرض المشاريع",
        contactMe: "تواصل معي"
      },
      // About Page  
      about: {
        title: "حولي",
        subtitle: "تعرف أكثر على رحلتي وخبراتي",
        heading: "طالب هندسة برمجيات ومطور Flutter",
        description1: "أحمل درجة البكالوريوس في هندسة البرمجيات من كلية الهندسة المعلوماتية في جامعة دمشق. أنا شغوف ببناء التطبيقات الجاهزة للإنتاج وحل المشاكل الحقيقية من خلال الحلول التقنية المبتكرة.",
        description2: "مع خبرة في تطوير النماذج الأولية وجمع التعليقات من العملاء الحقيقيين، أركز على إنشاء تطبيقات بتصميم UI/UX استثنائي، وهندسة نظام قوية، وتكامل backend سلس.",
        techStack: "التقنيات المستخدمة",
        stats: {
          projects: "المشاريع الرئيسية",
          experience: "سنوات الخبرة"
        }
      },
      // Services Page
      services: {
        title: "خبراتي",
        subtitle: "الخدمات التي أقدمها لتحويل أفكارك إلى واقع",
        mobile: {
          title: "تطوير الجوال",
          description: "تطبيقات الجوال متعددة المنصات باستخدام Flutter"
        },
        web: {
          title: "تطوير الويب",
          description: "تطبيقات ويب حديثة باستخدام React والتقنيات الأخرى"
        },
        desktop: {
          title: "تطوير سطح المكتب", 
          description: "تطبيقات سطح المكتب لأنظمة Windows و macOS و Linux"
        }
      },
      // Projects Page
      projects: {
        title: "مشاريعي",
        subtitle: "عرض لأحدث أعمالي وإنجازاتي",
        viewProject: "عرض المشروع",
        liveDemo: "معاينة مباشرة",
        sourceCode: "الكود المصدري"
      },
      // Blog Page
      blog: {
        title: "أحدث المقالات",
        subtitle: "رؤى ودروس وأفكار حول تطوير البرمجيات والتصميم والتكنولوجيا",
        featured: "المقالات المميزة",
        filterTitle: "تصفية حسب الفئة",
        categories: {
          all: "الكل",
          flutter: "Flutter",
          react: "React",
          webDev: "تطوير الويب", 
          javascript: "JavaScript",
          design: "التصميم"
        },
        readMore: "اقرأ المزيد",
        readTime: "دقيقة قراءة",
        noArticles: "لم يتم العثور على مقالات",
        noArticlesDesc: "جرب اختيار فئة مختلفة أو تحقق لاحقاً من المحتوى الجديد.",
        loading: "جاري تحميل المقالات..."
      },
      // Testimonials Page
      testimonials: {
        title: "ما يقوله العملاء",
        subtitle: "ملاحظات من العملاء والمتعاونين"
      },
      // Contact Page
      contact: {
        title: "تواصل معي",
        subtitle: "دعنا نناقش مشروعك ونحول أفكارك إلى واقع",
        name: "الاسم",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة", 
        send: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        success: "تم إرسال الرسالة بنجاح!",
        error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى."
      },
      // Footer
      footer: {
        description: "مطور Flutter ومهندس برمجيات ينشئ تطبيقات مبتكرة",
        rights: "جميع الحقوق محفوظة.",
        builtWith: "تم البناء باستخدام",
        social: "تابعني على وسائل التواصل الاجتماعي"
      },
      // Common
      common: {
        loading: "جاري التحميل...",
        error: "حدث خطأ ما",
        tryAgain: "حاول مرة أخرى",
        goBack: "العودة",
        refresh: "تحديث الصفحة",
        darkTheme: "داكن",
        lightTheme: "فاتح",
        language: "اللغة"
      },
      // Error Boundary
      error: {
        title: "عذراً! حدث خطأ ما",
        description: "نعتذر، لكن حدث شيء غير متوقع. يرجى محاولة تحديث الصفحة.",
        details: "تفاصيل الخطأ (للتطوير فقط)"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: import.meta.env.DEV,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
    
    react: {
      useSuspense: false,
    }
  });

export default i18n;