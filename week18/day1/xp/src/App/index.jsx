import { useEffect } from 'react';
import { weatherApp } from '../weaterApp';

export const App = () => {

    useEffect(async () => {

        const autoCompleteData = await weatherApp.locationAutoComplete({ searchFilter: 'curep' });

        const fiveDaysData = await weatherApp.fiveDaysForecastAsAtNow({ locationKey: autoCompleteData?.[0]?.Key });
        debugger;
        // const fiveDaysData = await weatherApp.fiveDaysForecastAsAtNow({ locationKey: autoCompleteData ? autoCompleteData.Key : null })
    }, []);

    return (
        <h1>Weater App</h1>
    );
};
