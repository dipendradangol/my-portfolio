import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Weather from "./assets/images/weather.png";
import Expenses from "./assets/images/expenses.png";
import Meme from "./assets/images/memeit.png";
import Todo from "./assets/images/todo_img.jpg";
import SnakeGame from "./assets/images/nokia-snake.jpg";

console.log(Weather)
export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/** Project card 1 */}
                    <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background:`url(${Expenses}) center / cover` }}>Expense Tracker</CardTitle>
                        <CardText>
                            Expense tracker calculate income and expenses. Shows the current balance. 
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/dipendradangol/expense-tracker" target="_blank" rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a href="https://income-expense.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/** Project card 2 */}
                    <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background:`url(${Weather}) center/cover`}}>PWA Weather App</CardTitle>
                        <CardText>
                            Progressive Weather app in ReactJs, using Open Weather API to make calls to a restful api to return current weather data. It can easily add to home screen in mobile devices as native app.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/dipendradangol/weather-pwa" target="_blank" rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a href="https://uptodateweather.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/** Project card 3 */}
                    <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: `url(${Meme}) center / cover`}}>**PWA Meme</CardTitle>
                        <CardText>
                            Progressive web app to create meme app in reactjs, using imgflip API that generate meme images. With this app you can create your own meme by writing text. Since this app in is PWA you can add to home screen in mobile device. This app also performs regardless to the poor internet/no internet.
                        </CardText>
                        <CardActions border>
                        <Button colored><a href="https://github.com/dipendradangol/meme-generator" target="_blank" rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a href="https://memeit.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/** Project card 1 */}
                    <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: `url(${Todo}) center / cover`}}>ToDo-List App</CardTitle>
                        <CardText>
                            A todo list project in vanilla JS using fundamental JavaScript techniques including local storage.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/dipendradangol/Todo-List" target="_blank" rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a href="https://tasks-todo.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/** Project card 2 */}
                    <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: `url(${SnakeGame}) center / cover`}}>Snake Game App</CardTitle>
                        <CardText>
                            The iconic snake game using JavaScript to code this fun game. I use object orientated approac to build this game.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/dipendradangol/snake-app" target="_blank" rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a href="https://snakegameplus.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/** Project card 3 */}
                    <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>JavaScript Project #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/** Project card 1 */}
                    <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>WordPress Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/** Project card 2 */}
                    <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>WordPress Project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/** Project card 3 */}
                    <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>WordPress Project #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>ReactJs</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>WordPress</Tab>
                </Tabs>

                <section>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;

