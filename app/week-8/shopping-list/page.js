"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const handleAddItem = (NewItem) => {
    setItems([...items, NewItem]);
  };
  const handleItemSelect = (itemName) => {
    console.log(itemName);
    const cleanName = itemName
      .replace(/[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, "")
      .replace(/[^\x20-\x7E]/g, "")
      .split(",")[0]
      .trim();
    setSelectedItemName(cleanName);
    console.log(cleanName);
  };

  return (
    <main className="bg-black">
      <h1 className="text-4xl text-white font-bold mb-3 p-3">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:w-1/2 w-full">
          {" "}
          {/* Full width on small screens, 1/2 width on medium screens and up */}
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="md:w-1/2 w-full">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
