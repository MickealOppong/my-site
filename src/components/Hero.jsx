import { projectData } from '../data';
import Project from './Project';

const Hero = () => {
  return <section className="max-w-9xl mx-auto  bg-gray-300 py-20 ">

    <div className='flex flex-col
 lg:flex-row gap-x-4 items-center w-full'>
      {
        projectData.map((item) => {
          return <Project {...item} key={item.id} />
        })
      }
    </div>
  </section>
}
export default Hero;