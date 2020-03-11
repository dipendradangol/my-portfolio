import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import dipen from '../dipen.jpg';

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={ dipen } className="profile-pic" alt= "dipen"
                        />
                        <div className="banner-text">
                            <h1>Web Developer</h1>
                            <hr />

                            <p>HTML | CSS | JavaScript | ReactJs | WordPress | REST API | PHP | MYSQL </p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/dipendra-dangol-2a405616a/" rel="noopener onreferrer" target="_blank">
                                    <i class="fa fa-linkedin" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://github.com/dipendradangol" rel="noopener onreferrer" target="_blank">
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
