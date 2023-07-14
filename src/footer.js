import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="first" id="about">
            <h4>About us</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis iure, autem nulla tenetur repellendus.</p>
          </div>
          <div className="second">
            <h4>Newsletter</h4>
            <p>Stay update with our latest</p>
            <input type="email" placeholder="email" name="email"/>
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='third' id="contact">
            <h4>Follow us</h4>
            <p>Let us be social</p>
            <p className='links'>
            <a href="/" target="_blank" rel="noreferrer" className="linkStyle"><i className="fa-brands fa-facebook"></i></a>
            <a href="/" target="_blank" rel="noreferrer" className="linkStyle"><i className="fab fa-instagram"></i></a>
            <a href="/" target="_blank" rel="noreferrer"  className="linkStyle"><i className="fab fa-twitter"></i></a>
            <a href="/" target="_blank" rel="noreferrer"  className="linkStyle"><i className="fab fa-google"></i></a>
            </p>
          </div>
          <p>© 2023 Alam Ansari All rights reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer