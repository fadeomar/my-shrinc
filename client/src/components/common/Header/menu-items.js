import React from 'react';
import {
  HomeIcone,
  TypesTherapist,
  Questionnaire,
  Search,
  About,
} from '../../assets';

const menuData = [
  {
    label: 'Home',
    url: 'home',
    icon: <HomeIcone />,
  },
  {
    label: 'Types of therapist',
    url: 'types-of-therapist',
    icon: <TypesTherapist />,
  },
  {
    label: 'Glossary',
    url: 'glossary',
    icon: <TypesTherapist />,
  },
  {
    label: 'Questionarie',
    url: 'questionarie',
    icon: <Questionnaire />,
  },
  {
    label: 'Search',
    url: 'search',
    icon: <Search />,
  },
  {
    label: 'About',
    url: 'about',
    icon: <About />,
  },
];

export default menuData;