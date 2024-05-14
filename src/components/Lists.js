import { useState } from "react";
import Items from "./Items";
// list ta items e depended tai item parent ke ekhane import korte hobe
// jsx components\\
export default function Lists({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.description) - Number(b.description));


  return (

    <div className="list">
      <ul>
        {sortedItems.map(item => <Items item={item}
          onDeleteItem={onDeleteItem}
          onToggleItem={onToggleItem}
          key={item.id} />)}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input" placeholder="sort by input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed</option>
        </select>
        <button onClick={onClearList}>clear</button>
      </div>
    </div>
  );
}
