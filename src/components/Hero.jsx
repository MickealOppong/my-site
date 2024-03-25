import img1 from '../assets/mix-master.png';
const Hero = () => {
  return <section className="px-8 mt-8 md:px-16 lg:px-32 bg-gray-300 py-10 h-[90vh]">

    <article className="grid gap-y-4 sm:grid-cols-2 sm:gap-2 md:gap-x-4 lg:grid-cols-3">
      <div className="shadow-2xl">
        <a href="https://react-cocktail-master.netlify.app" target='_blank' ><img src={img1} /></a>
        <div className='flex justify-center py-8 bg-white'>
          <p className='text-slate-700 tracking-wider'>Cocktail API</p>
        </div>
      </div>
      <div className=" bg-c-2">
        container 2
      </div>
      <div className="bg-c-4">
        container 3
      </div>
    </article>

    <div className="flex gap-x-4 mt-8">
      <button className="bg-c-4 text-gray-100 h-12 w-24 rounded-sm ">Github</button>
      <button className="bg-c-4 text-gray-100 h-12 w-24 rounded-sm">Projects</button>
    </div>

  </section>
}

export default Hero;