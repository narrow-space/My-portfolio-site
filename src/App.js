import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { useEffect, useState } from 'react';
import { Heart } from "react-awesome-spinners";


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 6000);
  }, []);
  return (
    <div  className="App">
   {loading ? <div style={{"textAlign":"center","backgroundColor":"#18181d","height":"100vh"}}>
     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><Heart color="#DC143C"></Heart> </div>:
        
        <Home></Home>
     
 }
    </div>
  );
}

export default App;
