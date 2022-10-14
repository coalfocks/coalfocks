import React, { Component } from 'react';
//import Photo from '../assets/kimncole.JPG';
type Props = {
    colors: {
        dark: any,
        middark: any,
        midlight: any,
        light: any,
    },
    mobile: boolean,
    url: string,
    caption: string,
}

class BGPhoto extends Component<Props, any> {
    private readonly mobileScale = 0.36;
    private readonly photoHeight = 750;
    constructor(props) {
        super(props)
        this.state = {
            mobile: this.props.mobile,
            url: '../assets/' + this.props.url
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
        //const assets = require.context('../assets');
        const assets = import.meta.glob('../assets/*', { eager: true, as: 'url' });
        let photo = assets['../assets/' + this.props.url];
        var styles = {
            container: {
                width: '100%',
                height: this.standardize(660) + 'px',
                backgroundImage: `url('${photo}')`,
                backgroundSize: this.state.mobile ? 'contain' : 'cover',
                backgroundRepeat: 'no-repeat',
                transform: 'scale(1.0)'
            },
            caption: {
               fontFamily: 'Raleway',
               fontWeight: 400,
               fontSize: this.standardize(3) + 'em', 
               position: 'relative' as const,
               left: '50%',
               top: '40%',
               color: this.props.colors.dark,
               display: 'inherit',
            }
        };
        if (!this.props.caption) { styles.caption.display = 'none' }
        return (
            <div style={styles.container}>
                <div style={styles.caption}>{this.props.caption}</div>
            </div>
        );
    }       
}               
            
        
export default BGPhoto;

