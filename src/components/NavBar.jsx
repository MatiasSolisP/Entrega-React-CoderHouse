import React from "react"
import CartWidget from '../components/CartWidget'

export default function NavBar  () {
    return( 
        <header >
            <h1 > J.M.U</h1>
            <nav >
                <a href="">Categoria Shonen</a>
                <a href="">Categoria Seinen</a>
                <a href="">Categoria Romance</a>
            </nav>
            <CartWidget></CartWidget>
        </header>
    )
}

