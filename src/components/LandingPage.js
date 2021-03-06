import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import protrait from '../protrait.jpg';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={ protrait } className="profile-pic" alt= "dipen"
                        />
                        <div className="banner-text">
                            <h1>Web Developer</h1>
                            <hr />
                            <p>HTML | CSS | JavaScript | ReactJs | WordPress | REST API | PHP | MYSQL </p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/dipendra-dangol-2a405616a/" target="_blank" rel="noopener onreferrer">
                                    <i class="fa fa-linkedin" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://github.com/dipendradangol" target="_blank" rel="noopener onreferrer">
                                    <i class="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
