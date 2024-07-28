import { useState } from "react"

const Project = ({ img, text, github, url }) => {
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
        <img src={img} />
        <div className='flex justify-center py-8 bg-white'>
          <p className='text-slate-700 tracking-wider uppercase'>{text}</p>
        </div>
        <div className={`flex flex-col gap-2  p-2 justify-center items-center `}>
          <button className='bg-black text-white w-24 capitalize'><a lassName='text-white text-sm ' href={url} target='_blank' >live site</a></button>
          <button className='bg-black text-white w-24 capitalize'><a className='text-white text-sm ' href={github} target='_blank' >source code</a></button>
        </div>
      </div>
    </div>
  </article>
}

export default Project