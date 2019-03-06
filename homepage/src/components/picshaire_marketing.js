import React, { Component } from 'react';
import AppStore from '../assets/appstore.png'
import Picshaire from '../assets/picshaire1.png'

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
                color: this.props.colors.middark,
                fontFamily: 'Raleway',
                fontWeight: 400,
                fontSize: this.standardize(1.5) + 'em',
                paddingTop: '20px',
                margin: 'auto',
            },
            header: {
                fontWeight: 500,
                fontSize: this.standardize(0.3) + 'em',
                margin: 'auto',
                width: this.standardize(16) + 'em',
                textAlign: 'center',
            },
            image: {
                width: this.standardize(1.8) + 'em',
                margin: 'auto'
            },
            artwork: {
                backgroundColor: this.props.colors.midlight,
                borderRadius: '8px',
                width: this.standardize(1.8) + 'em',
                padding: this.standardize(18) + 'px',
                margin: 'auto',
                marginTop: this.standardize(14) + 'px'
            }
        };
        return (
            <div style={styles.container} id='picshaire'>
                <div style={styles.header}>- picshaire -</div>
                <div style={styles.header}>photo sharing made great again</div>
                <div style={styles.artwork}>
                    <div><img src={Picshaire} style={styles.image} /></div>
                    <div><a href='itms://itunes.apple.com/us/app/picshaire/id1390962206?ls=1&mt=8'><img src={AppStore} style={styles.image} /></a></div>
                </div>
            </div>
        );
    }
}


export default PicshaireMarketing
