import React from 'react'
import logo from '../img/logo_header.svg'
import FeatureTitle from './FeatureTitle'
import FeatureList from './FeatureList'

import styled from 'styled-components'

const Header = styled.div`
    header {
        position: fixed;
        top: 0;
        right: 2.5rem;

        svg {
        filter: drop-shadow(1px 2px 0 rgba(0, 0, 0, .6));
        }
    }
`

class Feature extends React.Component {

    render() {
        return(
            <div>
                <Header>
                    <header>
                        <svg height="80" width="160" fill="#FFF">
                            <use xlinkHref={`${logo}#logo_header `} />
                        </svg>
                    </header>          
                </Header>
                <FeatureTitle />
                <FeatureList />
            </div>
        )
    }
}

export default Feature;