import React, {useState} from 'react';
function MyComponent(props)
{
    const[color,changeColor] = useState("Green");

    return(
        <div>
            <h2>This is the user defined component</h2>
            <h3>My favouratite color:{color}</h3>
            
            <input type="radio" id="red" name="color" value="red" onChange={(e) => changeColor(e.target.value)}/>red
            <input type="radio" id="blue" name="color"  value="blue" onChange={(e) => changeColor(e.target.value)}/>blue
            <input type="radio" id="green" name="color"  value="green" onChange={(e) => changeColor(e.target.value)}/>green
            <input type="radio" id="yellow" name="color" value="yellow" onChange={(e) => changeColor(e.target.value)}/>yellow
        </div>
    );
}
export default MyComponent;