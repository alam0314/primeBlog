import { useLocation, useNavigate} from "react-router-dom";
import "./viewPost.css";
import Loading from "../functions/loading";
import React ,{useState,useEffect} from 'react'
import { Button } from "react-bootstrap";

export default function ViewPost(props) {
  const navigate=useNavigate()
  const location=useLocation()
  const id=location.state.postID
  const [viewPost,setviewPost] = useState([]);
  const [user,setuser] = useState([]);
  const [comment,setcomment] = useState([]);
  const [loading, setloading]=useState(true);
  
useEffect(()=>{
  const getOne = async()=>{
    try{
      const response= await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
      setviewPost(await response.json());
      setloading(false)
    }
    catch (error) {
      console.log("Error retrieving post...", error);
    }
  }

  const getComment = async()=>{
    const response= await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    setcomment(await response.json());
    setloading(false)
  }

  const getUser = async()=>{
    const response= await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
    setuser(await response.json());
    setloading(false)
  }
  getOne();
  getUser();
  getComment();
},[id])

  const icon=JSON.parse(localStorage.getItem('favourites-list'))
  
  var currentFav=0
  if(icon!=null)
  icon.filter((values) => values.id === id).map(data=>currentFav=data.id)
  
  if(loading){
    return <Loading/>
  }
  return (
    <div className="singlePost">
       {viewPost.map(data=>(
      <div className="singlePostWrapper"  key={data.id}>
        <Button className="btnHome" onClick={() => navigate('/')}><i className="fa fa-arrow-left"></i> Home</Button>
        <div className={currentFav===data.id?"red":"white"}  >
        <Button className="btnFav" onClick={() =>props.handleFavouritesClick(data)} >Favorite  <i className="fa-solid fa-heart" ></i></Button>
        </div>
        <img
          className="singlePostImg"
          src="https://picsum.photos/700"
          alt=""
        />       
        <h1 className="singlePostTitle">
          {data.title}
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            {user.map(usr=>(
            <b className="singlePostAuthor"  key={usr.id}>
              {usr.name}              
            </b>
            ))}
          </span>
          <span>06 July 2023</span>
        </div>
        <p className="singlePostDesc">
         {data.body}
        </p>  
        <div className="comment">
          <h4>{comment.length} Comments</h4>
          {comment.map(cmnt=>(
            <div key={cmnt.id}>
             <i className="fa fa-user-circle" aria-hidden="true"></i>
             &nbsp;
             <b>{cmnt.name}</b> 
              <p style={{marginLeft:20,color:"#7d7c7c"}}>{cmnt.email}</p>
              <p>{cmnt.body}</p>
              <hr/>
              </div>
          ))}
      </div>     
      </div>
      ))}
    </div>
  );
}