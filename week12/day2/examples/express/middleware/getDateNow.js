
module.exports = () => {

    const now = new Date();

    // return `${now.toLocaleString()}`
    return `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`
};