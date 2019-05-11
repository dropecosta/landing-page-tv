import React from 'react';
import styled from 'styled-components'
import { FiSearch, FiRadio } from 'react-icons/fi';
import { FaShoppingBag, FaUserCircle, FaHome } from 'react-icons/fa';

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

    &:hover {
        width: 15rem;
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
                transition-duration: .6s;
            }
          }
        }
      }
`



class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        // Any number of links can be added here
        this.state = {
            links: [
                {
                    text: 'Busca',
                    icon: <FiSearch />
                }, 
                {
                    text: 'Início',
                    icon: <FaHome />
                }, 
                {
                    text: 'Agora na Globo',
                    icon: <FiRadio />
                }, 
                {
                    text: 'Categorias',
                    icon: <FaShoppingBag />
                }, 
                {
                    text: 'Minha Conta',
                    icon: <FaUserCircle />
                }
            ]
        }
    }
      
    render() {
        let links = this.state.links.map((link, i) => 
            <li ref={i + 1}>
                <button>
                <i aria-hidden="true">{ link.icon }</i>
                <span>{ link.text }</span>
                </button>
            </li>);

        return (
            <Menu>
                <ul>
                { links }
                </ul>
            </Menu>
        )
        
    }

    
}


export default Sidebar