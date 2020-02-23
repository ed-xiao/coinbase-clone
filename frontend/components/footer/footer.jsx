import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-solid-svg-icons';
// import { FaBeer } from 'react-icons/fa';

class Footer extends React.Component {
    render() {
        return (
          <footer>
            <a href="https://github.com/ed-xiao" target="_blank">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/edward-xiao/" target="_blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://angel.co/edward-xiao-5" target="_blank">
              <i className="fab fa-angellist"></i>
            </a>
          </footer>
        );
    }
}

export default Footer;