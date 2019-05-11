import React from 'react';
import styled from 'styled-components'

import featureImg from '../img/bbb.jpg';

import Carousel from 'nuka-carousel';

const ListTitle = styled.h2`
    font-size: 1.1rem;
    font-weight: 700;
    position: relative;
    top: 3rem;
`
const List = styled.div`
    width: 100vw;
    color: white;
    background: red;
    // padding: 0 2rem 2rem 2rem;
    padding: 0 3rem;
    display: flex;
    margin-left: -2rem;
    transition-duration: .5s;

    :hover .item {
        transform: translateX(-25%);
     }

    .rail-content {
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

    .item {
        background: green;
        flex: 0 0 19.7%;
        text-align: center;
        margin: 0 2px;
        transition: transform .3s ease .1s;
    }
`


class FeatureList extends React.Component {
    constructor(props) {
        super(props);
        // Any number of links can be added here
        this.state = {
            featureItems: [
                {
                  group: "Realities",
                  label: 'Big Brother Brasil',
                  title: "Sala de estar",
                  image: featureImg
                },
                {
                  group: "Realities",
                  label: 'Big Brother Brasil',
                  title: "Varanda",
                  image: featureImg
                },
                {
                  group: "Realities",
                  label: 'Big Brother Brasil',
                  title: "Piscina",
                  image: featureImg
                },
                {
                  group: "Realities",
                  label: 'Big Brother Brasil',
                  title: "Academia",
                  image: featureImg
                },
                {
                  group: "Realities",
                  label: 'Big Brother Brasil',
                  title: "Chuveiro",
                  image: featureImg
                }
            ]
        }
    }


    render(){
        


        return(
            <>
                <ListTitle>Agora no BBB</ListTitle>
                <List>
                    <div className="item">1</div>
                    <div className="item">2</div>
                    <div className="item">3</div>
                    <div className="item">4</div>
                    <div className="item">5</div>
                </List>
            </>      
        )
    }
}

export default FeatureList