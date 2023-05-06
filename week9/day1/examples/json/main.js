const student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: undefined,
    sss: Symbol("id"),
    getCoursesCount() {

        return this.courses.length;
    }
};

const jsonStudent = JSON.stringify(student, null, 2);

const display = document.createElement('textarea');
display.setAttribute('readonly', '');
display.value = jsonStudent;

document.body.appendChild(display);

const studentClone = JSON.parse(jsonStudent, (key, value) => {

    console.log(key, value)
});


const meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
};

const room = {
    number: 23,
    participants: ["John", "Ann"],
    // toJSON() {
    //     return 'Yes'
    // }
};

meetup.room = room;
// room.meetup = meetup;

console.log(meetup);
console.log(
    JSON.stringify(meetup)
);

const now = new Date();
console.log(now);
console.log(now.toISOString());
console.log(now.toJSON());


// const jsonValue = JSON.stringify(150)

// console.log(
//     jsonValue
// )
// console.log(
//     typeof jsonValue
// )


// const jsonValue2 = JSON.stringify('Hello')

// console.log(
//     jsonValue2
// )
// console.log(
//     typeof jsonValue2
// )







// fetch('https://dog-api.kinduff.com/api/facts')
//     .then(resp => {

//         return resp.json();
//     })
//     .then(data => {

//         data;
//         debugger;
//     })