import Image from "next/image";
import styles from "./page.module.css";
import HomeSection from "../../components/HomeSection";
import ProjectsSection from "../../components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <ProjectsSection />
    </main>
  );
}
