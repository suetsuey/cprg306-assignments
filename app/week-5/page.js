import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-black">
      <h1 className="text-4xl text-white font-bold mb-3 p-3">Shopping List</h1>
      <ItemList />
    </main>
  );
}
