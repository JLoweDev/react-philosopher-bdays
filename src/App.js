import React, { useState, useEffect } from 'react';
import List from './components/List';

function App() {
  const [jsonPeople, setJsonPeople] = useState([])

  const todaysDate = Date.now();
  const bDay = new Date('Jan 03, 2012')

  console.log(todaysDate)
  console.log(bDay)

  useEffect(() => {
    const getData = async () => {
      const dataFromJson = await fetchTasks()
      setJsonPeople(dataFromJson)
    }

    getData()
  }, [])
  
  const fetchTasks = async () => {
    const res = await fetch('run_results.json')
    const myJson = await res.json()

    return myJson.philosophers
  }

  return (
    <main>
      <section className="container">
        <h3>{jsonPeople.length} birthdays today</h3>
        <List people={jsonPeople} />
        <button onClick={() => console.log('beef')}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
