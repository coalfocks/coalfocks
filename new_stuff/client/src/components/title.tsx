import React, { Component } from 'react';
import FoxHead from '../assets/fox.png'
import FoxTail from '../assets/tail.png'

type Props = {
    colors: {
        dark: any,
        middark: any,
        light: any,
    },
    mobile: boolean,
}

class Title extends Component<Props, any> {
    private readonly mobileScale = 0.66;
    private readonly logoHeight = 65;

    constructor(props: Props) {
        super(props)
        this.state = {
            mobile: this.props.mobile
        };
        this.standardize = this.standardize.bind(this);
    }
    
    // adjusts for mobile
    standardize = (size: number) => {
        if (this.state.mobile) {
            return size * this.mobileScale;
        }
        return size;
    }

    render() {
        var styles = {
            container: {
                backgroundColor: this.props.colors.light,
                color: this.props.colors.dark,
                fontFamily: 'Raleway',
                fontWeight: 400,
                fontSize: this.standardize(4.5) + 'em',
                marginBottom: '18px',
            },
            header: {
                backgroundColor: this.props.colors.middark,
                color: this.props.colors.light,
                borderRadius: '5px',
                margin: 'auto',
                width: '6em'
            },
            subheader: {
                fontWeight: 300,
                fontSize: '0.40em',
                margin: 'auto',
                width: '15.5em'
            },
        };
        return (
            <div style={styles.container} id='title' >
                <div style={styles.header}><img src={FoxHead} height={this.standardize(this.logoHeight) + 'px'} />Cole Fox<img src={FoxTail} height={this.standardize(this.logoHeight) + 'px'} /></div>
                <p style={styles.subheader}>coding like tomorrow isn't loading</p>
            </div>
        );
    }
}


export default Title;
