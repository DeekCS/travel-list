export default function Stats({ items }) {
  if (!items.length) {
    return <p className="stats">"You haven't packed anything yet! 😱"</p>;
  }

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  let message;
  if (percentage === 100) {
    message = "You are ready to go! 🥳";
  } else if (percentage > 50) {
    message = "You are almost ready! 😎";
  } else if (percentage > 0) {
    message = "You are getting there! 😅";
  }

  return (
    <footer className="stats">
      <em>
        {message} 💼 You have
        <b> {numItems} </b>
        items on your list, and you already packed
        <b> {numPackedItems} </b>(<b> {percentage}% </b>) items.
      </em>
    </footer>
  );
}
