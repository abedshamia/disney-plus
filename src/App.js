import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Detail from './components/Detail';
import Login from './components/Login';
import {useSelector} from 'react-redux'
function App() {
  const user = useSelector(state => state.user)
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path="/movies/:id" element={<Detail />} />
          {
            user.name ? (
              <Route path="/" element={<Home />} />
            ) : (
              <Route path="/" element={<Login />} />
            )
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
