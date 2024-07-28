import { useState } from "react"

const Project = ({ img, text, github, url, description }) => {
  const [showLink, setShowLink] = useState(false)
  return <article className=''>
    <div className="shadow-2xl w-96 md:w-full
      " >
      <div className='relative' onMouseEnter={() => {
        setShowLink(() => !showLink)
        console.log('enter');
      }} onMouseLeave={() => {
        setShowLink(() => !showLink)
        console.log('leave');
      }}>
        <img className="w-full h-[20rem]" src={img} />
        <div className='flex justify-center py-8 bg-white'>
          <p className='text-slate-700 tracking-wider uppercase'>{text}</p>
        </div>
        <div className={`${showLink ? 'flex' : 'hidden'} absolute top-[50%] left-[50%] flex-col gap-2  p-2 justify-center items-center `}>
          <button className='bg-black text-white w-24 capitalize'><a lassName='text-white text-sm ' href={url} target='_blank' >live site</a></button>
          <button className='bg-black text-white w-24 capitalize'><a className='text-white text-sm ' href={github} target='_blank' >source code</a></button>
        </div>
      </div>
      <div className="bg-white">
        <p>{description}</p>
      </div>
    </div>
  </article>
}

export default Project