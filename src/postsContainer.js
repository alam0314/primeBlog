import React ,{useState,useEffect} from 'react'
import Post from './functions/post';
import Loading from './functions/loading';
const PostsContainer=()=> {
    const [postApi,setpostApi] = useState([]);
    const [loading, setloading]=useState(true);
    const fetchPost = async()=>{
      try{
        
        const response= await fetch("https://jsonplaceholder.typicode.com/posts");
        setpostApi(await response.json());
        setloading(false)
      }
      catch (error) {
        console.log("Error retrieving all posts...", error);
      }
    }
    useEffect(()=>{
        fetchPost();

    },[])
    if(loading){
      return <Loading/>
    }
    return (
       <>
       <Post postApi={postApi}/>
       </>
    )
}

export default PostsContainer
