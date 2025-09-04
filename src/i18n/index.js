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
        heading: "Software Engineering Graduate & Flutter Developer",
        description1: "I hold a Bachelor's degree in Software Engineering from the Faculty of Informatics Engineering at Damascus University. I'm passionate about building production-ready applications and solving real-world problems through innovative technology solutions.",
        description2: "With experience delivering prototypes and collecting feedback from real clients, I focus on creating applications with exceptional UI/UX design, solid system architecture, and seamless backend integration.",
        techStack: "Tech Stack",
        stats: {
          projects: "Major Projects", 
          experience: "Years Experience"
        }
      },
      // Resume
      resume: {
        download: "Download Resume"
      },
      // Experience
      experience: {
        title: "Professional Experience",
        technologies: "Technologies Used"
      },
      // Education
      education: {
        title: "Education",
        achievements: "Key Achievements"
      },
      // Soft Skills
      softSkills: {
        title: "Personal Skills"
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
        readMore: "Read More",
        readTime: "{{minutes}} min read",
        backToBlog: "Back to Blog",
        scrollToTop: "Scroll to top",
        noPostsFound: "No posts found",
        noPostsAvailable: "No blog posts available yet. Please check back later.",
        noPostsInCategory: "No posts found in the {{category}} category.",
        viewAllPosts: "View All Posts",
        categories: {
          all: "All Categories",
          flutter: "Flutter",
          firebase: "Firebase",
          architecture: "Architecture",
          projectManagement: "Project Management",
          softwareEngineering: "Software Engineering"
        },
        filterTitle: "Filter by Category",
        latestArticles: "Latest Articles",
        categoryArticles: "{category} Articles",
        categories: {
          all: "All",
          flutter: "Flutter",
          react: "React",
          webDev: "Web Development",
          javascript: "JavaScript",
          design: "Design",
          firebase: "Firebase",
          supabase: "Supabase",
          projectManagement: "Project Management",
          architecture: "Architecture"
        },
        readMore: "Read More",
        readTime: "min read",
        noArticles: "No articles found",
        noArticlesDesc: "Try selecting a different category or check back later for new content.",
        loading: "Loading articles...",
        posts: {
          softwareEngineeringMatters: {
            title: "Why Software Engineering & App Development Matter More Than Ever",
            excerpt: "In today's digital world, software development is not just about writing code — it's about solving real problems and building smart, scalable systems that impact millions of users.",
            content: "In today's digital world, software development is not just about writing code — it's about solving real problems and building smart, scalable systems that impact millions of users.\n\n🔹 Software engineering is the discipline that ensures systems are reliable, secure, and sustainable. It's about building with structure, not improvisation.\n\n🔹 App development, on the other hand, is often the first point of interaction between people and technology. A great app isn't just about looks — it's a complete experience, carefully designed for the user.\n\nWhy does this matter?\n\n✅ From e-commerce to government services, to education and logistics — digital solutions are no longer a luxury, but a necessity.\n\n✅ The demand for fast, user-friendly, and scalable systems is constantly growing, and so is the need for skilled developers who understand users' real needs.\n\n💼 Whether you're a student starting your journey or a business owner thinking about a new product — investing in good software design and development is key to success.",
            category: "architecture",
            date: "2024-02-15",
            readTime: "3 min read",
            tags: ["software engineering", "app development", "digital transformation"],
            featured: true
          },
          digitalExperience: {
            title: "Digital Experience Beyond Code",
            excerpt: "Behind every successful application stands a developer who understands user behavior, performance, and scalability.",
            content: "Digital Experience: Beyond Code\n\nSome may think that app development stops at writing code, but the reality goes far beyond that. Behind every successful application stands a developer who understands:\n\n🔹 User behavior and how they interact with every element within the app.\n🔹 The real needs that must be addressed.\n🔹 Performance that must be fast and error-free.\n🔹 Security and privacy as a priority, especially when handling sensitive data.\n🔹 Scalability and expandability, as an app's journey doesn't end with its initial launch.\n\n⚙️ As a developer, you are not just a \"programmer\" but:\n\n• An experience architect, designing the user journey down to the finest details.\n• A systems analyst, transforming vague ideas into tangible solutions.\n• A growth partner, because the quality of your app directly impacts the success of the project or company.\n\n🧠 The app is the first digital impression a customer gets... and often, it's the lasting one.\n\nIf you're starting your programming journey: don't just focus on the code, but learn to think like a holistic solutions architect.\n\nAnd if you're a business owner: invest in a developer who understands that an app is not just an interface... but a complete experience.",
            category: "architecture",
            date: "2024-02-10",
            readTime: "4 min read",
            tags: ["user experience", "app development", "software architecture"],
            featured: true
          },
          cleanArchitectureVsMVVM: {
            title: "Clean Architecture vs MVVM: Choosing the Right Approach",
            excerpt: "Exploring when to use Clean Architecture versus MVVM based on project requirements and scale.",
            content: "The question that keeps nagging at me: Clean Architecture or MVVM? And what truly makes me say, 'Yep, this is the right choice for this specific project'? 🤔\n\nWhen you're just starting out, your main concern is usually getting the app to run and making the UI look decent. But with that first big graduation project, or a job with a lot of moving parts, you start to feel that 'messy code' is a ticking time bomb! 💣\n\nThat's really where my journey into understanding these architectures began.\n\nClean Architecture... oh, Clean Architecture! At first, it felt like building an entire city just to put up a small hut. Layers upon layers, and seemingly endless abstractions. But as I started reading more and seeing examples in massive projects, the picture began to clear up. The core idea is to build an application 'heart' (the Business Logic) that's completely insulated from changes in the UI, data sources, or anything else. Like building a fortress.\n\nThen there's MVVM (or how we often approach it in Flutter with tools like Provider/BLoC): This felt more aligned with the day-to-day realities of many projects, especially those with complex UI interactions. The concept of separating the View from the ViewModel (which handles display logic and state) and the Model (the data) is, by itself, a real sanity-saver. It makes your UI code cleaner and much easier to test.\n\nThe pitfall I encountered (or at least, worried about) is the ViewModel itself ballooning into a 'superman' class that does everything, at which point, you haven't really solved the underlying complexity!\n\nSo, the gist of it, from my humble (and still evolving) perspective: There's no silver bullet. It's more like a carpenter's toolbox: every tool has its optimal use. For large, ambitious projects designed to live for years and evolve significantly, Clean Architecture might just be their protective shield. For projects where the beauty lies in the UI and its responsiveness, MVVM (and its Flutter implementations) could be the winning horse.\n\nI'm still in that phase of experimentation and exploration, trying to apply bits and pieces in my current project to really 'feel' the differences firsthand. And perhaps that's the most crucial lesson: hands-on experience is the best teacher.",
            category: "architecture",
            date: "2024-02-05",
            readTime: "6 min read",
            tags: ["flutter", "architecture", "clean architecture", "mvvm"],
            featured: true
          },
          projectManagement: {
            title: "The Importance of Project Management for Developers",
            excerpt: "How project management tools can help developers stay organized and deliver better results.",
            content: "As engineering students (especially those of us in our final year 👨‍🎓) or even as developers just starting our careers, we often get laser-focused on the technical and artistic aspects of our projects. Writing clean code, designing appealing UIs, and solving complex problems are, without a doubt, the heart of our work as Software Engineers. But there's another side to the coin that's just as crucial: managing our time and projects effectively.\n\nLately, I've been diving deeper into project management tools like Microsoft Project and Jira. Initially, these tools might seem a bit complex or like an \"extra layer of bureaucracy\" for smaller or solo projects. However, with the first real project requiring coordinated effort, or even just juggling the multiple tasks of a final year project, I've truly started to see their immense value.\n\nSo, why are these tools so important, even for us developers?\n\n• Seeing the Big Picture: They help break down a massive project into smaller, manageable tasks (the good old WBS - Work Breakdown Structure). Suddenly, that \"mountain\" of tasks starts to look like a series of conquerable hills. ⛰️➡️🏞️\n\n• Prioritizing and Handling Dependencies: Tools like MS Project excel at identifying tasks that depend on each other and mapping out the Critical Path. This prevents bottlenecks and ensures a smoother workflow.\n\n• Tracking Progress & Meeting Deadlines: Jira, with its agile approach and Kanban/Scrum boards, makes it incredibly easy to see what's done, what's in progress, and what's up next. No more, \"Hey, did you finish that thing yet?\" 😅.\n\n• Boosting Collaboration (if you're on a team): These tools become the Single Source of Truth for project status and individual responsibilities.\n\n• Resource Management (Time is our most precious resource!): Even working solo, they help you allocate your time better, avoid burnout, and stop procrastinating on important tasks.\n\n• Learning from the Past: By analyzing completed projects, you can make better time estimations for future ones and avoid repeating mistakes.\n\nFor me, as a Flutter Developer and a soon-to-be graduate, mastering one or two of these tools isn't just a \"nice-to-have on the resume.\" I see it as a fundamental skill that will help me become a more efficient and organized engineer in the future.",
            category: "projectManagement",
            date: "2024-01-30",
            readTime: "5 min read",
            tags: ["project management", "jira", "productivity", "software development"],
            featured: false
          },
          productOwnerMindset: {
            title: "Beyond Code: Why Thinking Like a Product Owner Is Essential for Developers",
            excerpt: "How adopting a product mindset can make you a more effective developer and create better software.",
            content: "As software engineers and app developers, we're trained to think in code, frameworks, and features. But the most impactful developers? They think in solutions, user journeys, and business outcomes.\n\n🔹 Writing clean code is important — but solving the right problem is what truly matters.\n🔹 UI/UX design isn't just a 'nice to have' — it's a core part of the product strategy.\n🔹 Understanding how your app supports business goals makes you 10x more valuable.\n\nHere's what sets great developers apart:\n\n✅ They ask 'Why are we building this?' before 'How?'\n✅ They think like product designers, marketers, and users — not just coders.\n✅ They build apps that people love and that businesses grow with.\n\n🌱 Whether you're a freelancer, startup founder, or student developer — learning to think beyond the codebase is how you stand out in today's crowded tech world.\n\n📣 Let's stop building apps just to ship features. Let's build to solve real problems.",
            category: "architecture",
            date: "2024-01-25",
            readTime: "4 min read",
            tags: ["product management", "software development", "career growth"],
            featured: false
          },
          firebaseVsSupabase: {
            title: "Firebase vs Supabase: A Comparison for Flutter Developers",
            excerpt: "Exploring the pros and cons of Firebase and Supabase for Flutter app development.",
            content: "As a Flutter developer, I've worked with both Firebase and Supabase in real-world projects — and each one brings its own strengths 👇\n\n🔶 Firebase\n• Great integration with Flutter\n• Powerful Cloud Functions\n• Built-in support for Notifications\n\n🟢 Supabase\n• Open-source alternative to Firebase\n• Built on PostgreSQL\n• Simplifies Auth, Realtime, and Storage\n• Offers more flexibility with your database\n\n🚀 I've chosen Supabase in some of my recent projects for its transparency and flexibility, but Firebase remains a great option for getting started quickly.\n\nIn my recent projects, I've been combining them:\n\n💙 Flutter: For building beautiful, cross-platform UIs\n🔥 Firebase: For push notifications and analytics\n🟢 Supabase: As the main database with realtime capabilities\n\nThis combination provides the best of both worlds: Firebase's powerful features with Supabase's flexibility and control over your data.",
            category: "firebase",
            date: "2024-01-20",
            readTime: "4 min read",
            tags: ["flutter", "firebase", "supabase", "backend"],
            featured: false
          },
          notificationsMatter: {
            title: "The Importance of Push Notifications in Mobile Apps",
            excerpt: "How effective push notifications can enhance user engagement and retention.",
            content: "Have you ever thought about the importance of instant notifications for user experience? In mobile applications, notifications aren't just alerts; they're tools for interaction, re-engagement, and improved communication. This is where Firebase Cloud Messaging (FCM) comes in as an effective and easy-to-integrate solution.\n\n✅ What makes Firebase great for notification management:\n• Reliable notification delivery across Android and iOS\n• Support for personalized notifications based on user behavior\n• Ability to schedule or send notifications in real-time\n• Seamless integration with other Firebase services like Analytics and Crashlytics\n\nWhether you're building a business, educational, or social app, Firebase makes building an effective notification system faster and more secure.\n\nIn my recent projects, I've used it to send alerts to users and administrators, and connected it with verification and real-time tracking systems — with excellent results in terms of performance and reliability.",
            category: "firebase",
            date: "2024-01-15",
            readTime: "3 min read",
            tags: ["firebase", "mobile development", "user engagement", "push notifications"],
            featured: false
          },
          flutterNetlify: {
            title: "Flutter + Netlify = Power of Speed and Easy Deployment",
            excerpt: "How to deploy Flutter web apps quickly and easily with Netlify.",
            content: "When developing Flutter Web applications, you might face the challenge of choosing a hosting platform that offers high performance and easy setup. This is where Netlify comes in as an ideal choice: a modern hosting platform, free to start, and supports continuous deployment (CI/CD) with ease.\n\n💡 Why I use Netlify with Flutter Web?\n• Quick deployment with one click\n• Integration with GitHub/GitLab/Bitbucket for automatic deployment on code updates\n• Automatic HTTPS and improved performance via CDN\n• Ability to set up custom domains\n\n🔍 How to get started?\n1. Create a Flutter Web project (`flutter build web`)\n2. Connect your repository to Netlify\n3. Select the build/web folder as the deployment source\n4. Enjoy seeing your app online in minutes\n\n📌 In one of my recent projects, I published a company website using Flutter Web and Netlify, with excellent loading speed and a smooth experience for users around the world.",
            category: "webDev",
            date: "2024-01-10",
            readTime: "3 min read",
            tags: ["flutter", "web development", "deployment", "netlify"],
            featured: false
          },
          flutterFirebaseSupabase: {
            title: "Flutter + Firebase + Supabase: The Ultimate Stack",
            excerpt: "How combining these powerful tools can supercharge your app development workflow.",
            content: "During my work on various projects, I've discovered that combining Flutter, Firebase, and Supabase opens up huge possibilities:\n\n💙 Flutter: A powerful framework for building fast, cross-platform applications with a beautiful interface.\n\n🔥 Firebase: An excellent solution for push notifications, analytics, and flexible user management.\n\n🟢 Supabase: An open-source alternative that provides a PostgreSQL database, authentication, and file storage with greater data control.\n\n💡 How do I integrate them in my projects?\n• Flutter for a smooth user experience across mobile and web\n• Firebase for notifications (Push Notifications) and direct user interaction\n• Supabase as the main database (PostgreSQL) with Realtime and ready API capabilities\n\nThis combination makes development faster, the experience more integrated, and performance more stable.\n\n🚀 In one of my recent projects, I used Flutter to build the interface, Firebase for notifications, and Supabase for data management and authentication. The result was a practical application that combines speed, reliability, and flexibility.\n\n✨ My advice: Don't limit yourself to one tool, but combine what each system offers to build a stronger product.",
            category: "flutter",
            date: "2024-01-05",
            readTime: "5 min read",
            tags: ["flutter", "firebase", "supabase", "full-stack"],
            featured: true
          }
        }
      },
      // Testimonials Page
      testimonials: {
        title: "What Clients Say",
        subtitle: "Feedback from clients and collaborators",
        alkamal: {
          content: "We are pleased to express our sincere appreciation for Habeeb's exceptional work on our Cross-Border Bus Booking & Logistics System. His technical expertise, professionalism, and dedication throughout the project development exceeded our expectations. The comprehensive solution he delivered has significantly enhanced our operations between Syria and Jordan.",
          author: "Al-Kamal International Company",
          position: "Official Appreciation Letter"
        }
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
        tryAgain: "Try again",
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
        heading: "خريج هندسة برمجيات ومطور Flutter",
        description1: "أحمل درجة البكالوريوس في هندسة البرمجيات من كلية الهندسة المعلوماتية في جامعة دمشق. أنا شغوف ببناء التطبيقات الجاهزة للإنتاج وحل المشاكل الحقيقية من خلال الحلول التقنية المبتكرة.",
        description2: "مع خبرة في تطوير النماذج الأولية وجمع التعليقات من العملاء الحقيقيين، أركز على إنشاء تطبيقات بتصميم UI/UX استثنائي، وهندسة نظام قوية، وتكامل backend سلس.",
        techStack: "التقنيات المستخدمة",
        stats: {
          projects: "المشاريع الرئيسية",
          experience: "سنوات الخبرة"
        }
      },
      // Resume
      resume: {
        download: "تحميل السيرة الذاتية"
      },
      // Experience
      experience: {
        title: "الخبرة المهنية",
        technologies: "التقنيات المستخدمة"
      },
      // Education
      education: {
        title: "التعليم",
        achievements: "الإنجازات الرئيسية"
      },
      // Soft Skills
      softSkills: {
        title: "المهارات الشخصية"
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
        readMore: "اقرأ المزيد",
        readTime: "{{minutes}} دقيقة للقراءة",
        backToBlog: "العودة للمدونة",
        scrollToTop: "الانتقال للأعلى",
        noPostsFound: "لم يتم العثور على مقالات",
        noPostsAvailable: "لا توجد مقالات متاحة حالياً. يرجى العودة لاحقاً.",
        noPostsInCategory: "لا توجد مقالات في تصنيف {{category}}.",
        viewAllPosts: "عرض كل المقالات",
        categories: {
          all: "جميع التصنيفات",
          flutter: "فلاتر",
          firebase: "فايربيز",
          architecture: "هندسة البرمجيات",
          projectManagement: "إدارة المشاريع",
          softwareEngineering: "هندسة البرمجيات"
        },
        filterTitle: "تصفية حسب الفئة",
        latestArticles: "أحدث المقالات",
        categoryArticles: "مقالات {category}",
        categories: {
          all: "الكل",
          flutter: "Flutter",
          react: "React",
          webDev: "تطوير الويب",
          javascript: "JavaScript",
          design: "التصميم",
          firebase: "Firebase",
          supabase: "Supabase",
          projectManagement: "إدارة المشاريع",
          architecture: "هندسة البرمجيات"
        },
        readMore: "اقرأ المزيد",
        readTime: "دقيقة قراءة",
        noArticles: "لم يتم العثور على مقالات",
        noArticlesDesc: "جرب اختيار فئة مختلفة أو تحقق لاحقاً من المحتوى الجديد.",
        loading: "جاري تحميل المقالات...",
        posts: {
          softwareEngineeringMatters: {
            title: "لماذا تعد هندسة البرمجيات وتطوير التطبيقات أكثر أهمية من أي وقت مضى",
            excerpt: "في عالمنا الرقمي اليوم، لم يعد تطوير البرمجيات مجرد كتابة أكواد - بل يتعلق بحل المشكلات الحقيقية وبناء أنظمة ذكية وقابلة للتوسع تؤثر في حياة الملايين.",
            content: "في عالمنا الرقمي اليوم، لم يعد تطوير البرمجيات مجرد كتابة أكواد - بل يتعلق بحل المشكلات الحقيقية وبناء أنظمة ذكية وقابلة للتوسع تؤثر في حياة الملايين.\n\n🔹 هندسة البرمجيات هي التخصص الذي يضمن أن تكون الأنظمة موثوقة وآمنة ومستدامة. إنها تتعلق بالبناء بهيكل منظم وليس ارتجالياً.\n\n🔹 من ناحية أخرى، يعد تطوير التطبيقات غالباً نقطة التفاعل الأولى بين الناس والتكنولوجيا. التطبيق الرائع لا يتعلق بالمظهر فحسب - بل هو تجربة متكاملة مصممة بعناية للمستخدم.\n\nلماذا يهم هذا؟\n\n✅ من التجارة الإلكترونية إلى الخدمات الحكومية، والتعليم واللوجستيات - لم تعد الحلول الرقمية رفاهية، بل ضرورة.\n\n✅ الطلب على الأنظمة السريعة وسهلة الاستخدام والقابلة للتوسع في ازدياد مستمر، وكذلك الحاجة للمطورين المهرة الذين يفهمون الاحتياجات الحقيقية للمستخدمين.\n\n💼 سواء كنت طالباً في بداية رحلتك أو صاحب عمل يفكر في منتج جديد - فإن الاستثمار في تصميم وتطوير برمجي جيد هو مفتاح النجاح.",
            category: "architecture",
            date: "2024-02-15",
            readTime: "3 دقائق قراءة",
            tags: ["هندسة البرمجيات", "تطوير التطبيقات", "التحول الرقمي"],
            featured: true
          },
          digitalExperience: {
            title: "تجربة رقمية تتجاوز الأكواد",
            excerpt: "وراء كل تطبيق ناجح يقف مطور يفهم سلوك المستخدم والأداء وقابلية التوسع.",
            content: "التجربة الرقمية: ما وراء الأكواد\n\nقد يعتقد البعض أن تطوير التطبيقات يتوقف عند كتابة الأكواد، لكن الحقيقة تمتد إلى أبعد من ذلك بكثير. وراء كل تطبيق ناجح يقف مطور يفهم:\n\n🔹 سلوك المستخدم وكيفية تفاعله مع كل عنصر في التطبيق.\n🔹 الاحتياجات الحقيقية التي يجب معالجتها.\n🔹 الأداء الذي يجب أن يكون سريعاً وخالياً من الأخطاء.\n🔹 الأمان والخصوصية كأولوية، خاصة عند التعامل مع البيانات الحساسة.\n🔹 قابلية التوسع والامتداد، حيث لا تنتهي رحلة التطبيق مع إطلاقه الأولي.\n\n⚙️ كمطور، أنت لست مجرد \"مبرمج\" فحسب، بل:\n\n• مهندس تجربة مستخدم، يصمم رحلة المستخدم بأدق التفاصيل.\n• محلل أنظمة، يحول الأفكار المبهمة إلى حلول ملموسة.\n• شريك في النمو، لأن جودة تطبيقك تؤثر مباشرة على نجاح المشروع أو الشركة.\n\n🧠 التطبيق هو الانطباع الرقمي الأول الذي يحصل عليه العميل... وغالباً ما يكون الانطباع الدائم.\n\nإذا كنت قد بدأت رحلتك في البرمجة: لا تركز فقط على الأكواد، بل تعلم أن تفكر كمهندس حلول شامل.\n\nوإذا كنت صاحب عمل: استثمر في مطور يفهم أن التطبيق ليس مجرد واجهة... بل هو تجربة متكاملة.",
            category: "architecture",
            date: "2024-02-10",
            readTime: "4 دقائق قراءة",
            tags: ["تجربة المستخدم", "تطوير التطبيقات", "هندسة البرمجيات"],
            featured: true
          },
          cleanArchitectureVsMVVM: {
            title: "Clean Architecture مقابل MVVM: اختيار النهج الصحيح",
            excerpt: "استكشاف متى نستخدم Clean Architecture مقابل MVVM بناءً على متطلبات المشروع وحجمه.",
            content: "السؤال الذي يراودني باستمرار: Clean Architecture أم MVVM؟ وما الذي يجعلني أقول 'نعم، هذا هو الخيار الصحيح لهذا المشروع بالتحديد'؟ 🤔\n\nعندما تبدأ للتو، يكون همك الرئيسي عادةً جعل التطبيق يعمل وجعل واجهة المستخدم تبدو لائقة. ولكن مع أول مشروع تخرج كبير، أو وظيفة تحتوي على الكثير من الأجزاء المتحركة، تبدأ في الشعور بأن 'الكود الفوضوي' هو قنبلة موقوتة! 💣\n\nهنا بدأت رحلتي في فهم هذه الأنماط المعمارية.\n\nClean Architecture... يا لها من هندسة! في البداية، شعرت وكأنني أبني مدينة كاملة فقط لوضع كوخ صغير. طبقات فوق طبقات، وتجريدات لا تنتهي على ما يبدو. ولكن مع المزيد من القراءة ورؤية الأمثلة في المشاريع الضخمة، بدأت الصورة تتضح. الفكرة الأساسية هي بناء 'قلب' للتطبيق (المنطق التجاري) معزول تماماً عن التغييرات في واجهة المستخدم، أو مصادر البيانات، أو أي شيء آخر. مثل بناء قلعة حصينة.\n\nثم هناك MVVM (أو كيف نطبقه غالباً في Flutter باستخدام أدوات مثل Provider/BLoC): شعرت أنه أكثر انسجاماً مع واقع المشاريع اليومية، خاصة تلك التي تحتوي على تفاعلات معقدة في واجهة المستخدم. فكرة فصل العرض عن ViewModel (الذي يتعامل مع منطق العرض والحالة) عن النموذج (البيانات) هي في حد ذاتها منقذ للحياة. إنه يجعل كود واجهة المستخدم أنظف وأسهل بكثير في الاختبار.\n\nالعقبة التي واجهتها (أو على الأقل قلقت منها) هي أن ViewModel نفسه قد يتضخم ليصبح فئة 'سوبرمان' تقوم بكل شيء، وعند هذه النقطة، لم تحل حقاً التعقيد الكامن!\n\nلذا، الخلاصة من وجهة نظري المتواضعة (وما زالت تتطور): لا يوجد حل سحري. الأمر أشبه بصندوق أدوات النجار: لكل أداة استخدامها الأمثل. بالنسبة للمشاريع الكبيرة الطموحة المصممة لتعيش لسنوات وتتطور بشكل كبير، قد تكون Clean Architecture هي الدرع الواقي لها. أما المشاريع التي تكمن جودتها في واجهة المستخدم واستجابتها، فقد يكون MVVM (وتطبيقاته في Flutter) هو الحل الأمثل.\n\nما زلت في مرحلة التجربة والاستكشاف، أحاول تطبيق أجزاء صغيرة في مشروعي الحالي لأشعر حقاً بالاختلافات. وربما هذا هو الدرس الأهم: الخبرة العملية هي أفضل معلم.",
            category: "architecture",
            date: "2024-02-05",
            readTime: "6 دقائق قراءة",
            tags: ["Flutter", "هندسة البرمجيات", "Clean Architecture", "MVVM"],
            featured: true
          },
          projectManagement: {
            title: "أهمية إدارة المشاريع للمطورين",
            excerpt: "كيف يمكن لأدوات إدارة المشاريع مساعدة المطورين على البقاء منظمين وتقديم نتائج أفضل.",
            content: "كطلاب هندسة (وخاصة نحن في السنة النهائية 👨‍🎓) أو حتى كمطورين في بداية حياتهم المهنية، غالباً ما نركز بشدة على الجوانب الفنية والفنية لمشاريعنا. كتابة أكواد نظيفة، وتصميم واجهات مستخدم جذابة، وحل المشكلات المعقدة هي بلا شك جوهر عملنا كمهندسي برمجيات. ولكن هناك جانب آخر من العملة لا يقل أهمية: إدارة وقتنا ومشاريعنا بشكل فعال.\n\nفي الآونة الأخيرة، كنت أتعمق في أدوات إدارة المشاريع مثل Microsoft Project و Jira. في البداية، قد تبدو هذه الأدوات معقدة بعض الشيء أو كأنها 'طبقة إضافية من البيروقراطية' للمشاريع الصغيرة أو الفردية. ومع ذلك، مع أول مشروع حقيقي يتطلب جهداً منسقاً، أو حتى مع إدارة المهام المتعددة لمشروع التخرج، بدأت أرى قيمتها الهائلة حقاً.\n\nإذن، لماذا تعتبر هذه الأدوات مهمة جداً، حتى بالنسبة لنا كمطورين؟\n\n• رؤية الصورة الكبيرة: تساعد في تقسيم المشروع الضخم إلى مهام أصغر قابلة للإدارة (هيكل تقسيم العمل القديم الجيد). فجأة، يبدأ هذا 'الجبل' من المهام في الظهور كسلسلة من التلال التي يمكن التغلب عليها. ⛰️➡️🏞️\n\n• تحديد الأولويات والتعامل مع التبعيات: تتفوق أدوات مثل MS Project في تحديد المهام التي تعتمد على بعضها البعض ورسم المسار الحرج. هذا يمنع الاختناقات ويضمن سيراً أكثر سلاسة لسير العمل.\n\n• تتبع التقدم والالتزام بالمواعيد النهائية: تجعل Jira، بمنهجيتها الرشيقة ولوحات Kanban/Scrum، من السهل جداً رؤية ما تم إنجازه وما هو قيد التنفيذ وما هو التالي. لا مزيد من 'مهلاً، هل انتهيت من هذا الشيء بعد؟' 😅.\n\n• تعزيز التعاون (إذا كنت تعمل في فريق): تصبح هذه الأدوات المصدر الوحيد للحقيقة لحالة المشروع ومسؤوليات كل فرد.\n\n• إدارة الموارد (الوقت هو أثمن مواردنا!): حتى عند العمل بمفردك، تساعدك هذه الأدوات في تخصيص وقتك بشكل أفضل، وتجنب الإرهاق، والتوقف عن المماطلة في المهام المهمة.\n\n• التعلم من الماضي: من خلال تحليل المشاريع المكتملة، يمكنك تقدير الوقت بشكل أفضل للمشاريع المستقبلية وتجنب تكرار الأخطاء.\n\nبالنسبة لي، كمطور Flutter وكخريج قريباً، فإن إتقان أداة أو أداتين من هذه الأدوات ليس مجرد 'إضافة لطيفة للسيرة الذاتية'. أراه مهارة أساسية ستساعدني على أن أصبح مهندساً أكثر كفاءة وتنظيماً في المستقبل.",
            category: "projectManagement",
            date: "2024-01-30",
            readTime: "5 دقائق قراءة",
            tags: ["إدارة المشاريع", "Jira", "الإنتاجية", "تطوير البرمجيات"],
            featured: false
          },
          productOwnerMindset: {
            title: "ما وراء الأكواد: لماذا يعد التفكير كمالك للمنتج ضرورياً للمطورين",
            excerpt: "كيف يمكن لتبني عقلية المنتج أن يجعلك مطوراً أكثر فعالية ويؤدي إلى برمجيات أفضل.",
            content: "كمهندسي برمجيات ومطوري تطبيقات، يتم تدريبنا على التفكير في الأكواد والأطر والميزات. لكن المطورين الأكثر تأثيراً؟ يفكرون في الحلول ورحلات المستخدم والنتائج التجارية.\n\n🔹 كتابة أكواد نظيفة أمر مهم - ولكن حل المشكلة الصحيحة هو ما يهم حقاً.\n🔹 تصميم واجهة المستخدم وتجربتها ليس مجرد 'إضافة لطيفة' - بل هو جزء أساسي من استراتيجية المنتج.\n🔹 فهم كيف يدعم تطبيقك الأهداف التجارية يجعلك أكثر قيمة بعشر مرات.\n\nإليك ما يميز المطورين العظماء:\n\n✅ يسألون 'لماذا نبني هذا؟' قبل 'كيف؟'\n✅ يفكرون كمصممي منتجات، ومسوقين، ومستخدمين - وليس فقط كمبرمجين.\n✅ يبنون تطبيقات يحبها الناس وتنمو معها الشركات.\n\n🌱 سواء كنت مستقلاً، أو مؤسس شركة ناشئة، أو مطور طالب - فإن تعلم التفكير خارج نطاق قاعدة الأكواد هو ما يميزك في عالم التكنولوجيا المزدحم اليوم.\n\n📣 دعونا نتوقف عن بناء تطبيقات فقط لإصدار الميزات. دعونا نبني لحل مشاكل حقيقية.",
            category: "architecture",
            date: "2024-01-25",
            readTime: "4 دقائق قراءة",
            tags: ["إدارة المنتج", "تطوير البرمجيات", "النمو المهني"],
            featured: false
          },
          firebaseVsSupabase: {
            title: "Firebase مقابل Supabase: مقارنة لمطوري Flutter",
            excerpt: "استكشاف إيجابيات وسلبيات Firebase و Supabase لتطوير تطبيقات Flutter.",
            content: "كمطور Flutter، عملت مع كل من Firebase و Supabase في مشاريع حقيقية - ولكل منهما مزاياه الخاصة 👇\n\n🔶 Firebase\n• تكامل رائع مع Flutter\n• وظائف سحابية قوية\n• دعم مدمج للإشعارات\n\n🟢 Supabase\n• بديل مفتوح المصدر لـ Firebase\n• مبني على PostgreSQL\n• يبسط المصادقة والوقت الفعلي والتخزين\n• يوفر مرونة أكبر مع قاعدة البيانات الخاصة بك\n\n🚀 اخترت Supabase في بعض مشاريعي الأخيرة لشفافيته ومرونته، لكن Firebase يظل خياراً رائعاً للبدء بسرعة.\n\nفي مشاريعي الأخيرة، كنت أجمع بينهما:\n\n💙 Flutter: لبناء واجهات مستخدم جميلة ومتعددة المنصات\n🔥 Firebase: للإشعارات والتحليلات\n🟢 Supabase: كقاعدة بيانات رئيسية بإمكانيات الوقت الفعلي\n\هذا المزيج يوفر أفضل ما في العالمين: ميزات Firebase القوية مع مرونة Supabase والتحكم في البيانات.",
            category: "firebase",
            date: "2024-01-20",
            readTime: "4 دقائق قراءة",
            tags: ["Flutter", "Firebase", "Supabase", "الواجهة الخلفية"],
            featured: false
          },
          notificationsMatter: {
            title: "أهمية الإشعارات الفورية في التطبيقات المحمولة",
            excerpt: "كيف يمكن للإشعارات الفعالة تعزيز تفاعل المستخدمين والاحتفاظ بهم.",
            content: "هل فكرت يوماً في أهمية الإشعارات الفورية لتجربة المستخدم؟ في التطبيقات المحمولة، ليست الإشعارات مجرد تنبيهات؛ بل هي أدوات للتفاعل وإعادة التفاعل وتحسين الاتصال. هذا هو المكان الذي يأتي فيه Firebase Cloud Messaging (FCM) كحل فعال وسهل التكامل.\n\n✅ ما الذي يجعل Firebase رائعاً لإدارة الإشعارات:\n• تسليم موثوق للإشعارات عبر Android و iOS\n• دعم للإشعارات المخصصة بناءً على سلوك المستخدم\n• القدرة على جدولة الإشعارات أو إرسالها في الوقت الفعلي\n• تكامل سلس مع خدمات Firebase الأخرى مثل التحليلات وتقارير الأعطال\n\nسواء كنت تبني تطبيقاً تجارياً أو تعليمياً أو اجتماعياً، فإن Firebase يجعل بناء نظام إشعارات فعال أسرع وأكثر أماناً.\n\nفي مشاريعي الأخيرة، استخدمته لإرسال تنبيهات للمستخدمين والمسؤولين، وقمت بتوصيله بأنظمة التحقق والتتبع في الوقت الفعلي - مع نتائج ممتازة من حيث الأداء والموثوقية.",
            category: "firebase",
            date: "2024-01-15",
            readTime: "3 دقائق قراءة",
            tags: ["Firebase", "تطوير الجوال", "تفاعل المستخدم", "الإشعارات الفورية"],
            featured: false
          },
          flutterNetlify: {
            title: "Flutter + Netlify = قوة السرعة والنشر السهل",
            excerpt: "كيفية نشر تطبيقات Flutter للويب بسرعة وسهولة مع Netlify.",
            content: "عند تطوير تطبيقات Flutter للويب، قد تواجه تحدي اختيار منصة استضافة تقدم أداءً عالياً وإعداداً سهلاً. هذا هو المكان الذي يأتي فيه Netlify كخيار مثالي: منصة استضافة عصرية، مجانية للبدء، وتدعم النشر المستمر (CI/CD) بسهولة.\n\n💡 لماذا أستخدم Netlify مع Flutter للويب؟\n• نشر سريع بنقرة واحدة\n• تكامل مع GitHub/GitLab/Bitbucket للنشر التلقائي عند تحديث الكود\n• HTTPS تلقائي وأداء محسن عبر CDN\n• إمكانية إعداد نطاقات مخصصة\n\n🔍 كيف تبدأ؟\n1. أنشئ مشروع Flutter للويب (`flutter build web`)\n2. قم بتوصيل مستودعك بـ Netlify\n3. حدد مجلد build/web كمصدر للنشر\n4. استمتع برؤية تطبيقك على الإنترنت في دقائق\n\n📌 في أحد مشاريعي الأخيرة، قمت بنشر موقع شركة باستخدام Flutter للويب و Netlify، مع سرعة تحميل ممتازة وتجربة سلسة للمستخدمين حول العالم.",
            category: "webDev",
            date: "2024-01-10",
            readTime: "3 دقائق قراءة",
            tags: ["Flutter", "تطوير الويب", "النشر", "Netlify"],
            featured: false
          },
          flutterFirebaseSupabase: {
            title: "Flutter + Firebase + Supabase: المكدس الأمثل",
            excerpt: "كيف يمكن لدمج هذه الأدوات القوية تعزيز سير عمل تطوير التطبيقات الخاص بك.",
            content: "خلال عملي على مشاريع مختلفة، اكتشفت أن الجمع بين Flutter و Firebase و Supabase يفتح إمكانيات هائلة:\n\n💙 Flutter: إطار عمل قوي لبناء تطبيقات سريعة ومتعددة المنصات بواجهة مستخدم جميلة.\n\n🔥 Firebase: حل ممتاز للإشعارات الفورية والتحليلات وإدارة المستخدمين المرنة.\n\n🟢 Supabase: بديل مفتوح المصدر يوفر قاعدة بيانات PostgreSQL والمصادقة والتخزين مع تحكم أكبر في البيانات.\n\n💡 كيف أقوم بدمجها في مشاريعي؟\n• Flutter لتجربة مستخدم سلسة عبر الجوال والويب\n• Firebase للإشعارات (الإشعارات الفورية) والتفاعل المباشر مع المستخدم\n• Supabase كقاعدة بيانات رئيسية (PostgreSQL) مع إمكانيات الوقت الفعلي وواجهة برمجة التطبيقات الجاهزة\n\nهذا المزيج يجعل التطوير أسرع، والتجربة أكثر تكاملاً، والأداء أكثر استقراراً.\n\n🚀 في أحد مشاريعي الأخيرة، استخدمت Flutter لبناء الواجهة، و Firebase للإشعارات، و Supabase لإدارة البيانات والمصادقة. كانت النتيجة تطبيقاً عملياً يجمع بين السرعة والموثوقية والمرونة.\n\n✨ نصيحتي: لا تقتصر نفسك على أداة واحدة، بل اجمع بين ما تقدمه كل منصة لبناء منتج أقوى.",
            category: "flutter",
            date: "2024-01-05",
            readTime: "5 دقائق قراءة",
            tags: ["Flutter", "Firebase", "Supabase", "تطوير كامل المكدس"],
            featured: true
          }
        }
      },
      // Testimonials Page
      testimonials: {
        title: "ما يقوله العملاء",
        subtitle: "ملاحظات من العملاء والمتعاونين",
        alkamal: {
          content: "يسعدنا أن نعبر عن تقديرنا الصادق للعمل الاستثنائي الذي قام به حبيب في نظام حجز الحافلات واللوجستيات العابر للحدود. خبرته التقنية واحترافيته وتفانيه طوال فترة تطوير المشروع فاقت توقعاتنا. الحل الشامل الذي قدمه قد عزز بشكل كبير عملياتنا بين سوريا والأردن.",
          author: "شركة الكمال الدولية",
          position: "رسالة تقدير رسمية"
        }
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