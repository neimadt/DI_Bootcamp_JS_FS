let element = document.getElementById("box")

element.setAttribute('draggable', true);

element.addEventListener("dragstart", function (event) {

    event.target.style.backgroundColor = "lightpink";

    console.log("drag START " + "X: " + event.clientX + " Y: " + event.clientY);
});

element.addEventListener("dragend", function (event) {

    event.target.style.backgroundColor = "lightgreen";

    let _x = event.clientX;
    let _y = event.clientY;

    console.log("drag END " + "X: " + event.clientX + " Y: " + event.clientY);

    event.target.style.left = _x + "px";
    event.target.style.top = _y + "px";
    event.target.style.position = "absolute"; //Necessary
});