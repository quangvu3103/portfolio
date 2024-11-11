import avatarProfile from "../assets/avatar.jpg";

const Skill = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl text-gray-500">Skills</h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-lg h-60" src={avatarProfile} alt="avatar" />
          </div>
          <div className="w-full ">
            <div className="flex justify-center lg:justify-start">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
