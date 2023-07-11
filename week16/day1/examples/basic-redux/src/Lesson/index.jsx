import React from "react";
import store from '../store';



const Lesson = () => {
    return (
        <>
            <img className="image" src="https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg" alt="logo lesson" />
            <h1>
                The lesson of today is about <span style={{ color: 'red' }}>{store.getState().subject}!</span>
            </h1>
        </>
    );
};

export default Lesson;