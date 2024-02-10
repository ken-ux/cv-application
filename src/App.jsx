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

  const [education, setEducation] = useState([
    {
      schoolName: "College of Imaginary",
      degree: "Degree in Major",
      startYear: "2020-01",
      endYear: "2024-01",
    },
  ]);

  return (
    <>
      <div>
        <Section title="Contact">
          <Contact submitForm={setContact} />
        </Section>
        <Section title="Education">
          <Education submitForm={setEducation} />
        </Section>
        <Section title="Experience">
          <Experience />
        </Section>
      </div>
      <PreviewCV contact={contact} education={education}></PreviewCV>
    </>
  );
}

export default App;
