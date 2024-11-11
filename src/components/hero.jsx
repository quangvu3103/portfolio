import avatarProfile  from '../assets/avatar.jpg'

const Hero = () => {
  return (
  <div className="border-b border-neutral-900 pb-4 lg:mb-35" >
    <div className=" flex flex-wrap">
      <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-gray-500">Quang Vũ</h1>
          <span className="bg-gradient-to-r from-cyan-300 via-amber-500 to-yellow-100 bg-clip-text text-4xl tracking-tight text-transparent">
            Developer
          </span>
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-gray-950">
             I am an IT student passionate about web development, especially Front-End, with experience in personal projects using HTML, CSS, JavaScript, and React. I am seeking a Front-End Developer internship to enhance my coding skills and contribute to the growth of the company.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:p-8"> 
        <div className="flex justify-center">
          <img className="rounded-lg h-96" src={avatarProfile} alt="avatar" />
        </div>
      </div>
    </div>
  </div>
)}

export default Hero