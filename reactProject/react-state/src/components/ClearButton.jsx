export default function ClearButton({ onClearButton }) {
  function handleClearButton() {
    onClearButton();
  }
  return (
    <button
      onClick={handleClearButton}
      id="delete-button"
      className="btn btn-danger float-end"
    >
      Clear
    </button>
  );
}
