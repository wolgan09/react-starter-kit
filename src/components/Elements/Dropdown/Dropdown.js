import React from 'react'
import PropTypes from 'prop-types'
import  './Dropdown.css';
import { Visibility } from '@material-ui/icons';
import { Hidden } from '@material-ui/core';


function Dropdown(props) {
    console.log('dropdown loaded', props)
    return (
        <div >
            <div className="dropdown-container backdrop">
                <div className="content"  style={{visibility: props.show ? 'visible' : 'hidden'}}>
                    For {props.data}
                    <ul >
                        <li>Topwear</li> 
                        <li>Bottomwear</li>
                        <li>Accessories</li>
                        <li>Personal Grooming</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

Dropdown.propTypes = {

}

export default Dropdown

