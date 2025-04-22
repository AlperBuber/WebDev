import { useState } from "react";
import ClearButton from "./ClearButton";

export default function Item({
  urun,
  onDeleteButton,
  onUpdateItem,
  activeButton,
}) {
  if (activeButton == "incomplete" && urun.completed) {
    return null;
  }

  if (activeButton == "completed" && !urun.completed) {
    return null;
  }
  return (
    <li item_id={urun.id} className="border rounded p-2 mb-1 d-flex">
      <input
        type="checkbox"
        className={`form-check-input `}
        onChange={() => onUpdateItem(urun.id)}
        checked={urun.completed}
      />
      <div className={`item-name ${urun.completed ? "completed" : ""}  `}>
        {urun.name}
      </div>
      <i
        className="fs-3 bi bi-x text-danger delete-icon"
        onClick={() => onDeleteButton(urun.id)}
      ></i>
    </li>
  );
}
