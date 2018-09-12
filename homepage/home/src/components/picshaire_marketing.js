import React, { Component } from 'react';

class PicshaireMarketing extends Component {
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
        };
        return (
            <div style={styles.container} id='hire'>
                <div style={styles.header}> hire me </div>
                <div style={styles.subheader}> i'll make your wildest dreams come true</div>
            </div>
        );
    }
}


export default PicshaireMarketing
