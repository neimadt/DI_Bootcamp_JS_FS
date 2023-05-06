class Video {
    constructor(title, uploader, duration) {
        this.title = title;
        this.uploader = uploader;
        this.duration = duration;

        // this.watchAgain = () => { // Less elegant way

        //     console.log('DDD')
        // }
    }

    watch() {

        return `${this.uploader} watched all ${this.duration} of ${this.title}!`;
    }
}

const myVideo = new Video('Todays course', 'Damien', 360000);
const jVideo = new Video('Todays course', 'Jayshen', 360000);

console.log(myVideo)
console.log(jVideo)

const database = [
    ['<title1>', '<upoloader1>', 10000],
    ['<title2>', '<upoloader2>', 10000],
    ['<title3>', '<upoloader3>', 10000],
    ['<title4>', '<upoloader4>', 10000],
    ['<title5>', '<upoloader5>', 10000],
];

const videos = database.map(data => {

    const video = new Video(...data);

    return video;
});

console.log(videos)

for (const video of videos) {
    
    console.log(
        video.watch()
    )
}