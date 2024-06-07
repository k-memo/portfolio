import Image from "next/image";
import styles from "./page.module.css";
import HomeSection from "../../components/sections/HomeSection";
import ProjectsSection from "../../components/sections/ProjectsSection";
import CvSection from "../../components/sections/CvSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <ProjectsSection />
      <CvSection />
    </main>
  );
}
