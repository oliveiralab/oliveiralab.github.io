
import React from 'react';
import { PERSONAL_NAME, CONTACT_EMAIL } from '../../constants';
import { teamMembers } from '../../data/teamData'; // Import team data
import { TeamMember } from '../../types';

// Icon components
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


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const principalInvestigator = teamMembers.find(member => member.id === '1'); // Dr. Oliveira is id '1'

  return (
    <footer className="bg-gray-800 dark:bg-dark-surface text-gray-300 dark:text-dark-text-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-heading font-semibold text-white dark:text-dark-text-primary mb-2">{PERSONAL_NAME}</h3>
            <p className="text-sm">Driving innovation in agriculture with AI, Data Science, and Extension.</p>
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-white dark:text-dark-text-primary mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#/" className="hover:text-primary dark:hover:text-primary-text-dark transition-colors">Home</a></li>
              <li><a href="#/code" className="hover:text-primary dark:hover:text-primary-text-dark transition-colors">Code & Apps</a></li>
              <li><a href="#/publications" className="hover:text-primary dark:hover:text-primary-text-dark transition-colors">Publications</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-heading font-semibold text-white dark:text-dark-text-primary mb-2">Contact</h3>
            {principalInvestigator ? (
              <div className="flex justify-center space-x-3 mt-2">
                {principalInvestigator.email && (
                  <a href={`mailto:${principalInvestigator.email}`} className="text-gray-300 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`Email ${principalInvestigator.name}`}>
                    <EmailIcon className="h-6 w-6" />
                  </a>
                )}
                {principalInvestigator.linkedin && (
                  <a href={principalInvestigator.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`${principalInvestigator.name} LinkedIn Profile`}>
                    <LinkedInIcon className="h-6 w-6" />
                  </a>
                )}
                {principalInvestigator.github && (
                  <a href={principalInvestigator.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`${principalInvestigator.name} GitHub Profile`}>
                    <GitHubIcon className="h-6 w-6" />
                  </a>
                )}
                {principalInvestigator.scholar && (
                  <a href={principalInvestigator.scholar} target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`${principalInvestigator.name} Google Scholar Profile`}>
                    <GoogleScholarIcon className="h-6 w-6" />
                  </a>
                )}
                {principalInvestigator.orcid && (
                  <a href={principalInvestigator.orcid} target="_blank" rel="noopener noreferrer" className="text-gray-300 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`${principalInvestigator.name} ORCID Profile`}>
                    <OrcidIcon className="h-6 w-6" />
                  </a>
                )}
              </div>
            ) : (
              <p className="text-sm">Email: <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary dark:hover:text-primary-text-dark transition-colors">{CONTACT_EMAIL}</a></p>
            )}
          </div>
        </div>
        <div className="border-t border-gray-700 dark:border-dark-border pt-8">
          <p className="text-sm">
            &copy; {currentYear} {PERSONAL_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
    