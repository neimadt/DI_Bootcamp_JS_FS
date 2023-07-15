import { DEFAULT_CATEGORIES } from '../constants';

const apiKey = 'iYuvy8hgIZQrtnK2cs7zyU5ZgHAZPqFUJAcwi5kDnHm86b0RcLhHnEW4';


const DEFAULT_OPTIONS = {
    perPage: 30,
    query: DEFAULT_CATEGORIES[0]
};

export const getPhotos = async (options = DEFAULT_OPTIONS) => {

    options = {
        ...DEFAULT_OPTIONS,
        ...options
    };

    let queryString = '';

    if (options.perPage > 0) {

        queryString += `per_page=${options.perPage}`;
    }

    if (options.query && typeof options.query === 'string') {

        queryString += queryString ? '&' : '';
        queryString += `query=${options.query}`;
    }

    queryString = queryString ? `?${queryString}` : '';

    try {

        const resp = await fetch(`https://api.pexels.com/v1/search${queryString}`, {
            headers: {
                'Authorization': apiKey
            }
        });
        // const headers = Object.fromEntries(resp.headers);

        if (!resp.ok) {

            const raw = await resp.text();

            let error;
            try {

                error = JSON.parse(raw);
            }
            catch {

                error = raw;
            }

            throw { status: resp.status, statusText: resp.statusText, error };
        }

        const data = await resp.json();

        return data;
    }
    catch (err) {

        console.error(err);
    }
};
