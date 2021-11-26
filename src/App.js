
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled!', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled!', 'success');
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">

          {/* <Routes> */}
            {/* <Route exact path='/about' element={<About mode={mode}/>} /> */}

            {/* <Route exact path='/' element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Space" mode={mode} showAlert={showAlert} />} /> */}
            <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Space" mode={mode} showAlert={showAlert} />

          {/* </Routes> */}

        </div>
      {/* </Router> */}
    </>
  );
}


export default App;

