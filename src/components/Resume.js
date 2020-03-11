import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import dipen from '../dipen.jpg';
import Education from './Education'


class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: "center"}}>
                            <img
                                src={ dipen } className="resume-pic" alt= "dipen"
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Dipendra Dangol</h2>
                        <h4 style={{color: 'grey'}}> Web Developer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>Pähkinärinteentie 21A, <br />01640 Vantaa </p>
                        <h5>Phone</h5>
                        <p>+358 442106212 </p>
                        <h5>E-mail</h5>
                        <p>dipendra.dangol11@gmail.com </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2019}
                         />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume

