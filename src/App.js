import Card from './Card';
import Form from './Form';
import './App.css';
import { useState } from 'react';


function App() {
const [card,setCard]= useState(false);
const [form, setForm] = useState(null);
const [mnsj,setMnsj] = useState(false);

const handleSubmit = (info) => {
  const {nombre, materia} = info;

  if(nombre.trim().lenght < 3 || materia.lenght < 6){
    setMnsj(true);
    setCard(false);
  }else{
    setMnsj(false);
    setCard(true);
    setForm(info);
  }
};

return (
    <div className="App">
      <Form onSubmit={handleSubmit}/>
      {mnsj && <div>Por favor chequea que la información sea correcta</div>} 
      {card && <Card nombre={form.nombre} materia={form.materia}/> }
    </div>
  );
}

export default App;
