import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

function Dashboard(){
    const [data, setData] = useState([]);
    const {logout} = useContext(AuthContext);

    useEffect(()=>{
        axios
    })




}

export default Dashboard