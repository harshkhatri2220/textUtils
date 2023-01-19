// their are some complications for hosting in github if we use router therefore for now we remov about
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

// import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  } 

  const handleMode = () =>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='black'
      showAlert( "Dark mode is on" ,"success" )
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white'
      showAlert( "light mode is on" ,"success" )

    }
  }
  

  return (
    <>
    
      {/* <Router> */}
     <Navbar title="TextUtils" mode={mode} handleMode={handleMode} />
     <Alert alert={alert}/>
     <div className="container my-3">
     <Textform heading="Enter the Text to analyze" mode={mode}/>
{/*       
        <Routes>
        <Route exact path='/' element={<Textform heading="Enter the Text to analyze" mode={mode}/>}/>
        <Route exact path='/About' element={<About/>}/>
        </Routes> */}
      
      </div>
      {/* </Router> */}
    </>
  );

}

export default App;
