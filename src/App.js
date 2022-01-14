import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.scss';
import Page from './components/Page'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/home" element={<Page />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
