import React,{Component} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import './Home.css';

class Home extends Component{
    constructor(){
        super();
        this.state={}        
    }

    componentDidMount(){
       console.log("Home Mounted");
    }
    componentWillUnmount(){
        console.log("Home is unmounting");
    }

    render(){
        return(
            <div className={"homepage"}>
                <div className = "hero">
                    <div className = "description">
                        <div className = "title">
                            <span>Our Story</span>
                        </div>
                        <div>
                            <p>
                                We were born with the love of Fashion and the way it reflects the creativity and the beauty of human mind and craft, the way it reveals people’s singularities, the way it connects them beyond space by marking the identity of a time. But we were also born at a time where Fashion has been made in such a way that it jeopardizes greatly the planet we call home. And we believe this is not part of its essence.
                            </p>
                            <p>
                                We were born with the love of Fashion and the way it reflects the creativity and the beauty of human mind and craft, the way it reveals people’s singularities, the way it connects them beyond space by marking the identity of a time. But we were also born at a time where Fashion has been made in such a way that it jeopardizes greatly the planet we call home. And we believe this is not part of its essence.
                            </p>
                        </div>
                    </div>
                    <div className = "ourvision">
                        <div className = "ourvision-title">
                            
                        </div>
                    </div>
                    <div className = "choosenewbrands">
                        <div className = "title1">
                            <span>#CHOOSENEWBRANDS</span>
                        </div>
                        <div>
                            <p>
                                Our vision for the future is to go beyond those continental logistics hubs to bring together skills, institutions and countries. Together we will challenge the system, produce groundbreaking knowledge and invent new upcycling techniques that will shape a future where human and nature creations can thrive in harmony.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapState = (state = {}) => {
    return {...state};
};

const mapDispatch = (dispatch) => {
    return {
    }
};

export default withRouter(connect(mapState, mapDispatch)(Home))

