import Nav from "./components/header/Nav";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Tabs from "./components/tabs/Tabs";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Tabs />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
