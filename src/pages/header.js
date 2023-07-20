import { useState } from "react"


export function Header(){

  const [text] = useState([
    {name: 'Arman', age: '21',},
    {name: 'Vaxo', age: '45',},
    {name: 'Exiomov', age: '32',},
])

    return(
      <div>
        {/* <Button border="2px solid red"/> */}
        <h1>Header</h1>

        {
            text.map((i, j) => (
                <div key={j} style={{display: 'flex'}}>
                    <p>{i.name}</p>
                    <p style={{fontWeight: '600'}}>{i.age}</p>
                </div>
            ))
        }

      </div>
    )
  };
