import assets from "@/public";
import Avatar from "@/public/ACRTeam";
import { solutionAssests } from "@/public/solutions";
import {
  FaUsers,
  FaHandshake,
  FaTrophy,
  FaWallet,
  FaFilePdf,
  FaShieldAlt,
  FaChartLine,
  FaHeadset,
  FaLaptop,
  FaNetworkWired,
  FaFileInvoice,
  FaBriefcase,
  FaChartBar,
  FaEnvelope,
  FaPencilAlt,
} from "react-icons/fa";
import { customerAssets } from "@/public/customers";
import { EventAssests } from "@/public/Event";
import {
  PiMicrosoftWordLogoFill,
  PiMicrosoftExcelLogoBold,
} from "react-icons/pi";
import { HeroSlide, News, PolicyData, PolicySection } from "@/interface";

export const heroSlides: HeroSlide[] = [
  {
    title: ["Leave your", "Accounting and", "Taxes to Us"],
    subtitle:
      "We handle all your accounting and tax tasks while you focus on growing your business.",
    image: assets.Hero,
  },
  {
    title: ["Financial Clarity,", "Simplified"],
    subtitle:
      "ACR Online Accounting Services Ltd ensures your accounting and taxation are expertly managed, so you can focus on what matters most.",
    image: assets.Hero1,
  },
  {
    title: ["Let Us Handle", "Your Accounting ", "And tax Needs"],
    subtitle:
      "Hassle-free tax management so you can focus on what matters most.",
    image: assets.Hero2,
  },
];

export const aboutSlides: HeroSlide[] = [
  {
    title: ["Your Trusted", "Accounting Partner", "In Rwanda"],
    subtitle:
      "Simplify your accounting with expert solutions tailored to your business.",
    image: assets.About,
    buttonText: "Get in touch",
  },
];

export const serviceSlides: HeroSlide[] = [
  {
    title: ["Comprehensive", "Accounting Services"],
    subtitle:
      "From bookkeeping to financial analysis, we handle it all with precision.",
    image: assets.Service1,
    buttonText: "Learn More",
  },
  {
    title: ["Tax Planning &", "Compliance"],
    subtitle:
      "Ensure your business stays compliant while optimizing tax strategies.",
    image: assets.Service2,
    buttonText: "Explore More",
  },
  {
    title: ["Payroll &", "HR Solutions"],
    subtitle:
      "Streamline your payroll processing and employee management effortlessly.",
    image: assets.Service3,
    buttonText: "Get Started",
  },
];

export const quickBooksSlides: HeroSlide[] = [
  {
    title: ["QuickBooks", "consultant in", "Rwanda"],
    subtitle:
      "Welcome to ACR-Online Accounting Services Ltd, your trusted QuickBooks consultant in Rwanda. Get expert QuickBooks configuration, training and support services from certified professionals in Rwanda. Our consultants can help set up and customize QuickBooks for your business needs.",
    image: assets.Quickbooks,
  },
];

export const quickBooksFeatures = [
  {
    icon: FaLaptop,
    title: "Free TRIAL Versions",
    description: "We offer FREE versions of software",
  },
  {
    icon: FaNetworkWired,
    title: "FREE System Trial",
    description:
      "We help you to test the systems to check they fit your Company's needs.",
  },
  {
    icon: FaFileInvoice,
    title: "Fast Quotation Finalization",
    description:
      "The Quotation is fast provided to you right after Communicating us.",
  },
];

export const supportData = [
  {
    icon: FaHeadset,
    title: "QuickBooks reselling",
    location: "Rwanda",
    description:
      "Through the QuickBooks ProAdvisor program, we are authorized by Intuit, Inc.'s Global Master Reseller to distribute and resell Intuit products and solutions in Rwanda territory.",
    isAvalaible: true,
  },
  {
    icon: FaChartLine,
    title: "QuickBooks support",
    location: "Rwanda",
    description:
      "We are reliable QuickBooks support specialists in Rwanda for technical help, troubleshooting errors, data recovery, and any other assistance with your QuickBooks software.",
    isAvalaible: true,
  },
  {
    icon: FaShieldAlt,
    title: "QuickBooks Online",
    location: "Rwanda",
    description:
      "We teach how to effectively use QuickBooks for accounting and financial management through our hands-on training sessions. Classes are available for beginner, intermediate, and advanced users in Rwanda.",
    isAvalaible: true,
  },
];

export const resourceSlides = [
  {
    title: ["Expert Insights", "For Your Business Growth"],
    subtitle: "Access valuable resources, guides, and industry insights.",
    image: assets.Resources,
    buttonText: "Explore Resources",
  },
  {
    title: ["Stay Updated", "With Latest Trends"],
    subtitle:
      "Get the latest updates on accounting, finance, and business strategies.",
    image: assets.Trends,
    buttonText: "Read More",
  },
  {
    title: ["Boost Your Knowledge", "With Our Webinars"],
    subtitle: "Join our expert-led webinars and expand your expertise.",
    image: assets.Webinars,
    buttonText: "Join Webinar",
  },
];

export const servicesData = [
  {
    id: 1,
    title: "Accounting & Bookkeeping",
    description:
      "At ACR-ONLINE ACCOUNTING SERVICES LTD, we specialize in accounting and bookkeeping for small and medium businesses, allowing clients to focus on growing their businesses.",
    link: "/services/accounting-bookkeeping",
    iconUrl: FaUsers,
  },
  {
    id: 2,
    title: "Tax preparations & Planning",
    description:
      "Our certified tax specialists will assist you in becoming as tax proficient as possible while ensuring that you are also in full compliance with local tax laws. No surprises. No penalties.",
    link: "/services/tax-preparation-planning",
    iconUrl: FaUsers,
  },
  {
    id: 3,
    title: "IT-Solutions",
    description:
      "Our team members are Certified QuickBooks ProAdvisors and Certified Microsoft CSP. We are committed to helping our clients efficiently and effectively use these tools to achieve clarity and valuable insights into business performance.",
    buttonText: "Explore",
    link: "/services/it-solutions",
    iconUrl: FaUsers,
  },
  {
    id: 4,
    title: "Training",
    description:
      "Gain the knowledge and skills you need to succeed in the competitive world of accounting with our comprehensive training programs. Our experienced instructors offer expert training in accounting best practices, taxation, and accounting software, including Quickbooks and Microsoft tools like Ms 365.",
    link: "/services/training",
    iconUrl: FaUsers,
  },
  {
    id: 5,
    title: "Outsourcing Accounting services",
    description:
      "Experience the benefits of outsourcing with our Accounting Services. Our expert team will handle your accounting tasks with accuracy and efficiency, giving you more time to focus on running your business.",
    link: "/services/outsourcing-accounting",
    iconUrl: FaUsers,
  },
  {
    id: 6,
    title: "Business Consulting & Advisory",
    description:
      "Take your business to the next level with our Business Consulting and Advisory service. Our experienced consultants offer expert guidance and customized solutions for growth and improved profitability.",
    link: "/services/consulting-advisory",
    iconUrl: FaUsers,
  },
];

export const ExpectationData = [
  {
    id: 1,
    icon: assets.Icon,
    title: "FaUsersst Service delivery",
    description:
      "Need your project done quickly? We're here to help. Our fast service delivery ensures that you get what you need, when you need it.",
  },
  {
    id: 2,
    icon: assets.Icon1,
    title: "Trusted by Many",
    description:
      "Looking for a company you can trust? Look no further. Our reputation for excellence has made us a go-to choice for many businesses and individuals alike.",
  },

  {
    id: 3,
    icon: assets.Icon2,
    title: "Tailored to your Needs",
    description:
      "We understand that every project is unique, which is why we offer tailored solutions to meet your specific needs. Let us help you achieve your goals, your way.",
  },
];

export const achievementsData = [
  {
    id: 1,
    icon: FaUsers,
    number: "49+",
    label: "Happy Customers",
  },
  {
    id: 2,
    icon: FaHandshake,
    number: "12+",
    label: "Workers Employed",
  },
  {
    id: 3,
    icon: FaTrophy,
    number: "126+",
    label: "Projects Completed",
  },
  {
    id: 4,
    icon: FaWallet,
    number: "120+",
    label: "Testimonials",
  },
];

export const testimonialsData = [
  {
    id: 1,
    content:
      "An Excellent service received from an excellent team. I recommend ACR Online to all those seeking professional and polite team.",
    author: "John Doe",
    role: "CEO, ABC Corp",
    imageUrl: assets.Man,
  },
  {
    id: 2,
    content:
      "I am proud to be doing business with you. I recommend ACR-ONLINE ACCOUNTING SERVICES LTD to anyone seeking professional and efficient Accounting and bookkeeping services.",
    author: "Paul Johnson-Davies",
    role: "Finance Director",
    imageUrl: assets.Man,
  },
  {
    id: 3,
    content:
      "Hello, ACR Accounting Academy is the best Accounting firm in Rwanda, their services are fast and efficient.",
    author: "Sarah Williams",
    role: "Business Owner",
    imageUrl: assets.Man,
  },
  {
    id: 4,
    content:
      "An Excellent service received from an excellent team. I recommend ACR Online to all those seeking professional and polite team.",
    author: "Paul Johnson-Davies",
    role: "Finance Director",
    imageUrl: assets.Man,
  },
];

