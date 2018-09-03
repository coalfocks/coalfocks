import React, { Component } from 'react';
import FlexView from 'react-flexview'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            btn1hover: false,
            btn2hover: false,
            btn3hover: false,
            btn4hover: false,
            mobile: this.props.mobile
        };
        this.mobileScale = 0.66;
        this.onHover = this.onHover.bind(this);
        this.standardize = this.standardize.bind(this);
        this.scroll = this.scroll.bind(this);
    }

    // adjusts for mobile
    standardize = size => {
        if (this.state.mobile) {
            return size * this.mobileScale;
        }
        return size;
    }

    onHover = (startHover, btnNumber) => {
        var btnName = 'btn' + btnNumber + 'hover';
        var s = {}
        if (startHover) {
            s[btnName] = true;
            this.setState(s);
        } else {
            s[btnName] = false;
            this.setState(s);
        }
    }

    scroll = (element) => {
        document.querySelector('#' + element).scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    render() {
        var styles = {
            container: {
                position: 'fixed',
                top: '0',
                left: '0',
                backgroundColor: this.props.colors.light,
                color: this.props.colors.dark,
                fontFamily: 'Raleway',
                fontWeight: 400,
                fontSize: '4.5em',
                marginBottom: '1.2em',
                width: '100%',
                background: 'transparent',
                zIndex: '100'
            },
            navBtn: {
                fontSize: '0.4em',
                float: 'left',
                margin: '3px',
                padding: '6px',
                cursor: 'pointer',
                borderRadius: '3px',
                height: '1.5em'
            },
            navBtnHover: {
                backgroundColor: this.props.colors.mid,
                color: this.props.colors.light,
                fontSize: '0.5em',
                float: 'left',
                padding: '4px',
                cursor: 'pointer',
                borderRadius: '3px',
                height: '1.5em',
            }
        }
        return (
            <FlexView style={styles.container}>
                <div>
                    <div style={this.state.btn1hover ? styles.navBtnHover : styles.navBtn}
                        onMouseEnter={() => this.onHover(true, 1)}
                        onMouseLeave={() => this.onHover(false, 1)}
                        onClick={() => this.scroll('title')}
                    >Cole</div> 
                    <div style={this.state.btn2hover ? styles.navBtnHover : styles.navBtn}
                        onMouseEnter={() => this.onHover(true, 2)}
                        onMouseLeave={() => this.onHover(false, 2)}
                        onClick={() => this.scroll('about')}
                    >about</div> 
                    <div style={this.state.btn3hover ? styles.navBtnHover : styles.navBtn}
                        onMouseEnter={() => this.onHover(true, 3)}
                        onMouseLeave={() => this.onHover(false, 3)}
                        onClick={() => this.scroll('projects')}
                    >projects</div> 
                    <div style={this.state.btn4hover ? styles.navBtnHover : styles.navBtn}
                        onMouseEnter={() => this.onHover(true, 4)}
                        onMouseLeave={() => this.onHover(false, 4)}
                    >hire</div> 
                </div>
            </FlexView>
        );
    }
}


export default Navbar;
