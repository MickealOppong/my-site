import img1 from '../assets/cms.png';
import img3 from '../assets/landing-page.png';
import seahorse from '../assets/seahorse.png';
const Hero = () => {
  //const [image, setImage] = useState(page[1].img)

  return <section className="px-4 mt-8 md:px-16 lg:px-32 bg-gray-300 py-20 ">
    {/** FIRST DEMO PROJECT */}
    <article className="flex flex-col gap-8 md:gap-12 lg:gap-4 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:w-10/12 lg:mx-36" >
      <div className="flex shadow-2xl w-96 md:w-full">
        <div>
          <a href="https://e-cms.netlify.app/products" target='_blank' ><img src={img1} /></a>
          <div className='flex justify-center py-8 bg-white'>
            <p className='text-slate-700 tracking-wider uppercase'>E-commerce CMS</p>
          </div>
          <div className='bg-c-3 hover:scale-105 duration-300 flex justify-center'>
            <a className='text-slate-100' href="https://e-cms.netlify.app/products" target='_blank' >live site</a>
          </div>
          <div className='bg-white p-2'>
            <p className='text-xl uppercase'>Demo project Summary</p>
            <p>
              This demo project is a full stack application intended to support the creation and management of products, users and other functionality needed to run an e-commerce app from the perspective of the store manager independent of the creator of the App. This is still in work in progress with minor functionality yet to be completed. the project used Java and Spring-boot for the backend and javascript and react, tailwind css on the front-end.
            </p>
          </div>
        </div>
      </div>

      {/** SECOND DEMO PROJECT */}
      <div className="shadow-2xl w-96 md:w-full">
        <div>
          <a href="https://react-seahorse.netlify.app/cart" target='_blank' >
            <img src={seahorse} />
          </a>
          <div className='flex justify-center py-8 bg-white'>
            <p className='text-slate-700 tracking-wider uppercase'>e-commerce website</p>
          </div>
        </div>
        <div className='bg-white p-2'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus distinctio illum eius a, praesentium repellat officiis molestias, rem quam ducimus aperiam corporis. Quaerat molestiae rem provident corporis iste veniam adipisci.
          </p>
        </div>
        <div className='bg-c-3 hover:scale-105  duration-300 flex justify-center'>
          <a className='text-slate-100' href="https://react-seahorse.netlify.app/cart" target='_blank' >live site </a>
        </div>
      </div>
      {/** THIRD DEMO PROJECT */}
      <div className="shadow-2xl w-96 md:w-full">
        <div>
          <a href="https://seahorse-land-page.netlify.app" target='_blank' >
            <img src={img3} />
          </a>
          <div className='flex justify-center py-8 bg-white'>
            <p className='text-slate-700 tracking-wider uppercase'>E-commerce landing page</p>
          </div>
        </div>
        <div className='bg-white p-2'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus distinctio illum eius a, praesentium repellat officiis molestias, rem quam ducimus aperiam corporis. Quaerat molestiae rem provident corporis iste veniam adipisci.
          </p>
        </div>
        <div className='bg-c-3 hover:scale-105 duration-300 flex justify-center'>
          <a className='text-slate-100' href="https://seahorse-land-page.netlify.app" target='_blank'>live site </a>
        </div>
      </div>
    </article>

    <div className="flex gap-x-4 mt-8 md:16 lg:px-36">
      <button className="bg-c-4 text-gray-100 h-12 w-24 rounded-sm ">
        <a href="https://github.com/mickealoppong" target='_blank'>Github</a></button>
    </div>

  </section>
}

export default Hero;