export const AllNews: News[] = [
  {
    id: 1,
    title: "Graduation (ACR-ACC Academy Sept 2023)",
    lead: "ACR-Acc Academy September intake Graduation 02/10/2023 – A wonderful day filled with joy and a sense of achievement.",
    imgUrl: assets.Image18,
    mainImage: assets.Image18,
    imageCaption:
      "Graduates celebrating their achievement at the ACR-ACC Academy ceremony",
    category: "Events",
    readTime: "4 min read",
    description:
      "ACR-ACC Academy celebrated the success of its graduates with a wonderful ceremony.",
    author: {
      name: "John Doe",
      role: "Editor",
      image: Avatar,
      publishDate: "October 2, 2023",
      bio: "John is our senior editor with over 10 years of experience covering educational events and academic achievements.",
    },
    content: [
      {
        type: "paragraph",
        content:
          "The ACR-ACC Academy celebrated the graduation of its September 2023 intake, marking a significant milestone for the students. The ceremony took place at the academy's main hall, beautifully decorated for the occasion with banners and flowers that reflected the institution's colors.",
      },
      {
        type: "figure",
        image: assets.Image18,
        caption:
          "Students celebrating their achievements at the ACR-ACC graduation ceremony.",
      },
      {
        type: "heading",
        level: 2,
        content: "A Day of Joy and Inspiration",
      },
      {
        type: "paragraph",
        content:
          "The event was attended by faculty members, distinguished guests, and proud family members, making it a memorable occasion. The day began with an opening speech by the Academy Director, followed by inspirational talks from industry professionals who shared insights on career opportunities and the importance of continuous learning in today's rapidly evolving job market.",
      },
      {
        type: "list",
        items: [
          "Over 200 students graduated successfully from various programs.",
          "Keynote speech delivered by industry leaders focusing on future opportunities.",
          "Special awards presented to students who demonstrated outstanding performance throughout their studies.",
          "Alumni networking session held after the main ceremony.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Student Achievements",
      },
      {
        type: "paragraph",
        content:
          "This year's graduating class has shown exceptional dedication and skill. Many students have already secured positions with leading companies in their respective fields, while others are pursuing further education or entrepreneurial ventures. The diversity of career paths chosen by our graduates reflects the versatility of skills acquired during their time at the academy.",
      },
    ],
    comments: [
      {
        id: 101,
        author: { name: "Alice Smith", image: Avatar },
        date: "October 3, 2023",
        content:
          "Congratulations to all graduates! Wishing you success in your careers. It's wonderful to see so many talented individuals taking this important step in their professional journey.",
        likes: 12,
        replies: [
          {
            id: 201,
            author: { name: "Michael Brown", image: Avatar },
            date: "October 4, 2023",
            content:
              "Absolutely! This is just the beginning of an exciting journey. I graduated from ACR-ACC last year and can confirm the education received here provides an excellent foundation.",
            likes: 5,
          },
        ],
      },
      {
        id: 102,
        author: { name: "Rebecca Johnson", image: Avatar },
        date: "October 3, 2023",
        content:
          "I attended the ceremony and was impressed by the level of professionalism and enthusiasm shown by all graduates. The keynote speaker was particularly inspiring!",
        likes: 8,
        replies: [],
      },
    ],
    relatedArticles: [
      {
        title: "Career Opportunities for Graduates",
        url: "/news/2",
        image: assets.Image19,
        readTime: "5 min",
        excerpt:
          "Discover the best career paths and job opportunities available for fresh graduates.",
      },
      {
        title: "ACR-ACC Announces New Programs for 2024",
        url: "/news/5",
        image: assets.Image20,
        readTime: "3 min",
        excerpt:
          "Exciting new educational programs launching next year to meet evolving industry demands.",
      },
    ],
  },
  {
    id: 2,
    title: "Exciting News! (QuickBooks Online)",
    lead: "Get QuickBooks Online Subscription for Only 1 Euro/month for 6 Months! A fantastic opportunity for small businesses to access professional accounting tools.",
    imgUrl: assets.Image19,
    mainImage: assets.Image19,
    imageCaption:
      "QuickBooks Online platform showing financial dashboard features",
    category: "Offers",
    readTime: "3 min read",
    description:
      "QuickBooks introduces a special limited-time offer for small business owners.",
    author: {
      name: "Jane Doe",
      role: "Financial Analyst",
      image: Avatar,
      publishDate: "September 15, 2023",
      bio: "Jane specializes in financial technology solutions for small businesses with expertise in accounting software and digital transformation.",
    },
    content: [
      {
        type: "paragraph",
        content:
          "We're thrilled to announce our partnership with QuickBooks, offering exclusive discounts for small business owners. This collaboration aims to make professional accounting tools accessible to entrepreneurs and small businesses that might otherwise find premium financial software out of reach.",
      },
      {
        type: "figure",
        image: assets.Image19,
        caption:
          "QuickBooks subscription offer details showing pricing and available features.",
      },
      {
        type: "heading",
        level: 2,
        content: "How to Avail the Offer?",
      },
      {
        type: "paragraph",
        content:
          "This special offer is available for a limited time. Follow these simple steps to claim your discount and start managing your business finances more efficiently. The promotion runs until the end of the current quarter, giving businesses ample time to make the transition.",
      },
      {
        type: "list",
        items: [
          "Sign up on the official QuickBooks website using our partner link.",
          "Use the promo code: <strong>QB2023</strong> at checkout.",
          "Complete your profile setup to access all premium accounting features.",
          "Enjoy professional financial management tools at a fraction of the regular price.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Benefits for Your Business",
      },
      {
        type: "paragraph",
        content:
          "Implementing QuickBooks can transform how you manage your business finances. The platform offers intuitive invoice generation, expense tracking, tax preparation assistance, and comprehensive financial reporting. These tools can help you make more informed business decisions and save valuable time on administrative tasks.",
      },
    ],
    comments: [
      {
        id: 102,
        author: { name: "Sarah Johnson", image: Avatar },
        date: "September 16, 2023",
        content:
          "This is an amazing deal! I've been using QuickBooks for my small business and it's been a game-changer. Thanks for sharing this offer.",
        likes: 15,
        replies: [
          {
            id: 202,
            author: { name: "Thomas Clark", image: Avatar },
            date: "September 16, 2023",
            content:
              "Do you know if existing customers can take advantage of this offer too? I'm currently paying the full price.",
            likes: 3,
          },
          {
            id: 203,
            author: { name: "Jane Doe", image: Avatar },
            date: "September 17, 2023",
            content:
              "Hi Thomas, this offer is primarily for new subscribers, but I recommend contacting QuickBooks support as they sometimes have loyalty discounts for existing customers.",
            likes: 7,
          },
        ],
      },
    ],
    relatedArticles: [
      {
        title: "Top Accounting Software in 2023",
        url: "/news/3",
        image: assets.Image20,
        readTime: "4 min",
        excerpt:
          "A comprehensive guide to the best accounting software for businesses.",
      },
      {
        title: "Financial Management Tips for Startups",
        url: "/news/6",
        image: assets.Image18,
        readTime: "6 min",
        excerpt:
          "Essential financial strategies to help your startup thrive in challenging economic conditions.",
      },
    ],
  },
  {
    id: 3,
    title: "Strategic Workshop (SME Growth & Digitalization)",
    lead: "Our recent strategic workshop focused on SME growth, digital transformation, and innovative business strategies to help local businesses thrive in the digital economy.",
    imgUrl: assets.Image20,
    mainImage: assets.Image20,
    imageCaption:
      "Workshop participants engaged in a collaborative planning session",
    category: "Workshops",
    readTime: "5 min read",
    description:
      "A transformative workshop to empower small and medium enterprises with digital tools.",
    author: {
      name: "David Lee",
      role: "Business Consultant",
      image: Avatar,
      publishDate: "August 20, 2023",
      bio: "David is a certified business consultant specializing in digital transformation strategies for SMEs with over 15 years of industry experience.",
    },
    content: [
      {
        type: "paragraph",
        content:
          "SMEs are crucial for economic growth, and digitalization plays a key role in their transformation. Our recent workshop brought together business owners, technology experts, and industry consultants to explore practical approaches to digital adoption. The event focused on accessible solutions that can be implemented without significant technical expertise or financial investment.",
      },
      {
        type: "figure",
        image: assets.Image20,
        caption:
          "Expert panel sharing insights on cost-effective digitalization strategies for SMEs.",
      },
      {
        type: "heading",
        level: 2,
        content: "Key Takeaways from the Workshop",
      },
      {
        type: "paragraph",
        content:
          "Participants gained valuable insights into practical digital transformation strategies. The discussions emphasized the importance of starting with small, manageable changes rather than attempting complete digital overhauls. Experts also highlighted the need for proper staff training to ensure successful adoption of new technologies.",
      },
      {
        type: "list",
        items: [
          "The critical importance of cloud-based solutions for improving operational flexibility.",
          "Practical approaches to leveraging AI and automation for business efficiency without technical expertise.",
          "Step-by-step framework for building a resilient digital strategy tailored to limited budgets.",
          "Case studies of successful digital transformations in various SME sectors.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Follow-up Resources",
      },
      {
        type: "paragraph",
        content:
          "Workshop attendees received access to a comprehensive resource library including implementation guides, software comparison tools, and consultation opportunities. Our team will be conducting follow-up sessions over the coming months to provide ongoing support for businesses implementing their digital transformation plans.",
      },
    ],
    comments: [
      {
        id: 103,
        author: { name: "Emma Wilson", image: Avatar },
        date: "August 21, 2023",
        content:
          "Great insights! I implemented some of the cloud strategies suggested at the workshop and have already seen improvements in our team's collaboration. Digitalization truly is the way forward for SMEs.",
        likes: 9,
        replies: [],
      },
      {
        id: 104,
        author: { name: "Robert Chen", image: Avatar },
        date: "August 22, 2023",
        content:
          "Will there be any follow-up sessions for those who couldn't attend? The content sounds extremely valuable for my business.",
        likes: 4,
        replies: [
          {
            id: 204,
            author: { name: "David Lee", image: Avatar },
            date: "August 23, 2023",
            content:
              "Hi Robert, yes! We're planning a follow-up webinar next month. I'll share the registration details soon.",
            likes: 2,
          },
        ],
      },
    ],
    relatedArticles: [
      {
        title: "Why Digital Transformation Matters for SMEs",
        url: "/news/4",
        image: Avatar,
        readTime: "6 min",
        excerpt:
          "Understanding the benefits of digital transformation in the SME sector.",
      },
      {
        title: "Affordable Tech Solutions for Small Businesses",
        url: "/news/7",
        image: assets.Image19,
        readTime: "4 min",
        excerpt:
          "Budget-friendly technology solutions that can transform your small business operations.",
      },
    ],
  },
  {
    id: 4,
    title: "New Partnership (ACR-ACC & Tech Solutions)",
    lead: "Exciting collaboration between ACR-ACC and Tech Solutions to drive innovation and digital literacy across multiple business sectors and educational programs.",
    imgUrl: assets.Image18,
    mainImage: assets.Image18,
    imageCaption:
      "Partnership signing ceremony between ACR-ACC and Tech Solutions executives",
    category: "Partnerships",
    readTime: "4 min read",
    description:
      "A strategic partnership aimed at fostering technological advancements.",
    author: {
      name: "Sophia Martinez",
      role: "Tech Strategist",
      image: Avatar,
      publishDate: "July 10, 2023",
      bio: "Sophia specializes in technology partnerships and ecosystem development with a focus on educational technology integration.",
    },
    content: [
      {
        type: "paragraph",
        content:
          "The partnership between ACR-ACC and Tech Solutions will empower businesses through advanced digital solutions. This collaboration brings together ACR-ACC's educational expertise and Tech Solutions' innovative technology platforms to create comprehensive programs that address the growing need for digital skills in today's workforce.",
      },
      {
        type: "figure",
        image: assets.Image18,
        caption:
          "Representatives from ACR-ACC and Tech Solutions signing the partnership agreement during the official ceremony.",
      },
      {
        type: "heading",
        level: 2,
        content: "What This Means for Businesses",
      },
      {
        type: "paragraph",
        content:
          "Local businesses will benefit significantly from this partnership through specialized training programs, technology implementation support, and ongoing consultancy services. The initiative aims to close the digital skills gap that many organizations currently face while providing practical solutions to common technological challenges.",
      },
      {
        type: "list",
        items: [
          "Access to cutting-edge digital tools with specialized training programs tailored to different industry needs.",
          "Collaborative innovation projects bringing together industry experts and technology specialists.",
          "Dedicated support programs for startups and entrepreneurs looking to leverage technology for growth.",
          "Regular knowledge-sharing events and workshops on emerging technologies.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Timeline and Implementation",
      },
      {
        type: "paragraph",
        content:
          "The first phase of the partnership will focus on developing specialized training curricula and establishing a technology resource center. By Q4 2023, we expect to launch the first series of workshops and begin offering technology consultancy services to member businesses. The full program rollout is scheduled for early 2024.",
      },
    ],
    comments: [
      {
        id: 104,
        author: { name: "Liam Thompson", image: Avatar },
        date: "July 11, 2023",
        content:
          "This is fantastic news! As a small business owner struggling with digital adoption, I'm looking forward to seeing the impact of this partnership. Will there be specific programs for the retail sector?",
        likes: 11,
        replies: [
          {
            id: 205,
            author: { name: "Sophia Martinez", image: Avatar },
            date: "July 12, 2023",
            content:
              "Hi Liam, absolutely! We're developing sector-specific programs, including one focused on retail digital transformation. Stay tuned for announcements in the coming weeks.",
            likes: 6,
          },
        ],
      },
      {
        id: 105,
        author: { name: "Amanda Roberts", image: Avatar },
        date: "July 14, 2023",
        content:
          "As someone who graduated from ACR-ACC last year, I'm excited to see this development. Will alumni have access to these new resources?",
        likes: 8,
        replies: [],
      },
    ],
    relatedArticles: [
      {
        title: "Tech Innovations Driving Business Success",
        url: "/news/5",
        image: assets.Image18,
        readTime: "7 min",
        excerpt:
          "Explore the latest technological innovations transforming industries.",
      },
      {
        title: "Digital Skills Gap in Modern Businesses",
        url: "/news/8",
        image: assets.Image20,
        readTime: "5 min",
        excerpt:
          "How the shortage of digital skills is affecting business growth and what organizations can do about it.",
      },
    ],
  },
  {
    id: 5,
    title: "Business Training Program (Supporting Entrepreneurs)",
    lead: "A highly successful business training program empowering entrepreneurs with essential skills and knowledge to launch and scale sustainable ventures.",
    imgUrl: assets.Image19,
    mainImage: assets.Image19,
    imageCaption:
      "Entrepreneurs participating in an interactive business planning workshop",
    category: "Education",
    readTime: "6 min read",
    description:
      "Entrepreneurs received hands-on training in business management and digital marketing.",
    author: {
      name: "Olivia Roberts",
      role: "Business Trainer",
      image: Avatar,
      publishDate: "June 5, 2023",
      bio: "Olivia is a certified business coach and entrepreneur with a passion for helping new business owners develop sustainable growth strategies.",
    },
    content: [
      {
        type: "paragraph",
        content:
          "The program focused on equipping entrepreneurs with essential business management skills, including financial planning, digital marketing, and strategic growth. The six-week intensive course combined theoretical knowledge with practical applications, allowing participants to immediately implement what they learned in their businesses.",
      },
      {
        type: "figure",
        image: assets.Image19,
        caption:
          "Entrepreneurs engaging in a hands-on business planning session during the final week of training.",
      },
      {
        type: "heading",
        level: 2,
        content: "Key Highlights of the Training",
      },
      {
        type: "paragraph",
        content:
          "The program was designed to address common challenges faced by early-stage entrepreneurs. Each module was led by industry experts with extensive experience in their respective fields. Participants particularly valued the personalized feedback sessions where they received specific guidance related to their individual business models.",
      },
      {
        type: "list",
        items: [
          "Expert-led sessions on sustainable business growth strategies with real-world case studies.",
          "Hands-on workshops on digital marketing, including social media strategy and content creation.",
          "Financial planning and cash flow management techniques specifically tailored for small businesses.",
          "Networking opportunities with industry leaders and potential investors.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Participant Success Stories",
      },
      {
        type: "paragraph",
        content:
          "Several participants have already reported significant improvements in their business operations. One local retail startup implemented the digital marketing strategies taught during the program and saw a 40% increase in online engagement within just three weeks. Another participant secured funding after refining their business pitch based on the training received.",
      },
    ],
    comments: [
      {
        id: 105,
        author: { name: "Daniel Carter", image: Avatar },
        date: "June 6, 2023",
        content:
          "This program was truly insightful! I learned so much about financial planning and have completely revamped my business model as a result. The instructors were knowledgeable and supportive throughout the entire process.",
        likes: 14,
        replies: [],
      },
      {
        id: 106,
        author: { name: "Maria Garcia", image: Avatar },
        date: "June 8, 2023",
        content:
          "When will the next session of this program be offered? I missed this one but would love to participate in the future.",
        likes: 5,
        replies: [
          {
            id: 206,
            author: { name: "Olivia Roberts", image: Avatar },
            date: "June 9, 2023",
            content:
              "Hi Maria, we're planning to run the next cohort in September. Registration will open in early August. I'll make sure to post an announcement!",
            likes: 3,
          },
        ],
      },
    ],
    relatedArticles: [
      {
        title: "How to Build a Successful Startup",
        url: "/news/6",
        image: Avatar,
        readTime: "5 min",
        excerpt:
          "A step-by-step guide on building and growing a successful startup.",
      },
      {
        title: "Funding Options for New Entrepreneurs",
        url: "/news/9",
        image: assets.Image19,
        readTime: "4 min",
        excerpt:
          "Exploring different financing options available to early-stage businesses and how to access them.",
      },
    ],
  },
  {
    id: 6,
    title: "Women in Business Summit 2023",
    lead: "A groundbreaking event empowering women entrepreneurs through mentorship, networking, and strategic insights from industry leaders and successful founders.",
    imgUrl: assets.Image20,
    mainImage: assets.Image20,
    imageCaption: "Keynote address at the Women in Business Summit 2023",
    category: "Events",
    readTime: "5 min read",
    description:
      "An inspiring summit focused on promoting women's leadership in the business world.",
    author: {
      name: "Sophia White",
      role: "Event Organizer",
      image: Avatar,
      publishDate: "May 15, 2023",
      bio: "Sophia is an events specialist with a focus on diversity and inclusion initiatives in the business sector.",
    },
    content: [
      {
        type: "paragraph",
        content:
          "The Women in Business Summit brought together aspiring and established female entrepreneurs to discuss challenges, share experiences, and explore opportunities for growth. The event attracted over 300 attendees from various industries, creating a diverse environment for meaningful discussions and connections.",
      },
      {
        type: "figure",
        image: assets.Image20,
        caption:
          "Panel discussion featuring successful women entrepreneurs sharing their journey and insights.",
      },
      {
        type: "heading",
        level: 2,
        content: "What Made This Event Special?",
      },
      {
        type: "paragraph",
        content:
          "Unlike typical business conferences, this summit focused specifically on the unique challenges and opportunities faced by women in entrepreneurship. The program balanced inspirational content with practical, actionable advice that participants could immediately apply to their businesses. The informal mentoring sessions were particularly valuable for early-stage entrepreneurs.",
      },
      {
        type: "list",
        items: [
          "Keynote speeches from women leaders in global organizations sharing their personal journeys.",
          "Interactive workshops on leadership development, accessing funding, and business expansion strategies.",
          "Dedicated mentoring sessions connecting experienced business owners with emerging entrepreneurs.",
          "Exhibition area featuring women-owned businesses and support organizations.",
        ],
      },
      {
        type: "heading",
        level: 2,
        content: "Looking Ahead",
      },
      {
        type: "paragraph",
        content:
          "Following the success of this year's summit, plans are already underway for an expanded event in 2024. The organizing committee is exploring ways to incorporate more international perspectives and create ongoing support mechanisms for participants. A quarterly networking series will launch in September to maintain the momentum created by the summit.",
      },
    ],
    comments: [
      {
        id: 106,
        author: { name: "Emily Johnson", image: Avatar },
        date: "May 16, 2023",
        content:
          "Such an empowering event! The connections I made and the insights I gained have already helped me overcome several challenges in my business. Looking forward to next year's summit and the quarterly meetups.",
        likes: 21,
        replies: [],
      },
      {
        id: 107,
        author: { name: "Priya Sharma", image: Avatar },
        date: "May 17, 2023",
        content:
          "I traveled from another city to attend this summit and it was absolutely worth it. The speaker lineup was impressive and the structured networking opportunities were incredibly valuable.",
        likes: 13,
        replies: [
          {
            id: 207,
            author: { name: "Sophia White", image: Avatar },
            date: "May 18, 2023",
            content:
              "Thank you for making the journey, Priya! We're so glad you found value in the event. We're looking at adding virtual components next year to make it more accessible for attendees from other regions.",
            likes: 4,
          },
        ],
      },
    ],
    relatedArticles: [
      {
        title: "The Rise of Women Entrepreneurs",
        url: "/news/7",
        image: Avatar,
        readTime: "6 min",
        excerpt:
          "Exploring the challenges and success stories of women entrepreneurs worldwide.",
      },
      {
        title: "Balancing Business and Personal Life",
        url: "/news/10",
        image: assets.Image18,
        readTime: "5 min",
        excerpt:
          "Strategies for maintaining work-life balance while growing a successful business.",
      },
    ],
  },
];

// Define the News type to match your expanded data structure

export const aboutIntro = [
  {
    id: 1,
    icon: assets.Icon1,
    title: "Our Core Services",
    description: [
      {
        id: 1,
        title: "Accounting & Taxation",
        contents: [
          "Accounting",
          "Bookkeeping",
          "Tax advisory & filing",
          "Staff training",
          "Business advisory",
          "Co - restructuring",
        ],
      },
      {
        id: 2,
        title: "Accounting Software",
        contents: [
          "QuickBooks",
          "Microsoft solutions",
          "Zoho Solutions",
          "SAGE & Tally",
        ],
      },
      {
        id: 3,
        title: "Training Services",
        contents: [
          "Business Accounting",
          "Tax Preparation",
          "RRA EBM",
          "Microsoft Excel, Word, Ppt",
          "Accounting Software",
          "CV & Interview Preparation",
        ],
      },
    ],
  },
  {
    id: 2,
    icon: assets.Icon,
    title: "Who We are?",
    description: `ACR-Online Accounting Services LTD is a Rwandan-based accounting firm offering outsourced services in accounting, bookkeeping, tax, and auditing for small and medium businesses. We are the first and most affordable accounting firm in Rwanda, incorporated under the Rwandan company act.`,
  },

  {
    id: 3,
    icon: assets.Icon2,
    title: "Our Strengths",
    description: `We have a team of experts, advanced accounting technology, and streamlined processes to deliver top services. Our professionals are certified in QuickBooks, Zoho, Sage, Tally, and Microsoft solutions. We hire locally in Rwanda, ensuring your financial data stays within the country.`,
  },

  {
    id: 4,
    icon: assets.Icon,
    title: "Our Philosophy",
    description: `Our philosophy is based on professionalism, honesty, integrity, and long-term relationships with clients, partners, accountants, and auditors.`,
  },
  {
    id: 5,
    icon: assets.Icon1,
    title: "Our Values",
    description: ["Honesty", "Integrity", "Professionalism", "Transparency"],
  },
  {
    id: 6,
    icon: assets.Icon2,
    title: "Our Vision",
    description: `To be the provider of business accounting and tax solutions of your choice.`,
  },
  {
    id: 7,
    icon: assets.Icon,
    title: "Our Mission",
    description: `Our mission is to deliver exceptional accounting and tax services with integrity, professionalism, and a focus on exceeding client expectations.`,
  },
];

export const ACRTeamData = [
  {
    id: 1,
    avatar: Avatar,
    names: "Frederick Muhire",
    title: "Managing Director",
    tel: "+250 787 028 385",
    email: "fmuhire@box5383.temp.domains",
    description: `
              Co-Founder of ACR with 7+ years in accounting, QuickBooks proadvisor,
              and CPA candidate. Holds a B.Sc. in accounting, pursuing a Master's in Finance. Expertise
              in Rwandan accounting, taxation, payroll, and auditing.
            `,
    social: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/johndoe",
      facebook: "https://www.facebook.com/johndoe",
    },
  },
  {
    id: 2,
    avatar: Avatar,
    names: "Jean Pierre Twizeyimana",
    title: "Chief of Technical Team",
    tel: "+250 780 859 470",
    email: "acarine@box5383.temp.domains",
    description:
      "An Expert in Accounting, Bookkeeping, Tax preparation and Declaration, a former ACR Graduate.",
    social: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/johndoe",
      facebook: "https://www.facebook.com/johndoe",
    },
  },
  {
    id: 3,
    avatar: Avatar,
    names: "Uwimbabazi Clementine",
    title: "Accountant",
    tel: "+2780 786 201 994",
    email: "uclementine@box5383.temp.domains",
    description:
      "An Expert in Accounting, Bookkeeping, Tax preparation and Declaration, a former ACR Graduate.",
    social: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/johndoe",
      facebook: "https://www.facebook.com/johndoe",
    },
  },
  {
    id: 4,
    avatar: Avatar,
    names: "Kabanda Patrick",
    title: "IT Operations Officer",
    tel: "+250 780 840 983",
    email: "kpatrick@box5383.temp.domains",
    description: `In charge of monitoring, maintaining the company's IT infrastructure, 
                  Digitalization of services provided by ACR Online Accounting services.
                `,
    social: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/johndoe",
      facebook: "https://www.facebook.com/johndoe",
    },
  },
  {
    id: 5,
    avatar: Avatar,
    names: "ISHIMWE Jonathan",
    title: "IT Officer",
    tel: "+250 780 487 876",
    email: "",
    description: "",
    social: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/johndoe",
      facebook: "https://www.facebook.com/johndoe",
    },
  },
  {
    id: 6,
    avatar: Avatar,
    names: "Lyse ISHIMWE",
    title: "Accountant",
    tel: "+250 780 859 470",
    email: "acarine@box5383.temp.domains",
    description:
      "An Expert in Accounting, Bookkeeping, Tax preparation and Declaration, a former ACR Graduate.",
    social: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/johndoe",
      facebook: "https://www.facebook.com/johndoe",
    },
  },
  {
    id: 7,
    avatar: Avatar,
    names: "Jude SIBO",
    title: "Training facilitator",
    tel: "+250 780 859 470",
    email: "acarine@box5383.temp.domains",
    description:
      "An Expert in Accounting, Bookkeeping, Tax preparation and Declaration, a former ACR Graduate.",
    social: {
      linkedin: "https://www.linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://www.instagram.com/johndoe",
      facebook: "https://www.facebook.com/johndoe",
    },
  },
];

