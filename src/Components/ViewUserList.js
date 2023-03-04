import React, { useEffect, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import AdminServiceApi from '../Services/AdminServiceApi';
import Loading from '../Components/Loading'
import Swal from 'sweetalert2';



const ViewUserList = () => {
    const [state,setState] = useState({
        users: [],
        message: null,
    });
    //const[message ,setMessage] =useState("");
    //const [email, setEmail] = useState(null);
    const navigate=useNavigate();

    const  Delete = (email) => {
      console.log(email);
      console.log(typeof email);
      AdminServiceApi.deleteUser(email).then(
        (res) => {
          setState({ message: "User Deleted successfully." });
          Swal.fire({
            title: "User Deleted successfully.",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate("/");
        }
      );
    }
      

    //   e.preventDefault();
    // const user = {
    //   email
    // };
      
   
    //  AdminServiceApi.deleteUser(user)
    //   .then((resp) => {
        
    //     console.log(resp.data);
    //     setMessage("User deleted successfully.");
    //     console.log(message);
    //     Swal.fire({
    //       title:message,
    //       icon: "success",
    //       confirmButtonText: "Ok",
    //     });
    //     //navigate("/");
       
  //     })
  //     .catch((error) => {
  //       console.error("in err ", error.response.data);
  //       Swal.fire({
  //         title: message,
  //         icon: "error",
  //         confirmButtonText: "Ok",
  //       });
  //     });
  // }
    
    useEffect(()=>{
            AdminServiceApi.fetchAllUsers().then((resp) => {
                setState({
                  users: resp.data,
                  message: "user list rendered successfully",
                  
        });
        
    }).catch(error=>{
         console.log(error);
        })
     },[])


  return (
    <>
    <div className="container my-4">
    <Link to='/admindashboard'>
          <button
            className="btn btn-secondary my-2 offset-11"
            style={{ minWidth: "13vw" }}
          >
            Back To Dashboard
          </button></Link>
      {state.users.length === 0 ? (
        <Loading/>
      ) : (
        <div>
          <h3>User List</h3>
          <table className="table table-bordered">
            <thead className="bg-primary text-light">
              <tr>
                <th className="visually-hidden">Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {state.users.map((user) => (  
                <tr key={user.userid}>
                  <td className="visually-hidden">{user.userid}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td> 
                  <td>{user.contact}</td>
                  <td>{user.address}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                  <td>
                  <button
                className="btn btn-lg btn-danger text-uppercase"
               // onclick={Delete}
                
               onClick={() => Delete(user.email)}
              >
                Delete
              </button>
                  </td>
                </tr>
                
              ))
              }
              
            </tbody>
          </table>
        </div>
      )}
    </div>
  </>
  )
}

export default ViewUserList
