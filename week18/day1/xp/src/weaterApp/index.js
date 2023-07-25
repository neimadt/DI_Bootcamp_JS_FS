
const API_KEY = 'FEKGKAxW8GuBBd0hU5RAO3bNPTyRZs70';
const BASE_URL = 'http://dataservice.accuweather.com';


const getCachedData = (storageId, key) => {

    let store = localStorage.getItem(`CACHE-${storageId}`);
    store = store ? JSON.parse(store) : null;

    const result = store ? store[key] : null;

    return result;
};

const cacheInLocalStorage = (storageId, key, value) => {

    let store = localStorage.getItem(`CACHE-${storageId}`);
    store = store ? JSON.parse(store) : {};

    store[key] = value;

    store = JSON.stringify(store);

    localStorage.setItem(`CACHE-${storageId}`, store);
};

export const weatherApp = {
    locationAutoComplete: async ({ searchFilter, lang } = { searchFilter: '', lang: null }) => {

        try {

            if (!searchFilter || typeof searchFilter !== 'string') return null;
            searchFilter = searchFilter.toLowerCase();

            const cachedData = getCachedData('locationAutoComplete', searchFilter);

            if (cachedData) return cachedData;


            let queryString = `?apikey=${API_KEY}&q=${encodeURIComponent(searchFilter)}`;

            if (lang && typeof lang === 'string') {

                queryString += `&language=${encodeURIComponent(lang)}`;
            }

            const resp = await fetch(`${BASE_URL}/locations/v1/cities/autocomplete${queryString}`);

            const raw = await resp.text();

            if (!resp.ok) {

                let error;
                try {

                    error = JSON.parse(raw);
                }
                catch {

                    error = raw;
                }

                throw error;
            }

            const data = JSON.parse(raw);

            cacheInLocalStorage('locationAutoComplete', searchFilter, data);

            return data;
        }
        catch (err) {

            console.error(err);
        }
    },
    currentWeather: () => {

    },
    fiveDaysForecastAsAtNow: async ({ locationKey } = { locationKey: '' }) => {

        try {

            if (!locationKey || typeof locationKey !== 'string') return null;


            const cachedData = getCachedData('fiveDaysForecastAsAtNow', locationKey);

            if (cachedData) return cachedData;


            const resp = await fetch(`${BASE_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`);

            const raw = await resp.text();

            if (!resp.ok) {

                let error;
                try {

                    error = JSON.parse(raw);
                }
                catch {

                    error = raw;
                }

                throw error;
            }

            const data = JSON.parse(raw);

            cacheInLocalStorage('fiveDaysForecastAsAtNow', locationKey, data);

            return data;
        }
        catch (err) {

            console.error(err);
        }
    },
};
