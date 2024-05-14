
import { useState } from "react";

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

//  component gula sob ekhane render kora
return(
<div className="app">
    <Logo/>
    <Form onAddUnits={handleAddUnit}/>
    <Lists items={items} 
    onDeleteItem={handleDeleteItems}
    onToggleItem={handleToggleItems}/>  {/* je function component new create korsi segulake evabe prop hisabe child component e render korte hoi */}
    <Stats items={items}/>
     </div>
);
}

// jsx components\\
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

    function handleSubmit(e){
        e.preventdefault();////// page refresh hobena,single dynamic page\\\\\\\\\
       if(!description)return;
   const newUnit={description,quantity,packed:true,id: Date.now()};
   console.log(newUnit);
   onAddUnits(newUnit);
   setDescription("");
   setQuantity(1);
   }
    /// new item add korle form e list e render hobena, sudhu console krbe,list e state re render krte hole  main je common parent component sekhane derive korte hobe child prop create kore\\\
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
function  Lists({items,onDeleteItem,onToggleItem})
{
    return (
            
        <div className="list">
            <ul>
            {items.map(item=><Items item={item} 
            onDeleteItem={onDeleteItem}  
            onToggleItem={onToggleItem}
            key={item.id} />)}
            </ul>
        </div>
    );
}
// child prop for Items component
function Items({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : ` 💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
