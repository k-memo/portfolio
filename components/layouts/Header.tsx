import Link from "next/link";
import GatoWink from "../GatoRiv";

export default function Header() {
  return (
    <header>
      <Link href="/" id="header-logo">
        <GatoWink stateMachines="wink" />
      </Link>
      <nav className="mobile-invisible">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <nav id="navbar" className="navigation desktop-invisible">
        <input id="drop-toggle" type="checkbox" />
        <label className="hamburger" htmlFor="drop-toggle">
          <div className="top" id="top"></div>
          <div className="meat" id="meat"></div>
        </label>
        <nav className="dropdown" id="dropdown">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </nav>
    </header>
  );
}
