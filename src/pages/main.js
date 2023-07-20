import { useState } from "react";

export function Main() {
    const [morre, setMorre] = useState(false);

    const onClick = () => {
        setMorre(!morre);
    };

    return (
        <div style={{ width: '200px', border: '2px solid red', marginTop:'50px' }}>
            <p>Loremorem Ipsum is simply dummy</p>
            <button style={{ border: '1px solid' }} href="#" onClick={onClick}>
                Morre
            </button>
            {morre ? (
                
                <p>typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                 ever since the 1500s, when an unknown printer took a galley of type and</p>
            ) : (
                <> 
                </>
            )}
        </div>
    );
}
