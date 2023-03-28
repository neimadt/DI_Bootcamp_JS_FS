function allowDrop(event) {
    event.preventDefault(); // Necessary. Allows us to drop.
}

//add dashes
function allowEnter(event) {
    event.currentTarget.classList.add('over');
}

//remove dashes
function allowLeave(event) {
    event.currentTarget.classList.remove('over');
    console.log('LEFT!!!')
}

function dragStart(event) {
    console.log("draggedId: ", event.target.id)
    event.dataTransfer.setData("targetId", event.target.id);
}

function dragDrop(event) {
    event.preventDefault();

    let targetId = event.dataTransfer.getData("targetId");
    console.log("targetId: ", targetId);

    let box = document.querySelector(`#${targetId}`)
    event.currentTarget.appendChild(box);
    event.currentTarget.classList.remove('over');
}
