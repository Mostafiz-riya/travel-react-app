import { useState } from "react";
export default function Form(onAddUnits){
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