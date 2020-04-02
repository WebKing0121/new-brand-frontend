import React,{Component} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import bredImag from "../Assets/images/image_25.png";
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
                <div className = "report-part">
                    <div className = "report-mark">
                        <span>N</span>
                    </div>
                    <div className = "report-description">
                        <p>
                            “L'enjeu n'est pas d'aller plus loin et de faire moins cher, c'est d'automatiser la production en inventant la machine qui permettra d'aller plus vite et de faire mieux”
                        </p>
                    </div>
                    <div className = "report-auth">
                        <div className = "name">
                            <span>Guillaume Gibault</span>
                        </div>
                        <div className = "job">
                            <span>Dirigeant Le Slip Français</span>
                        </div>
                    </div>
                </div>
                <div className = "user1">
                    <div className = "user1-img">
                    </div>
                    <div className = "user-info">
                        <div className = "user-info-name">
                            <span> Jessy BIGOT</span>
                        </div>
                        <div className = "user-info-detail">
                            <p>/ President & Fondater</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla vel erat id eleifend. Nullam imperdiet tempor lectus, eget volutpat lacus commodo vel.</p>
                        </div>
                    </div>
                </div>
                <div className = "user2">
                    <div className = "user2-info">
                        <div className = "user-info-name">
                            <span> Charlotte Martinez</span>
                        </div>
                        <div className = "user-info-detail">
                            <p>/ Directrice Générale</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla vel erat id eleifend. Nullam imperdiet tempor lectus, eget volutpat lacus commodo vel.</p>
                        </div>
                    </div>
                    <div className = "user2-img">
                    </div>
                </div>
                <div className = "challenge-part">
                    <div className = "challenge-part-title">
                        <span className = "challenge-txt">The Challenge</span>
                        <br></br>
                        <span className = "challenge-title">/ Faire entrer notre industrie dans le 21e siècle</span>
                    </div>
                    <div className = "challenge-part-group">
                        <div className = "challenge-part-one">
                            <p>
                                “Some of our goals with the migration where to improve workflow efficiencies, empower site producers to make changes with a full preview of their impact, and cut the time it takes to build out a section of the site from days to hours.”
                            </p>
                            <p>
                                — Weston Ruter, CTO at XWP
                            </p>
                        </div>
                        <div className = "challenge-part-two">
                            <p>
                                In 2014, News Corp Australia was grappling with ongoing development, maintenance, and administration challenges related to their existing publishing platforms.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                        </div>
                    </div>
                </div>
                <div className = "passer-part">
                    <div className = "passer-part-img">
                    </div>
                    <div className = "passer-part-description">
                        <div className = "challenge-part-title">
                            <span className = "challenge-txt">The Challenge</span>
                            <br></br>
                            <span className = "challenge-title">/ Passer de la théorie à la pratique</span>
                        </div>
                        <div className = "passer-part-description-info">
                            <p>VIP worked with partner agency XWP on a yearlong migration of 15 major web properties to WordPress. Thus began one of the most significant technical undertakings in the company’s history. The size, scale, and complexity of the News Corp Australia migration were unlike any of its kind to date.
                            </p>
                            <p>To bring all the brands to a single platform, XWP simplified the sites’ overall anatomy by consolidating several markup languages from the existing web properties into a single structure. This consolidation improved the sites’ performance and shortened the learning curve for News Corp Australia’s internal development team. </p>
                            <p>Incorporating a core suite of trusted plugins and custom publishing tools deepened the production team’s capability to create, without having to call on IT for technical support.</p>
                        </div>
                    </div>
                </div>
                <div className = "participate-part">
                    <div className = "report-mark">
                        <span>N</span>
                    </div>
                    <div className = "participate-part-title">
                        <p className = "participate-part-title-txt">
                            Avec la participation
                        </p>
                    </div>
                    <div className = "participate-part-description">
                        <span>Ce projet est cofinancé par l’Union Européenne avec l’Instruments Financiers Horizon 2020 et au Fonds Européen pour les Investissements Stratégiques (EFSI) sous le numéro de dossier 2020014757</span>
                    </div>
                </div>
                <div className = "participate-group">
                    <img src={bredImag} alt="bred" />
                    <div className = "participate-group-one">
                        <div className = "participate-group-a participate-group-icon">
                        </div>
                        <div className = "participate-group-b participate-group-icon"></div>
                        <div className = "participate-group-c participate-group-icon"></div>
                    </div>
                    <div className = "participate-group-two">
                        <div className = "participate-group-d participate-group-icon"></div>
                        <div className = "participate-group-e participate-group-icon"></div>
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

