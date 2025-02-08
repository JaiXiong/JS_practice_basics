const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const toDoList = [];
const myObject = {
    test1: 1,
    test2: 2,
    test3: 3,
    getAllTestSubjects: function()
    {
        return `The test subjects are ${myObject.test1}, ${myObject.test2} and ${myObject.test3}`;
    }
}

//arays using splice
const ary1 = toDoList;
const ary2 = ary1.splice(); //creates new, not reference


//objects with date
const scheduleList = [{
    name: 'clean',
    dueDate: '2025-2-5',
}, {
    name: 'wash',
    dueDate: '2025-2-6'
}];

//function within function
const function1 = function greet() {
    console.log();
}

//anonymous function, not as good b/c you have to create this to use it
//normal functions that exist already can be called anywhere
const function2 = function() {
    console.log();
}

//save value in variable
const object1 = {
    num: 2,
    //removed greeting b/c not needed
    // fun: function greeting() {
    //     console.log();
    // }
    fun: function() {
        console.log();
    }
};
object1.fun();

//passing value into func
function display(param) {
    console.log(param);
}
display(2);


//this param uses the run function, does things, then returns it 
//callback function - same as delegating
function run(param) {
 param();
}

run(function() {
    console.log();
});

//arrow function
const test1 = () => {
    console.log('arrow function');
}

//foreach loop...
toDoList.forEach((item, index) => {
    console.log();
});

//eventlisteners over onclick, queryselect the class, listen for the click => do the actions if clicked
const eventToDoButton = document.querySelector('.js-todoButton');

//gets all them
const deleteALL = document.querySelectorAll('.js-todButton');

const eventToDoButtonListener = () => { 
        console.log('todobuttonClicked');
        addItem();
    };

eventToDoButton.addEventListener('click', eventToDoButtonListener);

document.querySelectorAll('.js-delete-todo-button').forEach((deletebutton, index) => {
    deletebutton.addEventListener('click', () => {
        toDoList.splice(index, 1);
        cumulativeloop();
    });
});























function runTest()
{
    console.log(myObject.getAllTestSubjects());
}

function calculateTotal(){
    const premium = document.querySelector(".js-premiumcount")
    const subscribed = document.querySelector(".js-subscribedto")

    let calculateTotal = Number((premium.value * 5) + (subscribed.value * 2));

    document.querySelector('.js-total').innerHTML = calculateTotal;
}

function checkKey(event) {
    const key = document.querySelector('.js-cost');

    if (event.key === 'Enter') {
        calculateTotal();
    }
}

function checkToDoKey(event) {
    const key = document.querySelector('.js-todoItem');

    if (event.key === 'Enter') {
        addItem();
    }
}

function addItem()
{
    const item = document.querySelector('.js-todoItem');
    let currenItem = document.querySelector('.js-todoLiveListSingleAdd');
    const addItem = item.value;
    if (addItem)
    {
        toDoList.push(addItem);
        currenItem.innerHTML = addItem;
        item.value = '';
        console.log(toDoList);
        //toDoLiveListLoops();
        toDoLiveList();
        cumulativeloop();
    }
}

function displaySchedule()
{
    
}

function toDoLiveList()
{
    let liveList = document.querySelector('.js-todoLiveList')
    if (liveList)
    {
        liveList.innerHTML = toDoList;
        console.log(toDoList);
    }
}

function toDoLiveListLoops()
{
    let liveList = document.querySelector('.js-todoLiveListSingleAdd')
    if (liveList)
    {
        for (let i = 0; i < toDoList.length; i++)
            {
             `Added ${liveList.innerHTML = toDoList[i]}`;
            }
    }
   
}

function cumulativeloop()
{
    let cumulativeList = '';

    for (let i = 0; i < toDoList.length; i++)
    {
        const todo = toDoList[i];
        const html = 
        `<p>
        ${todo}
        <button onclick="toDoList.splice(${i}, 1);
        cumulativeloop();">Delete</button>
        </p>`;
        cumulativeList += html;
        console.log(cumulativeList);
    }

    const showcumulativeloop = document.querySelector('.js-cumulativeloop');
    showcumulativeloop.innerHTML = cumulativeList;
    
}

function subButtonLogic() {
    const buttonElement = document.querySelector('.js-subscribe-button');

    if (buttonElement.innerHTML === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('isSubbed');
    }
    else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('isSubbed');
    }
}