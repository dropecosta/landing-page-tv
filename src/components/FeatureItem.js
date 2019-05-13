import React from 'react';
import { FaPlay } from 'react-icons/fa';



 const FeatureItem = ({ category, title, index, show, image}) => {
  const gradient = 'linear-gradient(transparent, rgba(0, 0, 0, 1))'

  return (
    <button
      className="feature-item"
      id={`feature-item-${index}`}
      style= {{
        backgroundImage: `${gradient}, url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      }}
      index={index}
      show={show}
    >
      <span className="category">{category}</span>

      <h3>{title}</h3>

      <div className="overlay">
        <FaPlay />
      </div>
    </button>
  )

}

 export default FeatureItem