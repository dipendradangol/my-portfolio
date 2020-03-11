import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import dipen from '../dipen.jpg';
import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';

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
                        <h4 style={{color: 'grey'}}> Technical Skills</h4>
                        <p>
                            <ul>
                                <li>Github</li>
                                <li>Docker</li>
                                <li>Trello</li>
                                <li>Slack</li>
                                <li>Canva</li>
                                <li>Bash Scripting </li>
                                <li>Adobe Photoshop</li>
                            </ul>
                        </p>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2019}
                            endYear={2020}
                            schoolName="Business College Helsinki"
                            degreeProgramme="Information and Communications Technology, Vocational Qualification"
                            degreeDescription="Competence area in Software Development"
                            techStudies="-  HTML, CSS, JavaScript, React, REST APIs, WordPress, PHP, MySQL, Symfony"
                         />
                        <Education
                            startYear={2008}
                            endYear={2013}
                            schoolName="Luarea University of Applied Sciences"
                            degreeProgramme="Bachelor's Degree in Business and Adminstration"
                         />
                         <hr style={{borderTop: '3px solid #833fb2'}} />
                        <h2>Experience</h2>
                        <Experience 
                            startYear={2019.10}
                            endYear={2019.12}
                            jobName="Internship at citiscope.io"
                            jobDescription=" - Building website and web hosting"
                            jobTitle=" - Research on Helsinki open data for the company"
                        />
                        <Experience 
                            startYear={2012.06}
                            endYear={2012.12}
                            companyName="Laurea University of Applied Sciences"
                            jobName="Research Intern"
                            jobDescription=" - Information management assistant"
                            jobTitle=" - Maintaining Optima workspace for the lab"
                        />
                        <hr style={{borderTop: '3px solid #833fb2'}} />
                        <Skill 
                            skill="HTML/CSS"
                            progress={80}
                        />
                        <Skill 
                            skill="JavaScript"
                            progress={80}
                        />
                        <Skill 
                            skill="React"
                            progress={75}
                        />
                        <Skill 
                            skill="WordPress"
                            progress={80}
                        />
                        <Skill 
                            skill="PHP"
                            progress={45}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume

