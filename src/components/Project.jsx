import { useState } from "react"

const Project = ({ img, text, github, url, description }) => {
  const [showLink, setShowLink] = useState(false)
  return <article className='w-full'>
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
        <div className={`flex ${showLink ? 'opacity-[100] translate-x-0 duration-300 ' : 'opacity-0 duration-300 '} -translate-Y-full absolute top-[50%] left-[45%] flex-col gap-2  p-2 justify-center items-center z-50 `}>
          <button className='bg-c-4 text-white w-24 h-8 capitalize'><a lassName='text-white text-sm ' href={url} target='_blank' >live site</a></button>
          <button className='bg-c-4 text-white w-24 h-8 capitalize'><a className='text-white text-sm ' href={github} target='_blank' >source code</a></button>
        </div>
      </div>
      <div className="bg-white p-2 text-sm h-[7rem]">
        <p>{description}</p>
      </div>
      <div className={`flex ${showLink ? 'top-0 bottom-0' : ''} bg-slate-100 absolute 
      z-40 w-full h-full`}>

      </div>
    </div>
  </article>
}

export default Project