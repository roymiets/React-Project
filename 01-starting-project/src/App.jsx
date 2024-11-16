import Header from "./Header";
import CoreConcept from "./CoreConcept";
import { coreData } from './data';
import Example from './Example'
import { useState } from "react";

function App() {
 
  const [title, setTitle] = useState();
  let tabContent = "";
  function handleClick(title1) {
    
    setTitle(title1);
    console.log(title);
  }

  // if (title) {
  //   if (title === "Components") {
  //     // tabContent = "<p>Components example content...</p>)";
  //     tabContent = coreData.title;
  //   }
  //   else if (title === "JSX") {
  //     tabContent = "<p>JSX example content...</p>";
  //   }
  //   else if (title === "Props") {
  //     tabContent = "<p>Props example content...</p>";
  //   } else if (title === "State") {
  //     tabContent = "<p>State example content...</p>";
  //   }
  // }


  // const contentMap = {
  //   "Components": "<p>Components example content...</p>",
  //   "JSX": "<p>JSX example content...</p>",
  //   "Props": "<p>Props example content...</p>",
  //   "State": "<p>State example content...</p>"
  // };
  //  tabContent = contentMap[title] || "<p>Default content...</p>";


  const selectedConcept = coreData.find(concept => concept.title === title);
   tabContent = selectedConcept ? `<p>${selectedConcept.description}</p>` : "select the button to the content";
  return (
    <div>
      <Header />
      <main>
      <section>
        <h2>Core Concepts</h2>
        <ul id="core-concepts">
        
            {coreData.map((item, index) => (
              <CoreConcept
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          
        </ul>
      </section>
   
      <h2>Examples</h2>
<div id="examples">
  <menu>
    <Example handleClick={() => handleClick("Components")}>Components</Example>
    <Example handleClick={() => handleClick("JSX")}>JSX</Example>
    <Example handleClick={() => handleClick("Props")}>Props</Example>
    <Example handleClick={() => handleClick("State")}>State</Example>
  </menu>
</div>
      {tabContent}
      </main>
    </div>
  );
}

export default App;
