// src/Concept.js
import React from 'react';

const Concept = ({ title, image, description }) => (
  <div class="concept">
    <img src={image} alt={title} className="concept-image" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default Concept;