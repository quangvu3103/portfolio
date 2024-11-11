import avatarProfile from "../assets/avatar.jpg";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl text-gray-500 ">
        About
        <span className="text-gray-400 ml-2">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-lg h-60" src={avatarProfile} alt="avatar" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-gray-950">
              I am an IT student passionate about web development, especially
              Front-End, with experience in personal projects using HTML, CSS,
              JavaScript, and React. I am seeking a Front-End Developer
              internship to enhance my coding skills and contribute to the
              growth of the company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
