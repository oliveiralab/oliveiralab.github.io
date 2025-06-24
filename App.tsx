
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
// ResearchPage import removed
import RepositoriesPage from './pages/RepositoriesPage'; // Added RepositoriesPage
import PublicationsPage from './pages/PublicationsPage';
import TeamPage from './pages/TeamPage';
// NewsPage import removed
import ContactPage from './pages/ContactPage';
// AiToolsPage import removed
import NotFoundPage from './pages/NotFoundPage';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/code" element={<RepositoriesPage />} /> {/* Changed from /research to /code */}
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/team" element={<TeamPage />} />
            {/* NewsPage route removed */}
            {/* AiToolsPage route removed */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
