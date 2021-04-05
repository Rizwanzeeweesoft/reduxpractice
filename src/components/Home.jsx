import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {FetchList} from "../Redux/Actions/action"
import {deleteuser} from "../Redux/Actions/action"

const Home = (props) => {

    useEffect(()=>{
      props.onFetch();
      props.onDelete();
    },[])
    

    console.log("data",props.posts.data)

    return (
        <div className="Card_Section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                       <div className="card" style={{width:"100%"}}>
                           <div className="card-header">
                               <Link to="/form" className="btn btn-primary float-right">Add</Link>
                           </div>
                           <div className="card-body">
                           <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">FullName</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Date of Birth</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    props.posts.data ?
                                  props.posts.data &&  props.posts.data.map((post,idx) => {
                                        return(
                                        <tr>
                                        <th scope="row" key={props.id}>{idx+1}</th>
                                        <td>{post.FirstName} &nbsp; {post.LastName}</td>
                                        <td>{post.Email}</td>
                                        <td>{post.Phone}</td>
                                        <th>{post.Address.Country}</th>
                                        <td>{post.Address.City}</td>
                                        <td>{post.Address.State}</td>
                                        <td>{post.DateofBirth}</td>
                                        <td>
                                        <Link to={`/edit-user/${post.id}`}>
                                        <button type="button" className="btn btn-warning" style={{color:"#fff",cursor:"pointer",fontSize:"12px"}}>Edit</button>
                                        </Link>
                                             &nbsp; 
                                        <button type="button" className="btn btn-danger" style={{color:"#fff",fontSize:"12px"}} onClick={() => props.onDelete(post.id)} >Delete</button></td>
                                    </tr>
                                        )
                                    })
                                    :
                                    <p>Loading...</p>
                                }

                            </tbody>
                        </table>
                           </div>
                       </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


const mapDispatchToProps =(dispatch)=> {
   return {
     onFetch: async() =>{
            await dispatch(FetchList());
        },
        onDelete: async(id) =>{
            await dispatch(deleteuser(id));
        },
    }
  };

const mapStateToProps = (state) => ({
    posts: state.posts.items,
  });

export default connect(mapStateToProps, mapDispatchToProps)(Home);