import { useState } from "react"

const Project = ({ img }) => {
  const [showLink, setShowLink] = useState(false)
  return <article className="grid gap-8 md:gap-12 lg:gap-4 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:w-10/12 lg:mx-36">
    <div className="shadow-2xl w-96 md:w-full
      " >
      <div className='relative' onMouseEnter={() => {
        setShowLink(() => !showLink)
        console.log('enter');
      }} onMouseLeave={() => {
        setShowLink(() => !showLink)
        console.log('leave');
      }}>
        <img src={img} />
        <div className='flex justify-center py-8 bg-white'>
          <p className='text-slate-700 tracking-wider uppercase'>E-Commerce CMS</p>
        </div>
        <div className={` gap-2  p-2 justify-center items-center `}>
          <button className='bg-black text-white w-24 capitalize'><a lassName='text-white text-sm ' href="https://e-cms.netlify.app/landing" target='_blank' >live site</a></button>
          <button className='bg-black text-white w-24 capitalize'><a className='text-white text-sm ' href="https://github.com/MickealOppong/cms-backend-api" target='_blank' >source code</a></button>
        </div>

      </div>

    </div>
  </article>
}

export default Project