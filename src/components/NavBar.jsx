import React from "react"
import CartWidget from '../components/CartWidget'


export default function NavBar  () {
    return(
        <div>
            <div className="container">
                <nav className="nav">
                    <div className="nav-brand">
                        <a className="nav-link" href="#">J.M.U</a>
                    </div>
                    <ul className="nav-list">
                        <li>
                            <a className="nav-link" href="#">Categoria Shonen</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">Categoria Seinen</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">Categoria Romance</a>
                        </li>
                        <li>
                            <a className="nav-link" href="#"> 
                            <CartWidget></CartWidget>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

