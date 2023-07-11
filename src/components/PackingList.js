import { useState } from "react";
import Item from "./Item";
export default function PackingList({
  items,
  onRemoveItem,
  onUpdateItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [...items];

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    //slice() to make a copy of the array and not mutate the original array
    // because sort() mutates the original array
    sortedItems = items.slice().sort((a, b) => {
      return a.description.localeCompare(b.description);
    });
  }
  if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => {
      return Number(a.packed) - Number(b.packed);
    });
  }

  return (
    <div className="list">
      <ul className="">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onRemoveItem={onRemoveItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="sort" onClick={onClearList}>
          Clear List
        </button>
      </div>
    </div>
  );
}