export const CustomerData = [
  {
    id: 1,
    image: customerAssets.Retail,
    name: "Retail Shop",
    description:
      "Small and medium-sized stores selling a variety of consumer goods, including groceries, clothing, electronics, and household items.",
  },
  {
    id: 2,
    image: customerAssets.Cooperative,
    name: "Cooperative",
    description:
      "Member-owned businesses that operate for the mutual benefit of their members, often in agriculture, finance, or retail.",
  },
  {
    id: 3,
    image: customerAssets.AutoRepairGarage,
    name: "Auto-Repair Garage",
    description:
      "Businesses providing vehicle repair and maintenance services, including mechanical fixes, diagnostics, and part replacements.",
  },
  {
    id: 4,
    image: customerAssets.Transportation,
    name: "Transportation",
    description:
      "Companies offering public or private transport services, including taxis, buses, logistics, and delivery solutions.",
  },
  {
    id: 5,
    image: customerAssets.RestaurantCoffeeShop,
    name: "Restaurant/Coffee Shop",
    description:
      "Food service establishments offering meals, beverages, and snacks for dine-in or takeaway customers.",
  },
  {
    id: 6,
    image: customerAssets.Tourism,
    name: "Tourism",
    description:
      "Businesses related to travel and hospitality, including tour operators, travel agencies, and accommodation providers.",
  },
  {
    id: 7,
    image: customerAssets.SchoolBabyCareCenter,
    name: "School/Baby Care Center",
    description:
      "Educational institutions and childcare centers providing learning and care services for children and students.",
  },
  {
    id: 8,
    image: customerAssets.SalonAndSpa,
    name: "Salon and Spa",
    description:
      "Businesses offering beauty and wellness services such as hair styling, skin care, massage therapy, and relaxation treatments.",
  },
  {
    id: 9,
    image: customerAssets.Legal,
    name: "Legal",
    description:
      "Law firms and independent legal consultants providing advisory, representation, and legal documentation services.",
  },
  {
    id: 10,
    image: customerAssets.ProfessionalConsultant,
    name: "Professional Consultant",
    description:
      "Experts offering advisory and specialized services in various fields, including business, finance, IT, and management.",
  },
  {
    id: 11,
    image: customerAssets.Health,
    name: "Health Care/Pharmacy",
    description:
      "Medical service providers, including clinics, hospitals, and pharmacies, offering healthcare and pharmaceutical products.",
  },
  {
    id: 12,
    image: customerAssets.Engineering,
    name: "Engineering",
    description:
      "Firms specializing in civil, mechanical, electrical, and software engineering projects and services.",
  },
  {
    id: 13,
    image: customerAssets.Supermarket,
    name: "Supermarket",
    description:
      "Large retail stores selling a wide variety of groceries, household goods, and everyday necessities.",
  },
  {
    id: 14,
    image: customerAssets.Construction,
    name: "Construction",
    description:
      "Companies engaged in building, infrastructure development, and renovation projects for residential and commercial properties.",
  },
  {
    id: 15,
    image: customerAssets.PhotoVideography,
    name: "Photo/Videography",
    description:
      "Businesses specializing in professional photography, videography, and media production for various occasions and commercial use.",
  },
  {
    id: 16,
    image: customerAssets.RealEstate,
    name: "Real Estate",
    description:
      "Agencies and professionals dealing with property sales, rentals, and management for residential and commercial clients.",
  },
  {
    id: 17,
    image: customerAssets.Cleaning,
    name: "Cleaning Services",
    description:
      "Businesses offering professional cleaning services for homes, offices, and industrial spaces.",
  },
  {
    id: 18,
    image: customerAssets.Manufacturing,
    name: "Manufacturing",
    description:
      "Industries involved in the production and assembly of goods, including textiles, electronics, and machinery.",
  },
  {
    id: 20,
    image: customerAssets.HardwareStore,
    name: "Hardware Store",
    description:
      "Retailers selling construction materials, tools, and home improvement products for personal and professional use.",
  },
  {
    id: 21,
    image: customerAssets.FurnitureStore,
    name: "Furniture Store",
    description:
      "Shops offering furniture for residential, office, and commercial spaces, including custom-made and ready-to-assemble pieces.",
  },
  {
    id: 22,
    image: customerAssets.SpareParts,
    name: "Car and Machinery Spare Parts",
    description:
      "Retailers and wholesalers specializing in automotive and industrial machinery spare parts.",
  },
  {
    id: 23,
    image: customerAssets.BarsAndNightclubs,
    name: "Bars and Nightclubs",
    description:
      "Entertainment venues offering nightlife experiences, including music, dance, drinks, and social gatherings.",
  },
  {
    id: 24,
    image: customerAssets.GasStation,
    name: "Gas Station",
    description:
      "Fuel stations providing gasoline, diesel, and related automotive services, including convenience stores.",
  },
];

