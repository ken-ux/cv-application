import { useState } from "react";
import Section from "./components/Section";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PreviewCV from "./components/PreviewCV";
import "./styles/App.css";

function App() {
  const [contact, setContact] = useState({
    name: "John Doe",
    email: "johndoe@gmail.com",
    phoneNumber: "123-456-7890",
  });

  return (
    <>
      <div>
        <Section title="Contact">
          <Contact submitForm={setContact} />
        </Section>
        <Section title="Education">
          <Education />
        </Section>
        <Section title="Experience">
          <Experience />
        </Section>
      </div>
      <PreviewCV contact={contact}></PreviewCV>
    </>
  );
}

export default App;
