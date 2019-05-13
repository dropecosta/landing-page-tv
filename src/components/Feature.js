import React, { Fragment } from 'react'
import logo from '../img/logo_header.svg'

import styled from 'styled-components'
import FeatureWrapper from './FeatureWrapper';

const Header = styled.div`
        // position: fixed;
        // top: 0;
        // right: 2rem;
`



class Feature extends React.Component {

    render() {
        return(
            <Fragment>
                <Header>
                        <svg 
                            width="160" 
                            height="80" 
                            fill="#FFF" 
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <use xlinkHref={`${logo}#logo_header `} />
                        </svg>
                        {/* <img src={logo} alt="Logo Big Brother Brasil" /> */}        
                </Header>

                <FeatureWrapper />
            </Fragment>
        )
    }
}

export default Feature;