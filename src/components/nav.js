import React from 'react'
import '../sass/nav.scss';
import logo from '../images/rainfocus-logo.svg';

class Nav extends React.Component {
    render() {
        return <nav className="nav layout vertical between-justified">
            <div>
                <div className="layout hr-nav-bottom vertical">
                    <img src={logo} height="20" alt="rainfocus logo"/>
                    <span class="material-icons">search</span>
                    <span class="material-icons">history</span>
                </div>

                <div className="layout vertical">
                    <a href="/"><span class="material-icons">home</span></a>
                    <span class="material-icons">explore</span>
                    <span class="material-icons">recent_actors</span>
                    <span class="material-icons">dvr</span>
                    <span class="material-icons">people</span>
                    <span class="material-icons">folder_shared</span>
                    <span class="material-icons">looks_3</span>
                    <span class="material-icons">menu_book</span>
                    <span class="material-icons">business</span>
                    <span class="material-icons">equalizer</span>
                </div>
            </div>
            <div className="layout vertical hr-nav-top">
                <span class="material-icons">double_arrow</span>
            </div>

        </nav>
            ;
    }
}

export default Nav