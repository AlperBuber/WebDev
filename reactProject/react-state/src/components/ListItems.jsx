import ClearButton from "./ClearButton";
import Item from "./Item";
import NoItem from "./NoItem";

export default function ListItems({
  urunler,
  onDeleteButton,
  onUpdateItem,
  activeButton,
}) {
  return (
    <>
      <ul className="shopping-list list-unstyled">
        {urunler.length > 0 ? (
          urunler.map((urun, index) => (
            <Item
              urun={urun}
              key={index}
              onDeleteButton={onDeleteButton}
              onUpdateItem={onUpdateItem}
              activeButton={activeButton}
            />
          ))
        ) : (
          <NoItem />
        )}
      </ul>
    </>
  );
}
