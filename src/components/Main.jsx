import React from "react";
import './Main.css'

function Main() {
    return(
        <main>
            <section className="firstSection">
                <h3 className="main-title">About</h3>
                <p className="main-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec et eros nulla. 
                Cras rutrum, augue non luctus feugiat, 
                nulla massa ultrices
                </p>
            </section>
            <section className="secondSection">
                <h3 className="main-title">Interests</h3>
                <p className="main-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec et eros nulla. 
                Cras rutrum, augue non luctus feugiat, 
                nulla massa ultrices
                </p>
            </section>
        </main>
    )
    
}

export default Main;