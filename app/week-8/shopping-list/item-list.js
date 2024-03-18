"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="p-3">
        <label className="text-white font-semibold">Sort By</label>
        <button
          className="bg-pink-500 p-2 m-1 rounded-md hover:bg-orange-500 active:bg-yellow-200 focus:bg-orange-500"
          onClick={() => setSortBy("name")}
        >
          {" "}
          Name{" "}
        </button>
        <button
          className="bg-pink-500 p-2 m-1 rounded-md hover:bg-orange-500 active:bg-yellow-200 focus:bg-orange-500"
          onClick={() => setSortBy("category")}
        >
          {" "}
          Category{" "}
        </button>
      </div>

      <div>
        <ul>
          {sortedItems.map((item) => (
            <Item
              id={item.id}
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={onItemSelect}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
