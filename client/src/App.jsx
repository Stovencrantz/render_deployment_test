import {useEffect} from "react";

function App() {

  useEffect(() => {
    async function getTodos() {
      const res = await fetch("http://localhost:2000/api/todos");
      const todos = await res.json();

      console.log(todos)
    }
    getTodos()
  },[]) 


  return (
    <main className="container">
      <h1>Awsesome Todos</h1>
    </main>
  );
}

export default App;
