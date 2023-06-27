import React from 'react';

const characters = {
    "people": [
        {
            "id": "1",
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
        },
        {
            "id": "2",
            "name": "C-3PO",
            "height": "167",
            "mass": "75",
            "hair_color": "n/a",
        },
        {
            "id": "3",
            "name": "R2-D2",
            "height": "96",
            "mass": "32",
            "hair_color": "n/a",
        },
        {
            "id": "4",
            "name": "R2-D56",
            "height": "96",
            "mass": "32",
            "hair_color": "n/a",
        }
    ]
}


const List = () => {

    return (
        <div>
            <h1>In the App.js</h1>
            {
                characters.people.map(item => (
                    <ul key={item.id}>
                        <li>{item.name}</li>
                        <li>{item.height}</li>
                        <li>{item.hair_color}</li>
                    </ul>
                ))
            }
        </div>
    );
};

export default List;