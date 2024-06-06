import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import Pagelet from "./Pagelet";
import ProjectListItem from "./ProjectListItem";
import { RiJavascriptFill } from "react-icons/ri";
import { SiRubyonrails } from "react-icons/si";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        <h3>WEB DEVELOPMENT</h3>
        <ul className="project-list">
          <ProjectListItem
            title="FHODDS: Bet on anything"
            backgroundImagePath="/images/flashy/logo.png"
          >
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
          <ProjectListItem
            title="FHODDS: Bet on anything"
            backgroundImagePath="/images/flashy/logo.png"
          >
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
        </ul>
      </div>
    </section>
  );
}
