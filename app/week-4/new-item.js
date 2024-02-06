"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(
      "Added item: " +
        name +
        " ,quantity: " +
        quantity +
        " ,category: " +
        category
    );
    setName("");
    setQuantity("1");
    setCategory("produce");
  }

  return (
    <div className="w-80 bg-slate-700 m-2 p-2">
      <form onSubmit={handleSubmit}>
        <div className="p-2">
          <input
            className="w-full h-10 rounded-md"
            type="text"
            placeholder="Item Name"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="p-2 flex justify-between">
          <input
            className="w-1/4 h-10 rounded-md"
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            max="99"
            required
            onChange={(event) => setQuantity(event.target.value)}
          />
          <select
            className="w-1/2 h-10 rounded-md"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="p-2">
          <button className="bg-blue-500 h-10 w-full rounded-md hover:bg-blue-300 hover:font-bold active:bg-yellow-400 font-bold text-white">
            +
          </button>
        </div>
      </form>
    </div>
  );
}
