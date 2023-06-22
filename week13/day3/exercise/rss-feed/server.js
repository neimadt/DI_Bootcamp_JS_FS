const Parser = require('rss-parser');
const express = require('express');

const parser = new Parser();

const RSS_FEED_BASE_URL = 'https://thefactfile.org/feed/';

// (async () => {


//     console.log('Calling Rsss feed from:', RSS_FEED_BASE_URL);
//     const feed = await parser.parseURL(RSS_FEED_BASE_URL);
//     console.log(JSON.stringify(feed, null, 2));

//     // feed.items.forEach(item => {
//     //     console.log(item.title + ':' + item.link)
//     // });
// })();



const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');


app.get('/', async (req, res) => {

    const feed = await parser.parseURL(RSS_FEED_BASE_URL);

    res.render('index', { posts: feed.items });
});


const servePosts = async ({ res, title, category }) => {

    const feed = await parser.parseURL(RSS_FEED_BASE_URL);

    const lcCategory = category.toLowerCase();
    const lcTitle = title.toLowerCase();

    let posts = feed.items;

    if (title) {

        posts = posts.filter(p => p.title.toLowerCase().indexOf(lcTitle) >= 0)
    }
    else if (category) {

        posts = posts.filter(p => {

            if (p.categories.length > 0) {

                return p.categories.some(catg => catg.toLowerCase().indexOf(lcCategory) >= 0)
            }

            return false;
        });
    }

    res.render('search', { posts, passedTitle: title, passedCategory: category });
};

app.get('/search', async (req, res) => {

    servePosts({
        res,
        title: '',
        category: ''
    });
});

app.post('/search/title', async (req, res) => {

    const { body: { title } } = req;

    servePosts({
        res,
        title,
        category: ''
    });
});

app.post('/search/category', async (req, res) => {

    const { body: { category } } = req;

    servePosts({
        res,
        title: '',
        category
    });
});

app.listen(PORT, () => {

    console.log(`Running on http://localhost:${PORT}`);
});
