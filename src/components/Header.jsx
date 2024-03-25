import { useRef, useState } from 'react';
import { techStack } from '../data';
const Header = () => {
  const [isAbove, setIsAbove] = useState(false)
  const myHeadRef = useRef(null);


  window.addEventListener('scroll', () => {
    const header = myHeadRef.current;
    const headerHeight = header.getBoundingClientRect().height;
    if (scrollY > headerHeight) {
      setIsAbove(true)
      return;
    }
    setIsAbove(false);
  })
  return <nav className={`px-8 py-2 ${isAbove ? "fixed top-0 left-0 right-0 bg-white z-50 flex justify-center" : 'max-w-3xl mx-auto'} `} ref={myHeadRef}>
    <div className="flex items-center">
      <div className="flex flex-col">
        <h1 className=" text-c-4 font-semibold text-6xl italic tracking-wide">Mike Oppong</h1>
        <div className="mt-2">
          <p className="capitalize text-gray-500 mt-1 tracking-tight">web developer</p>
          <ul className='flex gap-x-2 mt-4'>
            {
              techStack.map((item) => {
                return <div className='flex items-center gap-x-2' key={item.id}>
                  <div className='h-2 w-2 bg-c-2 '></div>
                  <li className='tracking-tight uppercase tracking-wide text-xs text-slate-500'>{item.text}</li>
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