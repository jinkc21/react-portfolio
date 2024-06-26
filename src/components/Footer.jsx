import React from "react";

function Footer() {
  return (
    <footer className="dark:bg-gray-800 text-sky-600 text-center py-4">
        <a href="#top">Back to top</a>
      <p>&copy; 2024 Jinkc21</p>
       <br/>
       <a className="bg-sky-500 hover:bg-sky-600 text-gray-800 font-bold py-2 px-4 rounded-full md:text-md" href="https://github.com/jinkc21"> GitHub </a>
      <a className="bg-sky-500 hover:bg-sky-600 text-gray-800 font-bold py-2 px-4 rounded-full md:text-md" href="https://github.com/jinkc21" href="www.linkedin.com/in/jin-choe-61906a2ab"> LinkedIn </a>
    </footer>
  );
}

export default Footer;