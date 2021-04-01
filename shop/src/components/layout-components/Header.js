import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="nav">
            <img src="logo.png"className="nav__logo"/>

            <ul className="nav__list">
                <li className="nav__list_item"><a className="nav__list_item--link" href="#">HOME</a></li>
                <li className="nav__list_item"><a className="nav__list_item--link" href="#">CATEGORY</a>
                    <ul className="nav__list_item--list" >
                        <li><a>Computers</a></li>
                        <li><a>Phones</a></li>
                        <li><a>Features</a></li>
                        <li><a>Bags</a></li>
                        <li><a>Computers</a></li>
                        <li><a>Phones</a></li>
                        <li><a>Features</a></li>
                        <li><a>Bags</a></li>
                    </ul>
                </li>
                <li className="nav__list_item">
                    <a className="nav__list_item--link" href="#">SERVICES</a>
                    <ul className="nav__list_item--list">
                        <li><a>Computers</a></li>
                        <li><a>Phones</a></li>
                        <li><a>Features</a></li>
                        <li><a>Bags</a></li>
                    </ul>
                </li>
                <li className="nav__list_item"><a className="nav__list_item--link" href="#">CONTACT</a></li>
                <li className="nav__list_item"><a className="nav__list_item--link" href="#">SALES</a>
                <ul className="nav__list_item--list">
                        <li><a>Computers</a></li>
                        <li><a>Phones</a></li>
                        <li><a>Features</a></li>
                        <li><a>Bags</a></li>
                    </ul>
                </li>
                <li className="nav__list_item"><a className="nav__list_item--link" id="nav-drop" href="#">News</a>
                <ul className="nav__list_item--list">
                        <li><a>Computers</a></li>
                        <li><a>Phones</a></li>
                        <li><a>Features</a></li>
                        <li><a>Bags</a></li>
                    </ul>
                </li>
            </ul>

            <form className="nav__form">
                <input type="text" className="nav__form_search" placeholder="Search..."/><button className="nav__form_search-btn">i</button>
            </form>

        </div>
        )
    }
}
