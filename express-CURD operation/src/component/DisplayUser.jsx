import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const DisplayUser = () => {
  const users=useLoaderData()
  const [restUser,setRestUser]=useState(users)
  const handaleDelet=(id)=>{
    console.log(id)
    fetch(`http://localhost:3000/users/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json()).then(data=>{
      if(data.deletedCount >0){
        const filterData=restUser.filter(user=> user._id !== id);
        setRestUser(filterData)
      }
    })
  }
  return (
    <div className="overflow-x-auto text-center" style={{ width: "80%", margin: "0 auto" }}>
      <h2>User:{restUser?.length} </h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="bg-base-200">
            {restUser.map((user) => (
              <>
                <th scope="row">{user?.name}</th>
                <td>{user?.email}</td>
                <td>
                  <Link to={`/users/${user._id}`}>
                    <button className="btn btn-success" type="submit">
                      UPDATE
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handaleDelet(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DisplayUser;
