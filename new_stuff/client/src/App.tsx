import React, { Component } from 'react';
import Title from './components/title.js'
import Navbar from './components/navbar.js'
import BGPhoto from './components/bgphoto.js'
import AboutMe from './components/about.js'
import ProjectsList from './components/projects.js'
import HireMe from './components/hire.js'
import Footer from './components/footer.js'
import FlexView from 'react-flexview'
import MediaQuery from 'react-responsive';

//  <div>
//    <div>Device Test!</div>
//    <MediaQuery minDeviceWidth={1224}>
//      <div>You are a desktop or laptop</div>
//      <MediaQuery minDeviceWidth={1824}>
//        <div>You also have a huge screen</div>
//      </MediaQuery>
//      <MediaQuery maxWidth={1224}>
//        <div>You are sized like a tablet or mobile phone though</div>
//      </MediaQuery>
//    </MediaQuery>
//    <MediaQuery maxDeviceWidth={1224}>
//      <div>You are a tablet or mobile phone</div>
//    </MediaQuery>
//    <MediaQuery orientation="portrait">
//      <div>You are portrait</div>
//    </MediaQuery>
//    <MediaQuery orientation="landscape">
//      <div>You are landscape</div>
//    </MediaQuery>
//    <MediaQuery minResolution="2dppx">
//      <div>You are retina</div>
//    </MediaQuery>
//  </div>


const config = {
    colorscheme: {
        dark: '#282827',
        middark: '#4F4E33', //'#568259',
        mid: '#EC4E20',
        midlight: '#A2BAA4',
        light: '#FAFAF3' //'#E8E2DB'
    }
};

class App extends Component {
    render() {
        return (
            <FlexView hAlignContent='center' style={styles.container}>
                <MediaQuery minDeviceWidth={1224}>
                    <Navbar colors={config.colorscheme} mobile={false} />
                    <div style={styles.headers}>
                        <Title colors={config.colorscheme} mobile={false} />
                        <BGPhoto url={'kimncole.JPG'} colors={config.colorscheme} mobile={false} caption={'Kim (wife) \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 Cole'} />
                        <AboutMe colors={config.colorscheme} mobile={false}/>
                        <BGPhoto url={'france.jpg'} colors={config.colorscheme} mobile={false} caption=""/>
                        <ProjectsList colors={config.colorscheme} mobile={false}/>
                        <HireMe colors={config.colorscheme} mobile={false}/>
                        <Footer colors={config.colorscheme} mobile={false}/>
                    </div>
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1224} >
                    <Navbar colors={config.colorscheme} mobile={true} />
                    <div style={styles.headers}>
                        <Title colors={config.colorscheme} mobile={true} />
                        <BGPhoto url={'kimncole.JPG'} colors={config.colorscheme} mobile={true} caption=""/>
                        <AboutMe colors={config.colorscheme} mobile={true}/>
                        <BGPhoto url={'france.jpg'} colors={config.colorscheme} mobile={true} caption=""/>
                        <ProjectsList colors={config.colorscheme} mobile={true}/>
                        <HireMe colors={config.colorscheme} mobile={true}/>
                        <Footer colors={config.colorscheme} mobile={true}/>
                    </div>
                </MediaQuery>
            </FlexView>
        );
    }
}

const styles = {
    container: {
        backgroundColor: config.colorscheme.light,
        height: '100vh',
        paddingTop: '40px',
    },
    headers: {
        marginTop: '24px',
        width: '100%',
    }
}

export default App;

/*
 * title
 * picture (dynamic arrows cole/wife)
 * toolbar
 * parallax effect
 * github/links
 *  resume
 * social media
 * resume
 * contact
 * hire me
        <Toolbar>
        <Title>
        <Picture>
        <About>
        <Links>
        <Hire>
 */
