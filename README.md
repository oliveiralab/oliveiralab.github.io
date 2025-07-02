# OliveiraLab Website

A modern React-based portfolio and research website for Dr. Mailson Freire de Oliveira, showcasing AI and Digital Agriculture research, publications, and tools.

## Features

- Modern React 19 with TypeScript
- Tailwind CSS for styling
- Dark/Light theme support
- Responsive design
- Single Page Application (SPA) with React Router
- Professional portfolio sections:
  - About/Biography
  - Publications
  - Code & Applications
  - Team/Profile
  - Contact

## Technology Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS (via CDN)
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: GitHub Pages compatible

## Development

To run the development server:

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Deployment

This website is configured for GitHub Pages deployment using GitHub Actions. The build output will be in the `dist` folder.

**Live Site**: https://oliveiralab.github.io

## Content

All content (publications, projects, team information) is managed through TypeScript data files in the `data/` directory:

- `teamData.ts` - Team member information
- `publicationData.ts` - Research publications
- `repositoryData.ts` - Code repositories and applications
- `projectData.ts` - Research projects
- `newsData.ts` - News and activities

## Contributing

To update content, modify the relevant data files and rebuild the project.

## License

© 2025 Mailson Freire de Oliveira. All rights reserved.
