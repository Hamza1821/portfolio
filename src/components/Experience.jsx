"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import IIIT_KOTA from "../assets/IIIT_Kota.png";
import matrix from "../assets/matrix_innovation_logo.jpg";
import hacktoberfest from '../assets/hf2.webp'
import jp from '../assets/jp.avif'


import {
  Hackthechain,
  GSSOC,
  IITB,
  Sports,
  IIITians,
  GDSC,
  KDE,
  Oppia,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
           <Exp_prop
              img={matrix}
              title="Matrix Innovations"
              subtitle="Backend Developer Intern"
              date="Dec-2024 - present"
              para="- Contributing to backend development of Amorr and IRLSocial. Gaining experience in deployment, microservice architecture, Jest testing, and security testing to enhance system performance and security "
            />
            <Exp_prop
              img={GSSOC}
              title="GSSoC'24-Extended"
              subtitle="Contributor"
              date="1st-oct-2024- 10th-nov-2024"
              para="- Contributed in open source repositories like Algo, master-web-development, Imagine-AI "
            />
            <Exp_prop
              img={hacktoberfest}
              title="HacktoberFest "
              subtitle="Contributor"
              date="0ct-2023, oct-2024"
              para="- Contributed in open source repositories like DSA-hub, Algo-master, etc "
            />
            <Exp_prop
              img={jp}
              title="JP-Morgan "
              subtitle="SWE Virtual internship at Forage"
              date="aug-2024"
              para="- created a 2d graph for data visualization "
            />
            
            
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
