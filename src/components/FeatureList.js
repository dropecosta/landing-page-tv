import React from 'react';
import FeatureItem from './FeatureItem';
import styled from 'styled-components'



const List = styled.div`
    color: white;
    background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7));
    padding: 0 2rem 2rem;
    min-width: 100vw;
    margin-top: 5rem;
    position: relative;
    left: -2rem;
  
     h2 {
      font-size: 1.1rem;
      font-weight: 700;
      position: relative;
      margin-top: 0;
    }

    .feature-wrapper {
        display: inline-flex;
    
        &:before, &:after {
          content: '';
          height: 5rem;
          width: 100%;
          left: 0;
          position: absolute;
          z-index: 1;
          background: linear-gradient(to top, rgba(0, 0, 0, .7), transparent);
        }
    
        &:before {
          top: -5rem;
        }
    
        &:after {
          bottom: -5rem;
          background: linear-gradient(to bottom, rgba(0, 0, 0, .7), transparent);
        }
      }
`


const FeatureList = () => {
    return (
      <List>
        <h2>Agora no BBB</h2>
  
         <div className="feature-wrapper">
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
        </div>
      </List>
    )
  }
  
   export default FeatureList 