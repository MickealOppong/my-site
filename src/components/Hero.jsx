const Hero = () => {
  return <section className="px-8 mt-16 md:px-16 lg:px-32 bg-gray-100 py-10">


    <article className="grid gap-y-4 sm:grid-cols-2 sm:gap-2 md:gap-x-4 lg:grid-cols-3">
      <div className=" h-56 bg-c-3">
        container 1
      </div>
      <div className="h-56  bg-c-2">
        container 2
      </div>
      <div className="h-56 bg-c-4">
        container 3
      </div>
    </article>

    <div className="flex gap-x-4 mt-8">
      <button className="bg-c-4 text-gray-100 h-12 w-24 rounded-sm ">Github</button>
      <button className="bg-c-4 text-gray-100 h-12 w-24 rounded-sm">Projects</button>
    </div>

  </section>
}

export default Hero;