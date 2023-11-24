import './App.css';
import { Header } from './Components/header';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { TodoList } from './Pages/TodoList';
import { Login } from './Pages/Login';
import { About } from './Pages/About';
import { Logout } from './Pages/Logout';
import { Main } from './Components/main';
// import { Context } from './Components/Context';
// import { Memo } from './Components/Memo';
// import { Callback } from './Components/Callback';



function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route index element={<Header/>}/>
        <Route path='/todolist' element={<TodoList/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
      <Main/>
      {/* <Context/>
      <Memo/>
      <Callback/> */}
      </Router>
    </div>

  );
}

export default App;