export const accountingOptions = [
  "Tax Compliance",
  "Bookkeeping",
  "Financial Reporting",
  "Payroll Management",
  "Auditing & Assurance",
  "Others",
];

export const roleOptions = [
  "Business Owner",
  "Accountant",
  "Entrepreneur",
  "Finance Manager",
  "Other",
];

export const contactData = [
  {
    iconPath:
      "M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z",
    text: "+250787028385",
  },
  {
    iconPath:
      "M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z",
    text: "info@accountants.co.rw",
  },
  {
    iconPath:
      "M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z",
    text: "Gasabo, Kimironko, 2 KG 167 St",
  },
];

export const preferredMethods = [
  { id: "radio-group-1", label: "Email", value: "email" },
  { id: "radio-group-2", label: "Phone", value: "phone" },
];

export const features = [
  {
    icon: assets.Icon,
    title: "Positive Environment",
    description:
      "We foster a supportive atmosphere where creativity thrives and every voice is valued.",
  },
  {
    icon: assets.Icon1,
    title: "Continuous Growth",
    description:
      "Regular workshops and learning opportunities to keep you at the cutting edge of tech.",
  },
  {
    icon: assets.Icon2,
    title: "Work-Life Harmony",
    description:
      "Flexible schedules and remote options to ensure you can balance work with personal life.",
  },
  {
    icon: assets.Icon,
    title: "Innovation Culture",
    description:
      "We encourage fresh ideas and provide resources to turn them into reality.",
  },
];

export const resourceData = [
  {
    id: 1,
    product: "Microsoft Word invoice Form",
    iconUrl: PiMicrosoftWordLogoFill,
    description:
      "A customizable invoice template in Microsoft Word format, ideal for creating professional invoices quickly.",
  },
  {
    id: 2,
    product: "Microsoft Excel invoice form",
    iconUrl: PiMicrosoftExcelLogoBold,
    description:
      "A flexible Excel invoice form, offering built-in formulas to help automate calculations for easy invoicing.",
  },
  {
    id: 3,
    product: "PDF invoice preview",
    iconUrl: FaFilePdf,
    description:
      "A PDF preview of an invoice, perfect for sharing finalized invoices in a universally accessible format.",
  },
];

