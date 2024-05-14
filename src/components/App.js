
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Lists  from "./Lists";
import  Stats  from "./Stats";


const initialItems = [
    { id: 1, description: "Passports🛂", quantity: 2, packed: false },
    { id: 2, description: "sunglasses🕶️", quantity: 12, packed: false },
    { id: 3, description: "charger📴", quantity: 5, packed: false },
  ];

export default function App(){
    const[items,setUnit]=useState(initialItems);

    function handleAddUnit(item){
        setUnit((items)=>[...items,item]);
    }
    function handleDeleteItems(id){
        setUnit((items)=>items.filter((item)=>item.id!==id));
    }
    function handleToggleItems(id){
setUnit(items=>items.map(item=>item.id===id?{...item,packed:!item.id}:item));
    }

function handleClear(){
  const confirmed=window.confirm("are you sure");
if(confirmed)setUnit([]);
}
    

//  component gula sob ekhane render kora
return(
<div className="app">
    <Logo/>
    <Form onAddUnits={handleAddUnit}/>
    <Lists items={items} 
    onDeleteItem={handleDeleteItems}
    onToggleItem={handleToggleItems}
    onClearList={handleClear}/>
      {/* je function component new create korsi segulake evabe prop hisabe child component e render korte hoi */}
    <Stats items={items}/>
     </div>
);
}


