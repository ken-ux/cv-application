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
      id: 1,
      schoolName: "College of Imaginary",
      degree: "Degree in Major",
      startYear: "2020-01",
      endYear: "2024-01",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: 1,
      companyName: "Fake Company",
      position: "Business Analyst",
      description: "Analyzed some business.",
      startYear: "2021-03",
      endYear: "2022-08",
    },
  ]);

  return (
    <>
      <div>
        <Section title="Contact">
          <Contact submitForm={setContact} contact={contact} />
        </Section>
        <Section title="Education">
          <Education submitForm={setEducation} education={education} />
        </Section>
        <Section title="Experience">
          <Experience submitForm={setExperience} experience={experience[0]} />
        </Section>
      </div>
      <PreviewCV
        contact={contact}
        education={education}
        experience={experience}
      ></PreviewCV>
    </>
  );
}

export default App;
