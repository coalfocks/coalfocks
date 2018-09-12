import React, { Component } from 'react';
import Resume from '../assets/Resume_09_10_2018.pdf'

class HireMe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobile: this.props.mobile
        };
        this.mobileScale = 0.66;
        this.logoHeight = 65;
        this.standardize = this.standardize.bind(this);
    }
    
    // adjusts for mobile
    standardize = size => {
        if (this.state.mobile) {
            return size * this.mobileScale;
        }
        return size;
    }

    render() {
        var styles = {
            container: {
                backgroundColor: this.props.colors.middark,
                color: this.props.colors.light,
                fontFamily: 'Raleway',
                fontWeight: 400,
                fontSize: this.standardize(4.5) + 'em',
                paddingTop: '20px'
            },
            header: {
                fontWeight: 500,
                fontSize: this.standardize(0.75) + 'em',
                margin: 'auto',
                width: this.standardize(16) + 'em'
            },
            subheader: {
                fontWeight: 300,
                fontSize: this.standardize(0.50) + 'em',
                margin: 'auto',
                width: this.standardize(16) + 'em',
                padding: '3px'
            },
            a: {
                color: this.props.colors.midlight,
            },
            ahover: {
                color: this.props.colors.mid,
            }
        };
        return (
            <div style={styles.container} id='hire'>
                <div style={styles.header}> hire me </div>
                <div style={styles.subheader}> i'll make your wildest dreams come true</div>
                <br />
                <div style={styles.subheader}> reach out at <a style={styles.a} href='mailto:coalfocks@gmail.com'>coalfocks@gmail.com</a> for quotes, questions, or even if you just have a funny joke</div>
                <br />
                <div style={styles.subheader}><a style={styles.a} href={Resume}>resume</a></div>
                <br />
            </div>
        );
    }
}


export default HireMe;
