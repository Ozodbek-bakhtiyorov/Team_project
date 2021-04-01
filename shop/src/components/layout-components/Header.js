import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="nav">
                <ul className="nav__list">
                    <li className="nav__list_item"><a href="#">HOME</a></li>
                    <li className="nav__list_item"><a href="#">CATEGORY</a></li>
                    <li className="nav__list_item"><a href="#">SERVICES</a></li>
                    <li className="nav__list_item"><a href="#">CONTACT</a></li>
                    <li className="nav__list_item"><a href="#">SALES</a></li>
                </ul>  
            </div>
        )
    }
}
