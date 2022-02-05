import React from 'react'
import '../sass/nav.scss';
import logo from '../images/rainfocus-logo.svg';

class Nav extends React.Component {
    render() {
        return <nav className="nav layout vertical between-justified">
            <div>
                <div className="layout hr-nav-bottom vertical">
                    <a href="/" className="p-2"><img src={logo} height="20" alt="rainfocus logo"/></a>
                    <a href="/"><span class="material-icons">search</span></a>
                    <a href="/"><span class="material-icons">history</span></a>
                </div>

                <div className="layout vertical">
                    <a href="/"><span class="material-icons">home</span></a>
                    <a href="/"><span class="material-icons">explore</span></a>
                    <a href="/"><span class="material-icons">recent_actors</span></a>
                    <a href="/"><span class="material-icons">dvr</span></a>
                    <a href="/"><span class="material-icons">people</span></a>
                    <a href="/"><span class="material-icons">folder_shared</span></a>
                    <a href="/"><span class="material-icons">looks_3</span></a>
                    <a href="/"><span class="material-icons">menu_book</span></a>
                    <a href="/"><span class="material-icons">business</span></a>
                    <a href="/"><span class="material-icons">equalizer</span></a>
                </div>
            </div>
            <div className="layout vertical hr-nav-top">
                <a href="/"><span class="material-icons">double_arrow</span></a>
            </div>

        </nav>
            ;
    }
}

export default Nav