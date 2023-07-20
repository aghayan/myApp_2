import {useState} from 'react'
import { Button } from './pages/button.js';
import { Header } from './pages/header.js'
import { Main } from './pages/main.js'



function App() {

  const [show, setShow] = useState(false);

  const[text, pushText] = useState('')


  const Change = (e) => {
    pushText(e.target.value)
  }

  function Click() {
    setShow(true)
  }

  return(
    <div>
      <h1 style={{textAlign:'center', color:'purple'}}>Home Work 2</h1>
      <Header/>
      
      {
        show ?
        <p>Hello World</p>
        :
        <p>Hello</p>
      }
      {
        console.log(text)
      }

        <button onClick={Click}>Click Me!</button>

      
      
      <input type='text' onChange={Change} value={text}/>
      <Button border = '1px solid red' />

      <Main/>
</div>

  )}

export default App;
