const About = () => {
  return <section className="px-4 max-w-3xl mx-auto">
    <div>
      <p className="text-c-4 font-semibold text-xl py-8 italic">  A BIT ABOUT ME</p>
      <p className="text-slate-700">
        My name is Michael Oppong,I am a graduate of MA Finance from University of Economics in Katowice, i hold a Bachelor of laws degree. I am married and a father who enjoys creating web applications. I love what i do and i do what i love.
      </p>
      <p className="text-slate-700 mt-4">
        My journey to software development was influence by my previous work experience in a software company where i was involved in design and implementation of functional requirements for Enterprise Resource Applications.
      </p>

      <p className="text-slate-700 mt-4">
        I have over five years experience working with developers to design and implement Enterprice Resource Applications (ERP) for large corporations. Through this period i learnt how to write snippets of code. I loved it and had fun doing it. With the vast knowledge and experience over the years, i feel i am in a unique position to deliver solutions to client in a way that incorporate business understanding and not just technology.
      </p>
    </div>
    <div className="flex flex-col ">
      <button className="uppercase bg-c-4 text-gray-100 h-12 w-36 mt-4 border-2 shadow-md rounded-md">contact</button>
      <div className="flex gap-x-2 mt-2 text-slate-500">
        <span className="uppercase ">email</span>
        <p>opp.mic@gmail.com</p>
      </div>
      <div className="flex gap-x-2 mt-2 text-slate-500">
        <span className="uppercase ">Phone</span>
        <p className="">+48 739-593-752</p>
      </div>
    </div>

  </section>
}
export default About;