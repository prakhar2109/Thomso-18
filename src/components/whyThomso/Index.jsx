import React, { Component } from 'react';
import "./src/whythomso.css";
import Navbar from "../beta/home/Navbar.jsx";
// import Arrow from "./src/svg/arrow"
import { Link } from "react-router-dom"
// import LeftArr from "./src/svg/leftarr"
import "./src/arrow.css"
import { ArtistDetails, More_artists } from "./src/artists"


export default class WhyThomso extends Component {
    constructor() {
        super();
        this.state = {
            videos: ["https://www.youtube.com/embed/kD8ZvzmgVlo", "https://www.youtube.com/embed/89xE9rcwtIo"],
            slideindex: 0,
            artistdetails: ArtistDetails,
            moreartists: More_artists,
            viewmore: false,
        }
    }
    handlePrevious = () => {
        // if (this.state.slideindex >= 0) {
        //     this.setState({
        //         slideindex: this.state.slideindex - 1
        //     })
        //     console.log(this.state.slideindex, "slideindex")

        //     document.getElementById(`i${this.state.slideindex - 1}`).classList = "translate-left"
        //     document.getElementById(`i${this.state.slideindex}`).classList = "translate-left"
        // }
    }
    handleNext = () => {
        // if (this.state.slideindex <= this.state.videos.length - 1) {
        //     this.setState({
        //         slideindex: this.state.slideindex + 1
        //     })
        //     if (this.state.slideindex !== 1) {
        //         document.getElementById(`i${this.state.slideindex}`).classList.add("translate-right")
        //         document.getElementById(`i${this.state.slideindex + 1}`).classList.add("translate-right")
        //         document.getElementById(`i${this.state.slideindex + 2}`).classList.add("translate-right")
        //     }
        //     if (this.state.slideindex === 1) {
        //         document.getElementById(`i2`).classList.remove("translate-right")
        //         document.getElementById(`i2`).classList.add("translate-right")
        //     }


        // }
    }
    componentDidMount() {
        this.setState({
            artistdetails: ArtistDetails
        })
    }
    render() {
        return (
            <div className="whythomso-parent">
                <Navbar />
                <div className="whythomso-child">
                    <div className="whythomso-child-whythomso">
                        <h3>WHY VISIT THOMSO ?</h3>
                    </div>
                </div>
                <div className="whythomso-text">
                    <p>Thomso is the largest cultural festivals of North India attracting a crowd of over 30000 people. With over 150+ events in line,
                        Thomso is a three day cultural extravaganza playing host to eminent celebrities and talented scholars.</p>
                </div>
                <div id="attractions" className="whythomso-second-child">
                    <div className="whythomso-second-child-top">
                        <div className="whythomso-second-child-attractions">
                            <h3>Attractions</h3>
                        </div>
                    </div>
                    <div className="whythomso-second-child-middle">
                        <div className="whythomso-second-child-the-institute">
                            <div className="whythomso-second-child-the-institute-image">
                                <iframe src="https://www.youtube.com/embed/6T_T07hglvk" title="IITR Drone View" height="150px" width="100%" frameBorder="0" allowFullScreen>
                                </iframe>
                            </div>
                            <div className="whythomso-second-child-the-institute-content">
                                <div className="whythomso-second-child-the-institute-content-heading">
                                    <h3>The Institute</h3>
                                </div>
                                <div className="whythomso-second-child-the-institute-content-content">
                                    <p>Amidst the foothills of Himalayas,fastering the spirit of adventure and excitement is located IIT Roorkee</p>
                                </div>
                            </div>
                        </div>
                        <div className="whythomso-second-child-the-legacy">
                            <div className="whythomso-second-child-the-legacy-image">
                            </div>
                            <div className="whythomso-second-child-the-legacy-content">
                                <div className="whythomso-second-child-the-legacy-content-heading">
                                    <h3>The Legacy</h3>
                                </div>
                                <div className="whythomso-second-child-the-legacy-content-content">
                                    <p>The 170 years old legacy of IIT Roorkee and 35+ successful years of Thomso are itself a testimony to the fest's grandeur</p>
                                </div>
                            </div>
                        </div>
                        <div className="whythomso-second-child-the-nightmare">
                            <div className="whythomso-second-child-the-nightmare-image">
                            </div>
                            <div className="whythomso-second-child-the-nightmare-content">
                                <div className="whythomso-second-child-the-nightmare-content-heading">
                                    <h3>The Prosperity</h3>
                                </div>
                                <div className="whythomso-second-child-the-nightmare-content-content">
                                    <p>With 150+ events and prizes woth more than 30 lakhs, Thomso attracts a crowd of over 50k people</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="review" className="whythomso-third-child">
                    <div className="whythomso-third-child-top">
                        <div className="whythomso-third-child-review">
                            <h3>Review Media</h3>
                        </div>
                    </div>
                    <div className="whythomso-third-child-middle">
                        <div className="whythomso-third-child-sliderwrapper">
                            <div className="whythomso-third-child-slider">
                                {/* <button className="whythomso-slider-leftarrow" onClick={this.handlePrevious} disabled={this.state.slideindex === 0}>
                                    <span className="whythomso-previous-arrow"><LeftArr /></span>PREV
                                </button> */}
                                <div className="cards-slider-wrapper">
                                    {
                                        this.state.videos.map((video, i) => (
                                            <div key={i} className={`ii${i}`} id={`i${i}`}>
                                                <iframe key={i} title={video} src={video} height="300" width="500" frameBorder="0" allowFullScreen>
                                                </iframe>
                                            </div>
                                        ))
                                    }
                                </div>
                                {/* <button className="whythomso-slider-rightarrow" onClick={this.handleNext} disabled={this.state.slideindex === this.state.videos.length - 1}>
                                    NEXT<span className="whythomso-next-arrow"><Arrow /></span>
                                </button> */}
                            </div>
                            {/* <div className="whythomso-third-child-iit-content">
                                <div className="whythomso-third-child-iit-content-heading">
                                    <h3>IIT Roorkee</h3>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div id="blogs" className="whythomso-fourth-child">
                    <div className="whythomso-fourth-child-top">
                        <div className="whythomso-fourth-child-blogs">
                            <h3>Blogs</h3>
                        </div>
                    </div>
                    <div className="whythomso-fourth-child-recent-heading">
                        <h3><i>Recents</i></h3>
                    </div>
                    <div className="whythomso-fourth-child-middle">
                        <div className="whythomso-fourth-child-the-nightmare">
                            <Link to="/blog/Behind_the_scenes">
                                <div className="whythomso-fourth-child-the-nightmare-image">
                                </div>
                            </Link>
                            <div className="whythomso-fourth-child-the-nightmare-content">
                                <div className="whythomso-fourth-child-the-nightmare-content-heading">
                                    <Link to="/blog/Behind_the_scenes">
                                        <h3>Behind The Scenes</h3>
                                    </Link>
                                </div>
                                <div className="whythomso-fourth-child-the-nightmare-date">
                                    <h3>01.09.18</h3>
                                </div>
                                <div className="whythomso-fourth-child-the-nightmare-content-content">
                                    <p>“Rome wasn’t built in a day”, neither is Thomso. Be it a magnificent city or a magnificent fest, you have to lay bricks every hour to make things happen.</p>
                                </div>
                            </div>
                        </div>
                        <div className="whythomso-fourth-child-the-daymare">
                            <Link to="/blog/litfest">
                                <div className="whythomso-fourth-child-the-daymare-image">
                                </div>
                            </Link>
                            <div className="whythomso-fourth-child-the-daymare-content">
                                <div className="whythomso-fourth-child-the-daymare-content-heading">
                                    <Link to="/blog/litfest">
                                        <h3>Litfest</h3>
                                    </Link>
                                </div>
                                <div className="whythomso-fourth-child-the-daymare-date">
                                    <h3>23.09.18</h3>
                                </div>
                                <div className="whythomso-fourth-child-the-daymare-content-content">
                                    <p>Literature is the thread that we use the array of words with the power of expressions.It is the symphony of creative thoughts and orchestration of platitudes.</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="whythomso-fourth-child-the-evemare">
                            <div className="whythomso-fourth-child-the-evemare-image">
                            </div>
                            <div className="whythomso-fourth-child-the-evemare-content">
                                <div className="whythomso-fourth-child-the-evemare-content-heading">
                                    <h3>The Evemare</h3>
                                </div>
                                <div className="whythomso-fourth-child-the-evemare-date">
                                    <h3>06.09.2069</h3>
                                </div>
                                <div className="whythomso-fourth-child-the-evemare-content-content">
                                    <p>With 150+ events and prizes woth more than 30 lakhs, Thomso attracts a crowd of over 30000 people</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="whythomso-fourth-child-viewall">
                        <Link to="">View all<span><Arrow /></span></Link>
                    </div> */}
                </div>
                <div id="previous" className="whythomso-fifth-child">
                    <div className="whythomso-fifth-child-top">
                        <div className="whythomso-fifth-child-previous">
                            <h3>Associated Celebrities</h3>
                        </div>
                    </div>
                    <div className="whythomso-fifth-child-middle-parent">
                        <div className="whythomso-fifth-child-middle">
                            {this.state.artistdetails.map(e =>
                                <div className="whythomso-fifth-child-artist">
                                    <div className={`whythomso-fifth-child-image`}
                                        style={{
                                            backgroundImage: `url(/img/main/whythomso/${e.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat"
                                        }}>
                                    </div>
                                    <div key={e.id} className="whythomso-fifth-child-name">
                                        {e.name}
                                    </div>
                                </div>

                            )}

                            {
                                this.state.viewmore && this.state.moreartists.map(e =>
                                    <div className="whythomso-fifth-child-artist">
                                        <div className={`whythomso-fifth-child-image`}
                                            style={{
                                                backgroundImage: `url(/img/main/whythomso/${e.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat"
                                            }}>
                                        </div>
                                        <div key={e.id} className="whythomso-fifth-child-name">
                                            {e.name}
                                        </div>
                                    </div>
                                )}
                            <div className="whythomso-fifth-child-view-more-less">
                                {!this.state.viewmore ?
                                    <p onClick={() => this.setState({
                                        viewmore: !this.state.viewmore
                                    })}>View More...</p>
                                    : <p onClick={() => this.setState({
                                        viewmore: !this.state.viewmore
                                    })}>View Less.....</p>}
                            </div>
                        </div>
                    </div>
                    <div className="whythomso-sixth-child">
                        <div className="whythomso-sixth-child-top">
                            <div className="whythomso-sixth-child-faq">
                                <h3>FAQS</h3>
                            </div>
                        </div>
                        <div className="whythomso-sixth-child-middle">
                            <div className="whythomso-sixth-child-middle-columnone">
                                <div className="whythomso-faqs-ansque-one">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span> Are there any extra changes for pronites?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span> <span>No, Registration fee is inclusive of pronites passes..</span>
                                    </div>
                                </div>
                                <div className="whythomso-faqs-ansque-two">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span>Where to REGISTER for Thomso’18?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span> <span>You can register at <Link to="/">www.thomso.in</Link></span>
                                    </div>
                                </div>
                                <div className="whythomso-faqs-ansque-three">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span>What is the LAST DATE for registration?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span><span>As such there is no last date for registration but there are limited entries, so register as soon as possible.</span>
                                    </div>
                                </div>
                                <div className="whythomso-faqs-ansque-four">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span>How to reach IIT Roorkee?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span> <span>
                                            Visit
                                        <a href="https://www.iitr.ac.in/institute/pages/How_to_reach_IIT_Roorkee.html"> https://www.iitr.ac.in/institute/pages/How_to_reach_IIT_Roorkee.html for complete details.
                                        </a></span>
                                    </div>
                                </div>
                                <div className="whythomso-faqs-ansque-fifth">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span>What is the REGISTRATION FEE for Thomso’18?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span> <span>Registration fee with accommodation is Rs. 2100 and Rs. 1700 without accommodation. Once paid, fee is non-refundable.</span>
                                    </div>
                                </div>
                                <div className="whythomso-faqs-ansque-sixth">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span>Are there extra charges for workshops?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span>
                                        <span>Yes. Visit
                                            <a href="http://thomso.in/workshop"> http://thomso.in/workshop </a> for more details.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="whythomso-sixth-child-middle-columntwo">
                                <div className="whythomso-faqs-ansque-columntwo-one">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span>What is the date of Thomso’18?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span> <span>Thomso is from 26th to 28th October.</span>
                                    </div>
                                </div>
                                <div className="whythomso-faqs-ansque-columntwo-two">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span>From where we can get information for events for Thomso’18?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span> <span><a href="www.thomso.in/events">Visit www.thomso.in/events for details of all the events and their registration.
                                        </a></span>
                                    </div>
                                </div>
                                <div className="whythomso-faqs-ansque-columntwo-three">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span>How do I get to Roorkee?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span><span> By Airways<br />
                                            The nearest airport to Roorkee is situated in Dehradun, around 70km away, so one
                                            could easily take a taxi or bus to reach Roorkee.<br />
                                            By Railways<br />
                                            Trains are one of the easiest ways through which we could reach Roorkee, especially
                                            for a long distance journey.<br />
                                            By Bus<br />
                                            Buses can be obtained either from I.S.B.T. Kashmiri Gate, Delhi or from I.S.B.T.
                                            Anand Vihar Ghaziabad. A taxi is also an option of course, but you should be warned
                                            that the road isnt exactly an expressway.</span>
                                    </div>
                                </div>
                                <div className="whythomso-faqs-ansque-columntwo-four">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span>From where I can get the latest updates related to Thomso’18?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span>
                                        <span>
                                            You can get latest updates from our Facebook page <a href="www.facebook.com/thomsoiitroorkee/">www.facebook.com/thomsoiitroorkee/</a> .

                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="whythomso-sixth-child-middle-columnthree">
                                <div className="whythomso-faqs-ansque-columnthree-one">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span>What’s the climate like? Do I need to bring some winter clothes now?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span> <span>Thomso is from 26th to 28th October.</span>
                                    </div>
                                </div>
                                <div className="whythomso-faqs-ansque-columnthree-two">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span>From where we can get information for events for Thomso’18?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span> <span>The climate during the last week of October is usually chilly with some rainfall likely to
                                    occur. Hence some winter clothes will be required.</span>
                                    </div>
                                </div>
                                <div className="whythomso-faqs-ansque-columnthree-three">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span>What is the theme of Thomso’18?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span><span>Theme of Thomso’18 is “Seized By Stardust”.</span>
                                    </div>
                                </div>
                                <div className="whythomso-faqs-ansque-columnthree-four">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span>How to reach IIT Roorkee?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span>
                                        <span>
                                            Once you reached Roorkee, you can easily take an E-rickshaw, the bus station is
                                        just 1 km away whereas railway station is just 3 km away from the main gate of IIT
                                        Roorkee.
                                        </span>
                                    </div>
                                </div>
                                <div className="whythomso-faqs-ansque-columnthree-fifth">
                                    <div className="whythomso-faqs-question">
                                        <span><strong>Q</strong></span>
                                        <span>Will there be accommodation facility for me?</span>
                                    </div>
                                    <div className="whythomso-faqs-answer">
                                        <span><strong>A</strong></span>
                                        <span>
                                         There are many Hostels which would be available for the accommodation, the
                                         registration for allotment would be done on Thomso website.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}