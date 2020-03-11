import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Experience extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop: '0px'}}>{this.props.companyName} <br/>{this.props.jobName}</h4>
                        <p>{this.props.jobTitle} <br/>{this.props.jobDescription}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Experience;