export const eventData = [
  {
    id: 1,
    title: "Academy kick-off",
    organizer: "John Doe",
    time: "12:00 am",
    date: "2025-03-21",
    cost: 0,
    image: EventAssests.Image,
    location: "Main Conference Hall",
    category: "Education",
    gradientClass: "bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500",
    description:
      "Join us for the official kick-off of our new academy program with special guest speakers and networking opportunities.",
  },
  {
    id: 2,
    title: "ACR Academy graduation",
    organizer: "John Doe",
    time: "12:00 am",
    date: "2025-03-21",
    cost: 12.54,
    image: EventAssests.Image1,
    location: "University Auditorium",
    category: "Ceremony",
    gradientClass:
      "bg-gradient-to-br from-purple-500 via-purple-600 to-pink-500",
    description:
      "Celebrate the achievements of our graduating class with awards, speeches, and a reception following the ceremony.",
  },
  {
    id: 3,
    title: "New Product Launch",
    organizer: "John Doe",
    time: "12:00 am",
    date: "2025-03-21",
    cost: 40.65,
    image: EventAssests.Image2,
    location: "Tech Innovation Center",
    category: "Business",
    gradientClass: "bg-gradient-to-br from-green-500 via-green-600 to-teal-500",
    description:
      "Be the first to experience our revolutionary new product with hands-on demonstrations and exclusive early-bird pricing.",
  },
  {
    id: 4,
    title: "Annual Charity Gala",
    organizer: "Jane Smith",
    time: "7:00 pm",
    date: "2025-04-15",
    cost: 75.0,
    image: EventAssests.Image,
    location: "Grand Ballroom",
    category: "Fundraiser",
    gradientClass:
      "bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-500",
    description:
      "An elegant evening of dining and entertainment to raise funds for local community initiatives.",
  },
  {
    id: 5,
    title: "Tech Startup Workshop",
    organizer: "Alex Johnson",
    time: "10:00 am",
    date: "2025-03-28",
    cost: 25.0,
    image: EventAssests.Image1,
    location: "Innovation Hub",
    category: "Workshop",
    gradientClass: "bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-500",
    description:
      "Learn essential strategies for launching and growing your tech startup from industry experts.",
  },
  {
    id: 6,
    title: "Music Festival",
    organizer: "City Arts Council",
    time: "3:00 pm",
    date: "2025-05-10",
    cost: 35.5,
    image: EventAssests.Image2,
    location: "City Park Amphitheater",
    category: "Entertainment",
    gradientClass:
      "bg-gradient-to-br from-orange-500 via-orange-600 to-red-500",
    description:
      "A day of live music featuring local and national artists across multiple genres.",
  },
];

export const pricingPlans = {
  monthly: [
    {
      title: "Simple Start",
      price: "$18",
      services: [
        "Track Income and Expenses",
        "Send Custom Invoices and Quotes",
        "Connect Your Bank",
        "Track VAT and GST",
        "Insights & Reports",
        "Capture & Organize Receipts",
        "Progress Invoicing",
        "For One User + Accountant",
      ],
    },
    {
      title: "Essentials",
      price: "$27",
      services: [
        "Everything in Simple Start",
        "Manage Bills & Payments",
        "Track Employee Time",
        "Multi-Currency",
        "For Three Users + Accountant",
      ],
      highlighted: true,
    },
    {
      title: "Plus",
      price: "$37",
      services: [
        "Everything in Essentials",
        "Recurring Transactions and Bills",
        "Track Inventory",
        "Project Profitability Tracking",
        "Manage Budgets",
        "For Five Users + Accountant",
      ],
    },
  ],
  annual: [
    {
      title: "Simple Start",
      price: "$194",
      services: [
        "Track Income and Expenses",
        "Send Custom Invoices and Quotes",
        "Connect Your Bank",
        "Track VAT and GST",
        "Insights & Reports",
        "Capture & Organize Receipts",
        "Progress Invoicing",
        "For One User + Accountant",
      ],
    },
    {
      title: "Essentials",
      price: "$291",
      services: [
        "Everything in Simple Start",
        "Manage Bills & Payments",
        "Track Employee Time",
        "Multi-Currency",
        "For Three Users + Accountant",
      ],
      highlighted: true,
    },
    {
      title: "Plus",
      price: "$410",
      services: [
        "Everything in Essentials",
        "Recurring Transactions and Bills",
        "Track Inventory",
        "Project Profitability Tracking",
        "Manage Budgets",
        "For Five Users + Accountant",
      ],
    },
  ],
};

export const miclientData = {
  slides: [
    {
      title: ["Simplify Your", "Marketing, Sales", "& Delivery"],
      subtitle:
        "Close deals 3x faster with streamlined processes and automated workflows.",
      image: assets.Miclient,
      isAvalaible: true,
    },
  ],
  features: [
    {
      title: "Create",
      description:
        "Create quotes using customizable templates and save 28% of the time spent on quote creation and sharing with your customers.",
      icon: FaPencilAlt,
    },
    {
      title: "Send",
      description:
        "Effortlessly share and present sales documents via links, email, Slack, or attachments.",
      icon: FaEnvelope,
    },
    {
      title: "Track",
      description:
        "Receive instant notifications on client actions, set up automated reminders, and collaborate with customers in real-time.",
      icon: FaChartBar,
    },
    {
      title: "Close",
      description:
        "Seal the deal securely with legally-binding e-signatures and collect payments or purchase orders seamlessly.",
      icon: FaBriefcase,
    },
  ],
  plans: [
    {
      title: "Personal",
      price: "$12",
      services: [
        "Lead Management",
        "Lead Assignment and Routing",
        "De-duplication check",
        "Account and Client Management",
        "Opportunity Management",
        "Pipeline & Forecast Management",
        "Create Products & Services",
        "Proposals & Quotes Creation",
        "Proposal Pipeline",
        "Client Hub for Sales Agent & Customer",
        "Accepted Proposals",
        "E-Sign Proposal",
        "Generate Signed PDF Proposals",
        "Advanced Reporting Features",
      ],
    },
    {
      title: "Business",
      price: "$32",
      services: [
        "Everything in Personal",
        "Lead Management",
        "Lead Assignment and Routing",
        "De-duplication check",
        "Account and Client Management",
        "Opportunity Management",
        "Pipeline & Forecast Management",
        "Create Products & Services",
        "Proposals & Quotes Creation",
        "Proposal Pipeline",
        "Client Hub for Sales Agent & Customer",
        "Accepted Proposals",
        "E-Sign Proposal",
        "Generate Signed PDF Proposals",
        "Advanced Reporting Features",
      ],
      highlighted: true,
    },
    {
      title: "Enterprise",
      price: "$51",
      services: [
        "Everything in Business",
        "Lead Management",
        "Lead Assignment and Routing",
        "De-duplication check",
        "Account and Client Management",
        "Opportunity Management",
        "Pipeline & Forecast Management",
        "Create Products & Services",
        "Proposals & Quotes Creation",
        "Proposal Pipeline",
        "Client Hub for Sales Agent & Customer",
        "Accepted Proposals",
        "E-Sign Proposal",
        "Generate Signed PDF Proposals",
        "Advanced Reporting Features",
      ],
    },
  ],
  offers: [
    {
      image: assets.Lead,
      title: "Lead Management",
      description: [
        "Manage leads with our efficient Kanban Board",
        "Change lead status with a drag and drop",
        "Stay updated with complete visibility of client status",
        "Capture client activities while managing your leads",
      ],
    },
    {
      image: assets.Cpq,
      title: "CPQ (Configure- Price- Quote)",
      description: [
        "Simplified and comprehensive proposal creation process",
        "Build complex quotations within few minutes with customizable templates",
        "Configure custom quotes according to the clients",
        "Thorough visibility of data to the Stakeholders",
      ],
    },
    {
      image: assets.Client,
      title: "Client Hub",
      description: [
        "One place to collaborate with the client to accelerate deal process",
        "Share documents easily through unified client portal",
        "Reduce need for emails to track conversation.",
        "A seamless buyer-seller experience for faster closure of deals",
      ],
    },
    {
      image: assets.Contract,
      title: "Contract Manager",
      description: [
        "A sole solution to manage your documents",
        "Smooth flow of documents to relevant stakeholders",
        "Remove multiple email chain dependency for tracking",
        "Parallel flow of quotations and contracts for legal and sales leaders.",
      ],
    },
    {
      image: assets.Report,
      title: "Reporting",
      description: [
        "Robust reports with relevant data",
        "Dependency on different departments removed",
        "Get an instant view of your business performance",
        "Advanced customization to get output as per business requirement",
      ],
    },
  ],
  faqs: [
    {
      question:
        "How to transfer my Client's data from my Current CRM to MiClient?",
      answer:
        "You can use our Client Import Template to bring your client data from any CRM to MiClient. Simply download the template and add all the details of the clients in the template as per the fields mentioned. Later it can be uploaded in the software to import the data.",
    },
    {
      question:
        "How do I set permissions for the Users in my team in MiClient?",
      answer:
        "If you are the Admin of the company, you will get the access to customize the permissions for your new and existing users. You can give access related to client creation, proposal creation & management.",
    },
    {
      question: "Can I send the proposal to mi client on WhatsApp?",
      answer:
        "MiClient user can send proposal on WhatsApp to their clients just by adding the valid phone number. The client will receive the quote both on email and WhatsApp.",
    },
    {
      question: "Can I customise the proposal date and pricing table?",
      answer:
        "Yes, both proposal date and pricing table can be customized in MiClient while creating proposal.",
    },
  ],
};

