import img1 from '../assets/mix-master.png';
import seahorse from '../assets/seahorse.png';
import img3 from '../assets/splash.png';
const Hero = () => {
  //const [image, setImage] = useState(page[1].img)

  return <section className="px-4 mt-8 md:px-16 lg:px-32 bg-gray-300 py-20 ">

    <article className="grid gap-8 md:gap-12 lg:gap-4 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:w-10/12 lg:mx-36">
      <div className="shadow-2xl w-96 md:w-full">
        <a href="https://react-cocktail-master.netlify.app" target='_blank' ><img src={img1} /></a>
        <div className='flex justify-center py-8 bg-white'>
          <p className='text-slate-700 tracking-wider uppercase'>Cocktail API</p>
        </div>
      </div>
      <div className="shadow-2xl w-96 md:w-full">
        <a href="https://react-seahorse.netlify.app/cart" target='_blank' >
          <img src={seahorse} />
        </a>
        <div className='flex justify-center py-8 bg-white'>
          <p className='text-slate-700 tracking-wider uppercase'>e-commerce website</p>
        </div>
      </div>
      <div className="shadow-2xl w-96 md:w-full">
        <a href="https://vite-splash.netlify.app" target='_blank' >
          <img src={img3} />
        </a>
        <div className='flex justify-center py-8 bg-white'>
          <p className='text-slate-700 tracking-wider uppercase'>unsplash API</p>
        </div>
      </div>
    </article>

    <div className="flex gap-x-4 mt-8 md:16 lg:px-36">
      <button className="bg-c-4 text-gray-100 h-12 w-24 rounded-sm ">
        <a href="https://github.com/mickealoppong" target='_blank'>Github</a></button>
      <button className="bg-c-4 text-gray-100 h-12 w-24 rounded-sm">
        <a href="https://vite-cms.netlify.app" target='_blank'>More</a></button>
    </div>

  </section>
}

export default Hero;