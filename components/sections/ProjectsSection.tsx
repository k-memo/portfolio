import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import Pagelet from "../Pagelet";
import ProjectListItem from "../ProjectListItem";
import { RiJavascriptFill } from "react-icons/ri";
import { SiArduino, SiAutocad, SiPhp, SiRubyonrails } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        <h3>WEB DEVELOPMENT</h3>
        <ul className="project-list">
          <ProjectListItem title="[FHODDS] Bet on anything">
            <div className="item-content">
              <Pagelet title="Summary">
                <p>
                  <strong>Quick Lore:</strong> The idea to this project is
                  somewhat funny. In our 2nd semester we had a class called game
                  development and we made in total 3 exams. However we never got
                  to know our marks for those exams until almost 6 months later.
                  During that time my friends and I were making bets on when we
                  will recieve our marks. I soon come to realize that this would
                  be a gread idea for a project and together with my friend
                  Xaver did this as our final project in the 3rd semester.
                </p>

                <p>
                  With FHODDS you can bet on virtually anything! Create your own
                  bets, join others, wager, and win credits. FHODDS is made for
                  university students who seek the thrill of gambling without
                  any repercussions (you bet with your ECTS).
                </p>

                <h3>Stack</h3>
                <div className="stack-bar">
                  <FaHtml5 size={50} />
                  <FaCss3Alt size={50} />
                  <RiJavascriptFill size={50} />
                  <SiRubyonrails size={50} />
                </div>
              </Pagelet>
              <Pagelet title="Dashboard">
                <img
                  src="images/fhodds/fhodds_dashboard.png"
                  alt="dashboard of fhodds"
                />
              </Pagelet>
              <Pagelet title="Editor">
                <img
                  src="images/fhodds/fhodds_betting.png"
                  alt="bet form of fhodds"
                />
              </Pagelet>
            </div>
          </ProjectListItem>
          <ProjectListItem title="[FLASHY] A Flashcard Web Application">
            <div className="item-content">
              <Pagelet title="Summary">
                <p>
                  Flashy is a web application designed for creating and sharing
                  flashcard decks. It provides users with the ability to
                  collaborate on decks and includes a Pomodoro timer feature to
                  aid in learning the created decks. The application leverages
                  various technologies and APIs to deliver a seamless user
                  experience.
                </p>

                <h3>Stack</h3>
                <div className="stack-bar">
                  <FaHtml5 size={50} />
                  <FaCss3Alt size={50} />
                  <RiJavascriptFill size={50} />
                  <SiPhp size={50} />
                </div>
              </Pagelet>
              <Pagelet title="Dashboard">
                <img
                  src="/images/flashy/dashboard_flashy.png"
                  alt="dashboard of flashy"
                />
              </Pagelet>
              <Pagelet title="Editor">
                <img
                  src="/images/flashy/editor_flashy.png"
                  alt="editor of flashy"
                />
              </Pagelet>
              <Pagelet title="Learn Mode">
                <img
                  src="/images/flashy/learn_mode_flashy.png"
                  alt="learn mode of flashy"
                />
              </Pagelet>
            </div>
          </ProjectListItem>
          <ProjectListItem title="[MOONDROP] (Redesign)">
            <div className="item-content">
              <Pagelet title="Summary">
                <p>
                  This is a redesign for Moondrop, a headphone manufacturer. The
                  project focuses on an intuitive, modern design, interactive
                  product pages, and seamless responsiveness. Please note that
                  all visual elements, including product images, are the
                  property of Moondrop, used here for portfolio purposes only.
                </p>

                <h3>Stack</h3>
                <div className="stack-bar">
                  <PiFigmaLogoFill size={50} />
                </div>
              </Pagelet>
              <Pagelet title="Logo">
                <img
                  src="/images/moondrop/moondrop_logo_redesign.png"
                  alt="logo of moondrop"
                />
              </Pagelet>
              <Pagelet title="UI">
                <img
                  src="/images/moondrop/moondrop_ui.png"
                  alt="ui of moondrop"
                />
              </Pagelet>
              <Pagelet title="WIREFRAMES">
                <img
                  src="/images/moondrop/moondrop_wireframes.png"
                  alt="wireframe of moondrop"
                />
                <img
                  src="/images/moondrop/moondrop_wireframes-1.png"
                  alt="wireframe of moondrop"
                />
                <img
                  src="/images/moondrop/moondrop_wireframes-2.png"
                  alt="wireframe of moondrop"
                />
              </Pagelet>
            </div>
          </ProjectListItem>
        </ul>
      </div>

      <div>
        <h3>INDUSTRIAL</h3>
        <ul className="project-list">
          <ProjectListItem title="[STICK-1]">
            <div className="item-content">
              <Pagelet title="Summary">
                <p>
                  stick is a custom fighting stick that I made for playing
                  Tekken with my buddy Edvin. I am not a pro by any means, but I
                  love fighting games and using gamepads with a big joystick and
                  buttons.
                </p>
                <p>
                  I modeled and 3D-printed the shell via Fusion 360 and my
                  beloved Anycubic Chiron. I used Arduino Uno as the logic board
                  using the UnoJoy Github repo. All in all it was a very fun
                  project and my first time using an Arduino Board!
                </p>

                <h3>Stack</h3>
                <div className="stack-bar">
                  <SiArduino size={50} />
                  <SiAutocad size={50} />
                </div>
              </Pagelet>
              <Pagelet>
                <img src="/images/stick/stick_1.jpg" alt="fighting stick" />
              </Pagelet>
              <Pagelet>
                <img src="/images/stick/stick_2.jpg" alt="fighting stick" />
              </Pagelet>
              <Pagelet>
                <video height="800px" controls>
                  <source src="/videos/stick/stick.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Pagelet>
            </div>
          </ProjectListItem>
        </ul>
      </div>
    </section>
  );
}
