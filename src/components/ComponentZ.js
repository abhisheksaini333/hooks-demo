import  React, { useState, useEffect, useContext } from 'react';
import { TopLevelContext, CourseContext } from '../App.js';

const ComponentZ = () => {
    const topLevelData = useContext(TopLevelContext);
    const courseData = useContext(CourseContext);
    return (
        <>
            <h6>{ topLevelData }</h6>
            <h6>{ courseData }</h6>
        </>
    )
}

export default ComponentZ