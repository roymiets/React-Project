
import React from 'react';
import Header from './Header';
import CoreConcepts from './coreConcepts';
import Examples from './Example';
import './App.css'

function App() {
  return (
    // <div className="App">
    
    // </div>
  //   <Router>
  //   <div className="App">
  //   <Greeting name="React Beginner" />
  //    <Button></Button>
  //    <Counter />
  //    <Timer />
  //     <header className="App-header">
  //       <h1>Welcome to My First React App!</h1>
  //       <nav>
  //         <ul>
  //           <li><Link to="/">Home</Link></li>
  //           <li><Link to="/about">About</Link></li>
  //         </ul>
  //       </nav>
  //     </header>
  //     <main>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/about" element={<About />} />
  //       </Routes>
  //     </main>
  //   </div>
  // </Router>
  <div className="App">
  <Header />
  <CoreConcepts />
  <Examples />
</div>
  );
}

export default App;
