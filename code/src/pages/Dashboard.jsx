import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import RestaurantCard from "../components/RestaurantCard";

const API =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants";

function Dashboard() {
  const [data, setData] = useState([]);
  const [displayData, setDisplaydata] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);
  const getRestaurants = () => {
    axios.get(API).then((res) => {
      setData(res.data.data);
      setDisplaydata(res.data.data);
    });
  };

  const handleAdd = (payload) => {
    axios.post(API, payload).then(() => {
      alert("added success");
      getRestaurants();
    });
  };
  const handleDelete = (id) => {
    axios.delete(`${API}/${id}`).then(() => getRestaurants());
  };
  const handleSearch = (query) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowercase())
    );
    setDisplaydata(filtered);
  };

  return (
    <div>
      <Sidebar onAdd={handleAdd} onSearch={handleSearch} />
      <div>
        <h1>Customer dashboard</h1>
        <div>
          {displayData.map((item) => (
            <RestaurantCard key={item.id} item={item} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
