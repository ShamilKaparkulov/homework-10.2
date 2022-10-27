
import { useEffect } from 'react';
import { useRef } from 'react';
import './App.css';

function App() {

  const colorRef = useRef()
  
  useEffect(() => {
    const timeId = setInterval(() => {
        
      if (colorRef.current.style.backgroundColor === 'red') {
        return colorRef.current.style.backgroundColor ='blue'
      }
      if(colorRef.current.style.backgroundColor === 'blue'){
        return colorRef.current.style.backgroundColor = 'red'
      }
      
    }, 1000);
    return () => clearInterval(timeId)
  },[])
  
 
    return(
    <div style={{ }} >
    <div style={{backgroundColor:'red',  width:'300px',height:'300px',margin:'auto',borderRadius:'50% solid'}  } ref={colorRef}></div>
 
    </div>
  );
}

export default App;

