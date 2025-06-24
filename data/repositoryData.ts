
import { Repository } from '../types';
import { GITHUB_USERNAME } from '../constants';

const placeholderImageBaseUrl = 'https://picsum.photos/seed';

export const repositories: Repository[] = [

  {
    id: 'peanut-maturity-prediction',
    name: 'Peanut Maturity Prediction (UAV Multispectral)',
    description: 'Research and code for predicting peanut maturity using UAV-based multispectral imagery and machine learning techniques.',
    githubUrl: `https://github.com/${GITHUB_USERNAME}/Peanut_Maturity_Prediction_UAV_Multispectral_Images`,
    tags: ['Precision Agriculture', 'Remote Sensing', 'UAV', 'Machine Learning', 'Peanut'],
    language: 'Python', // Assuming Python, Jupyter Notebooks
    imageUrl: `${placeholderImageBaseUrl}/peanutUAV/600/400`,
  },
  {
    id: 'corn-yield-prediction',
    name: 'Corn Yield Prediction (Remote Sensing & ML)',
    description: 'Models and analysis for corn yield prediction leveraging remote sensing data and machine learning algorithms.',
    githubUrl: `https://github.com/${GITHUB_USERNAME}/Corn_Yield_Prediction_Remote_Sensing_Machine_Learning`,
    tags: ['Crop Modeling', 'Machine Learning', 'Remote Sensing', 'Corn', 'Yield Prediction'],
    language: 'Python', // Assuming Python, R
    imageUrl: `${placeholderImageBaseUrl}/cornYield/600/400`,
  },
  {
    id: 'geospatial-data-science-for-agriculture',
    name: 'Geospatial Data Science for Agriculture',
    description: 'Collection of tools, notebooks, and resources for applying geospatial data science techniques to agricultural challenges, including remote sensing, GIS, and spatial statistics.',
    githubUrl: `https://github.com/${GITHUB_USERNAME}/Geospatial_Data_Science_for_Agriculture`,
    tags: ['Geospatial', 'GIS', 'Remote Sensing', 'Python', 'R', 'Data Analysis', 'Agriculture'],
    language: 'Jupyter Notebook',
    imageUrl: `${placeholderImageBaseUrl}/geoDSAgri/600/400`,
  },

  {
    id: 'geosd-course',
    name: 'GEOSD - Geospatial Data Science for Agriculture Course',
    description: 'Course materials and resources for Geospatial Data Science for Agriculture, covering topics like spatial data handling, analysis, and visualization in R and Python.',
    githubUrl: `https://github.com/${GITHUB_USERNAME}/geosd`,
    tags: ['Geospatial', 'Data Science', 'R', 'Python', 'GIS', 'Agriculture', 'Course Materials', 'Education'],
    language: 'Jupyter Notebook',
    imageUrl: `${placeholderImageBaseUrl}/geosdCourse/600/400`,
  },
  {
    id: 'auto-ml-projects',
    name: 'Auto-ML Project Examples',
    description: 'A collection of projects and examples demonstrating the application of Automated Machine Learning (AutoML) techniques.',
    githubUrl: `https://github.com/${GITHUB_USERNAME}/Auto-ML`,
    tags: ['AutoML', 'Machine Learning', 'Python', 'AI', 'Automation'],
    language: 'Python',
    imageUrl: `${placeholderImageBaseUrl}/autoMLProjects/600/400`,
  },
  
];
