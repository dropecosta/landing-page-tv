import React from 'react';

import styled from 'styled-components'

const Item = styled.div`
border: none;
background-image: linear-gradient(transparent, rgba(0, 0, 0, 1)), url('../images/bbb-19-logo.jpg');
background-size: cover;
background-position: center center;
height: 10rem;
width: 17rem;
position: relative;
z-index: 2;
margin-right: 1.5rem;
outline: none;
transition-duration: .5s;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-end;
color: white;
padding: 1rem;

&:focus {
    transition-duration: .5s;
    border: 1.5px solid white;
  }

   span.category {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 100;
    -webkit-font-smoothing: antialiased;
  }

   h3 {
    font-size: 1.4rem;
    margin: 0;
  }

`

 const FeatureItem = () => {
  return (
    <Item>
      <span className="category">Realities</span>
       <h3>Piscina</h3>
    </Item>
  )
}

 export default FeatureItem