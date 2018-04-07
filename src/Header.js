import React, { Component } from 'react'
// TODO: connect authorization so that the app can see whether or not someone is logged in.
export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
        };
    }

    render(){
        if (this.state.signedIn){
            return (
                <div>

                <a href="/">Log Out</a>
                <h1>Stash It</h1>
                <nav>
                <ul>
                    <a href="/about"><li>About Us</li></a>
                    <a href="/howitworks"><li>How It Works</li></a>
                    <a href="/contact"><li>Contact Us</li></a>
                </ul>
                </nav>
                </div>
            );
        }
        else {
            return (
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
            );
        }
    }
}
