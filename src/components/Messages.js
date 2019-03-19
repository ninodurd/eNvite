import React, { Component } from 'react'
import { connect } from 'react-redux'
import posed, { PoseGroup } from 'react-pose';

const Modal = posed.div({
    enter: {
      y: "0%",
      opacity: 1,
      delay: 300,
      transition: {
        y: {
          type: 'spring',
          velocity: 50,
          damping: 100,
          ease: [.01, .64, .99, .56],},
        default: { duration: 500 }
      }
    },
    exit: {
      y:"100%",
      opacity: 0,
      transition: {
        y: {
          type: 'spring',
          velocity: 50,
          damping: 100,
          ease: [.01, .64, .99, .56],},
        default: { duration: 300 }
      }
    }
  });
  
//   const Shade = posed.div({
//     enter: { opacity: 1 },
//     exit: { opacity: 0 }
//   });
class Messages extends Component {

    // componentDidMount() {
    //     setInterval(() => {
    //       this.setState({
    //         isVisible: !this.state.isVisible
    //       });
    //     }, 2000);
    //   }
    render() {
        const { isVisible } = this.props;
    
        return (
            <PoseGroup>
        {isVisible && 
            <Modal key={"shade"} className="messages--container">
                <div className="friend--messages">
                    <img src={this.props.userName[1].image} />
                    <div className="messages--text">
                        <p>{this.props.userName[1].messages}</p>
                    </div>

                </div>
                <div className="friend--messages">
                    <img src={this.props.userName[2].image} />
                    <div className="messages--text">
                        <p>{this.props.userName[2].messages}</p>
                    </div>

                </div>
                
            </Modal>
             }
             </PoseGroup>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        userName: state.userInfo
    }
}




export default connect(mapStateToProps)(Messages)