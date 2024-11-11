const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <div className=" mt-8 pt-8">
        <h2 className="text-center text-4xl text-gray-500 mb-10">Projects</h2>
        <div className="max-w-4xl mx-auto px-8 space-y-8">
          <div>
            <h3 className="text-xl font-bold">
              Pet Shop Website (01/2024 - 05/2024)
            </h3>
            <ul className="list-disc list-inside text-gray-800">
              <li>
                <strong>Front-End Repository:</strong>{" "}
                <a
                  href="https://github.com/quangvu3103/portfolio"
                  className="text-blue-600 underline"
                >
                  GitHub FE
                </a>
              </li>
              <li>
                <strong>Back-End Repository:</strong>{" "}
                <a
                  href="https://github.com/quangvu3103/portfolio"
                  className="text-blue-600 underline"
                >
                  GitHub BE
                </a>
              </li>
              <li>
                <strong>Description:</strong> Developed an e-commerce website
                for a pet shop, enabling users to easily search for, purchase
                products, and services for pets.
              </li>
              <li>
                <strong>Technologies Used:</strong> React.js, HTML, CSS,
                JavaScript, Bootstrap, Node.js, Express, MongoDB.
              </li>
              <li>
                <strong>Key Features:</strong> Product management, shopping
                cart, user authentication.
              </li>
              <li>
                <strong>Contributions:</strong> Designed UI/UX, integrated API
                for front-end and back-end communication.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold">
              ASM_Webproject (10/2023 - 01/2024)
            </h3>
            <ul className="list-disc list-inside text-gray-800">
              <li>
                <strong>Repository:</strong>{" "}
                <a
                  href="https://github.com/quangvu3103/portfolio"
                  className="text-blue-600 underline"
                >
                  GitHub Link
                </a>
              </li>
              <li>
                <strong>Description:</strong> Developed an online product
                management and shopping cart system.
              </li>
              <li>
                <strong>Technologies Used:</strong> HTML, CSS, JavaScript,
                Node.js, Express, MongoDB.
              </li>
              <li>
                <strong>Key Features:</strong> CRUD operations, shopping cart,
                admin dashboard.
              </li>
              <li>
                <strong>Contributions:</strong> Managed database integration and
                API development.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
