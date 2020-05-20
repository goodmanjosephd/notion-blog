import React from 'react'
import { Link } from "gatsby";
import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src="https://joeseo.co/wp-content/uploads/elementor/thumbs/aboutme-ohujc1mpkbwd29w35jbll6td8scgzo34ilbqg0ewua.png" alt="" /></Link>
                    <h1 class="white">Hey, I'm Joe.</h1>
                    <p class="white">Thanks for checking out my blog!</p>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
