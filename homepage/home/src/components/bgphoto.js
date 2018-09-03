import React, { Component } from 'react';
import Photo from '../assets/kimncole.JPG';

class BGPhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobile: this.props.mobile,
            url: '../assets/' + this.props.url
        };
        this.mobileScale = 0.66;
        this.photoHeight = 750;
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
                width: '100%',
                height: this.standardize(660) + 'px',
                backgroundImage: `url(${Photo})`,
                backgroundSize: 'cover',
                transform: 'scale(1.0)'
            },
            caption: {
               fontFamily: 'Raleway',
               fontWeight: 400,
               fontSize: this.standardize(3) + 'em', 
               position: 'relative',
               left: '50%',
               top: '40%',
               color: this.props.colors.dark
            }
        };
        return (
            <div style={styles.container}>
                <div style={styles.caption}>Kim (wife)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cole</div>
            </div>
        );
    }       
}               
            
        
export default BGPhoto;

