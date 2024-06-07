import Link from "next/link";
import GatoWink from "../GatoRiv";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-container">
        <div id="footer-content">
          <h2>Contact</h2>
          <Link href="mailto:mehmet.kisacik12@gmail.com">
            mehmet.kisacik12@gmail.com
          </Link>
          <Link href="https://www.linkedin.com/in/mehmetki">LinkedIn</Link>
          <p>&copy; 2023 Mehmet Kisacik. All rights reserved. </p>
          <p>
            This website was built using next.js.
            <br />
            View the Source Code here --&gt; {"  "}
            <Link
              className="source-link"
              href="https://github.com/k-memo/portfolio"
            >
              SOURCE
            </Link>
          </p>
        </div>
        <div className="footer-gato">
          <GatoWink stateMachines="vibe" />
        </div>
      </div>
    </footer>
  );
}
