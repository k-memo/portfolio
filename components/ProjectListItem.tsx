"use client";
import { GoTriangleDown } from "react-icons/go";

const toggleContent = (listItem: HTMLElement) => {
  let collapseIcon = listItem.querySelector(".item-header > .collapseIcon");

  // Select all content elements
  let allItems = document.querySelectorAll(".list-item");

  allItems.forEach((item) => {
    if (item !== listItem) {
      item.classList.remove("active");
    }
  });

  listItem.classList.toggle("active");

  if (listItem.classList.contains("active")) {
    let blockProperty: ScrollLogicalPosition =
      window.innerWidth <= 600 ? "start" : "center";

    setTimeout(() => {
      listItem.scrollIntoView({
        behavior: "smooth",
        block: blockProperty,
      });
    }, 500);
  }
};

const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const listItem = (event.currentTarget as HTMLElement).parentElement;
  if (listItem) {
    toggleContent(listItem);
  }
};

export default function ProjectListItem() {
  return (
    <li className="list-item">
      <div className="item-header" onClick={handleClick}>
        <GoTriangleDown className="collapseIcon" height={24} />
        <p>FHODDS: Bet on anything</p>
      </div>
      <div className="item-content">
        <div className="pagelet">
          <h3>Summary</h3>
          <p>
            <strong>Quick Lore:</strong> The idea to this project is somewhat
            funny. In our 2nd semester we had a class called game development
            and we made in total 3 exams. However we never got to know our marks
            for those exams until almost 6 months later. During that time my
            friends and I were making bets on when we will recieve our marks. I
            soon come to realize that this would be a gread idea for a project
            and together with my friend Xaver did this as our final project in
            the 3rd semester.
            <br />
            With FHODDS you can bet on virtually anything! Create your own bets,
            join others, wager, and win credits. FHODDS is made for university
            students who seek the thrill of gambling without any repercussions
            (you bet with your ECTS).
            <br />
          </p>

          <h3>Stack</h3>
          <div className="stack-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
            </svg>
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-3 -2.95 30.02 29.9"
            >
              <title>Ruby</title>
              <path d="M20.156.083c3.033.525 3.893 2.598 3.829 4.77L24 4.822 22.635 22.71 4.89 23.926h.016C3.433 23.864.15 23.729 0 19.139l1.645-3 2.819 6.586.503 1.172 2.805-9.144-.03.007.016-.03 9.255 2.956-1.396-5.431-.99-3.9 8.82-.569-.615-.51L16.5 2.114 20.159.073l-.003.01zM0 19.089zM5.13 5.073c3.561-3.533 8.157-5.621 9.922-3.84 1.762 1.777-.105 6.105-3.673 9.636-3.563 3.532-8.103 5.734-9.864 3.957-1.766-1.777.045-6.217 3.612-9.75l.003-.003z" />
            </svg>
          </div>
        </div>
        <div className="pagelet">
          <h3>Dashboard</h3>
          <img
            src="assets/images/fhodds/fhodds_dashboard.png"
            alt="dashboard of fhodds"
          />
        </div>
        <div className="pagelet">
          <h3>Editor</h3>
          <img
            src="assets/images/fhodds/fhodds_betting.png"
            alt="bet form of fhodds"
          />
        </div>
      </div>
    </li>
  );
}
