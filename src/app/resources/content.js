import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Craig",
  lastName: "Putzstuck",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Science & Strategy, Full Stack Dev",
  avatar: "/images/avatar.jpg",
  email: "craig.putzstuck@kokorolabs.tech",
  location: "US/Eastern", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", ], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/argounova",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/CraigPutzstuck",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Empowering Data Informed Decisions</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">React + MongoDB Web App</strong></>,
    href: "/work/building-web-apps-with-mongoose-and-axios",
  },
  subline: (
    <>
      I'm Craig, an analytics-driven specialist who transforms complex data challenges into clean, actionable insights for meaningful outcomes.
      {/* <Logo icon={false} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/> */}
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Passionate data enthusiast with a strong foundation in full stack web development. Fascinated with how technology can uncover insights and drive informed decision making. I aim to deepen my understanding of statistical modeling, machine learning algorithms, and data visualization techniques. I'm particularly interested in applying these tools to real-world problems, such as predictive analytics, natural language processing, and AI-powered solutions. My background in web development provides me with a unique perspective on data-driven applications. Proficient in languages like Python and R, as well as front-end technologies like React. This enables me to not only analyze data but also create interactive and user-friendly data visualizations and dashboards.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kokoro Labs",
        timeframe: "2022 - Present",
        role: "Data Analyst, Full Stack Developer",
        achievements: [
          <>
            Engineered Python-based dashboards and MVPs 55% faster, boosting client acceptance by 28%.
            Architected reusable React components, doubling full-stack app scalability and efficiency. Cut
            client reporting time by 60% with interactive dashboards using Tableau, SQL, and GA. Upgraded
            web solutions for 5+ businesses, raising site engagement by 40% via responsive design and e-commerce.
          </>,
          <>
            Deployed end-to-end web applications, handling both front-end interfaces and back-end logic,
            utilized reusable components and streamlined data architecture to improve development speed
            by 35% and reduce client onboarding time by nearly 30%. Integrated secure authorization flows,
            implemented encryption, and managed both relational (PostgreSQL) and non-relational
            (MongoDB) databases. Collaborated directly with clients and teammates to deliver scalable,
            secure solutions in fast-paced sprints.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Westshore Home",
        timeframe: "2020 - 2022",
        role: "Warehouse Operations and Data Manager",
        achievements: [
          <>
            Integrated ERP systems and inventory tracking tools to streamline workflows and reduce discrepancies by over 55%. Leveraged data
            analysis to optimize stock levels, improve fulfillment speed by 25%, and support real-time
            decision-making resulting in fewer stock outs and increased client satisfaction.
          </>,
          <>
            Orchestrated cross-functional warehouse operations, managed logistics, vendor coordination, and comprehensive teams while implementing process improvements
            through technology- driven solutions.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Eastern University",
        description: <>M.S. in Data Science / MBA Dual Degree | Exp. 2027</>,
      },
      {
        name: "Colorado State University",
        description: <>B.S. in MIS & Business Analytics | 2025</>,
      },
      {
        name: "University of Central Florida",
        description: <>Certificate in MERN full stack web development | 2022</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Next.js & React",
        description: <>Developing next gen web applications with Next.js + React + MongoDB.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/tech-skills/cover-01.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "SQL & RDBMS",
        description: <>Architecting efficient and accurate relational database management systems.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/tech-skills/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "R & SAS",
        description: <>Analyzing the past, predicting the future. Complex data to clear insights.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/tech-skills/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
