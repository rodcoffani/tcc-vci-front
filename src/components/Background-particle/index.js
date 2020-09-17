import React, { Component } from "react";
import Particles from 'react-particles-js'; 
import "./styles.css";

export default class BackgroundParticle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Particles
                className="Part"
                params={{
                    particles: {
                        number: {
                            value: 60,
                            density: {
                                enable: true,
                                value_area: 1000,
                            },
                        },
                        color: {
                            value: "#f00080",
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 2,
                                color: "#3030ff",
                            },
                            polygon: {
                                nb_sides: 3,
                            },
                        },
                        opacity: {
                            value: 0.4008530152163807,
                            random: false,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: true,
                            color: "#ffffff",
                            width: 0.6413648243462091,
                        },
                        size: {
                            value: 1.5,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        move: {
                            enable: true,
                            speed: 6,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    interactivity: {
                        detect_on: "window",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "grab",
                            },
                            resize: true,
                        },
                    },
                    retina_detect: true,
                }}
            />
        );
    }
}
