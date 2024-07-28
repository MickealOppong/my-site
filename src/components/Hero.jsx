import { projectData } from '../data';
import Project from './Project';
const Hero = () => {
  return <section className="px-4 mt-8 md:px-16 lg:px-32 bg-gray-300 py-20 ">

    <div>
      {
        projectData.map((item) => {
          return <Project img={item.img} key={item.id} />
        })
      }
    </div>

    <div className="flex gap-x-4 mt-8 md:16 lg:px-36">
      <button className="bg-c-4 text-gray-100 h-12 w-24 rounded-sm ">
        <a href="https://github.com/mickealoppong" target='_blank'>Github</a></button>
      <button className="bg-c-4 text-gray-100 h-12 w-24 rounded-sm">
        <a href="https://vite-cms.netlify.app" target='_blank'>More</a></button>
    </div>

  </section>
}
export default Hero;