import React, { Component } from "react";
import "./ZonalsCampus.css";
import { Link } from "react-router-dom";

export default class ZonalCampus extends Component {
    render() {
        return (
            <div className={(this.props.mainBackground === "true") ? "zonals-mainpage-main-page" : "zonals-mainpage-parent"}>
                {/* {console.log(this.props.mainBackground)} */}
                <div className="zonals-mainpage-parent-child">
                    <div className="zonals-mainpage-cards">
                        <Link to="/zonals/jaipur">
                            <div className="zonals-mainpage-cards-image-jaipur">
                            </div>
                        </Link>
                        <div className="zonals-mainpage-cards-title">
                            Jaipur Zonals
                        </div>
                        <div className="zonals-mainpage-cards-button">
                            <Link to="/zonals/jaipur">
                                Register
                            </Link>
                        </div>
                    </div>
                    <div className="zonals-mainpage-cards">
                        {/* <Link to="/zonals/chandigadh"> */}
                            <div className="zonals-mainpage-cards-image-chandigarh">
                            </div>
                        {/* </Link> */}
                        <div className="zonals-mainpage-cards-title">
                            Chandigarh Zonals
                        </div>
                        {/* <div className="zonals-mainpage-cards-button">
                            <Link to="/zonals/chandigadh">
                                Register
                            </Link>
                        </div> */}
                        <div className="zonals-mainpage-cards-button">
                            COMING SOON.
                        </div>
                    </div>
                    <div className="zonals-mainpage-cards">
                        <Link to="/zonals/delhi">
                            <div className="zonals-mainpage-cards-image-delhi">
                            </div>
                        </Link>
                        <div className="zonals-mainpage-cards-title">
                            Delhi Zonals
                        </div>
                        <div className="zonals-mainpage-cards-button">
                            Successfully Organized.
                        </div>
                    </div>
                    <div className="zonals-mainpage-cards">
                        <Link to="/zonals/lucknow">
                            <div className="zonals-mainpage-cards-image-lucknow">
                            </div>
                        </Link>
                        <div className="zonals-mainpage-cards-title">
                            Lucknow Zonals
                        </div>
                        <div className="zonals-mainpage-cards-button">
                            Successfully Organized.
                        </div>
                    </div>
                    <div className="zonals-mainpage-cards">
                        {/* <Link to="/zonals/lucknow"> */}
                            <div className="zonals-mainpage-cards-image-bhopal">
                            </div>
                        {/* </Link> */}
                        <div className="zonals-mainpage-cards-title">
                            Bhopal Zonals
                        </div>
                        <div className="zonals-mainpage-cards-button">
                            COMING SOON.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
