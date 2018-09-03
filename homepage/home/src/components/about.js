import React, { Component } from 'react';

class AboutMe extends Component {
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
                backgroundColor: this.props.colors.midlight,
                color: this.props.colors.dark,
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
        };
        return (
                // row of images of me doing normal people stuff
            <div style={styles.container} id='about'>
                <div style={styles.header}> hi, i'm cole</div>
                <div style={styles.subheader}> i like to make stuff</div>
                <div style={styles.subheader}> i also like to do normal people stuff</div>
                <div style={styles.subheader}> i do mobile, web, and utility tool development</div>
            </div>
        );
    }
}


export default AboutMe;
