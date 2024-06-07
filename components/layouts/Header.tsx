import Link from "next/link";
import GatoWink from "../GatoRiv";
import { RiGithubFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <Link href="/" id="header-logo">
        <GatoWink stateMachines="wink" />
      </Link>
      <nav className="mobile-invisible">
        <ul>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <Link href="https://github.com/k-memo">
              <RiGithubFill size={32} />
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/mehmetki">
              <FaLinkedin size={32} />
            </Link>
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
          <Link href="#home">Home</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
          <Link href="https://github.com/k-memo">
            <RiGithubFill size={32} />
          </Link>
          <Link href="https://linkedin.com/in/mehmetki">
            <FaLinkedin size={32} />
          </Link>
        </nav>
      </nav>
    </header>
  );
}
