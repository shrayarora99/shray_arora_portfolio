import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Section = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className="text-3xl font-bold mb-6 text-blue-400 border-b border-blue-400 pb-2">{title}</h2>
    {children}
  </motion.section>
)

const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-t-lg ${
      active ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
    } hover:bg-blue-400 transition-colors`}
  >
    {children}
  </button>
)

export default function ImprovedPortfolio() {
  const [activeTab, setActiveTab] = useState('experience')

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <main className="max-w-4xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Shray Arora</h1>
          <p className="text-xl text-gray-300">
            Business Analyst | MS in Information Systems '24 | Product Management | SQL | Technology & Real Estate Enthusiast
          </p>
        </motion.header>

        <Section title="About">
          <p className="text-gray-300 text-lg leading-relaxed">
            I am an MS in Information Systems graduate with a proven track record of transforming complex data into actionable insights that drive operational efficiency and support strategic decision-making. My expertise in SQL, Python, Tableau, and Power BI enables me to develop innovative, data-driven solutions that consistently deliver measurable business results. In my most recent role, I spearheaded the launch of a cutting-edge real estate platform, boosting user adoption by 25% and enhancing customer satisfaction by 15%. My strong foundation in Agile methodologies, Risk Management, and Product Development allows me to navigate intricate business challenges and consistently deliver high-impact projects on time and within scope.
          </p>
        </Section>

        <Section title="Career Highlights">
          <div className="flex space-x-2 mb-6">
            <TabButton active={activeTab === 'experience'} onClick={() => setActiveTab('experience')}>
              Experience
            </TabButton>
            <TabButton active={activeTab === 'projects'} onClick={() => setActiveTab('projects')}>
              Projects
            </TabButton>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            {activeTab === 'experience' && (
              <div>
                {[
                  {
                    title: "Information Technology Business Analyst",
                    company: "Vish Consulting Services, Inc",
                    period: "August 2024 - Present",
                    description: [
                      "Delivered impactful insights and optimized processes for healthcare and technology clients, aligning projects with strategic goals and boosting operational efficiency by 20%.",
                      "Leveraged SQL and Python for data-driven analysis, improving resource allocation by 15%, and developed Power BI dashboards providing real-time KPI insights to senior management.",
                      "Conducted in-depth analysis of healthcare and tech operations, identifying key inefficiencies that reduced operational hours by 150 per month and enhanced project outcomes.",
                      "Led Agile sprint management across four cross-functional teams, achieving 95% on-time project completion and increasing overall project delivery speed by 20%.",
                      "Crafted detailed use cases and business process documentation, reducing inter-team miscommunication by 25% and ensuring alignment with business objectives.",
                      "Presented comprehensive system upgrade analysis to senior leadership, facilitating successful implementation of new technology across two departments and driving growth strategies."
                    ]
                  },
                  {
                    title: "Project Manager - Agile, Marketing, VC, Analytics",
                    company: "CUNY Startups",
                    period: "December 2023 - June 2024",
                    description: [
                      "Spearheaded the development of a SaaS product from concept to market launch, focusing on product-market fit and startup strategies, resulting in a 25% increase in projected revenue.",
                      "Managed data analytics, stakeholder engagement, and Agile workflows, ensuring the product exceeded business and customer expectations while attracting significant investor interest.",
                      "Delivered compelling product strategy presentations and performance metrics to investors, refining pitches to align with growth objectives and securing additional funding.",
                      "Executed comprehensive financial modeling, competitive benchmarking, and go-to-market strategy, driving product growth and attracting key investors.",
                      "Orchestrated Agile teams across engineering, marketing, and sales, ensuring seamless alignment with customer needs and overarching business goals.",
                      "Utilized SQL, Python, and Tableau to track and analyze key performance indicators, guiding data-driven decisions for internal teams and investors."
                    ]
                  },
                  {
                    title: "Real Estate Project Manager, Agile",
                    company: "Blackstone LaunchPad at UTEP",
                    period: "December 2022 - December 2023",
                    description: [
                      "Led the development and launch of 'Estate-Empire,' an innovative real estate rental platform, driving a 25% increase in user acceptance within the first quarter.",
                      "Gathered and documented comprehensive requirements through user stories, interviews, and elicitation sessions, ensuring perfect alignment with business objectives.",
                      "Implemented Agile methodologies, resulting in a 40% improvement in project scheduling efficiency and a 30% boost in customer satisfaction.",
                      "Managed cross-functional teams using Jira, ensuring timely delivery of high-impact projects and maintaining consistent progress tracking.",
                      "Conducted in-depth market analysis using Generative AI and SQL, identifying critical market gaps and informing targeted customer engagement strategies.",
                      "Produced key deliverables including BRDs, mockups, wireframes, and MVPs, contributing to a 30% increase in proposal win rates."
                    ]
                  },
                  {
                    title: "Business Analyst",
                    company: "R.K Arora Associates",
                    period: "August 2022 - August 2023",
                    description: [
                      "Leveraged Google Analytics, VLOOKUP, Pivot Tables, and Excel Macros to extract and analyze business data, identifying cost-saving opportunities that enhanced conversion rates by 20%.",
                      "Conducted comprehensive market segmentation and competitive analysis using SQL, Python, and Tableau, leading to a 25% increase in marketing ROI.",
                      "Improved customer purchase prediction accuracy by 20% through advanced clustering, regression analysis, and predictive modeling techniques using Tableau and Excel.",
                      "Developed data-driven business requirement documents (BRDs) and proposals, increasing stakeholder approval rates by 30% with interactive dashboards that clearly communicated key business metrics."
                    ]
                  },
                  {
                    title: "Operations Analyst",
                    company: "Cafe Delhi Heights",
                    period: "November 2019 - December 2020",
                    description: [
                      "Optimized inventory management through data-driven strategies, resulting in a 15% increase in turnover and a 10% reduction in excess stock.",
                      "Utilized Power BI and Tableau to visualize sales and financial metrics, significantly improving decision-making processes for perishable food items.",
                      "Implemented Lean Six Sigma initiatives that drove a 15% boost in operational efficiency while reducing costs and waste by 10%.",
                      "Facilitated effective cross-departmental communication, reducing miscommunications by 30% and fostering stronger collaboration across teams."
                    ]
                  },
                  {
                    title: "Business Analyst Intern, Real Estate",
                    company: "Anant Raj Limited",
                    period: "December 2018 - November 2019",
                    description: [
                      "Spearheaded analysis of the Real Estate Regulatory Act (RERA) to assess its impact on consumer behavior, employing logit choice models to study preferences and providing data-driven recommendations that influenced business strategy and compliance measures.",
                      "Conducted comprehensive valuation assessments for commercial, industrial, and institutional land uses using Analytical Hierarchy Process (AHP) and Analytical Network Process (ANP), supporting strategic investment decisions.",
                      "Performed in-depth cost-benefit analysis and financial assessments for three large-scale real estate projects, mitigating risks and aligning outcomes with long-term business objectives."
                    ]
                  }
                ].map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6"
                  >
                    <h3 className="text-xl font-semibold text-blue-400">{job.title}</h3>
                    <p className="text-gray-300">{job.company}</p>
                    <p className="text-sm text-gray-400 mb-2">{job.period}</p>
                    <ul className="list-disc list-inside text-gray-300">
                      {job.description.map((item, i) => (
                        <li key={i} className="mb-1">{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                {[
                  {
                    title: "Major City Tours Digital Platform",
                    period: "November 2023 - May 2024",
                    description: "Led the end-to-end development of an innovative travel booking platform, revolutionizing city excursion planning and booking.",
                    technologies: ["Project Management", "System Design", "Agile", "Data Analysis"],
                    details: [
                      "Managed project planning, system design, and implementation, ensuring alignment with business goals and user needs.",
                      "Designed data flow diagrams and entity-relationship models, creating a seamless user experience.",
                      "Implemented Agile methodologies, improving project scheduling efficiency by 40% and customer satisfaction by 30%.",
                      "Developed and maintained comprehensive reports on user activity and platform performance, guiding strategic decisions."
                    ]
                  },
                  {
                    title: "Exploratory Data Analysis (EDA) on Global Layoffs Dataset",
                    period: "January 2024 - March 2024",
                    description: "Conducted an in-depth EDA on a global layoffs dataset, uncovering critical trends and insights to inform business decisions.",
                    technologies: ["SQL", "Python", "Tableau", "Data Analysis"],
                    details: [
                      "Performed advanced SQL queries to identify outliers, trends, and correlations in layoff data across various industries and countries.",
                      "Utilized Common Table Expressions (CTEs) and window functions to calculate rolling totals and rank companies by layoffs.",
                      "Generated visualizations to effectively communicate findings, enhancing stakeholder understanding of layoff trends.",
                      "Provided actionable insights that could inform strategic decisions in hiring, retention, and industry focus."
                    ]
                  },
                  {
                    title: "SQL Data Analysis for Digital Music Store",
                    period: "February 2024 - March 2024",
                    description: "Performed comprehensive SQL analysis on a digital music store's data to uncover business insights and growth opportunities.",
                    technologies: ["PostgreSQL", "PgAdmin4", "Data Analysis", "Business Intelligence"],
                    details: [
                      "Developed a range of SQL queries from basic to advanced, addressing specific business questions and generating insightful reports.",
                      "Analyzed customer spending patterns, genre popularity, and sales performance by location.",
                      "Identified top-performing products, customers, and geographical markets to inform marketing and inventory decisions.",
                      "Created comprehensive reports presenting findings on customer behavior, music trends, and revenue opportunities."
                    ]
                  },
                  {
                    title: "Trends in Artificial Intelligence – In-Depth Analysis",
                    period: "July 2023 - August 2023",
                    description: "Authored a comprehensive report exploring the latest advancements and challenges in the field of AI, covering various sectors and applications.",
                    technologies: ["AI", "Deep Learning", "NLP", "Healthcare AI"],
                    details: [
                      "Analyzed significant advancements in deep learning, computer vision, and natural language processing.",
                      "Explored AI's transformative impact on healthcare, including accurate diagnoses and drug discovery.",
                      "Addressed critical ethical considerations and data privacy issues in AI development and deployment.",
                      "Investigated emerging trends such as AI in quantum computing and the development of Artificial General Intelligence (AGI)."
                    ]
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6"
                  >
                    <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{project.period}</p>
                    <p className="text-gray-300 mb-2">{project.description}</p>
                    <div className="flex flex-wrap mb-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-sm mr-2 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="list-disc list-inside text-gray-300">
                      {project.details.map((detail, i) => (
                        <li key={i} className="mb-1">{detail}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </Section>

        <Section title="Education">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Zicklin School of Business, Baruch College, The City University Of New York</h3>
              <p className="text-gray-300">Master of Science, Information Systems - Data Analytics</p>
              <p className="text-sm text-gray-400">August 2022 - May 2024</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Jagannath International Management School, Vasant Kunj</h3>
              <p className="text-gray-300">Bachelor of Business Administration - BBA, Business Administration, Management and Operations</p>
              <p className="text-sm text-gray-400">August 2018 - August 2021</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Delhi Public School - R. K. Puram</h3>
              <p className="text-sm text-gray-400">2002 - 2018</p>
            </div>
          </div>
        </Section>

        <Section title="Skills">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Data Analysis & Visualization",
              "SQL",
              "Python",
              "Tableau",
              "Power BI",
              "Excel (Advanced: Power Query, Pivot Tables)",
              "Project Management",
              "Jira",
              "Agile (Scrum/Kanban)",
              "Stakeholder Management",
              "Risk Management",
              "Product Management",
              "Roadmapping",
              "Go-to-Market Strategy",
              "PLM",
              "Figma",
              "Wireframing",
              "Business Analysis",
              "Requirement Gathering",
              "Gap Analysis",
              "Market Research",
              "Data Modeling",
              "MS Visio",
              "Lucidchart",
              "Change Management",
              "BRD - Business Requirement Document"
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="bg-gray-800 rounded-lg p-3 text-center text-gray-300 hover:bg-gray-700 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </Section>

        <Section title="Certifications">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Agile Project Management with Jira</li>
            <li>Cloud: 3 Advanced Topics</li>
            <li>Cognizant - Artificial Intelligence Job Simulation</li>
            <li>Power BI A-Z: Hands-On Power BI Training For Data Science!</li>
            <li>Certified SQL Developer</li>
            <li>Learn Python Programming Masterclass</li>
          </ul>
        </Section>

        <Section title="Contact">
          <div className="flex flex-col items-center">
            <p className="text-gray-300 mb-4 text-center">
              If you're seeking a data-driven Business Analyst with a proven track record of delivering impactful solutions and driving innovation, I'd be delighted to connect and explore how I can contribute to your organization's success.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:shrayarora99@outlook.com"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/shrayarora99"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}