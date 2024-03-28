"use client";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { addItem, getItems } from "../_services/shopping-list-service";
import { useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  async function loadItems() {
    try {
      const shoppingListItems = await getItems(user.uid);
      setItems(shoppingListItems);
    } catch (error) {
      console.error("Error loading shopping list items:", error);
    }
  }

  if (!user) {
    return (
      <main className="flex justify-center items-center h-screen">
        <div className="text-center">
          <p className="mb-4">You must be logged in to view this page.</p>
          <Link href="/week-8">
            <h2 className="text-blue-600 hover:underline">Go to login page</h2>
          </Link>
        </div>
      </main>
    );
  }

  const handleAddItem = async (item) => {
    try {
      const newItemId = await addItem(user.uid, item);
      const newItem = { ...item, id: newItemId };
      setItems([...items, newItem]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  function handleItemSelect(item) {
    console.log(item);
    const cleanName = item
      .replace(/[\uD83C-\uDBFF\uDC00-\uDFFF]+/g, "")
      .replace(/[^\x20-\x7E]/g, "")
      .split(",")[0]
      .trim();
    setSelectedItemName(cleanName);
    console.log(cleanName);
  }

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
