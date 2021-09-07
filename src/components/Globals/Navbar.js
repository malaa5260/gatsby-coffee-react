import React, { Component } from 'react';
import { Link } from "gatsby";
import logo from '../../images/logo.svg';
import { FaCartArrowDown } from 'react-icons/fa';
export default class Navbar extends Component {

    state={
        navbarOpen: false,
        css:'collapse navbar-collapse'
    }

    render() {
        return (
            <div>
                navbar content
            </div>
        )
    }
}
