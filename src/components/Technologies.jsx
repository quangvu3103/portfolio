import { RiReactjsLine } from "react-icons/ri"
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
  return (
      <div className="border-b border-neutral-800 pb-24">
          <h2 className="my-20 text-center text-4xl text-gray-500">Technologies</h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-4xl text-cyan-400" />
              </div>
              <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className="text-4xl text-black" />
              </div>
              <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-4xl text-green-700" />
              </div>
              <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-4xl text-blue-600" />
              </div>
          </div>
    </div>
  )
}

export default Technologies