import CssBaseline from "@mui/material/CSSBaseline";
import './App.css'
import TodoList from "./TodoList";

function App() {
  return (
    <>
      <CssBaseline />
      <h1>Todos</h1>
      <TodoList />
    </>
  )
}

export default App