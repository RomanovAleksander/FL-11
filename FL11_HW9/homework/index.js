// Task 0. Write function, which returns array of numbers from string parameter.
function getNumbers(string) {
    const array = [];
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(string[i])) {
            array.push(parseInt(string[i]));
        }
    }
    return array;
}

// Task 1. Write a function that could receive different amount of parameters and returns an object.
function findTypes() {
    const object = {};
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        if (object.hasOwnProperty(type)) {
            object[type]++;
        } else {
            object[type] = 1;
        }
    }
    return object;
}

// Task 2. Write function, which iterates over array and executes function on each element.
function executeforEach(array, functionForItem) {
    array.forEach((item) => {
        functionForItem(item);
    })
}

// Task 3. Write function, which returns transformed array based on function, which passed as a parameter.
function mapArray(array, functionForItem) {
    const newArray = [];
    executeforEach(array, (item) => newArray.push(functionForItem(item)));
    return newArray;
}

// Task 4. Write function, which returns filtered array based on function, which passed as a parameter.
function filterArray(array, functionForItem) {
    const newArray = [];
    executeforEach(array, (item) => functionForItem(item) ? newArray.push(item) : null);
    return newArray;
}

// Task 5. Write function, which returns formatted date.
function showFormattedDate(date) {
    let options = {month: 'short', day: 'numeric'},
        formattedDate = date.toLocaleString('en-us', options),
        year = date.getFullYear();

    return `Date: ${formattedDate} ${year}`;
}

// Task 6. Write function, which returns Boolean value, is received string parameter can be converted to valid date.
function canConvertToDate(date) {
    return !isNaN(new Date(date).getTime());
}

// Task 7. Write function, which returns difference between two dates in days
function daysBetween(firstDate, secondDate) {
    const one_day = 86400000; // 1 day in milliseconds (1000*60*60*24)
    let date1 = firstDate.getTime(),
        date2 = secondDate.getTime(),
        difference = date2 - date1;

    return Math.round(difference/one_day);
}

// Task 8. Write function, which returns amount of people, who are over 18. Reuse function from task 4,7
function getAmountOfAdultPeople(data) {
    const daysPer18Years = 6570,
          newArray = [];
    let currentDate = new Date();
    filterArray(data, (item) => {
        daysBetween(new Date(item.birthday), currentDate) > daysPer18Years ? newArray.push(item) : null
    });
    return newArray.length;
}

// Task 9. Write function, which returns array of keys of an object.
function keys(object) {
    const array = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            array.push(key);
        }
    }
    return array;
}

// Task 10. Write function, which returns array of values of an object.
function values(object) {
    const array = [];
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            array.push(object[key])
        }
    }
    return array;
}
