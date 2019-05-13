import React from 'react';
import logobbb from '../img/logo_bbb.png';

import styled from 'styled-components'

const Main = styled.div`
    background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7));
    min-height: 100%;
    width: 35vw;
    position: relative;
    z-index: 2;
    padding: 5rem 2rem;
  
     &:after {
      content: '';
      height: 100%;
      width: 100%;
      background: linear-gradient(to right, rgba(0, 0, 0, .7), transparent);
      display: block;
      position: absolute;
      top: 0;
      right: -100%;
      z-index: 1;
    }
  
     img.logo {
      height: 8rem;
      width: auto;
      font-family: Helvetica;
      position: relative;
      z-index: 2;
    }
  
     h1 {
      color: white;
      font-weight: 500;
      margin-bottom: 2.5rem;
      white-space: nowrap;
      position: relative;
      z-index: 2;
    }
  
     .actions {
      display: flex;
  
       button {
        padding: .5rem 1rem;
        background: none;
        color: white;
        font-size: 1.25rem;
        font-weight: 600;
        border-radius: 3px;
        margin-right: .8rem;
        outline: none;
        transition-duration: .5s;
        border: 1px solid white;
  
         &:focus {
          background-color: white;
          color: black;
          transition-duration: .5s;
          transform: scale(1.1);
        }
      }
    }
  
`

const FeatureTitle = () => {
        return(
            <Main>
                <img className="logo" src={logobbb} alt="Logo Big Brother Brasil"/>
                <h1>Acompanhe 24h ao vivo a casa mais<br /> vigiada do Brasil</h1>
            
            <div className="actions">
                <button>Assista</button>
                <button>Veja mais</button>
            </div>
        </Main>

        )
    }


export default FeatureTitle