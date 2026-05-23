import { FaFigma, FaGlobe, FaNodeJs, FaPython, FaReact, FaSearch, FaShopify, FaStore, FaWordpress } from 'react-icons/fa';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { SiExpress, SiFirebase, SiFramer, SiJavascript, SiMongodb, SiPostgresql, SiTailwindcss } from 'react-icons/si';

export const portfolio = {
  navigation: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    name: 'Ali Raza',
    title: 'Web Developer & Ecommerce Expert',
    tagline:
      'I build responsive, user-friendly, conversion-focused websites for businesses, ecommerce brands, and digital teams.',
    description:
      'Remote web developer with hands-on experience across Shopify, Shopify Plus, WordPress, WooCommerce, Squarespace, SEO, analytics, and landing page delivery for international clients.',
    focus:
      'Creating polished Shopify, WordPress, Squarespace, and business websites that are fast, responsive, easy to manage, and built to convert.',
    availability:
      'Available for web development, ecommerce builds, website maintenance, landing pages, SEO improvements, and remote collaboration.',
    ctas: [
      { label: 'View Work Focus', href: '#projects', variant: 'primary' },
      { label: 'Contact Me', href: '#contact', variant: 'secondary' },
    ],
    stats: [
      { label: 'Years in web development', value: '6+' },
      { label: 'Remote work experience', value: 'Global' },
      { label: 'Core platforms', value: '4+' },
    ],
  },
  socials: [],
  about: {
    heading: 'Practical web development for businesses that need clean execution and measurable results.',
    initials: 'AR',
    bio: [
      'I am a web developer and ecommerce specialist focused on building responsive, visually appealing, and user-friendly websites. My work covers new website builds, ongoing maintenance, landing pages, platform customization, performance improvements, and SEO-focused updates.',
      'I have worked remotely with companies in Singapore and with clients through Fiverr, delivering Shopify, Squarespace, WordPress, WooCommerce, business website, and ecommerce solutions. I bring a mix of technical implementation, design awareness, communication, and reliable delivery.',
    ],
    strengths: [
      'Developing responsive Shopify, WordPress, Squarespace, and business websites',
      'Customizing Shopify themes with Liquid, JSON, ecommerce sections, and landing pages',
      'Improving user experience, visual structure, SEO, analytics, and conversion paths',
      'Maintaining websites, fixing layout/style issues, and keeping pages updated',
    ],
    summary: [
      { label: 'Location', value: 'United Kingdom' },
      { label: 'Focus', value: 'Web development, ecommerce, SEO' },
      { label: 'Education', value: 'MSc Cyber Security, University of Hertfordshire' },
    ],
  },
  skillGroups: [
    {
      title: 'Frontend',
      description: 'Modern, responsive interfaces with clean structure and polished interactions.',
      skills: [
        { name: 'React', icon: FaReact, level: 84 },
        { name: 'JavaScript', icon: SiJavascript, level: 86 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 82 },
        { name: 'Bootstrap', icon: FaGlobe, level: 88 },
        { name: 'Framer Motion', icon: SiFramer, level: 74 },
        { name: 'Responsive UI', icon: FaGlobe, level: 92 },
      ],
    },
    {
      title: 'Backend',
      description: 'Practical server-side skills for integrations, data, and secure web systems.',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 78 },
        { name: 'Express', icon: SiExpress, level: 74 },
        { name: 'Python', icon: FaPython, level: 72 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 70 },
        { name: 'MongoDB', icon: SiMongodb, level: 72 },
        { name: 'Firebase', icon: SiFirebase, level: 76 },
      ],
    },
    {
      title: 'Web Foundations',
      description: 'Core website development skills for polished responsive builds.',
      skills: [
        { name: 'HTML5', icon: FaGlobe, level: 94 },
        { name: 'CSS3', icon: FaGlobe, level: 92 },
        { name: 'JavaScript', icon: SiJavascript, level: 86 },
        { name: 'Bootstrap', icon: FaGlobe, level: 88 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 82 },
        { name: 'Framer Motion', icon: SiFramer, level: 74 },
      ],
    },
    {
      title: 'Ecommerce Platforms',
      description: 'Storefront builds, theme customization, and ecommerce optimization.',
      skills: [
        { name: 'Shopify', icon: FaShopify, level: 94 },
        { name: 'Shopify Plus', icon: FaShopify, level: 88 },
        { name: 'Liquid Programming', icon: FaShopify, level: 90 },
        { name: 'WooCommerce', icon: FaStore, level: 86 },
        { name: 'Ecommerce Websites', icon: FaStore, level: 92 },
        { name: 'Product Optimization', icon: FaSearch, level: 84 },
      ],
    },
    {
      title: 'CMS & Business Sites',
      description: 'Editable business websites for teams, services, and brands.',
      skills: [
        { name: 'WordPress', icon: FaWordpress, level: 90 },
        { name: 'Squarespace', icon: FaGlobe, level: 88 },
        { name: 'Business Websites', icon: FaGlobe, level: 92 },
        { name: 'Landing Pages', icon: FaGlobe, level: 90 },
        { name: 'Figma', icon: FaFigma, level: 82 },
        { name: 'Adobe XD', icon: FaFigma, level: 76 },
      ],
    },
    {
      title: 'Growth & Marketing',
      description: 'Technical growth support for search, tracking, and campaigns.',
      skills: [
        { name: 'SEO', icon: FaSearch, level: 88 },
        { name: 'Google Analytics', icon: FaSearch, level: 84 },
        { name: 'Google Ads', icon: FaSearch, level: 78 },
        { name: 'Facebook Ads', icon: FaSearch, level: 76 },
        { name: 'Email Marketing', icon: HiOutlineEnvelope, level: 80 },
        { name: 'Affiliate Marketing', icon: FaStore, level: 74 },
      ],
    },
  ],
  projects: [
    {
      title: 'Shopify & Shopify Plus Stores',
      description:
        'Custom ecommerce storefronts with Liquid sections, responsive layouts, product-focused UX, payment-ready architecture, and ongoing store improvements.',
      stack: ['Shopify', 'Shopify Plus', 'Liquid', 'JSON', 'SEO'],
      demo: '#contact',
      ctaLabel: 'Discuss Shopify',
      category: 'Ecommerce',
      previewTitle: 'Conversion-focused online stores',
      previewGradient: 'from-emerald-700 via-teal-600 to-sky-500',
      metrics: [
        { value: 'Fast', label: 'UX' },
        { value: 'SEO', label: 'Ready' },
        { value: 'Sales', label: 'Focus' },
      ],
      previewBlocks: [
        { title: 'Theme customization', status: 'Built', rows: ['92%', '68%', '82%'] },
        { title: 'Product page sections', status: 'Optimized', rows: ['76%', '89%', '54%'] },
        { title: 'Checkout path support', status: 'Mapped', rows: ['64%', '81%', '72%'] },
      ],
    },
    {
      title: 'WordPress & WooCommerce Websites',
      description:
        'Professional WordPress websites and WooCommerce stores built for service businesses, ecommerce brands, clean content management, and practical growth.',
      stack: ['WordPress', 'WooCommerce', 'CSS3', 'JavaScript', 'Analytics'],
      demo: '#contact',
      ctaLabel: 'Discuss WordPress',
      category: 'CMS Websites',
      previewTitle: 'Editable business sites with polish',
      previewGradient: 'from-indigo-700 via-slate-800 to-rose-500',
      metrics: [
        { value: 'CMS', label: 'Control' },
        { value: 'UX', label: 'Clean' },
        { value: 'SEO', label: 'Structured' },
      ],
      previewBlocks: [
        { title: 'Business service pages', status: 'Ready', rows: ['83%', '71%', '57%'] },
        { title: 'WooCommerce catalog', status: 'Live', rows: ['66%', '88%', '74%'] },
        { title: 'SEO content templates', status: 'Mapped', rows: ['79%', '52%', '91%'] },
      ],
    },
    {
      title: 'Maintenance, Landing Pages & SEO',
      description:
        'Website maintenance, new landing pages, layout fixes, user-experience improvements, SEO updates, analytics setup, and performance-minded iteration.',
      stack: ['Squarespace', 'SEO', 'Google Analytics', 'Landing Pages', 'UX'],
      demo: '#contact',
      ctaLabel: 'Start a Brief',
      category: 'Growth Support',
      previewTitle: 'Clear updates that keep sites moving',
      previewGradient: 'from-slate-950 via-brand-700 to-cyan-500',
      metrics: [
        { value: '24h', label: 'Reply' },
        { value: 'UX', label: 'Fixes' },
        { value: 'SEO', label: 'Lift' },
      ],
      previewBlocks: [
        { title: 'Landing page delivery', status: 'Shipped', rows: ['88%', '72%', '54%'] },
        { title: 'Responsive issue fixes', status: 'Cleaned', rows: ['64%', '91%', '47%'] },
        { title: 'Tracking and SEO setup', status: 'Ready', rows: ['78%', '56%', '83%'] },
      ],
    },
  ],
  experience: [
    {
      role: 'Web Developer (Remote)',
      company: 'MorpheusLabs Pvt Ltd, Singapore',
      period: '2022 - Present',
      summary:
        'Maintaining, updating, and developing the company website with a focus on responsive layouts, user-friendly pages, visual quality, performance, and SEO.',
      highlights: [
        'Develop and maintain responsive, visually appealing pages for the company website.',
        'Collaborate with team members to optimize website performance, user experience, and SEO.',
        'Fix style and structure issues while keeping the website updated with new pages and landing pages.',
      ],
    },
    {
      role: 'Web Developer (Remote)',
      company: 'Creative For More Pvt Ltd, Singapore',
      period: '2020 - 2025',
      summary:
        'Delivered Shopify, Squarespace, and WordPress website solutions tailored to client needs, with emphasis on responsive design, conversion, and timely delivery.',
      highlights: [
        'Customized Shopify themes with Liquid and built visually polished responsive websites.',
        'Created WordPress and Squarespace websites that showcase businesses clearly and professionally.',
        'Worked closely with clients to solve problems, communicate progress, and deliver high-quality work on time.',
      ],
    },
    {
      role: 'Freelance Web Developer',
      company: 'Fiverr',
      period: '2018 - 2021',
      summary:
        'Provided global clients with business websites, ecommerce websites, custom layouts, Shopify, Squarespace, and WordPress development services.',
      highlights: [
        'Built business websites, ecommerce websites, and custom design layouts for clients.',
        'Delivered Shopify, Squarespace, and WordPress solutions with strong client communication.',
        'Helped clients improve online presence and achieve digital business goals.',
      ],
    },
    {
      role: 'MSc Cyber Security',
      company: 'University of Hertfordshire, UK',
      period: '2025 - 2026',
      summary:
        'Postgraduate study focused on cyber security, strengthening the security perspective behind modern web systems and digital platforms.',
      highlights: [
        'Building deeper knowledge of secure systems, risk-aware development, and modern security practices.',
        'Combining web development experience with a stronger cyber security foundation.',
      ],
    },
    {
      role: 'Bachelors in Computer Science',
      company: 'Virtual University of Pakistan',
      period: '2018 - 2023',
      summary:
        'Completed computer science studies with relevant coursework in web development, database management, and software engineering.',
      highlights: [
        'Studied software engineering foundations, databases, and web development.',
        'Built the academic foundation for professional web development and ecommerce work.',
      ],
    },
  ],
  contact: {
    heading: "Let's build your next website.",
    description:
      'For Shopify stores, WordPress websites, WooCommerce builds, Squarespace updates, SEO improvements, landing pages, and ongoing website maintenance, send a short brief through the secure contact form.',
    web3FormsAccessKey: '764364e3-50c0-4e2d-a18c-b5dc713c475d',
    formName: 'Ali Raza Portfolio',
    formSubject: 'New portfolio project brief',
    successMessage: 'Thanks, your brief has been sent. I will review it and reply soon.',
    errorMessage: 'Something went wrong while sending. Please try again in a moment.',
    highlights: [
      { value: '24h', label: 'Typical reply' },
      { value: 'Web', label: 'Build focus' },
      { value: 'SEO', label: 'Growth ready' },
    ],
    closing: 'Your email is only used to reply to your project request. Phone calls can be arranged after the brief is reviewed.',
  },
  footer: {
    text: `Copyright ${new Date().getFullYear()} Ali Raza. Built with React, Vite, Tailwind CSS, and Framer Motion.`,
  },
};
