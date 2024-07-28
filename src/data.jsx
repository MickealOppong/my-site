import img1 from './assets/cms.png';
import img3 from './assets/landing-page.png';
import img2 from './assets/store.png';


export const techStack = [
  { id: 1, text: 'Java' },
  { id: 2, text: 'Spring' },
  { id: 3, text: 'Javascript' },
  { id: 4, text: 'HTML & CSS' },
  { id: 5, text: 'Typescript' },
  { id: 5, text: 'React' },
]


export const page = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },

]

export const projectData = [
  {
    id: 1,
    img: img1,
    text: 'e-commerce-cms',
    github: 'https://github.com/MickealOppong/cms-backend-api',
    url: 'https://e-cms.netlify.app/landing',
    description: 'This is a demo full stack app for creating and managing products,users, and other functionalities needed to operate an e-commerce website. The Backend is written using Java with Spring-boot framework authenticating users using jwt'
  },

  {
    id: 2,
    img: img2,
    text: 'e-commerce',
    github: 'https://github.com/MickealOppong/store',
    url: 'https://react-seahorse.netlify.app',
    description: ''

  },
  {
    id: 3,
    img: img3,
    text: 'e-commerce-landing page',
    github: 'https://github.com/MickealOppong/Fashion-Landing-Page',
    url: 'https://seahorse-land-page.netlify.app',
    description: ''
  }
]