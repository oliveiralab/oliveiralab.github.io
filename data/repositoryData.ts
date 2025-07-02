
import { Repository } from '../types';
import { GITHUB_USERNAME } from '../constants';

export const repositories: Repository[] = [
  {
    id: 'peanut-maturity-prediction',
    name: 'Predicting Peanut Maturity Index Using Deep Neural Network and Phone Images',
    description: 'A deep learning approach to predict peanut maturity index using images captured from a smartphone.',
    githubUrl: 'https://github.com/mailson-unl/pmidigital',
    tags: ['Deep Learning', 'Computer Vision', 'Mobile', 'Precision Agriculture', 'Peanut'],
    language: 'Python',
    imageUrl: 'https://images.pexels.com/photos/7015037/pexels-photo-7015037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'corn-yield-prediction',
    name: 'Corn Yield Prediction (Remote Sensing & ML)',
    description: 'Models and analysis for corn yield prediction leveraging remote sensing data and machine learning algorithms.',
    githubUrl: 'https://github.com/oliveiralab/Auto-ML',
    tags: ['Crop Modeling', 'Machine Learning', 'Remote Sensing', 'Corn', 'Yield Prediction', 'AutoML'],
    language: 'Python',
    imageUrl: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 'geosnap',
    name: 'GeoSnap, transforming drones on mobile GPS',
    description: 'An application that transforms drones into mobile GPS devices for precise data collection and field mapping.',
    githubUrl: 'https://github.com/mailson-unl/GeoSnap',
    tags: ['Mobile App', 'GPS', 'Drone', 'Geospatial', 'Data Collection', 'Precision Agriculture', 'Flutter'],
    language: 'Dart',
    imageUrl: 'https://images.pexels.com/photos/8420658/pexels-photo-8420658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 'geosd-course',
    name: 'GEOSD - Geospatial Data Science for Agriculture Course',
    description: 'Course materials and resources for Geospatial Data Science for Agriculture, covering topics like spatial data handling, analysis, and visualization in R and Python.',
    githubUrl: `https://github.com/${GITHUB_USERNAME}/geosd`,
    tags: ['Geospatial', 'Data Science', 'R', 'Python', 'GIS', 'Agriculture', 'Course Materials', 'Education'],
    language: 'Jupyter Notebook',
    imageUrl: 'https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];