export const itSolutionsData = {
  heroSlides: [
    {
      title: ["Accounting", "Workflow Setup &", "Maintenance"],
      subtitle:
        "We set up and maintain a seamless accounting workflow tailored to your business needs.",
      image: assets.AccountingWorkflow,
    },
    {
      title: ["24/7 Virtual &", "On-Site Support", "Anytime"],
      subtitle:
        "Get round-the-clock assistance from our expert team, ensuring your accounting is always in order.",
      image: assets.Support24_7,
    },
    {
      title: ["Tax Preparation", "& Compliance", "Made Easy"],
      subtitle:
        "We handle your tax preparation and ensure compliance with regulations, so you stay stress-free.",
      image: assets.TaxCompliance,
    },
  ],
  ExpectationData: [
    {
      id: 1,
      icon: assets.Icon,
      title: "Your Dedicated IT Support",
      description: [
        "24/7 IT Helpdesk support",
        "Network administration and troubleshooting",
        "System security and vulnerability management",
        "Remote assistance for system issues",
      ],
    },
    {
      id: 2,
      icon: assets.Icon1,
      title: "Your IT Solutions Options",
      description: [
        "Cloud Solutions: Scalable cloud storage and computing solutions",
        "Managed IT Services: Comprehensive IT management tailored to your needs",
        "On-site IT Support: Hands-on support for network setup, maintenance, and repairs",
        "Cybersecurity: Proactive security measures to safeguard your business data",
      ],
    },
    {
      id: 3,
      icon: assets.Icon2,
      title: "Your IT Infrastructure Setup",
      description: [
        "Network configuration and setup",
        "Data backup and recovery solutions",
        "Server installation and management",
        "Firewall setup and network security",
        "Software installation and configuration",
      ],
    },
    {
      id: 4,
      icon: assets.Icon,
      title: "Your Custom IT Consultation Process",
      description: [
        "Contact us for a free consultation or fill out the Request a Demo form",
        "Our IT consultants will assess your business needs and recommend the best solutions",
        "We provide a detailed proposal with customized IT service options tailored to your business and budget",
      ],
    },
  ],
  solutions: [
    {
      id: 1,
      imageUrl: solutionAssests.MiClient,
      name: "MiClient",
      link: "./it-solutions/miclient",
      description: `Join MiClient today to streamline your business workflow by accessing a unified platform where 
                  you can oversee your sales pipeline, generate proposals, collaborate on deal reviews, and finalize contracts with ease.
                `,
    },
    {
      id: 2,
      imageUrl: solutionAssests.Microsoft,
      name: "Microsoft",
      link: "./it-solutions/microsoft",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ratione aliquam, fugit in est ex tenetur dolor id
     voluptates architecto. Mollitia possimus facere libero cum fugiat similique obcaecati. Sapiente laborum officiis facilis odit eos officia, 
     `,
    },
    {
      id: 3,
      imageUrl: solutionAssests.QuickBooks,
      name: "Quickbooks",
      link: "./it-solutions/quickbooks",
      description: `Welcome to ACR-Online Accounting Services Ltd, your trusted QuickBooks consultant in Rwanda.
     Get expert QuickBooks configuration, training and support services from certified professionals in Rwanda.
     Our consultants can help set up and customize QuickBooks for your business needs.
                `,
    },
    {
      id: 4,
      imageUrl: solutionAssests.Zoho,
      name: "Zoho Finance",
      link: "./it-solutions/zoho-finance",
      description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ratione aliquam, fugit in est ex tenetur dolor id
     voluptates architecto. Mollitia possimus facere libero cum fugiat similique obcaecati. Sapiente laborum officiis facilis odit eos officia, 
    
                `,
    },
  ],
  servicePackages: [
    {
      title: "Basic Services",
      price: "$18",
      services: [
        "Accounts payable (bills and payments)",
        "Accounts receivables (invoices and collection)",
        "Daily General ledger maintenance",
        "Time tracking & job cost reporting",
        "Payroll processing",
        "Expense classification",
        "Sales commissions",
        "Sales and use tax filing",
        "Bank account reconciliation",
        "Balance sheet generation and review",
      ],
    },
    {
      title: "Advanced Services",
      price: "$48",
      services: [
        "Financial planning",
        "Budget forecasting",
        "Cash flow management",
        "Tax strategy and compliance",
        "Investment consulting",
      ],
      highlighted: true,
    },
    {
      title: "Monthly Financial Report Package",
      price: "$78",
      services: [
        "Custom financial reports",
        "KPI tracking",
        "Profit & Loss statements",
        "Balance sheet analysis",
        "Quarterly tax projections",
      ],
    },
  ],
};

export const outsourcingAccountingData = {
  heroSlides: [
    {
      title: ["Outsourced", "Bookkeeping &", "Accounting"],
      subtitle:
        "Reduce overhead costs and improve efficiency by outsourcing your accounting needs to our expert team.",
      image: assets.About,
    },
    {
      title: ["Payroll", "Processing &", "Management"],
      subtitle:
        "Ensure smooth payroll processing and compliance with tax regulations while saving time and resources.",
      image: assets.Report,
    },
    {
      title: ["Financial", "Reporting &", "Analysis"],
      subtitle:
        "Gain insights into your business finances with our comprehensive financial reports and data analysis.",
      image: assets.AccountingWorkflow,
    },
  ],
  expectationData: [
    {
      id: 1,
      icon: assets.Icon,
      title: "Payroll Process",
      description:
        "Our payroll process involves multiple individuals to calculate payment amounts for employees and contractors. This process ensures confidentiality and accuracy by reviewing and double-checking payment amounts. The disbursement is then prepared and distributed.",
    },
    {
      id: 2,
      icon: assets.Icon,
      title: "Accessible Reports​",
      description:
        "Our secure online portal provides convenient access to up-to-date financial data such as payroll and tax reports for you and pay Rwanda Revenue Declaration stubs and RSSB contribution for your employees.",
    },
    {
      id: 3,
      icon: assets.Icon,
      title: "Payroll Management",
      description:
        "Choose from a variety of options including various pay calendars, check delivery options, and custom reports for both you and your employees.",
    },
    {
      id: 4,
      icon: assets.Icon,
      title: "Payroll Compliance",
      description:
        "We guarantee payroll tax compliance and handle the details including Monthly Rwanda Revenue payroll tax filings, new hire reporting, and more.",
    },
  ],
  Options: [
    {
      title: "Weekly or Biweekly Payroll",
      description:
        "Easily manage payroll for your casual employees with weekly or biweekly payment schedules. This option ensures compliance with local taxation laws and provides flexibility for short-term or part-time employees, reducing administrative workload and improving financial planning.",
      buttonText: "Get it now",
    },
    {
      title: "Monthly Payroll",
      description:
        "Perfect for businesses that operate on a structured salary cycle, our monthly payroll service simplifies payment processing for full-time employees. Ensure accurate salary calculations, tax deductions, and benefits management while reducing payroll complexities.",
      buttonText: "Get it now",
    },
  ],
  servicePackages: [
    {
      title: "Monthly Tax Declaration Services",
      price: "$30",
      services: [
        "Preparation and filing of monthly tax reports",
        "VAT & sales tax calculation and submission",
        "Payroll tax processing and compliance",
        "Bank reconciliation to ensure tax accuracy",
        "Ongoing tax advisory and support",
      ],
    },
    {
      title: "Quarterly Tax Declaration Services",
      price: "$50",
      services: [
        "Quarterly tax return preparation and filing",
        "Review of financial statements for tax optimization",
        "Corporate tax compliance and documentation",
        "Expense tracking and deductions assessment",
        "Strategic consultation on tax planning",
      ],
    },
    {
      title: "Annual Tax Declaration Services",
      price: "$70",
      services: [
        "Year-end financial review and reconciliation",
        "Preparation and submission of annual tax returns",
        "Tax liability minimization strategies",
        "Assistance with audit preparation and compliance",
        "Comprehensive tax-saving recommendations",
      ],
    },
  ],
  solutions: [
    {
      id: 1,
      imageUrl: assets.AccountingWorkflow,
      name: "Financial Reporting & Analysis",
      link: "./outsourcing-accounting/financial-reporting",
      description: `Get detailed financial reports that provide insights into your business performance. We analyze your financial data, offering you the clarity needed to make informed decisions and plan for future growth.`,
    },
    {
      id: 2,
      imageUrl: assets.ProfessionalBookkeeping,
      name: "Comprehensive Bookkeeping Services",
      link: "./outsourcing-accounting/bookkeeping",
      description: `Outsource your daily bookkeeping tasks to us. We ensure all financial transactions are accurately recorded and your books are always up to date, allowing you to focus on growing your business.`,
    },
    {
      id: 3,
      imageUrl: assets.AccountingWorkflow,
      name: "Outsourced Payroll Management",
      link: "./outsourcing-accounting/payroll-management",
      description: `Streamline your payroll process with our outsourcing services. We handle everything from calculating salaries to tax deductions, ensuring compliance with labor laws and delivering timely payments to your employees.`,
    },
    {
      id: 4,
      imageUrl: assets.TaxCompliance,
      name: "Tax Preparation & Compliance",
      link: "./outsourcing-accounting/tax-preparation",
      description: `We assist in preparing your business taxes and ensuring you are compliant with local and international tax laws. Our tax experts help minimize liabilities and maximize savings while ensuring timely filing.`,
    },
    {
      id: 5,
      imageUrl: assets.FinancialAnalysis,
      name: "Financial Consulting & Strategy",
      link: "./outsourcing-accounting/financial-consulting",
      description: `Our experts provide valuable financial insights and strategic guidance. From budget planning to cost reduction, we offer tailored strategies to improve your business's financial health and profitability.`,
    },
  ],
};

export const businessConsultingData = {
  heroSlides: [
    {
      title: ["Strategic", "Business Planning"],
      subtitle:
        "Get expert financial and strategic advice to drive business growth and improve profitability.",
      image: assets.ProfessionalBookkeeping,
    },
    {
      title: ["Risk", "Management", "Solutions"],
      subtitle:
        "Identify and mitigate financial risks to ensure long-term business stability and success.",
      image: assets.BusinessTaxPreparation,
    },
    {
      title: ["Performance", "Analysis &", "Optimization"],
      subtitle:
        "Improve operational efficiency and maximize business potential with data-driven insights.",
      image: assets.ProfessionalBookkeeping,
    },
  ],
  expectationData: [
    {
      id: 1,
      icon: assets.Icon,
      title: "Expert Financial Advisory",
      description: [
        "Business growth strategies",
        "Investment & funding guidance",
        "Market analysis & expansion planning",
      ],
    },
    {
      id: 2,
      icon: assets.Icon,
      title: "Data-Driven Decision Making",
      description: [
        "Performance benchmarking",
        "Cost reduction strategies",
        "Profitability enhancement plans",
      ],
    },
    {
      id: 3,
      icon: assets.Icon,
      title: "Custom Consulting Solutions",
      description: [
        "Tailored financial plans",
        "Industry-specific advisory",
        "One-on-one coaching & training",
      ],
    },
  ],
  servicePackages: [
    {
      title: "Business Growth Package",
      price: "$50",
      services: [
        "Strategic financial planning",
        "Investment advisory",
        "Market expansion strategies",
        "Competitive analysis",
        "Revenue optimization techniques",
      ],
    },
    {
      title: "Risk Management Package",
      price: "$40",
      services: [
        "Business risk assessment",
        "Crisis management strategies",
        "Compliance & legal advisory",
        "Fraud detection & prevention",
        "Insurance & liability planning",
      ],
    },
    {
      title: "Operational Excellence Package",
      price: "$45",
      services: [
        "Process optimization & automation",
        "Performance monitoring & KPIs",
        "Supply chain & logistics efficiency",
        "Cost reduction strategies",
        "Change management & workforce training",
      ],
    },
  ],
  solutions: [
    {
      id: 1,
      imageUrl: assets.BusinessTaxPreparation,
      name: "Business Strategy Consulting",
      link: "./consulting-advisory/strategy",
      description: `Develop a clear and actionable business strategy with expert guidance. Our consultants help you set goals, analyze market trends, and create a roadmap for sustainable growth.`,
    },
    {
      id: 2,
      imageUrl: assets.FinancialAnalysis,
      name: "Financial Advisory",
      link: "./consulting-advisory/financial-advisory",
      description: `Enhance financial performance with our expert advisory services. We provide budgeting, investment planning, risk management, and financial restructuring solutions.`,
    },
    {
      id: 3,
      imageUrl: assets.Support24_7,
      name: "Operational Excellence",
      link: "./consulting-advisory/operations",
      description: `Optimize your business processes for efficiency and productivity. We identify bottlenecks, streamline workflows, and implement best practices to improve performance.`,
    },
    {
      id: 4,
      imageUrl: assets.ProfessionalBookkeeping,
      name: "Marketing & Growth Strategies",
      link: "./consulting-advisory/marketing",
      description: `Boost your brand presence and customer engagement. Our consultants develop data-driven marketing strategies, digital transformation plans, and customer acquisition models.`,
    },
    {
      id: 5,
      imageUrl: assets.Resources,
      name: "Human Resource Consulting",
      link: "./consulting-advisory/hr",
      description: `Strengthen your workforce with expert HR consulting. We assist with talent acquisition, employee engagement, performance management, and leadership development.`,
    },
  ],
};

