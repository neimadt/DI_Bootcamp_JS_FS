const getPosts = (userId) => new Promise((resolve) => {
    setTimeout(() => {
        console.log("Post ", "Done!");
        resolve([{ title: "Article on Javascript", idArticle: 1, idUser: userId }]);
    }, 1500);
});

const getComments = (postId) => new Promise((resolve) => {
    setTimeout(() => {
        console.log("Comments ", "Done!");
        resolve([{ title: "Great Article", author: "John", postId },
        { title: "Interesting Article", author: "Lea", postId }]);
    }, 1500);
});

const getLikes = (postId) => new Promise((resolve) => {
    setTimeout(() => {
        console.log("Likes ", "Done!");
        resolve(5);
    }, 1500);
});

console.log('Test1');

const getLatestPostActivity = async (userId) => {

    const started = Date.now();

    const posts = await getPosts(userId);
    const [latestPost] = posts;

    // const comments = await getComments(latestPost.idArticle);
    // const likes = await getLikes(latestPost.idArticle);

    const [comments, likes] = await Promise.all([
        getComments(latestPost.idArticle),
        getLikes(latestPost.idArticle)
    ]);

    const ended = Date.now();

    return { comments: comments, likes: likes, duration: ended - started };
}

getLatestPostActivity(10)
    .then(res => {
        console.log('everything ', res);
    })

console.log('Test2');