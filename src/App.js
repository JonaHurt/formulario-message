import { useState } from 'react';
import './App.css';
import { Form } from './components/Form';

function App() {

  const datosInit =[
    {
      firtname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: ""
  }
  ]
  const [datos, setDatos] = useState(datosInit)
  return (
    <div className="App">
      <Form  dato={datos} setDato={setDatos}/>
    </div>
  );
}

export default App;
