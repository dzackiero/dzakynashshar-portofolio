import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  FaAndroid,
  FaArrowRight,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa6";
import Badge from "./components/Badge";
import { SiExpress, SiKotlin, SiMysql, SiPostgresql } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { BiLogoFlask } from "react-icons/bi";
import { LuArrowUpRight } from "react-icons/lu";

function App() {
  return (
    <>
      <main className="bg-neutral-950 min-h-screen text-white flex flex-col items-center ">
        <div className="max-w-screen-sm w-full font-space mt-12">
          {/* Title */}
          <div className="flex justify-between items-center my-8">
            <h1 className="font-semibold text-xl">M. Dzaky Nashshar</h1>
            <div className="flex items-center gap-2">
              <HiOutlineLocationMarker className="size-5" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>

          {/* Description */}
          <p>
            Hi! I'm Dzaky, a Software Engineering student at Politeknik Negeri
            Jakarta. I'm passionate about problem-solving and building
            solutions. I'm enthusiastic about design patterns, system design,
            computer science, and technology. I'm currently focus on back-end
            development.
          </p>

          {/* Tech Stack */}
          <h2 className="text-lg text-center font-semibold mt-14 mb-8">
            Tech Stack
          </h2>
          <div className="flex gap-6 justify-center flex-wrap text-sm">
            <Badge
              icon={<FaLaravel className="size-5 text-red-500" />}
              text={"Laravel"}
            />
            <Badge icon={<BiLogoFlask className="size-5" />} text={"Flask"} />
            <Badge icon={<SiExpress className="size-5" />} text={"Express"} />
            <Badge
              icon={<FaReact className="size-5 text-blue-400" />}
              text={"React"}
            />
            <Badge
              icon={<FaNodeJs className="size-5 text-green-500" />}
              text={"NodeJS"}
            />
            <Badge
              icon={<FaAndroid className="size-5 text-green-500" />}
              text={"Android"}
            />
            <Badge
              icon={<FaJs className="size-5 text-yellow-300" />}
              text={"JavaScript"}
            />
            <Badge
              icon={<FaPhp className="size-5 text-blue-500" />}
              text={"PHP"}
            />
            <Badge
              icon={<SiKotlin className="size-4 text-purple-600" />}
              text={"Kotlin"}
            />
            <Badge
              icon={<SiPostgresql className="size-5 text-blue-600" />}
              text={"PostgreSQL"}
            />
            <Badge
              icon={<SiMysql className="size-8 text-blue-500" />}
              text={"MySQL"}
            />
          </div>

          {/* Experiences & Projects */}
          <div className="grid grid-cols-2 gap-12">
            {/* Experiences */}
            <div>
              <h2 className="text-lg font-semibold mt-16 mb-6">Experiences</h2>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <h4>
                    ASI Asia Pacific{" "}
                    <span className="text-sm">(Mar 2024 - Jun 2024)</span>
                  </h4>
                  <h5 className="text-sm">Software Engineer Intern</h5>
                  <p className="text-sm font-light">
                    Developed a full-stack Laravel app with TALL Stack,
                    integrated RabbitMQ, and consumed internal APIs for
                    integration.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4>
                    ASI Asia Pacific{" "}
                    <span className="text-sm">(Mar 2024 - Jun 2024)</span>
                  </h4>
                  <h5 className="text-sm">Software Engineer Intern</h5>
                  <p className="text-sm font-light">
                    Designed optimized database, developed scalable Laravel
                    RESTful API with JWT authentication and authorization.
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-lg font-semibold mt-16 mb-6">Projects</h2>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <h4>Portofolio Website</h4>
                  <p className="text-sm font-light">
                    Just a simple portofolio website using React.js and Tailwind
                    CSS. Just see it yourself.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <h4>Scrum-GSD</h4>
                  <p className="text-sm font-light">
                    Developed a simple full-stack Scrum evaluation website using
                    TALL Stack, following Laravel best practices.
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <a
                  target="_blank"
                  href="https://github.com/dzackiero?tab=repositories"
                >
                  <p className="flex items-center gap-2  border-b-2 border-b-neutral-100 w-fit text-sm">
                    my other projects <FaArrowRight />
                  </p>
                </a>
              </div>
            </div>
          </div>

          <footer className="border-t border-t-neutral-400 mt-12">
            <div className="py-2 flex justify-between items-center">
              <p className="text-xs text-neutral-200 text-right">
                dzakynashshar
              </p>
              <div className="text-xs flex gap-3">
                <a href="" className="hover:text-gray-200 flex items-start">
                  email
                  <LuArrowUpRight />
                </a>
                <a href="" className="hover:text-gray-200 flex items-start">
                  github
                  <LuArrowUpRight />
                </a>
                <a href="" className="hover:text-gray-200 flex items-start">
                  linkedin
                  <LuArrowUpRight />
                </a>
                <a href="" className="hover:text-gray-200 flex items-start">
                  spotify
                  <LuArrowUpRight />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}

export default App;
