import icon from "./assets/img/icon.jpg";

/* https://codepen.io/r4218/pen/rNMJKLW */

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">ShinCode</span>
          </a>
          <nav className="flex items-center justify-center md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">Home</a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300">About</a>
            <a href="#skill" className="mr-5 hover:text-blue-400 duration-300">Skills</a>
            <a href="#blog" className="mr-5 hover:text-blue-400 duration-300">Blog</a>
            <a href="#contact" className="hover:text-blue-400 duration-300">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="text-gray-700">
        <div className="container flex mx-auto flex-col md:flex-row items-center px-5 py-20">
          <div className="md:w-1/2 flex-grow lg:pr-24 md:pr-16 text-center mb-16 md:text-left">
            <h1 className="sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
              Hi!
              <br />
              I'm ShinCode
              <br />
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              dignissimos atque voluptate blanditiis necessitatibus reiciendis
              tenetur amet? Repudiandae, cupiditate illum.
            </p>
            <div>
              <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Contact
              </button>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded m-auto"
              alt=""
              src={icon}
            />
          </div>
        </div>
      </section>



    </>
  );
}

export default App;