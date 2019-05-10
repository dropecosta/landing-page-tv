import React from 'react';
import logoBbb from '../img/logo_bbb.png';

class FeatureTitle extends React.Component {
    render(){
        return(
            <div>
                <img className="logo" src={logoBbb} alt="Logo Big Brother Brasil"/>
                <h1>Acompanhe 24h ao vivo a casa mais<br /> vigiada do Brasil</h1>
            </div>
        )
    }
}

export default FeatureTitle