export default function Item({ item, onRemoveItem, onUpdateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => {
          onUpdateItem(item.id);
        }}
      />
      <span
        style={{
          textDecoration: item.packed ? "line-through" : "none",
        }}
      >
        {item.quantity}x {item.description}
      </span>
      <button
        className="remove"
        onClick={() => {
          onRemoveItem(item.id);
        }}
      >
        <span role="img" aria-label="Remove this item from the list">
          ❌
        </span>
      </button>
    </li>
  );
}
