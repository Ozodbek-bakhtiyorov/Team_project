import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="nav-bg">
                <div className="nav">
                    <img src="./logo.png" className="nav__logo"/>

                <ul className="nav__list">
                    <li className="nav__list_item"><a className="nav__list_item--link" href="#">HOME</a></li>
                    <li className="nav__list_item"><a className="nav__list_item--link" href="#">CATEGORY</a> 
                        <p className="arrow">
                            <p className='arrow__line'></p>
                        </p>
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
                        <p className="arrow">
                            <p className='arrow__line'></p>
                        </p>
                        <ul className="nav__list_item--list">
                            <li><a>Computers</a></li>
                            <li><a>Phones</a></li>
                            <li><a>Features</a></li>
                            <li><a>Bags</a></li>
                        </ul>
                    </li>
                    <li className="nav__list_item"><a className="nav__list_item--link" href="#">CONTACT</a></li>
                    <li className="nav__list_item"><a className="nav__list_item--link" href="#">SALES</a>
                        <p className="arrow">
                            <p className='arrow__line'></p>
                        </p>
                         <ul className="nav__list_item--list">
                             <li><a>Computers</a></li>
                            <li><a>Phones</a></li>
                            <li><a>Features</a></li>
                            <li><a>Bags</a></li>
                        </ul>
                </li>
                <li className="nav__list_item"><a className="nav__list_item--link" id="nav-drop" href="#">News</a>
                        <p className="arrow">
                            <p className='arrow__line'></p>
                        </p>
                     <ul className="nav__list_item--list">
                            <li><a>Computers</a></li>
                            <li><a>Phones</a></li>
                            <li><a>Features</a></li>
                         <li><a>Bags</a></li>
                    </ul>
                    </li>
                    </ul>

                <form className="nav__form">
                    <input type="text" className="nav__form_search" placeholder="Search..."/    ><button className="nav__form_search-btn"><i className="fa fa-search"></i></button>
                </form>

        </div>
            </div>
        )
    }
}
