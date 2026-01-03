import {useState} from 'react'

function Sidebar({onAdd, onFilter, onSearch}){
    const [name,setName] = useState("");
    const handleAdd = (e) =>{
        e.preventDefault();
        const formData = newFormData(e.target);
        const payload = {
            name: formData.get("name"),
            type : formData.get("type"),
            rating: Number(formData.get("rating")),
            image: formData.get("image"),
        
        };

        if(!payload.name || !payload.image)
            return alert("Fill all fields");
            onAdd(payload);
            e.target.reset();

    };



    return(
        <div>
            <input placeholder="search by name..."
            onChange={(e) => onSearch(e.target.value)} />
            <hr />

            <h3>Filters</h3>
            <button onClick={()=>onFilter("asc")}>Rating:Low to High</button>
             <button onClick={()=>onFilter("desc")}>Rating:High to Low</button>
             <hr />
             <h3>Add Restaurant</h3>
             <form onSubmit={handleAdd}>
             <input name="name" placeholder="Name" required /> <br /> 
             <select name="type" >
                <option value="Fine Dining">Fine Dining</option>
                 <option value="Fast Food">Fast food</option>

             </select>
             <br />
             <input name="rating" type="number" placeholder="Rating"/>
             <input name="image" type="Image" placeholder="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"/>


             </form>
        </div>
    );


}

export default Sidebar;