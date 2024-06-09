"use client";

import { useEffect } from "react";

export default function HomeSection() {
  useEffect(() => {
    const moveEyes = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchor = document.getElementById("avatar");
      const rekt = anchor?.getBoundingClientRect();

      if (!rekt) return;

      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

      const eyes = document.querySelectorAll(".eye") as NodeListOf<HTMLElement>;

      eyes.forEach((eye) => {
        eye.style.transform = `rotate(${-45 + angleDeg}deg)`;
      });
    };

    document.addEventListener("mousemove", moveEyes);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", moveEyes);
    };
  }, []);

  const angle = (cx: number, cy: number, ex: number, ey: number): number => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;

    return deg as number;
  };

  return (
    <section id="home">
      <div id="herotext">
        <h2>
          <span className="gray light">Hi, I&apos;m</span> Mehmet Kisacik
        </h2>
        <p>
          <span className="gray light">I&apos;m a </span> Web Developer
          <span className="gray light"> and</span> Designer
        </p>
        <a href="mailto:mehmet.kisacik12@gmail.com" className="button-big">
          Contact Me
        </a>
      </div>
      <div id="heroimage-container">
        <img src="/images/avatar.png" alt="profile image" id="avatar" />
        <div id="eyes">
          <div
            className="eye"
            d-side="left"
            style={{ left: "97px", top: "138px" }}
          >
            <div className="pupil"></div>
          </div>
          <div
            className="eye"
            d-side="right"
            style={{ left: "176px", top: "138px" }}
          >
            <div className="pupil"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
