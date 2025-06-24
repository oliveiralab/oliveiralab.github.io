
import React from 'react';
import Section from '../components/ui/Section';
import { PERSONAL_NAME } from '../constants';
import Button from '../components/ui/Button';
import { teamMembers } from '../data/teamData'; 

// SVGs for icons
const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" clipRule="evenodd"/>
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const GoogleScholarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Scholar_logo.svg"
    alt="Google Scholar logo"
    className={className}
  />
);

const OrcidIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <img
    src="https://orcid.filecamp.com/static/thumbs/42DBWh3MuwolJCUX-thumb.png"
    alt="ORCID logo"
    className={className}
  />
);


const ContactPage: React.FC = () => {
  const principalInvestigator = teamMembers.find(member => member.id === '1'); 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Basic form data retrieval for demo
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // In a real app, you'd send this data to a backend or email service.
    // For this demo, we'll just log it and show an alert.
    console.log({ name, email, subject, message });
    alert(`Thank you for your message, ${name}! This is a demo form. For actual inquiries, please use the direct contact information provided.`);
    (event.target as HTMLFormElement).reset();
  };

  return (
    <Section title="Get In Touch" subtitle={`I'd love to hear from you. Whether you have questions, collaboration ideas, or want to learn more about my work, please reach out.`}>
      <div className="max-w-2xl mx-auto space-y-12">
        {principalInvestigator && (
            <div className="bg-gray-50 dark:bg-dark-surface-alt p-6 md:p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-heading font-semibold text-primary dark:text-primary-text-dark mb-4 text-center">Connect with {PERSONAL_NAME}</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center">
                {principalInvestigator.email && (
                  <a href={`mailto:${principalInvestigator.email}`} className="flex items-center text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`Email ${principalInvestigator.name}`}>
                    <EmailIcon className="h-5 w-5 md:h-6 md:w-6 mr-2" /> <span className="text-sm md:text-base">Email</span>
                  </a>
                )}
                {principalInvestigator.linkedin && (
                  <a href={principalInvestigator.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`${principalInvestigator.name} LinkedIn Profile`}>
                    <LinkedInIcon className="h-5 w-5 md:h-6 md:w-6 mr-2" /> <span className="text-sm md:text-base">LinkedIn</span>
                  </a>
                )}
                {principalInvestigator.github && (
                  <a href={principalInvestigator.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`${principalInvestigator.name} GitHub Profile`}>
                    <GitHubIcon className="h-5 w-5 md:h-6 md:w-6 mr-2" /> <span className="text-sm md:text-base">GitHub</span>
                  </a>
                )}
                {principalInvestigator.scholar && (
                  <a href={principalInvestigator.scholar} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`${principalInvestigator.name} Google Scholar Profile`}>
                    <GoogleScholarIcon className="h-5 w-5 md:h-6 md:w-6 mr-2" /> <span className="text-sm md:text-base">Google Scholar</span>
                  </a>
                )}
                {principalInvestigator.orcid && (
                  <a href={principalInvestigator.orcid} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-dark-text-secondary hover:text-primary dark:hover:text-primary-text-dark transition-colors" aria-label={`${principalInvestigator.name} ORCID Profile`}>
                    <OrcidIcon className="h-5 w-5 md:h-6 md:w-6 mr-2" /> <span className="text-sm md:text-base">ORCID</span>
                  </a>
                )}
              </div>
               <p className="text-xs text-gray-500 dark:text-gray-400 mt-6 text-center">
                Physical correspondence can be sent to: {principalInvestigator.bio.includes("Nebraska-Lincoln") ? "University of Nebraska-Lincoln, Department of Agronomy and Horticulture, 505 N Main St, Fremont, NE, USA" : "Contact for current address."}
              </p>
            </div>
          )}

        {/* Contact Form */}
        <div className="bg-white dark:bg-dark-surface p-6 md:p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-heading font-semibold text-gray-800 dark:text-dark-text-primary mb-6 text-center">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary">Full Name</label>
              <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-dark-input-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-dark-input-bg dark:text-dark-text-primary dark:placeholder-gray-400" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary">Email Address</label>
              <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-dark-input-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-dark-input-bg dark:text-dark-text-primary dark:placeholder-gray-400" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary">Subject</label>
              <input type="text" name="subject" id="subject" required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-dark-input-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-dark-input-bg dark:text-dark-text-primary dark:placeholder-gray-400" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary">Message</label>
              <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-dark-input-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-dark-input-bg dark:text-dark-text-primary dark:placeholder-gray-400"></textarea>
            </div>
            <div>
              <Button type="submit" variant="accent" size="lg" className="w-full">Send Message</Button>
            </div>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">Note: This is a demo form. For urgent or official inquiries, please use the direct contact information provided above.</p>
        </div>
      </div>
    </Section>
  );
};

export default ContactPage;