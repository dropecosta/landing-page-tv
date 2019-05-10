import React from 'react';
import styled from 'styled-components'

const Img = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    transition-duration: .3s;
    background-color: #ccc;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 0;
`

class Background extends React.Component {
    render() {
        return(
            <Img />
        )
    }
}

export default Background;