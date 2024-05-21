import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Admin() {
    const [data, setdata] = useState([])
    useEffect(() => {
      axios.get('http://localhost:8000/data')
      .then(res=>setdata(res.data))
    }, [data])

    const deleteData = function(id){
        console.log(id);
        axios.delete('http://localhost:8000/data/'+ id)
    }
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map(item=>{
                    return(
                        <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                   <td> <button>edit</button></td>
                    <td><button onClick={()=>deleteData(item.id)}> delete</button></td>
                </tr>
                    )
                })
            }
            </tbody>
        </table>
    </div>
  )
}

export default Admin