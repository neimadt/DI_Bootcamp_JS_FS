import './style.css';


const Actor = ({ list }) => {

    const welcomStyle = {
        color: 'red', backgroundColor: 'blue'
    };

    return (
        <>
            <h1 style={welcomStyle}>Welcome</h1>
            <h2 className="actor-title">Actor</h2>
            {
                list.map((actor, i) => (
                    <div className="actor" key={i}>
                        <h4>{actor.fname}&nbsp;{actor.lname}</h4>
                        <img src={actor.image} />
                    </div>
                ))
            }
        </>
    );
};

export default Actor;