export const trainingData = {
  heroSlides: [
    {
      title: ["Accounting Software", "Training"],
      subtitle:
        "Equip your team with hands-on training in industry-standard accounting software.",
      image: assets.Trends,
    },
    {
      title: ["Financial", "Analysis Training"],
      subtitle:
        "Learn essential financial analysis techniques to interpret business performance effectively.",
      image: assets.BusinessTaxPreparation,
    },
    {
      title: ["Tax Compliance", "Workshops"],
      subtitle:
        "Stay ahead with expert-led tax training sessions covering the latest regulations and best practices.",
      image: assets.ProfessionalBookkeeping,
    },
  ],
  expectationData: [
    {
      id: 1,
      icon: assets.Icon,
      title: "Expert-Led Training Programs",
      description: [
        "Industry professionals as trainers",
        "Hands-on practical sessions",
        "Real-world case studies",
      ],
    },
    {
      id: 2,
      icon: assets.Icon,
      title: "Flexible Learning Options",
      description: [
        "On-site corporate training",
        "Virtual training sessions",
        "Self-paced online courses",
      ],
    },
    {
      id: 3,
      icon: assets.Icon,
      title: "Certification & Skill Development",
      description: [
        "Certified training programs",
        "Skill assessments & progress tracking",
        "Career advancement opportunities",
      ],
    },
  ],
  servicePackages: [
    {
      title: "Basic Accounting Training",
      price: "$30 per session",
      services: [
        "Introduction to accounting principles",
        "Bookkeeping essentials",
        "Understanding financial statements",
        "Managing accounts payable & receivable",
        "Budgeting basics for small businesses",
      ],
    },
    {
      title: "Intermediate Accounting Training",
      price: "$40 per session",
      services: [
        "Advanced bookkeeping techniques",
        "Financial statement analysis",
        "Cash flow management strategies",
        "Introduction to tax compliance",
        "Using accounting software effectively",
      ],
    },
    {
      title: "Advanced Accounting Training",
      price: "$60 per session",
      services: [
        "Strategic financial planning",
        "Advanced tax planning & compliance",
        "Cost accounting & financial forecasting",
        "Auditing & risk management",
        "Customized financial strategies for businesses",
      ],
      highlighted: true,
    },
  ],
  solutions: [
    {
      id: 1,
      imageUrl: assets.AccountingBasics,
      name: "Accounting Basics",
      link: "./training/accounting-basics",
      description: `Learn the fundamentals of accounting, including financial statements, bookkeeping principles, and essential accounting practices for businesses.`,
    },
    {
      id: 2,
      imageUrl: assets.Quickbooks,
      name: "QuickBooks Training",
      link: "./training/quickbooks",
      description: `Master QuickBooks with expert-led training sessions. Learn how to set up, manage transactions, and generate insightful financial reports.`,
    },
    {
      id: 3,
      imageUrl: assets.TaxCompliance,
      name: "Tax Compliance & Planning",
      link: "./training/tax-compliance",
      description: `Understand tax laws, filing requirements, and strategies for minimizing tax liabilities while staying compliant with regulations.`,
    },
    {
      id: 4,
      imageUrl: assets.FinancialAnalysis,
      name: "Financial Analysis",
      link: "./training/financial-analysis",
      description: `Gain expertise in analyzing financial statements, forecasting trends, and making data-driven financial decisions for business growth.`,
    },
    {
      id: 5,
      imageUrl: assets.Service1,
      name: "Business Finance Essentials",
      link: "./training/business-finance",
      description: `Learn how to manage business finances effectively, including budgeting, cash flow management, and financial planning strategies.`,
    },
  ],
};

export const taxPreparationData = {
  heroSlides: [
    {
      title: ["Business Tax", "Preparation"],
      subtitle:
        "Ensure accurate tax filings and maximize deductions with our expert tax services.",
      image: assets.BusinessTaxPreparation,
    },
    {
      title: ["Personal Tax", "Filing & Optimization"],
      subtitle:
        "Get the best tax-saving strategies and hassle-free filing assistance.",
      image: assets.Webinars,
    },
    {
      title: ["Tax Compliance", "& Regulatory Support"],
      subtitle:
        "Stay compliant with IRS and state tax regulations while minimizing liabilities.",
      image: assets.Quickbooks,
    },
  ],
  expectationData: [
    {
      id: 1,
      icon: assets.Icon,
      title: "Comprehensive Tax Preparation",
      description: [
        "Personal & corporate tax filing",
        "Maximized deductions & credits",
        "State & federal tax returns",
      ],
    },
    {
      id: 2,
      icon: assets.Icon,
      title: "Strategic Tax Planning",
      description: [
        "Quarterly tax projections",
        "Tax liability minimization",
        "Compliance advisory",
      ],
    },
    {
      id: 3,
      icon: assets.Icon,
      title: "Audit Support & Assistance",
      description: [
        "IRS audit representation",
        "Tax issue resolution",
        "Regulatory compliance monitoring",
      ],
    },
  ],
  servicePackages: [
    {
      title: "Monthly Tax Declaration Services",
      price: "$30",
      services: [
        "Preparation and submission of monthly tax reports",
        "VAT & sales tax calculation and filing",
        "Payroll tax processing and compliance",
        "Bank reconciliation for tax accuracy",
        "Handling of tax-related inquiries and support",
      ],
    },
    {
      title: "Quarterly Tax Declaration Services",
      price: "$40",
      services: [
        "Quarterly estimated tax calculations and filings",
        "Financial review and adjustment recommendations",
        "Corporate tax compliance and submissions",
        "Expense and revenue tracking for tax efficiency",
        "Consultation on tax-saving strategies",
      ],
    },
    {
      title: "Annual Tax Declaration Services",
      price: "$50",
      services: [
        "Comprehensive year-end tax review and reconciliation",
        "Final tax return preparation and filing",
        "Detailed financial statements for tax compliance",
        "Tax liability minimization strategies",
        "Assistance with tax audits and regulatory compliance",
      ],
    },
  ],
  solutions: [
    {
      id: 1,
      imageUrl: assets.Report,
      name: "Tax Filing & Reporting",
      link: "./tax-preparation/tax-filing-reporting",
      description: `Ensure accurate and timely tax filing with our expert tax preparation services. We help you navigate complex tax regulations, ensuring compliance with federal and state laws, and avoid costly mistakes during tax season.`,
    },
    {
      id: 2,
      imageUrl: assets.BusinessTaxPreparation,
      name: "Tax Strategy & Planning",
      link: "./tax-preparation/tax-strategy-planning",
      description: `Maximize your tax savings through strategic planning. Our team provides expert guidance on tax-saving opportunities, helping you plan for the future while minimizing liabilities through tax-efficient investment strategies.`,
    },
    {
      id: 3,
      imageUrl: assets.TaxCompliance,
      name: "Business Tax Compliance",
      link: "./tax-preparation/business-tax-compliance",
      description: `Stay fully compliant with all business tax regulations. Our team ensures your business meets all necessary local, state, and federal tax requirements, reducing the risk of penalties or audits from tax authorities.`,
    },
    {
      id: 4,
      imageUrl: assets.AccountingBasics,
      name: "Tax Consultation for Entrepreneurs",
      link: "./tax-preparation/entrepreneur-tax-consultation",
      description: `For entrepreneurs and startups, we provide tailored tax advice to ensure you’re taking advantage of available deductions and credits. We guide you through the complexities of tax planning specific to new businesses.`,
    },
    {
      id: 5,
      imageUrl: assets.Support24_7,
      name: "Audit Support & Representation",
      link: "./tax-preparation/audit-support",
      description: `In the event of a tax audit, we offer support and representation to ensure your interests are protected. Our team handles communication with tax authorities and provides guidance to resolve any discrepancies or concerns.`,
    },
  ],
};

