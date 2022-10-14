import React, { Component } from 'react';
import Insta from '../assets/insta.png'
import LinkedIn from '../assets/linkedin.png'
import Github from '../assets/github.png'
import Email from '../assets/email.png'

interface Props {
    colors: {
        dark: any,
        middark: any,
        mid: any,
        midlight: any,
        light: any,
    },
    mobile: boolean,
} 

class Footer extends Component<Props, any> {
    private readonly mobileScale = 0.66;
    private readonly logoHeight = 65;

    constructor(props) {
        super(props)
        this.state = {
            mobile: this.props.mobile
        };
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
                backgroundColor: this.props.colors.dark,
                color: this.props.colors.light,
                fontFamily: 'Raleway',
                fontWeight: 400,
                fontSize: this.standardize(4.5) + 'em',
                paddingTop: '20px',
                width: '100%'
            },
            header: {
                fontWeight: 500,
                fontSize: this.standardize(0.75) + 'em',
                margin: 'auto',
                width: this.standardize(16) + 'em'
            },
            subheader: {
                fontWeight: 300,
                fontSize: this.standardize(0.20) + 'em',
                margin: 'auto',
                width: this.standardize(16) + 'em',
                padding: '3px'
            },
            icon: {
                margin: '9px'
            }
        };
        return (
            <div style={styles.container} id='hire'>
                <div style={styles.subheader}>
                    <a href='https://www.instagram.com/coalfocks/' >   <img style={styles.icon} src={Insta} /></a>
                    <a href='https://github.com/coalfocks' >           <img style={styles.icon} src={Github} /></a>
                    <a href='https://www.linkedin.com/in/coalfocks/' > <img style={styles.icon} src={LinkedIn} /></a>
                    <a href='mailto:coalfocks@gmail.com' >             <img style={styles.icon} src={Email} /></a>
                </div>
            </div>
        );
    }
}


export default Footer
