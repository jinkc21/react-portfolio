// import React from "react";

// function Contact() {
//   return (
//     <div id="contact" className="text-sky-600">
//       <h3>Contact</h3>
//       <p>Email: 
//         <a href="mailto:
//             jinch0e@hotmail.com"> jinch0e@hotmail.com</a>
//                 <br />
//             GitHub:<a href="https://github.com/jinkc21"> jinkc21</a>
//         </p>
//     </div>
//     );
// }

// export default Contact;


import "../App.css";
import { useEffect } from "react";
import ContactForm from "./ContactForm";

function Contact() {
   useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";

      document.head.appendChild(stylesheet);
    }
  }, []);

  return (
    <div id="contact">
      <h1 className="text-2xl md:text-4xl mb-40 md:mb-3 text-sky-600 font-semibold mt-40">Contact Me</h1>
          <div className="py-6 max-w-md mx-auto">
          <ContactForm />
        </div>
       </div>
  );
}

export default Contact;