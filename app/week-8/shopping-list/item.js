export default function Item({ name, quantity, category, onSelect }) {
  return (
    <section
      onClick={() => onSelect(name)}
      className="border-slate-400 bg-slate-900 border-2 p-2 m-3"
    >
      <h2 className="text-2xl text-white font-bold">{name}</h2>
      <p className="text-l text-white">Quantity: {quantity}</p>
      <p className="text-l text-white">Category: {category}</p>
    </section>
  );
}
