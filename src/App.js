import React, { useState } from 'react';
import data from './components/data';
import List from './components/List';

function App() {
  return (
    <main>
      <section className="container">
        <h3>0 birthdays today</h3>
        <List />
        <button onClick={() => console.log('beef')}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
