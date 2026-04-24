import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Pasindu Sathsara",
  initials: "PP",
  url: "https://pasindusathsara.me",
  location: "Sri Lanka",
  locationLink: "https://www.google.com/maps/place/sri+lanka",
  description:
    "Software Engineer | Startup Founder at Pazzy | Full-Stack Developer | AI/ML & Automation Specialist | Building innovative solutions with cutting-edge technologies.",
  summary:
    "I’m Pasindu Sathsara, a Software Engineering undergraduate focused on building scalable web applications and AI-powered automation systems. I specialize in full-stack development using Next.js and PostgreSQL, and workflow automation using tools like n8n and Make.com.I have hands-on experience developing admin panels, campaign automation platforms, LMS systems, and data-driven dashboards. My work often combines modern UI frameworks with backend automation to streamline real business processes.I’m especially interested in AI integration, intelligent systems, and productivity-focused software solutions, and I continuously build and ship practical projects to expand my technical depth.",
  avatarUrl: "/me.jpg",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Redux",
    "Three.js",
    "GSAP",
    "Tailwind CSS",
    "Docker",
    "Git",
    "GitHub",
    "OpenAI API",
    "GPT-4",
    "AI/ML Integration",
    "n8n",
    "Make.com",
    "Workflow Automation",
    "Full-Stack Development",
    "UI/UX Design",
    "RESTful APIs",
    "Cloud Deployment",
    "Open Source",
    "Google Cloud",
    "Microsoft Azure",
    "Heroku",
    "CI/CD",
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
        url: "https://www.linkedin.com/in/psathsara",
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
      company: "Pazzy Software Solutions",
      href: "https://pazzy.io",
      badges: ["Founder"],
      location: "Sri Lanka",
      title: "Startup Founder / Software Engineer",
      logoUrl: "/pazzy.jpg",
      start: "2025",
      end: "Present",
      description:
        "Founding and leading Pazzy Software Solutions, focusing on innovative software solutions and automation technologies. Driving product development, technical strategy, and business growth. Specializing in AI automation solutions using n8n and Make.com to streamline operations and improve efficiency.",
    },
    {
      company: "Xleron",
      href: "https://xleron.io",
      badges: ["Internship"],
      location: "Sri Lanka",
      title: "Software Engineer Intern",
      logoUrl: "/xleron.jpg",
      start: "January 2025",
      end: "October 2025",
      description:
        "Completed a 6-month internship as a Automation Engineer Intern at Xleron, gaining hands-on experience in AI/ML solutions, IoT development, and full-stack software engineering. Worked on innovative projects involving intelligent systems and automation technologies.",
    },
  ],
  education: [
    {
      school: "Vavuniya Campus of the University of Jaffna",
      href: "https://www.jfn.ac.lk",
      degree: "B.Sc. (Hons.) in Software Engineering",
      logoUrl: "/jaffna.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Obbegoda Central College",
      href: "#",
      degree: "GCE Advanced Level",
      logoUrl: "/school.png",
      start: "2017",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Kaidenz Clothing - Full-Stack E-commerce Platform",
      href: "/",
      dates: "2024",
      active: true,
      description:
        "Built a complete full-stack e-commerce platform from the ground up with cutting-edge technology. Features lightning-fast responsive user experience with Next.js frontend, enterprise-grade Java EE6 backend architecture, and secure Stripe payment integration. This project showcases end-to-end development expertise from crafting intuitive user interfaces to implementing robust backend systems and secure payment processing.",
      technologies: [
        "Next.js",
        "Java EE6",
        "Stripe",
        "Full-Stack",
        "E-commerce",
        "Payment Integration",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://kaidenz-clothing.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/kanchana404/kaidenz-clothing",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/posts/kavitha-kanchana_%F0%9D%97%9D%F0%9D%98%82%F0%9D%98%80%F0%9D%98%81-%F0%9D%97%B9%F0%9D%97%AE%F0%9D%98%82%F0%9D%97%BB%F0%9D%97%B0%F0%9D%97%B5%F0%9D%97%B2%F0%9D%97%B1-%F0%9D%97%AE-%F0%9D%97%B3%F0%9D%98%82%F0%9D%97%B9%F0%9D%97%B9-%F0%9D%98%80%F0%9D%98%81%F0%9D%97%AE%F0%9D%97%B0%F0%9D%97%B8-activity-7361400455844818945-zRlb",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "GSAP Animation Project",
      href: "https://lnkd.in/gt4MJYJg",
      dates: "2024",
      active: true,
      description:
        "My inaugural GSAP animation endeavor! Delved into GSAP, crafting a web project adorned with seamless animations. Witnessing how animations breathe vitality into a website is truly remarkable. Built with React, Vite, GSAP, and Tailwind CSS to create engaging and smooth user experiences.",
      technologies: [
        "React",
        "Vite",
        "GSAP",
        "Tailwind CSS",
        "Animation",
        "Front-End",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://lnkd.in/gt4MJYJg",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/kanchana404/gsap-project",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/posts/kavitha-kanchana_webdevelopment-gsap-react-activity-7346758173195714561-aEH8",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Google Business API Integration",
      href: "https://github.com/kanchana404/Google-bussiness-api-Get-reviews-and-Reply-reviews",
      dates: "2024",
      active: true,
      description:
        "Built a complete solution for Google Business API integration in Next.js that handles OAuth authentication, review fetching and replies, multi-location management, and token handling. Features secure authentication, real-time review management, direct reply system, and advanced filtering capabilities. Ready to use with step-by-step setup guide.",
      technologies: [
        "Next.js 14",
        "TypeScript",
        "Google My Business API",
        "OAuth",
        "API Integration",
        "Review Management",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/kanchana404/Google-bussiness-api-Get-reviews-and-Reply-reviews",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/posts/kavitha-kanchana_nextjs-googlebusinessapi-react-activity-7343672817554493440-gYXK",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Fit For Hire - AI-Powered HR Platform",
      href: "https://github.com/kanchana404/Fit-For-Hire",
      dates: "2024",
      active: true,
      description:
        "MicroSaaS web application built for the JS Mastery Hackathon by Adrian Hajdin and JavaScript Mastery. This AI-powered platform replaces traditional HR managers by analyzing resumes and matching candidates with the best job opportunities available. Employers can post job openings, and candidates can easily apply - all seamlessly managed with AI technology.",
      technologies: [
        "AI/ML",
        "HR Tech",
        "OpenAI",
        "MicroSaaS",
        "Job Matching",
        "Resume Analysis",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/kanchana404/Fit-For-Hire",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/posts/kavitha-kanchana_ai-hrtech-openai-activity-7279273378153119744-K9M4",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI-Powered Document Summarizer",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Built an AI-driven application leveraging OpenAI's GPT-4 to transform online documents into user-friendly summaries. Developed a React and Redux based web app that showcases ability to integrate cutting-edge AI APIs into practical solutions. Demonstrates initiative in exploring advanced technologies to solve real-world problems.",
      technologies: [
        "React",
        "Redux",
        "OpenAI API",
        "GPT-4",
        "AI Integration",
        "Document Processing",
      ],
      links: [
        {
          type: "View Project",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "n8n RAG Agent with Web UI",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Built an intelligent RAG (Retrieval Augmented Generation) agent using n8n platform. Developed custom web interface for seamless user interaction and AI-powered automation workflows. Advanced AI/ML integration for intelligent data processing and response generation.",
      technologies: [
        "n8n",
        "AI/ML",
        "RAG",
        "Web Development",
        "Automation",
        "Intelligent Systems",
      ],
      links: [
        {
          type: "View Project",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Interactive Travel Web Application",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Created an interactive travel web application featuring a 3D solar system simulation using Three.js. Combines creative design with technical depth, showcasing ability to build visually rich front-end experiences with advanced 3D graphics and animations.",
      technologies: [
        "React",
        "Three.js",
        "3D Graphics",
        "Interactive Design",
        "Web Development",
        "Animation",
      ],
      links: [
        {
          type: "View Project",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI-Enabled SaaS Image Editing Application",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Developed a comprehensive SaaS image editing application complete with payment and credit systems. Features AI-powered image processing capabilities and demonstrates full-stack development skills including payment integration and user management.",
      technologies: [
        "Next.js",
        "AI/ML",
        "Payment Integration",
        "SaaS",
        "Image Processing",
        "Full-Stack",
      ],
      links: [
        {
          type: "View Project",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "IDEALIZE 2025 Web Development Competition - Finals",
      dates: "2025",
      location: "University of Moratuwa, Sri Lanka",
      description:
        "Thrilled to share that our team KSA Labs was selected for the finals of IDEALIZE 2025 Web Development Competition, organized by AIESEC in University of Moratuwa. Among 900+ applicants, we made it to the final stage and received recognition for building a real-world enterprise web system that goes beyond just a competition project. Our solution is already in the market with real customers. We developed Socyads, a platform that connects social media content creators (influencers) with advertisers. Features include AI-powered influencer-brand matching, multi-platform support (YouTube, Instagram, TikTok, etc.), dashboards for creators & advertisers, secure escrow payments & real-time messaging, and advanced analytics for campaign performance.",
      image: "",
      links: [
        {
          title: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/kalanasandakelum_idealize2025-webdevelopment-startupjourney-activity-7379773403580370944-fGWJ",
        },
      ],
    },
    {
      title: "Generation ALPHA Tech Community",
      dates: "2023 - Present",
      location: "Sri Lanka",
      description:
        "Active member of Generation ALPHA, a Sri Lankan tech community initiative connecting undergraduates with the industry and startup ecosystem. Engaged in networking with peers and industry professionals, reflecting enthusiasm for continuous learning and community collaboration in the tech sector.",
      image: "",
      links: [
        {
          title: "LinkedIn",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/in/kavitha-kanchana",
        },
      ],
    },
    {
      title: "Open Source Contributions",
      dates: "2023 - Present",
      location: "Global",
      description:
        "Avid open-source enthusiast with contributions to various projects. GitHub profile highlights status as 'Open Source Contributor' alongside work on micro SaaS projects. Demonstrated commitment to continuous learning and sharing knowledge within developer communities.",
      image: "",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/kanchana404",
        },
      ],
    },
  ],
} as const;
