import { useState } from "react";

const initialItems = [
    { id: 1, description: "Passports🛂", quantity: 2, packed: false },
    { id: 2, description: "sunglasses🕶️", quantity: 12, packed: false },
    { id: 3, description: "charger📴", quantity: 5, packed: true },
  ];

export default function App(){
    const[units,setUnit]=useState([]);
    function handleAddUnit(unit){
        setUnit((units)=>[...units,unit]);
    }
   
 
return(
<div className="app">
    <Logo/>
    <Form onAddUnits={handleAddUnit}/>
    <Lists units={units}/>
    <Stats/>
     </div>
);
}
function Logo(){
    return(
        <div>
            <h1>🌻Far Away💦</h1>
        </div>
    );
}
function Form(onAddUnits){
    const [description,setDescription]=useState("");
    const[quantity,setQuantity]=useState(1);
 

////// page refresh hobena,single dynamic page\\\\\\\\\
    function handleSubmit(e){
        e.preventdefault();

        if(!description)return;
        /////// new item add korle form e list e render hobena, sudhu console krbe,list e state re render krte hole  main je common parent component sekhane derive korte hobe child prop create kore\\\\\\\\\\\
   const newUnit={description,quantity,packed:false,id: Date.now()};
   console.log(newUnit);
   onAddUnits(newUnit);
   setDescription("");
   setQuantity(1);
   
    }
//  //////////////////////
    return(
        <form className="add-form" onSubmit={handleSubmit} >
            <h3>what is needed for the trip?🤠</h3>
            <select
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)}>
            {Array.from({length:20},(_,i)=>i+1).map((num)=>(
                <option value={num} key={num}>
                    {num}
                </option>
            ))}

            </select>
            <input type="text" 
            placeholder="item name"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}/>
            <button>Add</button>
        </form>
    );
}
function  Lists({units}){
    return (
            
        <div className="list">
            <ul>
            {units.map(item=><Items item={item}/>)}
            </ul>
        </div>
    );
}
// child prop for Items component
function Items({item}){
    return(
<span style={item.packed?{textDecoration:"Line-through"}:{}}>
    <li>
        {item.quantity} {item.description}
        <button>❎</button>     
    </li>
</span>
   );
}
function Stats(){
    return(
        <footer className="stats">
<em>you have X items on your list and already packed X(%X)</em>
        </footer>
    );
} 