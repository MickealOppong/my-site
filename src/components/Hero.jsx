import { useState } from 'react';
import img1 from '../assets/cms.png';
import img3 from '../assets/landing-page.png';
import seahorse from '../assets/seahorse.png';
const Hero = () => {
  //const [image, setImage] = useState(page[1].img)
  const [showLinkA, setShowLinkA] = useState(false);
  const [showLinkB, setShowLinkB] = useState(false);
  const [showLinkC, setShowLinkC] = useState(false);

  return <section className="px-4 mt-8 md:px-16 lg:px-32 bg-gray-300 py-20 ">

    <article className="grid gap-8 md:gap-12 lg:gap-4 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:w-10/12 lg:mx-36">
      <div className="shadow-2xl w-96 md:w-full
      " >
        <div className='relative' onMouseEnter={() => {
          setShowLinkA(() => !showLinkA)
        }} onMouseLeave={() => {
          setShowLinkA(() => !showLinkA)
        }}>
          <img src={img1} />
          <div className='flex justify-center py-8 bg-white'>
            <p className='text-slate-700 tracking-wider uppercase'>E-Commerce CMS</p>
          </div>
          <div className={` gap-2 absolute top-[50%] left-[40%] p-2 justify-center items-center ${showLink ? 'flex flex-col w-auto' : 'hidden w-0'}`}>
            <button className='bg-black text-white w-24 capitalize'><a lassName='text-white text-sm ' href="https://e-cms.netlify.app/landing" target='_blank' >live site</a></button>
            <button className='bg-black text-white w-24 capitalize'><a className='text-white text-sm ' href="https://github.com/MickealOppong/cms-backend-api" target='_blank' >source code</a></button>
          </div>

        </div>

      </div>
      <div className="shadow-2xl w-96 md:w-full">

        <div className='relatve' onMouseEnter={() => {
          setShowLinkB(() => !showLinkB)
        }} onMouseLeave={() => {
          setShowLinkB(() => !showLinkB)
        }}>
          <img src={seahorse} />
          <div className='flex justify-center py-8 bg-white'>
            <p className='text-slate-700 tracking-wider uppercase'>e-commerce website</p>
          </div>
        </div>
        <div className={` gap-2 absolute top-[50%] left-[40%] p-2 justify-center items-center ${showLink ? 'flex flex-col w-auto' : 'hidden w-0'}`}>
          <button className='bg-black text-white w-24 capitalize'><a lassName='text-white text-sm ' href="https://react-seahorse.netlify.app/cart" target='_blank' >live site</a></button>
          <button className='bg-black text-white w-24 capitalize'><a className='text-white text-sm ' href="https://github.com/MickealOppong/store" target='_blank' >source code</a></button>
        </div>
      </div>
      <div className="shadow-2xl w-96 md:w-full">

        <div className='relative' onMouseEnter={() => {
          setShowLinkC(() => !showLinkC)
        }} onMouseLeave={() => {
          setShowLinkC(() => !showLinkC)
        }}>
          <img src={img3} />
          <div className='flex justify-center py-8 bg-white'>
            <p className='text-slate-700 tracking-wider uppercase'>E-commerce Landing page</p>
          </div>
        </div>
        <div className={` gap-2 absolute top-[50%] left-[40%] p-2 justify-center items-center ${showLink ? 'flex flex-col w-auto' : 'hidden w-0'}`}>
          <button className='bg-black text-white w-24 capitalize'><a lassName='text-white text-sm ' href="https://seahorse-land-page.netlify.app" target='_blank' >live site</a></button>
          <button className='bg-black text-white w-24 capitalize'><a className='text-white text-sm ' href="https://github.com/MickealOppong/Fashion-Landing-Page" target='_blank' >source code</a></button>
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