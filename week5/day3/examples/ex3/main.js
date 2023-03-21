
const fnameValue = document.forms.form1.elements.fname.value;
const lnameValue = document.forms.form1.elements.lname.value;

const {
    forms: {
        form1: {
            elements: {
                fname: {
                    value: fnameValue2 },
                lname: {
                    value: lnameValue2
                }
            }
        }
    }
} = document;

console.log(fnameValue, lnameValue, fnameValue2, lnameValue2)


//get the select form
let dropdown = document.getElementById('A')

// all three lines do the same thing
// dropdown.options[2].selected = true; //Banana selected
// dropdown.value = 'pear'; //Banana selected
// dropdown.selectedIndex = 2; //Banana selected

setTimeout(() => {
    dropdown.value = 'pear';
}, 2000);

setTimeout(() => {
    dropdown.selectedIndex = 2; //Banana selected
}, 4000);

// To check which option is selected
console.log(dropdown.selectedIndex) // "2"
console.log(dropdown.value) // "Banana"