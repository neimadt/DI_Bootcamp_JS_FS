

export const changeSearchTextReducer = (state, { payload: searchText }) => {

    state.text = searchText && typeof searchText === 'string'
        ? searchText.trim().toLowerCase()
        : '';
};

export const setMovieReducer = (state, { payload: imdbID }) => {

    const movie = imdbID
        ? state.movies.find(movie => movie.imdbID === imdbID)
        : null;

    state.movie = movie;
};

export const callApiAsync = async (imdbID, thunk) => {

    try {

        const { text } = thunk.getState();

        if ((text && typeof text === 'string') || (imdbID && typeof imdbID === 'string')) {

            let qs = '&';

            if (imdbID) {

                qs += `i=${encodeURIComponent(imdbID)}`;
            }
            else {

                qs += `s=${encodeURIComponent(text)}`;
            }

            const resp = await fetch(`https://www.omdbapi.com/?apikey=c951ff1${qs}`);

            if (!resp.ok) {

                const raw = await resp.text();

                let error;

                try {

                    error = JSON.stringify(raw);
                }
                catch {

                    error = raw;
                }

                throw { status: resp.status, error };
            }

            const data = await resp.json();


            return data;
        }
    }
    catch (err) {

        console.error(err);

        throw err;
    }
};
