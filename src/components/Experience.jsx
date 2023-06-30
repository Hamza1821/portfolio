import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  Hackthechain,
  GSSOC,
  IITB,
  Sports,
  IIITians,
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
              img={IIITians}
              title="IIITians Network"
              subtitle="Social Media Team"
              date="April 2023 - present"
              para="- Maintained Instagram and LinkedIn with an amazing team of IIITians across India."
            />
            <Exp_prop
              img={Sports}
              title="Sports Council, IIIT Kota"
              subtitle="Technical Team"
              date="June 2023 - present"
              para="- Created webpages and removed bugs for the official Sports website of IIIT Kota."
            />
            <Exp_prop
              img={GSSOC}
              title="GSSoC'23 Contributor"
              subtitle="Contributor"
              date="June 2023 - present"
              para="- Contributed in open source repositories like GameSphere, OpenTech, Moksh, Community Website etc. "
            />
            <Exp_prop
              img={Hackthechain}
              title="Hack The Chain Hackathon, IIIT Kota"
              subtitle="Organizing Team"
              date="March 2023"
              para="- Helped in Organizing the first ever hybrid Hackathon of IIIT Kota organized by GDSC IIITK and Codebase Club. "
            />
            <Exp_prop
              img={IITB}
              title="IIT Bombay Techfest 2016"
              subtitle="Junior Participant"
              date="December 2016"
              para="- Created a solar energy based three-in-one project which included a Mobile Charger, Mini Fan and a Mini Centrifuge. "
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;