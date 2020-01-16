import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-solid-svg-icons';
// import { FaBeer } from 'react-icons/fa';

class Footer extends React.Component {
    render() {
        return(
        <footer>
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#">Personal Website</a>
        </footer>
        )
    }
}

export default Footer;