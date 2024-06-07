"use client";
import { GoTriangleDown } from "react-icons/go";
import GatoWink from "./GatoRiv";

const toggleContent = (listItem: HTMLElement) => {
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

interface IProjectListItemProps {
  title?: string;
  backgroundImagePath?: string;
  children: React.ReactNode;
}

export default function ProjectListItem({
  title,
  children,
}: IProjectListItemProps) {
  return (
    <li className="list-item">
      <div className="item-header" onClick={handleClick}>
        <GoTriangleDown className="collapseIcon" height={24} />
        <p>{title}</p>
      </div>
      {children}
    </li>
  );
}
