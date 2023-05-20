async function showTimeout(milliseconds, id) {

    await new Promise((resolve) => {

        setTimeout(() => {

            console.log(id, " Done!");

            resolve("OK");
        }, milliseconds);
    });
};

(async () => {

    console.log("start");

    const arr = ["first", "second", "third"];

    // arr.forEach(async (id) => {
    //     await showTimeout(1000, id);
    // });

    for (const id of arr) {
        await showTimeout(1000, id);
    }

    // const p = arr.reduce((acc, id) => {

    //     return acc.then(() => showTimeout(1000, id))
    // }, Promise.resolve());

    // await p;

    console.log("end");
})();