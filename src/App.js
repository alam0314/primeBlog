import './index.css'
import Footer from'./footer'
import Header from './Header'
import HomePage from "./homepage";
import { Routes, Route } from "react-router-dom";
import ViewPost from './components/viewPost';
import {  useState } from 'react';
import AllPost from './components/allPost';
function App(){
   const [favourites, setFavourites] = useState([]);
   const saveToLocalStorage = (items) => {
		localStorage.setItem('favourites-list', JSON.stringify(items));     
	};

   const addFavouriteFunction = (post) => {
      const favoritesList=JSON.parse(localStorage.getItem('favourites-list'))
      var newFavouriteList;
      if(favoritesList===null)
      {
      newFavouriteList = [...favourites, post];
      }
      else{
         newFavouriteList=[...favoritesList,post]
      }
      var matchId
      if(favoritesList===null)
      matchId="true"
      else
      matchId=favoritesList.filter((list) => list.id === post.id).map(d=>(d.id!==post.id));
         if( matchId==='true' || matchId.length===0 )
         {
            setFavourites(newFavouriteList);
            saveToLocalStorage(newFavouriteList);
         }
         else{
            newFavouriteList = favoritesList.filter(
               (favourite) => favourite.id !== post.id
            );
            setFavourites(newFavouriteList);
	       	saveToLocalStorage(newFavouriteList);
         }
		
	};  

   return (
      <>
      <Header/>
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/viewpost' element={<ViewPost  handleFavouritesClick={addFavouriteFunction}/>} />
      <Route path='/favourite-post' element={<ViewPost  handleFavouritesClick={addFavouriteFunction}/>} />
      <Route path='/all-post' element={<AllPost/>} />
      </Routes>
      <Footer/>
      </>
   )
}
export default App