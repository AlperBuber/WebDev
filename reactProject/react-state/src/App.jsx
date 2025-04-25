import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./index.css";
import Header from "./components/header";
import AddItemForm from "./components/AddItemForm";
import FilterButtons from "./components/FilterButtons";
import ListItems from "./components/ListItems";
import ClearButton from "./components/ClearButton";
import { act, useState } from "react";

const urunler = [
  {
    id: 1,
    name: "Yumurta",
    completed: true,
  },
  {
    id: 2,
    name: "Zeytin",
    completed: true,
  },
  {
    id: 3,
    name: "Süt",
    completed: false,
  },
  {
    id: 4,
    name: "Peynir",
    completed: false,
  },
  {
    id: 5,
    name: "Domates",
    completed: true,
  },
  { id: 6, name: "Çay", completed: true },
];

export default function App() {
  const [items, setItems] = useState(urunler);
  const [activeButton, setActiveButton] = useState("all");

  function handleDeleteButton(itemId) {
    setItems(items.filter((item) => item.id != itemId));
  }

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleUpdatedItem(id) {
    setItems(
      items.map((item) =>
        item.id == id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function handleClearButton() {
    console.log(activeButton);
    if (activeButton == "all") {
      setItems([]);
    } else if (activeButton == "incomplete") {
      setItems(items.filter((item) => item.completed != false));
    } else {
      setItems(items.filter((item) => item.completed != true));
    }
  }

  return (
    <div className="container mt-5">
      <Header />
      <AddItemForm onAddItem={handleAddItem} />
      <FilterButtons
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      <ListItems
        urunler={items}
        onDeleteButton={handleDeleteButton}
        onUpdateItem={handleUpdatedItem}
        activeButton={activeButton}
      />
      {items.length > 0 && <ClearButton onClearButton={handleClearButton} />}
    </div>
  );
}

// completedleri verirken filter kullanabilirsin urunler={urunler.filter((urun) => urun.completed)}

// benim yaptığım filteredItems kısmı
// {items.length == filteredItems.length ? items : filteredItems}

// function handleFilterButtons(activeButton) {
//   if (activeButton == "all") {
//     setFilteredItems(items);
//   } else {
//     if (activeButton == "completed") {
//       setFilteredItems(items.filter((item) => item.completed));
//     } else {
//       setFilteredItems(items.filter((item) => !item.completed));
//     }
//   }
// }
