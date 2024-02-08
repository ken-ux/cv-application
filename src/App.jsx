import Section from "./components/Section";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PreviewCV from "./components/PreviewCV";
import "./styles/App.css";

function App() {
  return (
    <>
      <div>
        <Section title="Contact">
          <Contact />
        </Section>
        <Section title="Education">
          <Education />
        </Section>
        <Section title="Experience">
          <Experience />
        </Section>
      </div>
      <PreviewCV></PreviewCV>
    </>
  );
}

export default App;
