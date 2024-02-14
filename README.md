# cv-application

This is a browser-based application that populates user-provided information into a formatted CV/resume. The main goals of this project was to practice basic state management in React. This project can be found at the following link, deployed via Netlify: <https://bejewelled-sunflower-6c7688.netlify.app/>

## Lessons Learned

- Conditionally rendering attributes, such as adding the `disabled` attribute to the input element of a degree or job's end year if the user indicated they are still in school or at their current job.
- Using Vite to spin up a quick React template.
- Understanding use cases and examples of controlled vs. uncontrolled components. I was receiving a console warning when I was using a hook to determine whether a checkbox was checked in an input element. The fix was using `defaultChecked`, which lets React control form data, instead of `checked`, which lets the DOM handle form data.
- Choosing a state structure that avoids contradiction, redundancy, duplication, or deeply nested states according to the [React documentation on Choosing the State Structure](https://react.dev/learn/choosing-the-state-structure).
- Defining prop types on components.
- Deploying projects via a PaaS.

## Future Considerations

- Some preparation was made in the codebase to account for rendering multiple schools or jobs that the user inputs in their CV. However, this feature was not implemented to keep things simple. I do plan on revisiting this project at a later time to add functionality for this!
- Another potential feature for implementation is allowing the user to export their CV from the website as a PDF.
- Lastly, adding a library or custom code for form validation is vital for correctly alerting any input errors. To prevent form submissions from clearing fields or refreshing the page, `preventDefault()` was used on all submit buttons. While this put a bandage on the issue of unwanted form re-renders, it also disabled native HTML form validation.
