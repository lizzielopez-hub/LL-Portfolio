import { motion } from 'motion/react';
import { ExternalLink, Briefcase, Award, Heart, User } from 'lucide-react';
import { ReactNode } from 'react';

// Common Section Wrapper
export function Section({ id, title, subtitle, children, icon: Icon }: {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  icon: any;
}) {
  return (
    <section id={id} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 border border-brand-purple/15 flex items-center justify-center text-brand-purple">
            <Icon size={22} />
          </div>
          <div>
            <h2 className="text-4xl font-display font-bold tracking-tight">{title}</h2>
            <p className="text-brand-muted uppercase tracking-widest text-[10px] font-bold mt-1">{subtitle}</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

// Experience Card
export function Card({ title, company, period, description, tags, link }: {
  title: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
  link?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grunge-card p-8 group"
    >
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-display font-bold mb-1">{title}</h3>
          <p className="text-brand-purple text-sm font-medium">{company}</p>
        </div>
        <div className="px-4 py-1 rounded-full bg-brand-purple/8 border border-brand-purple/15 text-brand-muted text-xs font-mono shrink-0">
          {period}
        </div>
      </div>

      <p className="text-brand-muted leading-relaxed mb-8 text-sm font-light">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags?.map(tag => (
          <span key={tag} className="grunge-tag px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-muted">
            {tag}
          </span>
        ))}
        {link && (
          <a href={link} className="ml-auto flex items-center gap-2 text-xs text-brand-purple hover:text-white transition-colors">
            Credentials <ExternalLink size={12} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function PortfolioSections() {
  return (
    <>
      {/* About */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 border border-brand-purple/15 flex items-center justify-center text-brand-purple">
              <User size={22} />
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold tracking-tight">About Me</h2>
              <p className="text-brand-muted uppercase tracking-widest text-[10px] font-bold mt-1">Background & Interests</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-zinc-300 leading-relaxed text-lg font-light">
                I'm a UGA graduating student majoring in <span className="text-brand-purple font-medium">Cognitive Science and Psychology</span>. Throughout my studies I enjoyed the theoretical side of AI and Cognitive Science, and I am hoping to break into the research side of Artificial Intelligence.
              </p>
              <p className="text-brand-muted leading-relaxed font-light">
                Outside of school, I enjoy creating content and staying involved on campus through student organizations, where I also volunteer and help with <span className="text-zinc-400">"Health for Homeless"</span> and <span className="text-zinc-400">"Latido"</span> — an organization for health awareness and minority communities. These experiences have helped me build creativity and critical thinking whilst feeling more confident stepping outside my comfort zone.
              </p>
              <p className="text-brand-muted leading-relaxed font-light">
                As a bilingual and first-generation college student, I care deeply about growth and staying open to new opportunities. Right now I'm exploring analytical and research-related paths while working on gaining more hands-on experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="grunge-card p-8 space-y-6"
            >
              {[
                { label: 'University',  value: 'University of Georgia' },
                { label: 'Majors',      value: 'Cognitive Science & Psychology' },
                { label: 'Focus',       value: 'AI Research & Cognitive Systems' },
                { label: 'Languages',   value: 'English & Spanish (Bilingual)' },
                { label: 'Status',      value: 'Graduating — Open to Opportunities' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1 pb-5 border-b border-brand-purple/10 last:border-0 last:pb-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">{label}</span>
                  <span className="text-zinc-200 font-light">{value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <Section
        id="experience"
        title="Professional Evolution"
        subtitle="Work & Certifications"
        icon={Briefcase}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title="Netflix IMDb Score Prediction"
            company="CSCI 3360E — University of Georgia"
            period="Summer 2025"
            description="Collaborated on a data science research project analyzing Netflix content metadata to predict IMDb scores. Contributed to exploratory data analysis, data preprocessing, and the training and evaluation of multiple regression models. Compared model performance using standard metrics to identify the most effective approach for predicting viewer ratings."
            tags={['Machine Learning', 'Python', 'Regression', 'EDA', 'Random Forest', 'Data Science']}
          />
          <Card
            title="F1 Driver Performance Predictor"
            company="Personal Project"
            period="2025"
            description="Built a predictive tool using historical F1 data — including lap times, race finishing positions, grid positions, and qualifying performance — to forecast how drivers are likely to perform at a given track. Used R for statistical modeling, applying techniques such as weighted regression, time series analysis, and ranking aggregation to surface meaningful patterns across sessions. Built the user interface in Python using Streamlit, with pandas and NumPy for data wrangling and scikit-learn for model implementation."
            tags={['R', 'Python', 'Streamlit', 'pandas', 'scikit-learn', 'Time Series', 'Regression']}
          />
        </div>
      </Section>

      {/* Academic Background */}
      <Section
        id="education"
        title="Foundations"
        subtitle="Academic & Awards"
        icon={Award}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title="Bachelor of Arts in Cognitive Science"
            company="UGA Institute for Artificial Intelligence"
            period="2021 — May 2026"
            description="Focused on the theoretical foundations of cognition, artificial intelligence, and human-computer interaction. Developed a strong interest in AI research and the study of cognitive systems."
            tags={['Cognitive Science', 'AI Theory', 'Research']}
          />
          <Card
            title="Bachelor of Science in Psychology"
            company="University of Georgia"
            period="2021 — May 2026"
            description="Explored human behavior, mental processes, and research methodologies. Applied psychological frameworks to understand cognition, decision-making, and individual differences."
            tags={['Psychology', 'Research Methods', 'Behavior']}
          />
        </div>
      </Section>

      {/* Community & Volunteering */}
      <Section
        id="community"
        title="Social Impact"
        subtitle="Community & Mentoring"
        icon={Heart}
      >
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Social Media Chair",
              org: "Latido UGA",
              desc: "Contributed to the planning and execution of campus events, including a blood pressure screening that engaged students. Managed social media content and promotional materials to increase awareness and participation in health-focused initiatives. Supported outreach efforts through campus events and collaborated with the executive board on organization development and branding."
            },
            {
              title: "Member & Volunteer",
              org: "Health for Homeless",
              desc: "Participated in volunteer efforts focused on supporting individuals experiencing homelessness. I helped assemble supply bags with first aid items and other essentials, contributing to community outreach initiatives aimed at improving access to basic health and hygiene resources. This experience strengthened my awareness of community needs and the importance of service."
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grunge-card p-8 group"
            >
              <h3 className="text-xl font-display font-bold mb-2 group-hover:text-brand-purple transition-colors duration-300">{item.title}</h3>
              <p className="text-brand-purple text-[10px] font-bold uppercase tracking-widest mb-4">{item.org}</p>
              <p className="text-brand-muted text-sm font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
