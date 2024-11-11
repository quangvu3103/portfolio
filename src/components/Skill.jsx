const Skill = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl text-gray-500">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        <p className="text-gray-800">
          <strong>HTML, CSS:</strong> Proficient in building web structures and
          designing user interfaces.
        </p>
        <p className="text-gray-800">
          <strong>Responsive Design:</strong> Experienced in optimizing web
          interfaces for various screen sizes (Mobile, Tablet, Desktop).
        </p>
        <p className="text-gray-800">
          <strong>React.js:</strong> Experienced in using React.js for personal
          projects, creating flexible UI components and managing application
          state.
        </p>
        <p className="text-gray-800">
          <strong>Version Control (Git):</strong> Familiar with using Git for
          version control and collaboration in team projects.
        </p>
        <p className="text-gray-800">
          <strong>Problem Solving:</strong> Strong analytical and
          problem-solving skills, able to quickly identify issues and implement
          effective solutions in web development projects.
        </p>
      </div>
    </div>
  );
};

export default Skill;
