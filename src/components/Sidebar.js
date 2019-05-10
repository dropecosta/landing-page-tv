import React from 'react';
import styled from 'styled-components'

const Menu = styled.aside`
    display: flex;
    position: fixed;
    z-index: 2;
    width: 5.2rem;
    height: 100vh;
    align-items: center;
    left: 0;
    background-color: #222;
    transition :.3s, widith, .3s;

    &:focus {
        width: 17rem;
        transition-duration: .5s;
    
        ul li button span {
          opacity: 1;
          transition-duration: .5s;
          transition-property: opacity;
        }
      }

    ul {
        width: 100%;
        padding: 0;
        list-style: none;
    
        li {
          button {
            display: flex;
            position: relative;
            align-items: center;
            width: 100%;
            padding: 1.5rem 0 1rem 2rem;
            color: #FFFFFF;
            background: none;
            border: none;
            outline: none;
            font-size: 1.25rem;
            text-align: left;
    
            &:focus {
                color: #222;
                background-color: #fff;
            }
    
            span {
                opacity: 0;
                white-space: nowrap;
                position: absolute;
                left: 5rem;
                transition-duration: .5s;
            }
          }
        }
      }
`

class Sidebar extends React.Component {

    render() {
        return (
            <Menu>
                <ul>
                    <li><button>Item</button></li>
                    <li><button>Item</button></li>
                    <li><button>Item</button></li>
                </ul>
            </Menu>
        )
        
    }
}

export default Sidebar