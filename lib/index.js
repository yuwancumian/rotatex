import React from 'react';
import leftIcon from './left.png';
import rightIcon from './right.png';

class RotateX extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            x: 0,
            top: 0,
            height: 0,
            width: 0,
        }
        this.handleLeft = this.handleLeft.bind(this);
        this.handleRight = this.handleRight.bind(this);
        this.onImgLoad = this.onImgLoad.bind(this);
    }
    onImgLoad({target:img}) {
        this.setState({height:img.offsetHeight,width:img.offsetWidth});
    }
    setTop ()  {
        console.log('set top!',this.state.x/90)
        const offset = (this.state.width - this.state.height)/2;
        if (this.state.x/90 % 2 === 0) {
            this.setState({
                top: 0
            })
        } else {
            this.setState({
                top: offset
            })
        }
    }
    handleLeft () {
        this.setState({
            x: this.state.x-90
        }, this.setTop)
        console.log('turn left1')
    }
    handleRight () {
        this.setState({
            x: this.state.x+90
        },this.setTop)
        console.log(this.state.width,this.state.height)
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
                    position: 'absolute',
                    width: 'auto',  
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    left: 0,
                    top: `${this.state.top}px`,
                    zIndex: 0,
                    transform: `rotate(${this.state.x}deg)`,
                    transformOrigin: 'center center',
                },
                key: 1,
                onLoad: this.onImgLoad,
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
