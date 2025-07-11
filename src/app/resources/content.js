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
  headline: <>From Raw Data to Real Impact: Analytics, AI, and Visualization</>,
  featured: {
    display: true,
    title: <>Featured project: <strong className="ml-4">MoTec Telemetry Python Dashboard</strong></>,
    href: "/work/engineered-python-dashboard",
  },
  subline: (
    <>
      I'm Craig, a data science practitioner using Python, R, and visualization to make insights actionable—on dashboards, in code, and sometimes on the racetrack.
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
        I'm a passionate data science practitioner with a foundation in business analytics and full stack web development. My work blends technical skill with storytelling—using tools like Python, R, SQL, and React to turn complex data into clear, actionable insights. I'm particularly interested in applying machine learning, statistical modeling, and real-time analytics to dynamic, real-world challenges. Lately, that's included building dashboards for motorsports telemetry, predictive models for racing outcomes, and AI-powered interfaces for image and language data. While I don't come from a traditional racing background, I've been around it my whole life—from my first job at the Richard Petty Driving Experience to my current exploration of NASCAR and iRacing data. That hands-on curiosity drives how I learn, build, and grow. Whether I'm modeling strategy, parsing telemetry, or designing intuitive interfaces, I aim to build data products that inform, inspire, and perform.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance Contracting",
        timeframe: "2022 - Present",
        role: "Data Analyst, Full Stack Developer",
        achievements: [
          <>
            Led end-to-end development of data science solutions and full-stack web applications, with a strong focus on analytics, predictive modeling, and dashboard creation. Applied Python, SQL, and R to extract, clean, and analyze complex datasets, enabling actionable insights and reducing manual reporting time by over 60% across multiple projects. Designed and deployed interactive data visualizations using tools like Dash, Plotly, and Tableau, empowering clients to make faster, data-informed decisions.
          </>,
          <>
            Developed and maintained scalable back-end systems with PostgreSQL and MongoDB, while architecting reusable React components to streamline development and boost application performance. Integrated secure authorization protocols, built dynamic APIs, and implemented real-time telemetry and business performance analytics. Partnered with stakeholders to align on product goals and delivered solutions that increased client retention by 25% and improved reporting accuracy by 40%.
          </>,
          <>
            Applied core data science methods—including regression, classification, and exploratory data analysis—to solve real-world business problems, from marketing performance to racing telemetry. Used version control, structured documentation, and agile project management to lead over 20 successful client initiatives. Continuously seek opportunities to bridge business strategy with machine learning, simulation data, and applied analytics for measurable impact.
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
        description: <>M.S. in Data Science | Exp. 2027</>,
      },
      {
        name: "Colorado State University",
        description: <>B.S. in MIS & Business Analytics | 2025</>,
      },
      {
        name: "University of Central Florida",
        description: <>Certificate in MERN Full Stack Web Development | 2022</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
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
        title: "Python",
        description: <>From scripts to insights. Python powers analysis and machine learning.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/tech-skills/cover-04.png",
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
