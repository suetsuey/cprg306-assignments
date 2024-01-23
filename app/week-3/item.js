export default function Item({ name, quantity, category }) {
  return (
    <section className="border-purple-900 border-4 p-2 mb-1">
      <h2 className="text-2xl font-bold">Name: {name}</h2>
      <p className="text-xl text-rose-800 ">Quantity: {quantity}</p>
      <p className="text-xl text-rose-800">Category: {category}</p>
    </section>
  );
}
