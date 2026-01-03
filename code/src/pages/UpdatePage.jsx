import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


function UpdatePage(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({name:"", rating:""});

    useEffect(()=>{
        axios.get(`${API}/${id}`).then(res=>
            setForm(res.data.data)
        )
    },[id]);

    const handleUpdate = () =>{axios.patch(`${API}/${id}`,
        form).then(()=>{
            alert("Update!");
            navigate("/dashboard");
        });
    };

    return(
        <div>
            <h2>Update Restaurant</h2>
            <input value={form.name}
            onChange={(e)=>setForm({...form,
                name:e.target.value
            })}/>
            <button onClick={handleUpdate}>save changes</button>
        </div>
    );


}
export default UpdatePage;