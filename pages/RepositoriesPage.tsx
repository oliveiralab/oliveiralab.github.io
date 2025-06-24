
import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { repositories } from '../data/repositoryData';
import { Repository } from '../types';
import { GITHUB_USERNAME } from '../constants';

// GitHub Octicon for repository
const RepoIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8V1.5ZM5 7.75A.75.75 0 0 1 4.25 7h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 5 7.75Zm-.75 2.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z"></path>
  </svg>
);

// Star icon (simplified)
const StarIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg className={className} viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="currentColor">
        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
    </svg>
);


const RepositoryCard: React.FC<{ repo: Repository }> = ({ repo }) => {
  return (
    <Card className="flex flex-col h-full" hoverEffect id={repo.id}>
      {repo.imageUrl && (
         <img src={repo.imageUrl} alt={`${repo.name} project visual`} className="w-full h-48 object-cover rounded-t-lg"/>
      )}
      <div className={`p-6 flex flex-col flex-grow ${!repo.imageUrl && 'rounded-t-lg'}`}>
        <h3 className="text-xl font-heading font-semibold text-primary dark:text-primary-text-dark mb-2 flex items-center">
            <RepoIcon className="mr-2 flex-shrink-0" />
            <a href={repo.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-1 focus:ring-primary rounded-sm">
                {repo.name}
            </a>
        </h3>
        <p className="text-gray-600 dark:text-dark-text-secondary text-sm mb-4 flex-grow min-h-[60px]">{repo.description}</p>
        
        {repo.language && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                <span className="font-semibold">Primary Language:</span> {repo.language}
            </p>
        )}

        {repo.tags && repo.tags.length > 0 && (
          <div className="mb-4">
            {/* <h4 className="text-xs font-semibold text-gray-800 dark:text-dark-text-primary mb-1">Tags:</h4> */}
            <div className="flex flex-wrap gap-2">
              {repo.tags.map(tag => (
                <span key={tag} className="bg-secondary-light dark:bg-secondary text-white px-2 py-0.5 text-xs rounded-full shadow-sm">{tag}</span>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-dark-border">
            <Button 
                to={repo.githubUrl}
                variant="outline" 
                size="sm" 
                className="w-full"
                // External link handling will be default browser behavior (target="_blank" on anchor)
                // If Button component needs explicit external link prop, adjust here
            >
                View on GitHub
            </Button>
        </div>
      </div>
    </Card>
  );
};

const RepositoriesPage: React.FC = () => {
  return (
    <Section 
        title="My Code & Apps" 
        subtitle={`Explore open-source projects, tools, and applications I've developed. You can find more on my GitHub profile: ${GITHUB_USERNAME}.`}
    >
      {repositories.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-dark-text-secondary">No repositories to display at the moment. Please check back later.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map(repo => <RepositoryCard key={repo.id} repo={repo} />)}
        </div>
      )}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 dark:text-dark-text-secondary mb-4">Interested in the technical details or looking to collaborate?</p>
        <Button 
            to={`https://github.com/${GITHUB_USERNAME}`} 
            variant="accent" 
            size="lg"
            // Ensure this button correctly opens an external link in a new tab
            // This might require a small adjustment to the Button component or using a raw <a> tag styled as a button
        >
            Visit My GitHub Profile
        </Button>
      </div>
    </Section>
  );
};

export default RepositoriesPage;
    