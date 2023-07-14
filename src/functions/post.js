import React from "react";
import {useNavigate} from 'react-router-dom'
import './post.css'
import { Button } from "react-bootstrap";

const Post=({postApi})=>{
  const navigate=useNavigate();
  
    return (
        <>
         <div className="main-container">
          <div>
            <h3 id="posts">Latest Posts</h3>
            <hr/>
           <div className="left">
           {postApi.slice(0, 6).map(data => (
                <div className="latest-post" key={data.id} >    
                  <div className="card"  onClick={() =>
                  navigate("/viewpost",{state:{ postID: data.id }})
                }>
                    <div className="card-body">
                      <div className="avatar">
                        <img
                          src="https://picsum.photos/700"
                          className="card-img-top"
                          alt=""
                        />
                      </div>
                     <h5 className="card-title">
                      {data.title}
                     </h5>
                     <p className="card-text">
                      {data.body}
                     </p>
                   </div>
                 </div>             
               </div> 
               ))}  
           <Button  onClick={() => navigate("/all-post",{state:{ postApi: postApi }})}>See All Posts</Button>   
           </div>
         </div>
         <div className="right">
           <div>
             <h3>Popular Posts</h3>
             {postApi.slice(1, 4).map(data => (
             <div className="popular-post" key={data.id}>
               <div className="card" onClick={() =>
                  navigate("/viewpost",{state:{ postID: data.id }})}>
                 <div className="card-body">
                   <h5 className="card-title">
                     {data.title}
                   </h5>
                   <p className="card-text">
                    {data.body}
                   </p>
                 </div>
               </div>
              </div>
             ))}
           </div>
         </div>
       </div>
        </>
    )
}
export default Post