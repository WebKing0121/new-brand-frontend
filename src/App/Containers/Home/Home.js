import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import heroLogoImg from "../../Assets/images/Logo.svg";
import ourvisionImg from "../../Assets/images/ourvision.png";
import founderImg from "../../Assets/images/founder.png";
import directorImg from "../../Assets/images/director.png";
import passerImg from "../../Assets/images/passer-img.jpg"
import eubankImg from "../../Assets/images/eubank.png";
import bredImg from "../../Assets/images/bred.png";
import bpiImg from "../../Assets/images/bpi.png";
import angelImg from "../../Assets/images/angel.png";
import laImg from "../../Assets/images/la.png";
import './Home.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    console.log("Home Mounted");
  }
  componentWillUnmount() {
    console.log("Home is unmounting");
  }

  render() {
    return (
      <div className={"homepage"}>
        <div className="hero">
          <div className="hero-ourstory">
            <div className="hero-ourstory-title">
              <span>Our Story</span>
            </div>
            <div className="hero-ourstory-description">
              <p>
                We were born with the love of Fashion and the way it reflects the creativity and the beauty of human mind and craft, the way it reveals people’s singularities, the way it connects them beyond space by marking the identity of a time. But we were also born at a time where Fashion has been made in such a way that it jeopardizes greatly the planet we call home. And we believe this is not part of its essence.
              </p>
              <p>
                This is why we started this journey of rediscovering the crafts, knowledge and technical resources every continent has, in order to rebuild both a supply and distribution chains that enhance fashion creation in a way that protects our ecosystem.
              </p>
            </div>
          </div>
          <div className="hero-ourvision">
            <div className="hero-ourvision-label">
              <img src={heroLogoImg} alt="Our vision" />
            </div>
            <img className="hero-ourvision-img" src={ourvisionImg} alt="overvision"></img>
          </div>
          <div className="hero-choosenewbrands">
            <div className="hero-choosenewbrands-title">
              <span>#CHOOSENEWBRANDS</span>
            </div>
            <div>
              <p>
                Our vision for the future is to go beyond those continental logistics hubs to bring together skills, institutions and countries. Together we will challenge the system, produce groundbreaking knowledge and invent new upcycling techniques that will shape a future where human and nature creations can thrive in harmony.
              </p>
            </div>
          </div>
        </div>
        <div className="report-part">
          <div className="report-mark">
            <span>N</span>
          </div>
          <div className="report-part-description">
            <p>
              “L'enjeu n'est pas d'aller plus loin et de faire moins cher, c'est d'automatiser la production en inventant la machine qui permettra d'aller plus vite et de faire mieux”
                        </p>
          </div>
          <div className="report-part-auth">
            <div className="report-part-auth-name">
              <span>Guillaume Gibault</span>
            </div>
            <div className="report-part-auth-job">
              <span>Dirigeant Le Slip Français</span>
            </div>
          </div>
        </div>
        <div className="founder">
          <img src={founderImg} alt="Jessy BIGOT" />
          <div className="founder-info">
            <div className="founder-info-name">
              <span> Jessy BIGOT</span>
            </div>
            <div className="founder-info-detail">
              <p className="founder-info-detail-job">/ President & Fondater</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla vel erat id eleifend. Nullam imperdiet tempor lectus, eget volutpat lacus commodo vel.</p>
            </div>
          </div>
        </div>
        <div className="director">
          <div className="director-info">
            <div className="director-info-name">
              <span> Charlotte Martinez</span>
            </div>
            <div className="director-info-detail">
              <p className="director-info-detail-job">/ Directrice Générale</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla vel erat id eleifend. Nullam imperdiet tempor lectus, eget volutpat lacus commodo vel.</p>
            </div>
          </div>
          <img src={directorImg} alt="director" />
        </div>
        <div className="challenge-part">
          <div className="challenge-part-header">
            <span className="challenge-part-header-txt">The Challenge</span>
            <br></br>
            <span className="challenge-part-header-title">/ Faire entrer notre industrie dans le 21e siècle</span>
          </div>
          <div className="challenge-part-group">
            <div className="challenge-part-group-mention">
              <p>
                “Some of our goals with the migration where to improve workflow efficiencies, empower site producers to make changes with a full preview of their impact, and cut the time it takes to build out a section of the site from days to hours.”
              </p>
              <p>
                — Weston Ruter, CTO at XWP
              </p>
            </div>
            <div className="challenge-part-group-description">
              <p>
                In 2014, News Corp Australia was grappling with ongoing development, maintenance, and administration challenges related to their existing publishing platforms.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </div>
        </div>
        <div className="passer">
          <img src={passerImg} alt="Passer" />
          <div className="passer-part">
            <div className="passer-part-header">
              <span className="passer-part-header-txt">The Solution</span>
              <br></br>
              <span className="passer-part-header-title">/ Passer de la théorie à la pratique</span>
            </div>
            <div className="passer-part-description">
              <p>VIP worked with partner agency XWP on a yearlong migration of 15 major web properties to WordPress. Thus began one of the most significant technical undertakings in the company’s history. The size, scale, and complexity of the News Corp Australia migration were unlike any of its kind to date.
              </p>
              <p>To bring all the brands to a single platform, XWP simplified the sites’ overall anatomy by consolidating several markup languages from the existing web properties into a single structure. This consolidation improved the sites’ performance and shortened the learning curve for News Corp Australia’s internal development team. </p>
              <p>Incorporating a core suite of trusted plugins and custom publishing tools deepened the production team’s capability to create, without having to call on IT for technical support.</p>
            </div>
          </div>
        </div>
        <div className="participate-part">
          <div className="report-mark">
            <span>N</span>
          </div>
          <div className="participate-part-title">
            <p className="participate-part-title-txt">
              Avec la participation
                        </p>
          </div>
          <div className="participate-part-description">
            <span>Ce projet est cofinancé par l’Union Européenne avec l’Instruments Financiers Horizon 2020 et au Fonds Européen pour les Investissements Stratégiques (EFSI) sous le numéro de dossier 2020014757</span>
          </div>
        </div>
        <div className="participate-group">
          <div className="participate-group-one">
            <div className="participate-group-icon eubankImg">
              <img src={eubankImg} alt="European Investment Bank" />
            </div>
            <div className="participate-group-icon bredImg">
              <img src={bredImg} alt="Bred" />
            </div>
            <div className="participate-group-icon bpiImg">
              <img src={bpiImg} alt="bpi" />
            </div>
          </div>
          <div className="participate-group-two">
            <div className="participate-group-icon angelImg">
              <img src={angelImg} alt="Angels" />
            </div>
            <div className="participate-group-icon laImg">
              <img src={laImg} alt="Lang" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (state = {}) => {
  return { ...state };
};

const mapDispatch = (dispatch) => {
  return {
  }
};

export default withRouter(connect(mapState, mapDispatch)(Home))

