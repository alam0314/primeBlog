import { useNavigate, useLocation } from "react-router-dom";
import Pagination from "../functions/pagination";
import { useState } from "react";
import  './allPost.css'
export default function AllPost (){
    const navigate=useNavigate()
    const location=useLocation()
    const postApi=location.state.postApi
    const showPerPage = 12;
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
      });
    
      const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
      };
    return(
        <>
       <div className="main-container">
          <div>
            <h3 id="posts">All Posts</h3>
            <hr/>
           <div className="grid">
           {postApi.slice(pagination.start, pagination.end).map(data => (
                <div  key={data.id} >    
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
           </div>
           <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={postApi.length}
          />
         </div>
        </div>
      </>  
    );
}