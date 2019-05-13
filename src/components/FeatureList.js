import React from 'react';
import FeatureItem from './FeatureItem';
import styled from 'styled-components'

import featureImg from '../img/bbb.jpg';
import Carousel from 'nuka-carousel';



const List = styled.div`
    color: white;
    position: absolute;
    bottom: 0;
    z-index: 2;
    padding: 0 2rem;
    margin-left: 5.2rem;
  
     h2 {
      font-size: 1.1rem;
      font-weight: 700;
      position: relative;
      z-index: 4;
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
  
         <div class="feature-wrapper">
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
        </div>
      </List>
    )
  }
  
   export default FeatureList 