import { projectData } from '../data';
import Project from './Project';

const Hero = () => {
  return <section className="max-w-9xl mx-auto px-4 mt-8 md:px-16 lg:px-32 bg-gray-300 py-20 ">

    <div className='flex flex-col
 lg:flex-row gap-4 items-center w-full'>
      {
        projectData.map((item) => {
          return <Project {...item} key={item.id} />
        })
      }
    </div>
  </section>
}
export default Hero;