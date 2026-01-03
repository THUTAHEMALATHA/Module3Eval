import { Link } from "react-router-dom";
function RestaurantCard({ item, onDelete }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure want to delete")) {
      onDelete(item.id);
    }
  };
  return (
    <div>
      <img src={item.image} />
      <h4>{item.name}</h4>
      <p>Rating:{item.rating}</p>
      <Link to={`/update/${item.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
export default RestaurantCard;
