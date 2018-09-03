import React, { Component } from "react";
import "./ZonalsCampus.css";
import { Link } from "react-router-dom";

export default class ZonalCampus extends Component {
    render() {
        return (
            <div className={(this.props.mainBackground==="true")?"zonals-mainpage-main-page": "zonals-mainpage-parent" }>
                {console.log(this.props.mainBackground)}
                <div className="zonals-mainpage-parent-child">
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
                </div>
            </div>
        );
    }
}

