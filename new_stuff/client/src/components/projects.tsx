import React, { Component } from 'react';
import PicshaireMarketing from './picshaire_marketing.js'

type Props = {
    colors: {
        dark: any,
        middark: any,
        midlight: any,
        light: any,
    },
    mobile: boolean,
}

class ProjectsList extends Component<Props, any> {
    private readonly mobileScale = 0.66;
    private readonly logoHeight = 65;

    constructor(props: Props) {
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
            projects: {
            }
        };
        return (
            <div style={styles.container} id='projects'>
                <div style={styles.header}> projects </div>
                <div style={styles.projects}>
                    <PicshaireMarketing colors={this.props.colors} mobile={this.state.mobile}/>
                </div>
                <div style={styles.header}>
                    also...
                </div>
                <div style={styles.subheader}>
                    <a href='../../../eventrsvp/index.html'>-event RSVP</a><br /><br />
                    <a href=''>-crowdsourcedsales landing page</a><br /><br />
                    <a href='https://appexchange.salesforce.com/appxListingDetail?listingId=a0N300000016ay4EAA'>-powerdialer (insidesales.com)</a>
                </div>
                <br />
                <div style={styles.subheader}> or check out <a href='https://github.com/coalfocks'>github</a></div>
                <br />
            </div>
        );
    }
}


export default ProjectsList;
