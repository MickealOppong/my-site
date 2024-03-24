import { techStack } from '../data';
const Header = () => {
  return <header className="px-8 py-8 max-w-3xl mx-auto">
    <div className="flex items-center">
      <div className="flex flex-col">
        <h1 className=" text-c-4 font-semibold text-7xl italic">Mike Oppong</h1>
        <div className="mt-2">
          <p className="capitalize text-gray-500">web developer</p>
          <ul className='flex gap-x-2 mt-4'>
            {
              techStack.map((item) => {
                return <div className='flex items-center gap-x-2' key={item.id}>
                  <div className='h-2 w-2 bg-c-2 '></div>
                  <li className='uppercase tracking-wide text-xs text-slate-500'>{item.text}</li>
                </div>

              })
            }
          </ul>
        </div>
      </div>
    </div>
  </header>
}
export default Header;