export const accountingBookkeepingData = {
  heroSlides: [
    {
      title: ["Comprehensive", "Bookkeeping &", "Financial Tracking"],
      subtitle:
        "Maintain accurate and up-to-date financial records with our professional bookkeeping solutions, ensuring seamless financial management for your business.",
      image: assets.ProfessionalBookkeeping,
    },
    {
      title: ["Detailed", "Financial Statement", "Preparation"],
      subtitle:
        "Gain deeper insights into your business performance with our precise financial reporting, helping you make informed and strategic decisions.",
      image: assets.Resources,
    },
    {
      title: ["Accounts", "Reconciliation &", "Audit"],
      subtitle:
        "Ensure financial accuracy, detect discrepancies, and stay compliant with industry regulations through our expert reconciliation and auditing services.",
      image: assets.ProfessionalBookkeeping,
    },
  ],
  expectationData: [
    {
      id: 1,
      icon: assets.Icon,
      title: "Your Dedicated Team",
      description: [
        "Full Charge Bookkeeper",
        "Accounting Manager / Controller",
        "Accounting Software Specialist",
      ],
    },
    {
      id: 2,
      icon: assets.Icon,
      title: "Your Accounting Options",
      description: [
        `Full Accrual: including prepaid expenses, accrued expenses, accrued payroll, and deferred revenue`,
        `Modified Accrual: including accounts receivable and accounts payable, banking & credit card activity, and payroll`,
        `Cash Basis: receipts and disbursements, banking & credit card activity, and payroll`,
      ],
    },
    {
      id: 3,
      icon: assets.Icon,
      title: "Your Full-Charge Bookkeeper",
      description: [
        "Vendor bills",
        "Customer invoices",
        "Bill payments",
        "Customer payments and deposits",
        "Other disbursements and withdrawals",
      ],
    },
    {
      id: 4,
      icon: assets.Icon,
      title: "Your Custom Quote Process",
      description: [
        "Call Us at +250787028385 or fill out the Request A Free Consultation form",
        "We will conduct a demo to explain our services, understand your business needs and make sure we are a good fit",
        "We provide a proposal with multiple service options, all at fixed fees, so you can choose the one right for your budget and business needs.",
      ],
    },
  ],
  servicePackages: [
    {
      title: "Essential Bookkeeping Plan",
      price: "$49",
      services: [
        "Basic bookkeeping & financial tracking",
        "Bank & credit card reconciliation",
        "Monthly financial reports",
        "Accounts receivable & payable management",
        "Expense categorization & tracking",
      ],
    },
    {
      title: "Advanced Accounting Plan",
      price: "$59",
      services: [
        "Comprehensive financial reporting",
        "Tax preparation & compliance support",
        "Dedicated accounting expert",
        "Budgeting & forecasting",
        "Payroll processing assistance",
      ],
      highlighted: true,
    },
    {
      title: "Enterprise Financial Management Plan",
      price: "$69",
      services: [
        "Financial strategy & planning",
        "Regulatory & audit compliance",
        "Cash flow analysis & optimization",
        "Multi-entity accounting support",
        "Custom financial dashboards & insights",
      ],
    },
  ],
  solutions: [
    {
      id: 1,
      imageUrl: assets.Report,
      name: "Financial Reporting",
      link: "./accounting-bookkeeping/financial-reporting",
      description: `Gain valuable insights into your business performance with accurate and detailed financial reports. We provide clear and comprehensive financial statements that help you make informed decisions and stay ahead of financial challenges.`,
    },
    {
      id: 2,
      imageUrl: assets.ProfessionalBookkeeping,
      name: "Bookkeeping Services",
      link: "./accounting-bookkeeping/bookkeeping-services",
      description: `Keep your financial records in order with professional bookkeeping services. From tracking daily transactions to reconciling accounts, we ensure accuracy and efficiency, helping you focus on growing your business.`,
    },
    {
      id: 3,
      imageUrl: assets.AccountingWorkflow,
      name: "Payroll Management",
      link: "./accounting-bookkeeping/payroll-management",
      description: `Ensure timely and accurate employee payments with our seamless payroll management services. We handle salary calculations, tax deductions, and compliance with labor laws, so you never have to worry about payroll errors.`,
    },
    {
      id: 4,
      imageUrl: assets.BusinessTaxPreparation,
      name: "Tax Preparation & Compliance",
      link: "./accounting-bookkeeping/tax-preparation",
      description: `Stay tax-compliant and minimize liabilities with expert tax preparation services. We assist with tax filing, reporting, and strategic planning, ensuring you meet all legal requirements while maximizing savings.`,
    },
    {
      id: 5,
      imageUrl: assets.AccountingBasics,
      name: "Accounting Software Setup",
      link: "./accounting-bookkeeping/accounting-software",
      description: `Streamline your accounting processes with the right software. We help businesses set up, customize, and integrate accounting solutions like QuickBooks and Xero, ensuring a smooth and efficient financial workflow.`,
    },
  ],
};

export const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    date: "January 10th, 2022 at 5:00 PM",
    location: "Starbucks",
    avatar: assets.Contact,
  },
  {
    id: 2,
    name: "Michael Foster",
    date: "January 12th, 2022 at 3:00 PM",
    location: "Tim Hortons",
    avatar: assets.Contact,
  },
  {
    id: 3,
    name: "Dries Vincent",
    date: "January 12th, 2022 at 5:00 PM",
    location: "Costa Coffee at Braehead",
    avatar: assets.Contact,
  },
  {
    id: 4,
    name: "Lindsay Walton",
    date: "January 14th, 2022 at 10:00 AM",
    location: "Silverburn",
    avatar: assets.Contact,
  },
  {
    id: 5,
    name: "Courtney Henry",
    date: "January 14th, 2022 at 12:00 PM",
    location: "The Glasgow Green",
    avatar: assets.Contact,
  },
];

export const policyData: PolicyData = {
  companyName: "Accounting.co.rw",
  companyShortName: "ACR",
  websiteUrl: "http://box5383.temp.domains/~seujlsmy/.website_83b5bbdc",
  contactPhone: "+250733010232",
  contactEmail: "info@box5383.temp.domains",
  lastUpdated: "January 2021",
  originalPosted: "December 2020",
};

export const policySections: PolicySection[] = [
  {
    id: "introduction",
    title: "Who we are",
    content: [
      `${policyData.companyName} (${policyData.companyShortName}) is committed to respecting your privacy and recognizing your need for appropriate protection and management of any personally identifiable information you share with us (the phrases "personally identifiable information" or "personal information" mean any information by which you can be identified, such as your name, address, telephone number, etc.).`,
      `The purpose of this privacy policy is to inform you of what personally identifiable information or personal information we may collect from you when you visit our web site, how we use such information, and the choices you have regarding our use of, and your ability to review and correct, the information. This policy applies only to users accessing our web site from Rwanda.`,
      `Our website address is: ${policyData.websiteUrl}`,
      `As a part of our commitment to your privacy, ${policyData.companyShortName} has agreed to (1) not share their information with other marketers; and (2) honor customers' requests not to receive mail, telephone or other solicitations from ${policyData.companyShortName}.`,
    ],
  },
  {
    id: "data-collection",
    title: "What personal data we collect and why we collect it?",
    content: [
      `In general, you can visit most of our web pages without telling us who you are or revealing any personal information about yourself. We may track the Internet domain address from which people visit us and analyze this data for trends and statistics, but individual users will remain anonymous unless you voluntarily tell us who you are.`,
      `There may be times (such as when you contact us using our Contact Us email form) at which we ask you to provide certain information about yourself, such as your name, email address, etc. Whether or not you provide such information is completely your own choice. But if you choose not to provide the information we request, you may be unable to access or use certain parts of our web site.`,
    ],
  },
  {
    id: "data-usage",
    title: "Using Information About You",
    content: [
      `We use the personally identifiable information you provide for internal purposes, such as analyzing trends and statistics, informing you of our new products, services, and offers, and providing you with information from and about ${policyData.companyShortName}.`,
      `If you have provided us with a testimonial or other feedback that contains personally identifiable information, we may use it for marketing purposes, but only with your permission.`,
      `To serve you better, we may combine information you give us online, through the phone and through the mail.`,
    ],
  },
  {
    id: "data-editing",
    title: "Editing, Updating, Correcting and Deleting Information About You",
    content: [
      `We want to communicate with you only if you want to hear from us. If you prefer not to receive information from us please let us know by calling us at ${policyData.contactPhone} or emailing ${policyData.contactEmail}.`,
      `When sending email please be sure to include your email address, full name, and specifically what information you do not want to receive. If you would like to update or correct your email address, street address or other personal information with us please contact us the same way.`,
    ],
  },
  {
    id: "third-party-links",
    title: "Links to Third Party Sites",
    content: [
      `Our web sites may contain links to web sites operated and maintained by third parties, over which we have no control. Privacy policies on such linked sites may be different from our privacy policy.`,
      `You access such linked sites at your own risk. You should always read the privacy policy of a linked site before disclosing any personal information on such a site.`,
      `When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.`,
      `An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.`,
    ],
  },
  {
    id: "media",
    title: "Media",
    content: `If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.`,
  },
  {
    id: "cookies",
    title: "Contact forms and Cookies",
    content: [
      `If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.`,
      `If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.`,
      `When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.`,
      `If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.`,
    ],
  },
  {
    id: "embedded-content",
    title: "Embedded content from other websites",
    content: [
      `Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.`,
      `These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.`,
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    content: `${policyData.companyShortName} does use Display Advertising tools provided by Google Analytics for the purpose of Demographics and Interest Reporting. Using the Ads Settings, users can opt-out of Google Analytics for Display Advertising. Additionally, users can also use Google Analytics' currently available opt-outs for the web.`,
  },
  {
    id: "data-sharing",
    title: "Who we share your data with",
    content: `If you request a password reset, your IP address will be included in the reset email.`,
  },
  {
    id: "data-retention",
    title: "How long we retain your data?",
    content: [
      `If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.`,
      `For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.`,
    ],
  },
  {
    id: "user-rights",
    title: "What rights you have over your data?",
    content: `If you have an account on this site or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.`,
  },
  {
    id: "data-destination",
    title: "Where we send your data?",
    content: `Visitor comments may be checked through an automated spam detection service.`,
  },
  {
    id: "policy-changes",
    title: "Policy Changes",
    content: `If we decide to change our privacy policy in whole or in part, we will inform you by posting a notice on our web site. Those changes will go into effect on the date posted in the notice. The new policy will apply to all current and past users of our web site and will replace any prior policies that are inconsistent. This policy was originally posted in ${policyData.originalPosted}. It was most recently updated in ${policyData.lastUpdated}.`,
  },
  {
    id: "feedback",
    title: "Your Feedback",
    content: `To help us improve our privacy policy and practice, please give us your feedback. Call us on ${policyData.contactPhone} or send us an email.`,
  },
];

export const faqs = [
  {
    question: "What services does ACR provide?",
    answer:
      "ACR specializes in software development, IT consulting, cloud computing, cybersecurity, and enterprise solutions tailored to businesses of all sizes.",
  },
  {
    question: "How can I contact ACR for support or inquiries?",
    answer:
      "You can reach us via our website contact form, email at support@acr.com, or call our support team at +123 456 7890.",
  },
  {
    question: "Does ACR offer custom software development?",
    answer:
      "Yes, we provide custom software development solutions designed to meet your business needs with scalability and efficiency in mind.",
  },
  {
    question: "Can I request a demo of ACR’s products?",
    answer:
      "Yes! You can request a demo by filling out the demo request form on our website, and our team will schedule a session with you.",
  },
  {
    question: "What industries does ACR serve?",
    answer:
      "We work with various industries, including healthcare, finance, logistics, retail, and manufacturing, delivering cutting-edge digital solutions.",
  },
  {
    question: "How secure are ACR's software solutions?",
    answer:
      "We prioritize security by implementing industry-leading encryption, access controls, and compliance with data protection regulations.",
  },
  {
    question: "Does ACR provide ongoing support and maintenance?",
    answer:
      "Yes, we offer post-launch support and maintenance to ensure your systems remain updated and perform optimally.",
  },
];