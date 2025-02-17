import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Egyptian Arabic translations (more natural)
const arEGTranslations = {
  hero: {
    title: 'مطور فرونت إند',
    description: '.بعمل مواقع سريعة ونضيفة وشكلها حلو',
    viewWork: 'شوف شغلي',
    contact: 'كلمني',
  },
    projects: {
      title: "مشاريعي المميزة",
      description: "دي اكتر مشاريع تبعت فيها",
      viewWork: 'جرب الموقع',
      code: 'الكود',
      liveDemo: 'جرب الموقع',
        items: {
      quantum: {
        title: 'شات كوانتم للذكاء الاصطناعي',
        description: 'تجربة مستقبلية للتعامل مع الذكاء الاصطناعي بواجهة بسيطة وحركات سلسة.',
      },
      minbar: {
        title: 'منبر الجمعة',
        description: 'منصة للإرشاد الديني والمعرفة بواجهة سهلة وبسيطة.',
      },
      dreamator: {
        title: 'دريماتور للذكاء الاصطناعي',
        description: 'حول أفكارك لحقيقة مع المنصة دي. ابتكر واستكشف وحقق أحلامك.',
      },
      tokenManager: {
        title: 'بوت إدارة التوكنز',
        description: 'بوت ديسكورد لإدارة التوكنز في سيرفرك، بيضمن أمان وسهولة الاستخدام.',
      }
    }
  },
  skills: {
    title: 'المهارات التقنية',
    description: 'الأدوات والتقنيات اللي أنا اتعلمتها',
    categories: {
      frontend: 'الواجهة الأمامية',
      backend: 'الخلفية',
      otherskills: 'اخري',
      ai: 'ذكاء اصطناعي'
    }
  },
  about: {
    title: 'عنّي',
    subtitle: 'رحلتي كمطور',
    bio: 'أهلاً! أنا علي، مطور من مصر وعندي 15 سنة. بعمل مواقع سريعة، متجاوبة، وشكلها حلو. بدأت البرمجة وأنا عندي 12 سنة، ومن ساعتها وأنا بشتغل بـ ريأكت عشان أحسن تجرب الناس مع الإنترنت.',
    timeline: {
      2022: {
        title: 'أول خطواتي في البرمجة',
        description: 'بدأت أتعلم أتش تي ام أل و سي أسس وعملت أول صفحة ويب. حسيت بحماس لما الناس شافوا شغلي.'
      },
      2023: {
        title: 'بوتات ديسكورد',
        description: 'اتعلمت جافا سكربت كويس وعملت أول بوت ديسكورد. أول ما حسيت بقوة جافا سكربت.'
      },
      2024: {
        title: 'أول تطبيق React',
        description: 'عملت اول تطبيق ريأكت ليا كان زي نوت باد بسيط بس كانت تجربة حلو اوي وعرفت قد ايه ريأكت سهله '
      },
      2025: {
        title: 'دلوقتي',
        description: 'دلوقتي بشتغل على تطبيقات كبيرة باستخدام ريأكت مع تايب سكربت و تال وايند، وبحسنها بأدوات زي فايت.'
      }
    }
  },
  contact: {
    title: 'تواصل معايا',
    description: 'عندك مشروع في بالك؟ يلا نتكلم! 🚀',
    email: 'الإيميل',
    phone: 'الموبايل',
    location: 'الموقع',
    rights: 'كل الحقوق محفوظة'
  }
};

// English translations
const enTranslations = {
  hero: {
    title: 'Front-End Developer',
    description: 'I build fast, clean, and good-looking websites that just work.',
    viewWork: 'View My Work',
    contact: 'Contact Me',
  },
  projects: {
    title: 'Featured Projects',
    description: 'Those are the projects I\'m most proud of',
    liveDemo: 'Live Demo',
    code: 'The Code',
    items: {
      quantum: {
        title: 'Quantum AI Chat',
        description: 'Experience the future of AI interaction with this elegantly designed chat interface.',
      },
      minbar: {
        title: 'Minbar Aljumua',
        description: 'A thoughtfully crafted platform for seeking religious guidance and knowledge.',
      },
      dreamator: {
        title: 'Dreamator AI',
        description: 'Transform your ideas into reality with this innovative AI-powered platform.',
      },
      tokenManager: {
        title: 'Token Manager Bot',
        description: 'A sophisticated Discord bot that revolutionizes token management within your server.',
      }
    }
  },
  skills: {
    title: 'Technical Skills',
    description: 'Tools & tech I love working with',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      otherskills: 'Others',
      ai: 'AI'
    }
  },
  about: {
    title: 'About Me',
    subtitle: 'My Journey as a Developer',
    bio: 'Hey! I\'m <span>Ali</span>, a 15-year-old developer from Egypt with a love for building fast, responsive, and beautiful web apps. I started coding when I was 12, and since then, I\'ve been working with React.js to make the internet a better place.',
    timeline: {
      2022: {
        title: 'First Steps into Coding',
        description: 'Started exploring HTML & CSS, crafting my first static web page.'
      },
      2023: {
        title: 'Discord Bots',
        description: 'Got deep into JavaScript. Built my first Discord bot, and that\'s when I truly started to understand the power of JS.'
      },
      2024: {
        title: 'First React App',
        description: 'Created a basic React app to track ideas. Focused on simplicity, used hooks for state management.'
      },
      2025: {
        title: 'Right now',
        description: 'Now I\'m building scalable applications with React, integrating TypeScript, Tailwind CSS, and optimizing with tools like Vite.'
      }
    }
  },
  contact: {
    title: 'Get in Touch',
    description: 'Got a project in mind? Let\'s talk! 🚀',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    rights: 'All rights reserved'
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      'ar-EG': { translation: arEGTranslations }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
