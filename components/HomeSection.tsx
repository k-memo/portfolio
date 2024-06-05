import Image from "next/image";

export default function HomeSection() {
  return (
    <section id="home">
      <div id="herotext">
        <h2>
          <span className="gray light">Hi, I&apos;m</span> Mehmet Kisacik
        </h2>
        <p>
          <span className="gray light">I&apos;m a: </span> Web Developer
          <span className="gray light">and</span> Designer
        </p>
        <a href="mailto:mehmet.kisacik12@gmail.com" className="button-big">
          Contact Me
        </a>
      </div>
      <div id="heroimage-container">
        <img src="/images/memo_1.jpg" alt="profile image" />
      </div>
    </section>
  );
}
