import { useState } from "react";

export default function AddItemForm({ onAddItem }) {
  const [name, setName] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    const item = {
      id: Date.now(),
      name,
      completed: false,
    };

    onAddItem(item);
    setName("");
  }
  return (
    <form
      className="shopping-form mb-3 border rounded p-3"
      onSubmit={handleFormSubmit}
    >
      <div className="input-group">
        <input
          type="text"
          id="item_name"
          className="form-control"
          placeholder="Add Item"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          <i className="bi-solid bi-plus"></i>
        </button>
      </div>
    </form>
  );
}
