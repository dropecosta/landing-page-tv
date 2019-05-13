import React from 'react';
import logobbb from '../img/logo_bbb.png';
import { connect } from 'react-redux';
import { highlightNavigation } from '../redux/AppReducer';
import { FaPlay } from 'react-icons/fa';


class FeatureTitle extends React.Component {
    componentDidUpdate() {
        if (this.props.highlighted === 'headline') {
          this.props.highlightNavigation()
        }
      }
    
      render() {
        if (this.props.highlighted === 'feature') {
          return (
            <div className="highlight feature-item">
              <h1>{this.props.focusedFeatureItem.show}</h1>
      
              <h2>{this.props.focusedFeatureItem.title}</h2>
            </div>
          )
        }

        return(
        // <div className="main">

        //         <img className="logo" src={logobbb} alt="Logo Big Brother Brasil"/>
        //         <h1>Acompanhe 24h ao vivo a casa mais<br /> vigiada do Brasil</h1>
            
        //         <div className="actions">
        //             <button>
        //             <FaPlay />
        //             Assista
        //             </button>
        //             <button>Veja mais</button>
        //         </div>
        //     </div>

        <div className="highlight">
        <div id="headline">
          <img className="logo" src={logobbb} alt="Big Brother Brasil"/>
            
          <h1>Acompanhe 24h ao vivo a casa mais<br /> vigiada do Brasil</h1>
    
          <div className="actions">
            <button>
              <FaPlay />
              Assista
            </button>
            
            <button>Veja mais</button>
          </div>
        </div>
      </div>


        )
    }
}

const mapStateToProps = state => {
    const { highlighted, focusedFeatureItem } = state
    return { highlighted, focusedFeatureItem }
  }
  
  export default connect(mapStateToProps, { highlightNavigation })(FeatureTitle)