import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Craig",
  lastName: "Putzstuck",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Analytics & Engineering | Full Stack Data Analyst",
  avatar: "/images/avatar.jpg",
  email: "putzstuck@gmail.com",
  location: "US/Eastern", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about data pipelines, analytics, and the tools I use to build them.
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
  description: `Portfolio of ${person.name}: ${person.role}`,
  headline: <>Data pipelines, dashboards, and forecasting models</>,
  featured: {
    display: true,
    title: <>Featured project: <strong className="ml-4">MoTec Telemetry Python Dashboard</strong></>,
    href: "/work/engineered-python-dashboard",
  },
  subline: (
    <>
      I'm Craig. I work in data analytics and engineering at Mishimoto, building pipelines, dashboards, and forecasting models.
      {/* <Logo icon={false} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/> */}
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
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
        I build data pipelines at Mishimoto, a performance aftermarket brand that designs and engineers parts for car enthusiasts. That covers six ad, analytics, and ecommerce sources into Snowflake, the Tableau dashboards and sales forecasting built on them, and catalog data for 4,100+ SKUs.
        <br /><br />
        Before that I freelanced in data and web development, and before that I managed warehouse operations, which is where I first got hooked on what good data could fix. I'm finishing an M.S. in Data Science at Eastern University alongside all of it.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Mishimoto",
        timeframe: "Oct 2025 - Present",
        role: "Full Stack Data Analyst",
        achievements: [
          <>
            Own data ingestion from Google Ads, Microsoft Ads, Meta Ads, GA4, Magento, and Matomo into Snowflake through n8n flows, Snowpipe, and a GA4 export via BigQuery on GCP, covering 5M+ GA4 rows and 6M+ Matomo visits.
          </>,
          <>
            Wrote a ridge regression model that set year-one unit forecasts for 45 new products (25 radiators, 20 transmission coolers), used to plan production, orders, and pricing.
          </>,
          <>
            Build and maintain 8 Tableau dashboards for marketing, operations, and leadership, including a peak-sales dashboard with order data current within 15 minutes instead of an hour or more.
          </>,
          <>
            Moving transformations from Matillion to Snowflake Dynamic Tables, with the goal of retiring a five-figure annual subscription.
          </>,
          <>
            Connected Claude to Metabase through MCP so other staff can build full dashboards just by prompting Claude.
          </>,
          <>
            Raised the company's SEMA Data Co-op rating from Bronze to Platinum, the top tier, by bringing catalog data for 4,100+ SKUs to 97.6% completeness.
          </>,
          <>
            Help build the in-house PIM (Vue.js, Quasar, Meilisearch, PocketBase) replacing PartsHub, which cuts per-SKU data entry from about an hour to under 20 minutes.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance",
        timeframe: "2021 - 2025",
        role: "Data Analyst and Full Stack Developer",
        achievements: [
          <>
            Built websites, Shopify stores, product databases, and automated reporting for small businesses, mostly on the MERN stack with R and Python.
          </>,
          <>
            Also handled branding work for clients: logos, color palettes, product photography, and print design.
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
        timeframe: "May 2020 - 2021",
        role: "Warehouse Operations Manager",
        achievements: [
          <>
            Managed inventory for 10,000+ SKUs and planned a 12,000 sq ft warehouse relocation that cut average order fulfillment from 1 hour to 30 minutes.
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
        description: <>M.S. in Data Science (expected May 2027)</>,
      },
      {
        name: "Colorado State University",
        description: <>B.S. in Management Information Systems and Business Analytics</>,
      },
      {
        name: "University of Central Florida",
        description: <>Certificate in Full Stack Web Development</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Snowflake & SQL",
        description: <>Data lake and warehouse design, Snowpipe ingestion, and Dynamic Tables, plus BigQuery on GCP.</>,
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
        title: "n8n & Matillion",
        description: <>Pipelines and automations that move data from APIs and SFTP into Snowflake and out to other teams.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Tableau & Metabase",
        description: <>Dashboards for marketing, operations, and leadership, built on the warehouse tables I maintain.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Python & R",
        description: <>Forecasting and regression models, plus the scripts that keep the data clean.</>,
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
      {
        title: "Vue.js & Quasar",
        description: <>Internal tools like the PIM catalog, backed by PocketBase and Meilisearch.</>,
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
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about data and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Data and development projects by ${person.name}`,
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