import React from 'react';
import FeatureTitle from './FeatureTitle';
import FeatureList from './FeatureList';

import styled from 'styled-components'

const Wrapper = styled.div`
    display: block;
    // flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 50vh;
    width: 100%;
    position: relative;
    text-align: left;
    padding: 8rem 0 0 2rem;
    margin-left: 5.2rem;
`

const FeatureWrapper = () => {
  return (
    <Wrapper>
      <FeatureTitle />
      <FeatureList />
    </Wrapper>
  )
}

export default FeatureWrapper