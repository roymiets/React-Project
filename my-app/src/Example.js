
// src/Examples.js
import React, { useState } from 'react';

const Examples = () => {
  const [activeTab, setActiveTab] = useState('Components');
 
  return (
    <section>
      <h2>Examples</h2>
      <div className="tabs">
        {['Components', 'JSX','props', 'State'].map(tab => (
         <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? 'active' : ''}>
                    
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {activeTab === 'Components' && <p>Components example content...</p>}
        {activeTab === 'JSX' && <p>JSX example content...</p>}
        {activeTab === 'props' && <p>Components example content...</p>}
        {activeTab === 'State' && <p>State example content...</p>}
      </div>
    </section>
  );
};

export default Examples;
