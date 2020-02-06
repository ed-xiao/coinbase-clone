import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-solid-svg-icons';
// import { FaBeer } from 'react-icons/fa';

class Footer extends React.Component {
    render() {
        return(
        <footer>
            <a href="https://github.com/ed-xiao"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/edward-xiao/"><i className="fab fa-linkedin"></i></a>
                <a href="https://angel.co/edward-xiao-5"><i class="fab fa-angellist"></i></a>
        </footer>
        )
    }
}

export default Footer;