import React, { Component } from 'react'
import {Bootstrap, Jumbotron, Nav, Navbar, NavItem} from 'react-bootstrap'
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
                <Jumbotron>
                    <h1>Stash It</h1>
                </Jumbotron>
                <Navbar>
                    <Nav>
                        <NavItem eventKey={1} href="/about">
                        About Us
                        </NavItem>
                        <NavItem eventKey={2} href='/howitoworks'>
                        How It Works
                        </NavItem>
                        <NavItem eventKey={3} href='/contact'>
                        Contact Us
                        </NavItem>
                    </Nav>
                </Navbar>
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
