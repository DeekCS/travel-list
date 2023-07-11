import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => {
    /* In React, we never want to mutate state directly.
     Instead, we want to create a new copy of the state,
     and then update the state with the new copy.
    setItems((items) => [...items, item]); */
    setItems((items) => [...items, item]);
  };

  const handleRemoveItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (id) => {
    setItems((items) => {
      const updatedItems = items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            packed: !item.packed,
          };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmed) {
      setItems([]);
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onUpdateItem={handleUpdateItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
