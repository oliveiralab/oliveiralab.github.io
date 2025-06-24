
import React from 'react';
import Section from '../components/ui/Section';
import { PERSONAL_NAME, PERSONAL_TAGLINE } from '../constants';
import { teamMembers } from '../data/teamData'; 

const AboutPage: React.FC = () => {
  const principalInvestigator = teamMembers.find(member => member.id === '1'); 

  return (
    <div>
      <Section
        title={`About ${PERSONAL_NAME}`}
        subtitle={PERSONAL_TAGLINE}
        className="bg-gradient-to-br from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark !py-20 text-white"
        titleClassName="!text-white"
        containerClassName="max-w-4xl mx-auto text-center"
      >
        <p className="text-xl leading-relaxed dark:text-gray-200">
          I am an Agronomist, Extension Educator, and Data Scientist specializing in the application of cutting-edge technologies to enhance agricultural productivity, profitability, and sustainability. My work focuses on co-created, data-driven solutions that address real-world challenges faced by farmers and rural communities.
        </p>
      </Section>

      <Section title="My Vision & Mission">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-heading font-semibold text-primary dark:text-primary-text-dark mb-3">My Vision</h3>
            <p className="text-gray-700 dark:text-dark-text-secondary leading-relaxed mb-6">
              To be at the forefront of developing and disseminating practical, AI-driven precision agriculture systems and extension strategies that empower farmers, enhance environmental sustainability, and contribute to resilient global food systems.
            </p>
            <h3 className="text-2xl font-heading font-semibold text-secondary dark:text-secondary-text-dark mb-3">My Mission</h3>
            <p className="text-gray-700 dark:text-dark-text-secondary leading-relaxed">
              My mission is to conduct impactful research and extension activities by:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-dark-text-secondary leading-relaxed mt-2 space-y-1">
              <li>Developing and leading recognized programs in Precision Agriculture, focusing on Remote Sensing, UAVs, Advanced Machinery, Robotics, Applied AI, and Data Science.</li>
              <li>Integrating innovative technologies like Large Language Models (LLMs) into the extension toolbox to streamline communication and improve decision support.</li>
              <li>Building strong, collaborative partnerships with specialists, county agents, stakeholders, industry, and producers.</li>
              <li>Actively listening to partner needs to co-develop effective, data-driven solutions and educational programs.</li>
              <li>Securing diverse funding to support innovative research, development, and extension efforts that benefit the agricultural community.</li>
              <li>Educating and mentoring the next generation of agricultural leaders and scientists.</li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <img 
              src="https://picsum.photos/seed/aboutVisionAgriTech/600/400" 
              alt="Collage of agricultural technology and data" 
              className="rounded-lg shadow-xl object-cover w-full" 
            />
          </div>
        </div>
      </Section>

      <Section title="Core Professional Values" className="bg-gray-100 dark:bg-dark-bg">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { icon: '💡', title: 'Innovation & Practicality', desc: 'Continuously seeking novel yet practical solutions to complex agricultural challenges using cutting-edge technologies.' },
            { icon: '🤝', title: 'Collaboration & Extension', desc: 'Believing in teamwork and partnerships to translate research into actionable knowledge for producers and stakeholders.' },
            { icon: '🌍', title: 'Sustainability & Stewardship', desc: 'Committed to research and practices that support long-term environmental health, economic viability, and resilient farming systems.' },
            { icon: '📊', title: 'Data-Driven Impact', desc: 'Striving for excellence in research and extension that leads to measurable, positive outcomes for the agricultural community through data-informed decisions.' },
          ].map(value => (
            <div key={value.title} className="p-6 bg-white dark:bg-dark-surface rounded-lg shadow-md">
              <div className="text-4xl mb-3">{value.icon}</div>
              <h3 className="text-xl font-heading font-semibold text-primary dark:text-primary-text-dark mb-2">{value.title}</h3>
              <p className="text-gray-600 dark:text-dark-text-secondary text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {principalInvestigator && (
        <Section title={`Meet ${principalInvestigator.name}`}>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <img 
                src={principalInvestigator.imageUrl} 
                alt={principalInvestigator.name} 
                className="rounded-lg shadow-xl object-cover w-full mb-4 md:mb-0" 
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-heading font-semibold text-primary dark:text-primary-text-dark mb-2">{principalInvestigator.name}</h3>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">{principalInvestigator.role}</p>
              <div className="text-gray-700 dark:text-dark-text-secondary leading-relaxed whitespace-pre-line text-sm space-y-3">
                {principalInvestigator.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {principalInvestigator.interests && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 dark:text-dark-text-primary mb-2">Key Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {principalInvestigator.interests.map(interest => (
                      <span key={interest} className="bg-secondary dark:bg-secondary-dark text-white px-3 py-1 text-xs rounded-full shadow-sm">{interest}</span>
                    ))}
                  </div>
                </div>
              )}
                 <div className="mt-6 space-x-3">
                    {principalInvestigator.email && <a href={`mailto:${principalInvestigator.email}`} className="text-sm text-accent dark:text-accent-text-dark hover:underline">Email</a>}
                    {principalInvestigator.linkedin && <a href={principalInvestigator.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-accent dark:text-accent-text-dark hover:underline">LinkedIn</a>}
                    {principalInvestigator.scholar && <a href={principalInvestigator.scholar} target="_blank" rel="noopener noreferrer" className="text-sm text-accent dark:text-accent-text-dark hover:underline">Google Scholar</a>}
                    {principalInvestigator.github && <a href={principalInvestigator.github} target="_blank" rel="noopener noreferrer" className="text-sm text-accent dark:text-accent-text-dark hover:underline">GitHub</a>}
                    {principalInvestigator.orcid && <a href={principalInvestigator.orcid} target="_blank" rel="noopener noreferrer" className="text-sm text-accent dark:text-accent-text-dark hover:underline">ORCID</a>}
                 </div>
            </div>
          </div>
        </Section>
      )}

      <Section title="My Approach to Research & Extension" className="bg-gray-100 dark:bg-dark-bg">
        <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-dark-text-secondary leading-relaxed">
          <p className="mb-4">
            My approach is rooted in a commitment to practical, impactful research and extension. I integrate my expertise in agronomy, data science, and agricultural technology to:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Identify critical challenges and opportunities in precision and digital agriculture through stakeholder engagement.</li>
            <li>Design and conduct robust on-farm research and trials in direct collaboration with producers and industry partners.</li>
            <li>Utilize advanced tools including AI, machine learning, remote sensing (proximal, aerial, orbital), geospatial analysis, and UAVs.</li>
            <li>Develop and evaluate innovative practices, decision-support tools, and educational materials.</li>
            <li>Disseminate findings widely through extension publications, workshops, field days, digital platforms, and peer-reviewed academic journals.</li>
            <li>Foster the adoption of profitable, sustainable, and resilient agricultural technologies and practices.</li>
            <li>Promote data-driven decision making and increase digital literacy among agricultural professionals and youth.</li>
          </ol>
          <p className="mt-4">
            I am committed to principles of open science where appropriate and aim to translate complex data into actionable insights that empower the agricultural community.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;