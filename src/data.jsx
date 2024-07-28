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
    description: 'This is a demo full stack app for creating and managing products,users, and other functionalities needed to operate an e-commerce website. The Backend is written using Java with Spring-boot framework authenticating users using jwt. The app is 80% completed with few functionality to be completed'
  },

  {
    id: 2,
    img: img2,
    text: 'e-commerce',
    github: 'https://github.com/MickealOppong/store',
    url: 'https://react-seahorse.netlify.app',
    description: 'This is a demo front-end app for operating an e-commerce website from customers perspective. This is purely designed from front-end perspective doe demonstration purposes. The app is written using javascript and react framework, with Redux toolkit for state management. This does not include payment functionality'

  },
  {
    id: 3,
    img: img3,
    text: 'e-commerce-landing page',
    github: 'https://github.com/MickealOppong/Fashion-Landing-Page',
    url: 'https://seahorse-land-page.netlify.app',
    description: 'This is a demo app for showcasing the Landing page of an e-commerce website. This app is written using vanilla typescript and javascript with no frameworks. The Landing page has basic functionality to capture the basic requirements of a landing page'
  }
]