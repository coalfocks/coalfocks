import React, { Component } from 'react';

class ProjectsList extends Component {
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
                backgroundColor: this.props.colors.light,
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
            <div style={styles.container} id='projects'>
                <div style={styles.header}> projects </div>
                <div style={styles.subheader}> one day this will be a cool list of all the projects i've made. for now, just trust me that they're good </div>
                <div> picshaire here </div>
                <br />
                <div style={styles.subheader}> in the meantime, check out <a href='https://github.com/coalfocks'>github</a></div>
                <br />
            </div>
        );
    }
}


export default ProjectsList;
