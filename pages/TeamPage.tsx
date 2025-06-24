
import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { teamMembers } from '../data/teamData';
import { TeamMember } from '../types';
import { PERSONAL_NAME } from '../constants';

// Icon definitions
const EmailIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GoogleScholarIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg"
    alt="Google Scholar logo"
    className={className}
  />
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const OrcidIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <img
    src="https://orcid.filecamp.com/static/thumbs/42DBWh3MuwolJCUX-thumb.png"
    alt="ORCID logo"
    className={className}
  />
);

const EducationIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
);


const ProfileCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <Card className="p-6 md:p-8" id={member.id}>
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
        <img 
          src={member.imageUrl} 
          alt={member.name} 
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-6 md:mb-0 shadow-xl flex-shrink-0 border-4 border-white dark:border-dark-surface"
        />
        <div className="text-center md:text-left flex-grow">
          <h2 className="text-3xl font-heading font-bold text-primary dark:text-primary-text-dark mb-1">{member.name}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>
          <div className="flex space-x-4 justify-center md:justify-start mb-6">
            {member.email && <a href={`mailto:${member.email}`} className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`Email ${member.name}`} title="Email"><EmailIcon className="h-6 w-6"/></a>}
            {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`${member.name} LinkedIn Profile`} title="LinkedIn"><LinkedInIcon className="h-6 w-6"/></a>}
            {member.scholar && <a href={member.scholar} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`${member.name} Google Scholar Profile`} title="Google Scholar"><GoogleScholarIcon className="h-6 w-6"/></a>}
            {member.github && <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`${member.name} GitHub Profile`} title="GitHub"><GitHubIcon className="h-6 w-6"/></a>}
            {member.orcid && <a href={member.orcid} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`${member.name} ORCID Profile`} title="ORCID"><OrcidIcon className="h-6 w-6"/></a>}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t dark:border-dark-border">
        <h3 className="text-2xl font-heading font-semibold text-gray-800 dark:text-dark-text-primary mb-3">About Me</h3>
        <div className="text-gray-700 dark:text-dark-text-secondary leading-relaxed whitespace-pre-line space-y-3 text-sm">
           {member.bio.split('\n\n').map((paragraph, index) => (
             <p key={index}>{paragraph}</p>
           ))}
        </div>
      </div>

      {member.interests && member.interests.length > 0 && (
        <div className="mt-8 pt-6 border-t dark:border-dark-border">
          <h3 className="text-2xl font-heading font-semibold text-gray-800 dark:text-dark-text-primary mb-4">Areas of Expertise</h3>
          <div className="flex flex-wrap gap-2">
            {member.interests.map(interest => (
              <span key={interest} className="bg-secondary-light dark:bg-secondary text-white px-3 py-1 text-sm rounded-full shadow-sm">{interest}</span>
            ))}
          </div>
        </div>
      )}
      
      {/* Education Section */}
      <div className="mt-8 pt-6 border-t dark:border-dark-border">
        <h3 className="text-2xl font-heading font-semibold text-gray-800 dark:text-dark-text-primary mb-4 flex items-center">
            <EducationIcon className="h-6 w-6 mr-3 text-primary dark:text-primary-text-dark" /> Education
        </h3>
        <ul className="space-y-4">
            <li className="pl-2">
                <p className="font-semibold text-gray-700 dark:text-dark-text-secondary">Ph.D. in Agronomy (Crop Production)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">São Paulo State University, Brazil • 2017 – 2021</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Dissertation: Forecast and estimation of cultivation variables using remote sensing levels and forms and machine learning techniques.</p>
            </li>
            <li className="pl-2">
                <p className="font-semibold text-gray-700 dark:text-dark-text-secondary">Master of Science in Agronomy (Crop Production)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">São Paulo State University, Brazil • 2016 – 2017</p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Thesis: Prediction models of corn productivity by NDVI in spacing arrangements.</p>
            </li>
            <li className="pl-2">
                <p className="font-semibold text-gray-700 dark:text-dark-text-secondary">Agronomic Engineering</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Federal Rural University of The Amazon, Brazil • 2011 – 2016</p>
            </li>
        </ul>
      </div>
    </Card>
  );
};


const TeamPage: React.FC = () => { // Page can be renamed to ProfilePage if NavLink is also updated
  const principalInvestigator = teamMembers.find(member => member.id === '1');

  return (
    <Section title={`${PERSONAL_NAME} - Profile`} subtitle="Agronomist, Extension Educator, and Data Scientist passionate about leveraging technology for sustainable agriculture.">
      {principalInvestigator ? (
        <ProfileCard member={principalInvestigator} />
      ) : (
         <p className="text-center text-gray-600 dark:text-dark-text-secondary">Profile information is currently unavailable. Please check back soon.</p>
      )}

      <div className="mt-12 text-center bg-gray-100 dark:bg-dark-surface-alt p-8 rounded-lg shadow">
        <h3 className="text-2xl font-heading font-semibold text-primary dark:text-primary-text-dark mb-4">Interested in Collaboration or Learning More?</h3>
        <p className="text-gray-700 dark:text-dark-text-secondary mb-6 max-w-2xl mx-auto">
          I am always keen to connect with fellow researchers, students, industry professionals, and producers. If you're interested in collaborative projects, graduate studies, or learning more about my work in AI, data science, and sustainable agriculture, please feel free to reach out.
        </p>
        <a href="#/contact" className="inline-block bg-accent dark:bg-accent-text-dark text-white dark:text-dark-bg font-bold py-3 px-6 rounded-lg hover:bg-accent-dark dark:hover:bg-amber-500 transition-colors text-lg">
          Contact Me
        </a>
      </div>
    </Section>
  );
};

export default TeamPage;
