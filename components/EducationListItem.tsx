"use client";
import { GoTriangleDown } from "react-icons/go";

interface IEducationListItemProps {
  title: string;
  from: string;
  to: string;
  institution: string;
  city: string;
  children?: React.ReactNode;
}

export default function EducationListItem({
  title,
  from,
  to,
  institution,
  city,
  children,
}: IEducationListItemProps) {
  return (
    <div className="edu-list-item">
      <div className="apart">
        <h4>{title}</h4>
        <p className="bold">
          [{from} - {to}]
        </p>
      </div>
      <p className="subheading">
        {institution} , {city}
      </p>
      {children}
    </div>
  );
}
