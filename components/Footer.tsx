import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact">
      <div id="footer-content">
        <h2>Contact</h2>
        <Link href="mailto:mehmet.kisacik12@gmail.com">
          mehmet.kisacik12@gmail.com
        </Link>
        <Link href="https://www.linkedin.com/in/mehmetki">LinkedIn</Link>
        <p>&copy; 2023 Mehmet Kisacik. All rights reserved.</p>
        <p>
          This website was built using next.js. Here is the source code:{" "}
          <Link
            className="source-link"
            href="https://github.com/k-memo/portfolio"
          >
            Github
          </Link>
        </p>
      </div>
    </footer>
  );
}
