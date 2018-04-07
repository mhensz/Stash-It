import React, { Component } from 'react'
// TODO: change the top bar to just say sign out if user is logged in
const Header = () => (
    <div>

    <a href="/signup">Sign Up</a> | <a href="/signin">Sign In</a>
    <h1>Stash It</h1>
    <nav>
    <ul>
        <a href="/about"><li>About Us</li></a>
        <a href="/howitworks"><li>How It Works</li></a>
        <a href="/contact"><li>Contact Us</li></a>
    </ul>
    </nav>
    </div>
)

export default Header;