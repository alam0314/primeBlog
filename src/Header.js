import "./Header.css";
import {Link} from 'react-scroll'
import {useNavigate} from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton';
const Header = () => {
  const navigate=useNavigate();
  const favPost=JSON.parse(localStorage.getItem('favourites-list'))
  return (
    <div className="Navbar">
      <h2 className="navlogo" onClick={() => navigate('/')}> PrimeBlog</h2>
      <div className="nav-items">
       <ul>
          <li><Link  to="about" spy={true} scroll="true" >About</Link></li>
          <li>
          <DropdownButton id="dropdown-item-button" title="Favorites">
           {favPost===null || favPost.length===0?(<b>You dont't have any favorite posts right now. 😊</b>):(favPost.map(data=>(
                <div className="dropFav" key={data.id} onClick={()=>navigate("/favourite-post",{state:{ postID: data.id }})} >
                     <b>{data.title}</b>
                     <p>{data.body}</p>
                </div>        
            )))}
         </DropdownButton>
          </li>
          <li><Link  to="contact" spy={true} scroll="true">Contact us</Link></li>
       </ul>
        
      </div>
      
    </div>
  );
};

export default Header;