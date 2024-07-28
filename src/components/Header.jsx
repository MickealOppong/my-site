import { useRef, useState } from 'react';
import mo from '../assets/mo-1.png';
import { techStack } from '../data';
const Header = () => {
  const [isAbove, setIsAbove] = useState(false)
  const myHeadRef = useRef(null);


  window.addEventListener('scroll', () => {
    const navContainer = myHeadRef.current;
    const navHeight = navContainer.getBoundingClientRect().height;
    const scrollHeight = window.scrollY;
    if (scrollHeight > navHeight) {
      setIsAbove(true)
      return;
    }
    setIsAbove(false);

  })
  return <nav className={`px-8 py-4 flex justify-center ${isAbove ? "fixed top-0 left-0 right-0 bg-white z-50 " : ''}mx-auto`} ref={myHeadRef}>
    <div className="flex items-center">
      <div className="flex flex-col">
        <img src={mo} alt="" className='w-66 h-24' />
        {/* 
        <h1 className=" text-c-4 font-semibold text-6xl italic tracking-wide">Mike Oppong</h1>
       */}
        <div className="mt-2">
          <p className="capitalize text-gray-500 mt-1 tracking-tight">web developer</p>
          <ul className='flex gap-x-2 mt-4'>
            {
              techStack.map((item) => {
                return <div className='grid grid-cols-2 items-center gap-x-2 pb-4' key={item.id}>
                  <div className='h-2 w-2 bg-c-2 '></div>
                  <li className='tracking-tight uppercase text-xs text-slate-500'>{item.text}</li>
                </div>

              })
            }
          </ul>
        </div>
      </div>
    </div>
  </nav>
}
export default Header;