import { useLoaderData } from "react-router-dom";



const UpdateData = () => {

  const user=useLoaderData()
  //console.log(user)
  const handleUpdate=(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const updateuserInfo = {
      name,
      email,
      password,
    };
    
    fetch(`http://localhost:3000/users/${user._id}`,{
      method:"PUT",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify(updateuserInfo)
    })
      .then((res) => res.json())
      .then((data) =>{
          if(data.modifiedCount==1){
            alert("Data Updated")
          }
      } )
      .catch((error) => console.log(error));
  }

  return (
    <div className="text-center" style={{ width: "50%", margin: "0 auto" }}>
      <h1>Updated: {user?.name}</h1>
      <form onSubmit={handleUpdate} action="">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            defaultValue={user?.name}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            defaultValue={user?.email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
          />
          <div id="emailHelp" className="form-text">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            defaultValue={user?.password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          update
        </button>
      </form>
    </div>
  );
};

export default UpdateData;
