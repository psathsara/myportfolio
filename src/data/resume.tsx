import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pasindu Sathsara",
  initials: "PS",
  url: "https://pasindusathsara.netlify.app",
  location: "Sri Lanka",
  locationLink: "https://www.google.com/maps/place/sri+lanka",
  description:
    "AI Automation Engineer and Fullstack Developer with hands-on experience in workflow automation, RPA development, and scalable web applications.",
  summary:
    "AI Automation Engineer and Fullstack Developer with hands-on experience in workflow automation, RPA development, and scalable web applications. Recently completed BICT Honours Degree with industry experience in automation-driven marketing systems and banking operations. Skilled in building end-to-end automation pipelines using n8n and currently developing RPA solutions with UiPath. Founder of Pazzy, developing AI-powered SaaS solutions including ERP systems, POS systems, and marketing automation platforms. Passionate about optimizing business processes through intelligent automation and system integration.",
  avatarUrl: "/me.jpg",
  skills: [
    "Java",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Python",
    "React.js",
    "Next.js",
    "React Native",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "REST API",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "n8n",
    "UiPath",
    "Workflow Automation",
    "AWS",
    "Google Cloud Platform",
    "Docker",
    "Git",
    "Postman"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "pasindusgkmp@gmail.com",
    tel: "+94 703179882",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/psathsara",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/pasindusgkmp",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:pasindusgkmp@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Pazzy",
      href: "#",
      badges: [],
      location: "Sri Lanka",
      title: "Founder",
      logoUrl: "/pazzy.jpg",
      start: "Jan 2026",
      end: "Present",
      description:
        "Building marketing campaigns for small businesses, software solutions, AI automation solutions, and providing consultation services. Developing full-stack applications and automation workflows to support business growth and digital transformation.",
    },
    {
      company: "Xleron",
      href: "https://xleron.io",
      badges: ["Industrial Training"],
      location: "Sri Lanka",
      title: "AI Automation Engineer",
      logoUrl: "/xleron.jpg",
      start: "Mar 2025",
      end: "Aug 2025",
      description:
        "Worked at Xleron company, gaining hands-on experience in workflow automation and system integration while delivering technology-driven solutions for company marketing operations.",
    },
    {
      company: "Bank of Ceylon",
      href: "#",
      badges: ["Trainee"],
      location: "Sri Lanka",
      title: "Trainee",
      logoUrl: "",
      start: "Feb 2020",
      end: "Aug 2020",
      description:
        "Gained practical exposure to banking operations, digital systems, and data handling processes, with an understanding of secure financial workflows and customer service operations.",
    },
  ],
  education: [
    {
      school: "Vavuniya campus of the University of Jaffna",
      href: "https://www.jfn.ac.lk",
      degree: "Bachelor of Information Communication Technology (Honours)",
      logoUrl: "",
      start: "2021",
      end: "2026",
    },
    {
      school: "GCE A/L (Advanced Level)",
      href: "#",
      degree: "Technology Stream",
      logoUrl: "",
      start: "2018",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Emails scrape & campaign automation platform",
      href: "#",
      dates: "Internship Project",
      active: true,
      description:
        "Developed an automated email campaign system with workflow automation and web scraping to extract data and send targeted emails.",
      technologies: [
        "Advanced n8n workflow",
        "Next.js",
        "shadcn ui"
      ],
      links: [
        {
          type: "Web",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Sentiment Analysis Web Application",
      href: "#",
      dates: "",
      active: true,
      description:
        "Built a machine learning-based web app to classify and predict sentiment from text data. Worked on data processing, model building, evaluation, and deployment.",
      technologies: [
        "Python",
        "Flask"
      ],
      links: [
        {
          type: "Web",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI-Assisted Cancer Care Platform",
      href: "#",
      dates: "",
      active: true,
      description:
        "Developed an AI-powered assistant to analyze patient data, identify screening gaps, and provide personalized cancer care recommendations.",
      technologies: [
        "React.js",
        "Gemini AI",
        "Privy",
        "Drizzle"
      ],
      links: [
        {
          type: "Git Link",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Order Management System",
      href: "#",
      dates: "Client Project - Ongoing",
      active: true,
      description:
        "Developing a fullstack Order Management System with features for order processing, inventory management, reseller tracking, sales monitoring, and contact management using Next.js and Supabase. Implemented user and admin roles with secure authentication, and deployed a live demo on Vercel. Designed scalable backend services and integrated automation workflows to optimize business operations.",
      technologies: [
        "Next.js",
        "Supabase"
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Chief Coordinator - University LEO Club",
      dates: "",
      location: "University of Jaffna, Vavuniya Campus",
      description:
        "Organized and coordinated community service projects and university events while collaborating with cross-functional teams to execute social and leadership initiatives.",
      image: "",
      links: [],
    },
    {
      title: "Main Photographer - Technological Faculty Media Club",
      dates: "",
      location: "University of Jaffna, Vavuniya Campus",
      description:
        "Led photography and visual content creation for events and promotions while supporting digital media campaigns and event coordination activities.",
      image: "",
      links: [],
    },
    {
      title: "Student Member - IEEE",
      dates: "",
      location: "",
      description:
        "Engaged in technical communities and stayed updated with industry trends and emerging technologies.",
      image: "",
      links: [],
    },
  ],
} as const;
