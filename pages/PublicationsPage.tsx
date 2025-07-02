import React, { useState, useMemo } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { publications as allPublications } from '../data/publicationData';
import { Publication } from '../types';

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  return (
    <Card className="mb-6 p-6" id={publication.id}>
      <h3 className="text-xl font-heading font-semibold text-primary dark:text-primary-text-dark mb-1">{publication.title}</h3>
      <p className="text-sm text-gray-700 dark:text-dark-text-secondary mb-1">
        {publication.authors.join(', ')} ({publication.year})
      </p>
      <p className="text-sm italic text-gray-600 dark:text-gray-400 mb-2">{publication.journal}</p>
      {publication.abstract && <p className="text-sm text-gray-600 dark:text-dark-text-secondary mb-3 leading-relaxed">{publication.abstract}</p>}
      <div className="space-x-4">
        {publication.doi && (
          <a
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary dark:text-secondary-text-dark hover:underline font-medium"
          >
            DOI: {publication.doi}
          </a>
        )}
        {publication.link && (
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary dark:text-secondary-text-dark hover:underline font-medium"
          >
            View Publication
          </a>
        )}
      </div>
    </Card>
  );
};


const PublicationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterYear, setFilterYear] = useState<number | string>('');

  const years = useMemo(() => {
    const uniqueYears = Array.from(new Set(allPublications.map(p => p.year))).sort((a,b) => b-a);
    return uniqueYears;
  }, []);

  const filteredPublications = useMemo(() => {
    return allPublications
      .filter(pub => 
        (pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
         pub.authors.join(', ').toLowerCase().includes(searchTerm.toLowerCase()) ||
         pub.journal.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filterYear === '' || pub.year === Number(filterYear))
      )
      .sort((a, b) => b.year - a.year); // Sort by year descending
  }, [searchTerm, filterYear]);

  return (
    <Section title="Our Publications" subtitle="Discover the scholarly contributions from OliveiraLab, advancing knowledge in AI, data science, and agriculture.">
      
      <div className="mb-8 p-4 bg-gray-100 dark:bg-dark-surface-alt rounded-lg shadow">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="search-publications" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">Search Publications</label>
            <input
              type="text"
              id="search-publications"
              placeholder="Search by title, author, journal..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-dark-input-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-dark-input-bg dark:text-dark-text-primary dark:placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="filter-year" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">Filter by Year</label>
            <select
              id="filter-year"
              className="w-full px-3 py-2 border border-gray-300 dark:border-dark-input-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary dark:bg-dark-input-bg dark:text-dark-text-primary"
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
            >
              <option value="">All Years</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {filteredPublications.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-dark-text-secondary">No publications match your criteria. Please try different filters.</p>
      ) : (
        <div>
          {filteredPublications.map(publication => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default PublicationsPage;