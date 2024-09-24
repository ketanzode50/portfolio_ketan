import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home'
import Contact from './Pages/Contact'
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
          <Route path ="/" exact element ={<Home/>}></Route>
          <Route path ="/contact" exact element ={<Contact/>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
