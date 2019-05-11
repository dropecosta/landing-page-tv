import React from 'react';
import logobbb from '../img/logo_bbb.png';

import styled from 'styled-components'

const Main = styled.div`
    .logo{
        height: 8rem;   
    }

    h1{
        color: #FFF;
        font-weight: 500;
        position: relative;
    }
`


class FeatureTitle extends React.Component {
    render() {
        return(
            <Main>
                <img className="logo" src={logobbb} alt="Logo Big Brother Brasil"/>
                <h1>Acompanhe 24h ao vivo a casa mais<br /> vigiada do Brasil</h1>
            </Main>
        )
    }
}

export default FeatureTitle