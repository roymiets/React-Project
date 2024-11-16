// src/CoreConcepts.js
import React from 'react';
import Concept from './concept';



const CoreConcepts = () => (
    <section>
    <h2>Core Concepts</h2>
    <div className="concepts">
      <Concept title="Components" image="/assets/components.png" description="The core UI building block - compose the user interface by combining multiple components." />
      <Concept title="JSX" image="/assets/jsx-ui.png" description="Return (potentially dynamic) HTML-like code to define the actual markup that will be rendered." />
      <Concept title="Props" image="/assets/config.png" description="Passing input data to components, making them configurable and reusable." />
      <Concept title="State" image="/assets/state-mgmt.png" description="React-managed data which, when changed, causes the component to re-render and the UI to update." />
    </div>
  </section>
);

export default CoreConcepts;
