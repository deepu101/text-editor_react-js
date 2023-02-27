// import { useState } from "react";
import "./Appa.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from 'react';
import Alert from './components/Alert';


// import { BrowserRouter as Router, Switch, Route, exact } from 'react-router-dom';


function App() {
 const [mode, setMode] = useState('light'); //Whether dark mode is enabled opr not
 const [alert, setAlert] = useState(null);



const showAlert = (messeage, type)=>{
    setAlert({
      msg: messeage,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
}

 const  toggleMode=()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    showAlert("Dark mode has been enabled", "success")
    document.title =' Icoder - Dark mode Enabled';
    setInterval(() => {
      document.title =' Icoder - is Awesome';
    }, 2000);
    setInterval(() => {
      document.title =' Install Icoder now';
    }, 1500);

}else{
  setMode('light');
  document.body.style.backgroundColor = 'white'
  showAlert("Light mode has been enabled", "success")
  document.title =' Icoder - light mode Enabled'
}
}
 return (
    <>
     {/* <Router> */}
     <Navbar title="Icoder  " mode={mode} toggleMode={ toggleMode }/>
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter to text to analyze below" mode={mode} />
          {/* </Route>
        </Switch> */}
       
     
      </div>
        {/* </Router> */}
    </>
  );
}

export default App;
