import React from 'react';
import { FiSearch, FiRadio } from 'react-icons/fi';
import { FaShoppingBag, FaUserCircle, FaHome } from 'react-icons/fa';
import { keycodes } from '../constants';
import featureImg from '../img/bbb.jpg';
import highlightBg from '../img/home_background.jpg';

const INITIAL_STATE = {
  sidebarItems: [
    {
      label: "Busca",
      icon: <FiSearch />
    },
    {
      label: "Início",
      icon: <FaHome />
    },
    {
      label: "Agora na Globo",
      icon: <FiRadio />
    },
    {
      label: "Categorias",
      icon: <FaShoppingBag />
    },
    {
      label: "Minha conta",
      icon: <FaUserCircle />
    }
  ],
  featureItems: [
    {
      category: "Realities",
      show: 'Big Brother Brasil',
      title: "Sala de estar",
      image: featureImg
    },
    {
      category: "Realities",
      show: 'Big Brother Brasil',
      title: "Varanda",
      image: featureImg
    },
    {
      category: "Realities",
      show: 'Big Brother Brasil',
      title: "Piscina",
      image: featureImg
    },
    {
      category: "Realities",
      show: 'Big Brother Brasil',
      title: "Academia",
      image: featureImg
    },
    {
      category: "Realities",
      show: 'Big Brother Brasil',
      title: "Chuveiro",
      image: featureImg
    }
  ],
  highlighted: 'headline',
  focusedFeatureItem: {
    show: '',
    title: ''
  },
  background: {
    image: highlightBg,
    fade: false
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const sidebarNavigation = () => {
  const items = document.querySelectorAll('.sidebar-item')

  items.forEach(item => {
    item.addEventListener('keydown', event => {
      const index = item.getAttribute('index')

      switch (event.keyCode) {
        case keycodes.down:
          const nextSibling = document.querySelector(`#sidebar-item-${parseInt(index) + 1}`)
          nextSibling && nextSibling.focus()
          break
        case keycodes.up:
          const prevSibling = document.querySelector(`#sidebar-item-${parseInt(index) - 1}`)
          prevSibling && prevSibling.focus()
          break
        case keycodes.right:
          const firstHighlightBtn = document.querySelector('main button')
          firstHighlightBtn.focus()
          break
        default:
          break
      }
    })
  })
}

export const highlightNavigation = () => {
  const buttons = document.querySelectorAll('main button')
  buttons[0].focus()

  buttons.forEach(btn => {
    btn.addEventListener('keydown', event => {
      if (event.keyCode === keycodes.down) {
        const firstFeatureItem = document.querySelector('.feature-item')
        firstFeatureItem.focus()
      }
    })
  })

  buttons[0].addEventListener('keydown', event => {
    switch (event.keyCode) {
      case keycodes.right: 
        buttons[1].focus()
        break
      case keycodes.left:
        document.querySelector('.sidebar-item').focus()
        break
      default:
        break
    }
  })

  buttons[1].addEventListener('keydown', event => {
    if (event.keyCode === keycodes.left) {
      buttons[0].focus()
    }
  })
}

export const featureNavigation = () => {
  const items = document.querySelectorAll('.feature-item')

  items.forEach(item => {
    item.addEventListener('keydown', event => {
      const index = item.getAttribute('index')

      switch (event.keyCode) {
        case keycodes.right:
          const nextSibling = document.querySelector(`#feature-item-${parseInt(index) + 1}`)
          nextSibling && nextSibling.focus()
          break
        case keycodes.left:
          if (parseInt(index) === 0) {
            const firstSidebarItem = document.querySelector('#sidebar-item-0')
            firstSidebarItem.focus()
          }

          const prevSibling = document.querySelector(`#feature-item-${parseInt(index) - 1}`)
          prevSibling && prevSibling.focus()
          break
        case keycodes.up:
          const firstHighlightBtn = document.querySelector('main button')
          firstHighlightBtn.focus()
          break
        default:
          break
      }
    })
    
  })
}