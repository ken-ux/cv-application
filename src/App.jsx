import Section from "./components/Section";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/App.css";

function App() {
  return (
    <>
      <Section title="Contact">
        <Contact />
      </Section>
      <Section title="Education">
        <Education />
      </Section>
      <Section title="Experience">
        <Experience />
      </Section>
    </>
  );
}

export default App;
