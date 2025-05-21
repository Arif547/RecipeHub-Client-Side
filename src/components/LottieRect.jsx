import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalk.json";

const style = {
    height: 300,
};




const LottieRect = () => <Lottie animationData={groovyWalkAnimation} style={style} loop={true} />;

export default LottieRect;