import {
  FaCss3Alt,
  FaEnvelope,
  FaGlobe,
  FaHouse,
  FaHtml5,
  FaLinkedin,
} from "react-icons/fa6";
import EducationListItem from "../EducationListItem";
import {
  RiAngularjsFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiReactjsFill,
  RiWordpressFill,
} from "react-icons/ri";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiArduino,
  SiAutocad,
  SiBlender,
  SiPhp,
  SiRubyonrails,
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { PiFigmaLogoFill } from "react-icons/pi";

export default function CvSection() {
  return (
    <section id="about">
      <h2>About me</h2>
      <p>
        <span style={{ fontSize: "2rem", fontWeight: "600" }}>
          <span className="hand">👋</span> Hi there!
        </span>
        <br />
        <br />
        I&apos;m <strong>Mehmet</strong>, a passionate
        <strong>web and mobile developer</strong> currently pursuing a degree in
        Computer Science at the
        <strong>University of Applied Sciences Salzburg</strong>. <br />
        <br />I thrive on the intersection of technology and creativity, with a
        keen interest in industrial design. In my free time I like to design and
        create stuff on my 3D Printer.
      </p>
      <div id="cv">
        <div id="about-image-container">
          <img src="images/memo_3.jpeg" alt="full body image of memo" />
        </div>
        <div id="education">
          <h3>Education</h3>
          <div className="education-list">
            <EducationListItem
              title="BSc - MultiMediaTechnology"
              from="Sep 2022"
              to="present"
              institution="University of Applied Sciences Salzburg"
              city="Puch in Hallein - Salzburg"
            >
              <ul>
                <li>Webprogramming</li>
                <li>Objectoriented Programming</li>
                <li>Mediadesign</li>
                <li>3D Prototyping and Scripting</li>
              </ul>
            </EducationListItem>
            <EducationListItem
              title="Computer Science"
              from="Oct 2021"
              to="Sep 2022"
              institution="Paris Lodron University Salzburg"
              city="Salzburg (City) - Salzburg"
            >
              <ul>
                <li>Objectoriented Programming</li>
                <li>Computer Engineering</li>
              </ul>
            </EducationListItem>
            <EducationListItem
              title="Matura - Interior Design"
              from="Sep 2015"
              to="May 2020"
              institution="Higher Technical Education Institute Hallein"
              city="Hallein - Salzburg"
            />
          </div>
        </div>
        <div id="cv-myself">
          <h3>Personal Details</h3>
          <div className="myself-info">
            <FaHouse size={16} />
            <span>Salzburg, Austria</span>
          </div>
          <div className="myself-info">
            <FaEnvelope size={16} />
            <a href="mailto:mehmet.kisacik12@gmail.com">
              mehmet.kisacik12@gmail.com{" "}
            </a>
          </div>
          <div className="myself-info">
            <FaLinkedin size={16} />
            <a href="https://www.linkedin.com/in/mehmetki">
              www.linkedin.com/in/mehmetki
            </a>
          </div>
          <div className="myself-info">
            <FaGlobe size={16} />
            <a href="https://mekis.dev">www.mekis.dev</a>
          </div>
        </div>
        <div id="experience">
          <h3>Experience</h3>
          <div className="education-list">
            <EducationListItem
              title="Software Developer"
              from="Aug 2022"
              to="present"
              institution="Wüstenrot Technology GmbH"
              city="Salzburg (City) - Salzburg"
            >
              <ul>
                <li>Frontend Development in Angular and Designing in Figma</li>
                <li>Creating, Managing and Deploying of Openshift Services</li>
                <li>Working with SCRUM and Git</li>
                <li>Backend Development in PL/I, Java and DB2</li>
              </ul>
            </EducationListItem>
          </div>
        </div>
      </div>
      <h3>My Stack</h3>
      <h4>Frontend:</h4>
      <div className="stack-bar">
        <FaHtml5 size={50} />
        <FaCss3Alt size={50} />
        <RiJavascriptFill size={50} />
        <BiLogoTypescript size={50} />
        <RiAngularjsFill size={50} />
        <RiReactjsFill size={50} />
      </div>
      <h4>Backend/Fullstack/Misc:</h4>
      <div className="stack-bar">
        <RiNextjsFill size={50} />
        <SiPhp size={50} />
        <SiRubyonrails size={50} />
        <BiLogoPostgresql size={50} />
        <RiWordpressFill size={50} />
      </div>
      <h4>Software:</h4>
      <div className="stack-bar">
        <PiFigmaLogoFill size={50} />
        <SiAdobephotoshop size={50} />
        <SiAdobeillustrator size={50} />
        <SiBlender size={50} />
        <SiAutocad size={50} />
        <SiArduino size={50} />
      </div>
    </section>
  );
}
