
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { PERSONAL_TAGLINE, PERSONAL_NAME } from '../constants';
import { publications } from '../data/publicationData'; // Import publications
import { teamMembers } from '../data/teamData';
import { Publication } from '../types';

const HomePage: React.FC = () => {
  // Sort publications by year descending, then take the newest 6
  const latestPublications = [...publications]
    .sort((a, b) => b.year - a.year) // Primary sort by year descending
    .slice(0, 6);

  const principalInvestigator = teamMembers.find(member => member.id === '1');

  const HeroSection: React.FC = () => (
    <div className="relative bg-gradient-to-r from-green-600 via-teal-500 to-blue-500 dark:bg-gradient-to-br dark:from-gray-900 dark:via-dark-bg dark:to-black text-white pt-20 md:pt-24 pb-10 md:pb-12 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-10"
        style={{
          backgroundImage: `url('/images/hero_background.png')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6">
          {PERSONAL_NAME}
        </h1>
        <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto">
          {PERSONAL_TAGLINE}
        </p>
        <div className="space-x-4">
          <Button to="/code" variant="accent" size="lg">Explore My Work</Button> {/* Updated link to /code */}
          <Button to="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary dark:hover:text-primary-text-dark">Learn More About Me</Button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <HeroSection />

      <Section title="My Mission & Approach" subtitle="Leveraging data science, AI, and agronomic expertise to drive innovation in precision agriculture and empower rural communities through impactful extension.">
        <div className="max-w-3xl mx-auto text-center text-lg text-gray-700 dark:text-dark-text-secondary leading-relaxed">
          <p className="mb-4">
            As an Agronomist, Extension Educator, and Data Scientist, I am dedicated to advancing agriculture through cutting-edge research and practical application. My work focuses on co-created, data-driven solutions that enhance productivity, profitability, and sustainability for farmers.
          </p>
          <p className="mb-4">
            I specialize in integrating innovative technologies like Artificial Intelligence (AI), Machine Learning, Remote Sensing, and Large Language Models (LLMs) into the agricultural toolbox. This approach aims to streamline communication, improve decision support, foster climate resilience, enhance soil health, and support the next generation of agricultural leaders.
          </p>
           <p>
            My commitment involves building strong partnerships, actively listening to stakeholder needs, developing robust solutions, rigorously evaluating their performance, and delivering results that empower confident, informed decision-making in the agricultural sector.
          </p>
        </div>
      </Section>
      
      <Section title="Recent Publications" className="bg-gray-100 dark:bg-dark-bg" subtitle="Showcasing my latest contributions to agricultural science and technology.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPublications.map((pub: Publication) => (
            <Card key={pub.id} className="flex flex-col" hoverEffect>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-heading font-semibold text-primary dark:text-primary-text-dark mb-2 h-20 overflow-hidden">{pub.title}</h3>
                <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-1 truncate">
                  {pub.authors.join(', ')}
                </p>
                <p className="text-sm italic text-gray-500 dark:text-gray-400 mb-4">
                  {pub.journal} ({pub.year})
                </p>
                <div className="mt-auto"> {/* Pushes button to the bottom */}
                  <Button to={`/publications#${pub.id}`} variant="secondary" size="sm" className="w-full">Read More</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        {publications.length > 6 && (
            <div className="text-center mt-12">
                <Button to="/publications" variant="primary" size="md">View All Publications</Button>
            </div>
        )}
      </Section>

      {principalInvestigator && (
        <Section title={`About ${principalInvestigator.name.split(' ')[0]}`} subtitle="The driving force behind this work.">
           <div className="max-w-xl mx-auto">
              <Card key={principalInvestigator.id} className="text-center" hoverEffect>
                  <img src={principalInvestigator.imageUrl} alt={principalInvestigator.name} className="w-32 h-32 rounded-full mx-auto mt-6 mb-4 object-cover" />
                  <div className="p-6">
                      <h3 className="text-lg font-heading font-semibold text-primary dark:text-primary-text-dark">{principalInvestigator.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{principalInvestigator.role}</p>
                      <Button to={`/team#${principalInvestigator.id}`} variant="outline" size="sm">View Full Profile</Button>
                  </div>
              </Card>
          </div>
          <div className="text-center mt-12">
              <Button to="/about" variant="primary">More About Me</Button>
          </div>
        </Section>
      )}

      <Section title="My Code & Resources" className="bg-gray-100 dark:bg-dark-bg" subtitle="Explore shared code and resources to advance the field.">
        <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-dark-text-secondary mb-6">
                I believe in sharing knowledge and tools to advance the field. You can find some of my open-source projects and resources on GitHub and explore my applications.
            </p>
            <div className="space-x-0 space-y-4 sm:space-x-4 sm:space-y-0">
                <Button 
                    to="/code"
                    variant="primary"
                    size="lg"
                    className="bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500"
                >
                    Explore My Code
                </Button>
            </div>
        </div>
      </Section>


      <Section title="Collaborate With Me" subtitle="Interested in partnering on research, extension, or AI development?">
        <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-dark-text-secondary mb-6">
                I am always open to collaborations with passionate individuals, research institutions, and industry partners. If you are interested in AI for sustainable agriculture, precision farming, data-driven extension, or have a project idea, I'd love to hear from you.
            </p>
            <Button to="/contact" variant="accent" size="lg">Get In Touch</Button>
        </div>
      </Section>

    </div>
  );
};

export default HomePage;
