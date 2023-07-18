import React from "react";
import { connect } from 'react-redux';


let renderCount = 0;

const Day = props => {

    renderCount += 1;
    console.log('Day render count = ', renderCount);

    const { weekday, loading, errorCaught, jokeOfTheDay } = props;

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', color: errorCaught ? 'red' : 'black' }}>
                <h1 data-day={weekday}>Today is <span>{weekday}</span></h1>

                {
                    loading ?
                        <span style={{ marginLeft: 25 }}>loading...</span>
                        :
                        null
                }
            </div>
            {
                jokeOfTheDay ?
                    <>
                        <br />
                        <p>
                            {jokeOfTheDay}
                        </p>
                    </>
                    : null
            }
        </>
    );
};

const mapStateToProps = ({ weekday, loading, errorCaught, jokeOfTheDay }) => {
    return { weekday, loading, errorCaught, jokeOfTheDay };
};

export default connect(mapStateToProps)(Day);