const storageValue = localStorage.getItem('daily-challenge-tasks');

const tasks = storageValue ? JSON.parse(storageValue) : [];

const deleteSvgHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="height: 100%: width: auto;">
<path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
</svg>
`

let idcounter = 0;
const generateNewId = () => `${Date.now()}${--idcounter}`;


const errorElement = document.querySelector('.error');

const showTaskError = msg => {

    const textElement = errorElement.querySelector('.error-text');
    textElement.textContent = msg;
    errorElement.style.display = '';
};

const hideTaskError = () => {

    const textElement = errorElement.querySelector('.error-text');
    textElement.textContent = null;
    errorElement.style.display = 'none';
};

const addTask = text => {

    if (!text || typeof text !== 'string' || text.length < 3) {

        showTaskError('Invalid task!');
        // alert('Invalid task!');

        return;
    }

    tasks.push({
        id: generateNewId(),
        done: false,
        text: text.trim()
    });
};


const findTaskIndex = taskId => {

    const taskIndex = taskId
        ? tasks.findIndex(t => t.id === taskId)
        : -1;

    if (taskIndex < 0) {

        alert('Task not found...');
    }

    return taskIndex;
};


const removeTask = taskId => {

    const taskIndex = findTaskIndex(taskId);

    if (taskIndex < 0) return;


    const { done } = tasks[taskIndex];

    const proceed = done
        ? confirm('Task is marked as done. Are you sure you want to delete it?')
        : true;

    if (proceed) {

        tasks.splice(taskIndex, 1);
    }
};

const toggleTask = taskId => {

    const taskIndex = findTaskIndex(taskId);

    if (taskIndex < 0) return;

    const task = tasks[taskIndex];

    task.done = !task.done;

    return task.done;
};

const onTaskCheck = ({ currentTarget: { parentElement: domTask } }) => {

    const taskId = domTask.getAttribute('data-task-id');

    toggleTask(taskId);
    saveToStorage();

    const textElement = domTask.querySelector('.text');
    textElement.classList.toggle('done');
};

const onTaskDelete = ({ currentTarget: { parentElement: domTask } }) => {

    const taskId = domTask.getAttribute('data-task-id');

    removeTask(taskId);
    syncDomWithData();
};


const syncDomWithData = () => {

    let listTasks = document.querySelector('.card>.list-tasks');
    let domTasks = listTasks.querySelectorAll('li');
    domTasks = [...domTasks];

    for (const task of tasks) {

        const domTaskIndex = domTasks.findIndex(dt => dt.getAttribute('data-task-id') === task.id);

        let domTask = domTasks[domTaskIndex];

        if (domTask) {

            domTasks.splice(domTaskIndex, 1);
        }
        else {

            domTask = document.createElement('li');
            domTask.setAttribute('data-task-id', task.id);

            let innerElement = document.createElement('input');
            innerElement.setAttribute('type', 'checkbox');
            innerElement.checked = task.done;
            innerElement.addEventListener('change', onTaskCheck);
            domTask.appendChild(innerElement);

            innerElement = document.createElement('div');
            innerElement.classList.add('text');
            if (task.done) {
                innerElement.classList.add('done');
            }
            innerElement.textContent = task.text;
            domTask.appendChild(innerElement);

            innerElement = document.createElement('button');
            innerElement.innerHTML = deleteSvgHtml;
            innerElement.addEventListener('click', onTaskDelete);
            domTask.appendChild(innerElement);

            innerElement = null;

            listTasks.appendChild(domTask);
        }
    }

    if (domTasks.length > 0) {

        for (const domTask of domTasks) {

            domTask.remove();
        }
    }

    saveToStorage();
};


const saveToStorage = () => {

    localStorage.setItem('daily-challenge-tasks', JSON.stringify(tasks));
};


const { forms: { addtask: addtaskForm } } = document;

addtaskForm.addEventListener('submit', e => {

    e.preventDefault();

    const { taskname: inputElement } = addtaskForm;
    const { value: text } = inputElement;

    addTask(text);
    syncDomWithData();

    inputElement.value = '';
});
addtaskForm.taskname.addEventListener('focus', () => hideTaskError());


syncDomWithData();
