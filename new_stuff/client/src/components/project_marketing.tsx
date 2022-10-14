import React, { Component } from 'react';

type Props = {
    colors: {
        dark: any,
        middark: any,
        midlight: any,
        light: any,
    },
    mobile: boolean,
    url: string,
    title: string,
    caption: string,
    href: string,
}

class Project extends Component<Props, any> {
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
        //const assets = require.context('../assets');
        const assets = import.meta.glob('../assets/*', { eager: true, as: 'url' });
        //let photo = assets('./' + this.props.url);
        let photo = assets['../assets/' + this.props.url];
        const appStore = assets['../assets/appstore.png'];

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
                textAlign: 'center' as const,
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
            <div style={styles.container}>
                <div style={styles.header}>- {this.props.title} -</div>
                <div style={styles.header}>{this.props.caption}</div>
                <div style={styles.artwork}>
                    <div><img src={photo} style={styles.image} /></div>
                    <div><a href={this.props.href}><img src={appStore} style={styles.image} /></a></div>
                </div>
            </div>
        );
    }
}


export default Project
