import React from 'react';
import logobbb from '../img/logo_bbb.png';



const FeatureTitle = () => {
        return(
        <div className="main">
                <img className="logo" src={logobbb} alt="Logo Big Brother Brasil"/>
                <h1>Acompanhe 24h ao vivo a casa mais<br /> vigiada do Brasil</h1>
            
            <div className="actions">
                <button>Assista</button>
                <button>Veja mais</button>
            </div>
        </div>

        )
    }


export default FeatureTitle