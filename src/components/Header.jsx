import React from "react";
import './Header.css'
import image from '../../public/images/mountain-bike.png'

function Header() {
    return(
        <header>
            <img src={image} className="image"/>
            <section className="title">
                <h2 className="name">Laura Smith</h2>
                <h4 className="position">Frontend Developer</h4>
                <p className="additional">Some additional info</p>
            </section>
            <section className="contact">
                <button className="email">✉️ Email</button>
                <button className="linkedin">💻 LinkedIn</button>
            </section>
        </header>
    )  
}

export default Header;