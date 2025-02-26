import {
  HTML,
  CSS,
  Github,
  Git,
  Vite,
  TailwindCSS,
  react,
  Python,
  Javascript,
  CPP,
  C,
  Vue,
  aws,
  jest,
  scikit,
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";
import java from '../assets/java.png'
import spring from '../assets/spring.png'
import node from '../assets/node.png'
import sql from '../assets/mysql.png'
import docker from '../assets/docker.png'
import kubernates from '../assets/kubernates.png'


const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="EXPERIENCE p-5 mx-20 mb-10  font-['Poppins']  max-sm:p-2 max-sm:mx-5">
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl ">
          SKILLS
        </h1>
        <div
          className="IMG grid place-content-center p-5 grid-cols-3 gap-4 max-sm:p-2 mt-10"
          data-aos="zoom-out-up"
        >
          <Image img={HTML}></Image>
          <Image img={CSS}></Image>
          <Image img={Javascript}></Image>
          <Image img={react}></Image>
          <Image img={node}></Image>
          <Image img={sql}></Image>
          <Image img={spring}></Image>
          <Image img={java}></Image>
          <Image img={Python}></Image>
          <Image img={docker}></Image>
          <Image img={kubernates}></Image>
          <Image img={Github}></Image>
          <Image img={aws}></Image>
          <Image img={jest}></Image>
          <Image img={scikit}></Image>
          
        </div>
      </section>
    </>
  );
};
export default Skills;
