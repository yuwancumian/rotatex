import React from 'react';
import leftIcon from './left.png';
import rightIcon from './right.png';

class RotateX extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            x: 0
        }
        this.handleLeft = this.handleLeft.bind(this);
        this.handleRight = this.handleRight.bind(this);
    }
    handleLeft () {
        this.setState({
            x: this.state.x-90
        })
        console.log('turn left')
    }
    handleRight () {
        this.setState({
            x: this.state.x+90
        })
        console.log('turn right')
    }
    render() {
        const containerStyle= {
            padding: "20px",
            height: '800px',
            position: 'relative',
        }
        const toolStyle = {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            top: '20px',
            width: '80px',
            height: '30px',
            background: 'rgba(0,0,0, 0.5)',
            borderRadius: '6px',
            zIndex: '1000'
        }
        const imgBoxStyle = {
            height: '30px',
            width: '36%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
        const iconStyle= {
            width: '20px',
            height: '20px',
            cursor: 'pointer',
        }
        const test = this.props.children;
        let children = React.cloneElement(this.props.children, 
            { 
                style: {
                    border:'1px solid #dddddd',
                    width: '100%',
                    height: '100%',
                    maxHeight: '60vh',
                    left: 0,
                    right: 0,
                    top: '0',
                    position: 'absolute',
                    zIndex: 0,
                    transform: `rotate(${this.state.x}deg)`,
                },
                key: 1 
            }
        );
        const  blank = '&nbsp;'
        return (
            <div style={containerStyle}>
                <div style={toolStyle}>
                    <div style={imgBoxStyle} onClick={this.handleLeft}> <img src={leftIcon} alt='左转' style={iconStyle}/> </div>
                    <div style={imgBoxStyle} onClick={this.handleRight}><img src={rightIcon} alt='右转' style={iconStyle}/></div>
                </div>
                {children}
            </div>
        )
    }
}

export default RotateX;
