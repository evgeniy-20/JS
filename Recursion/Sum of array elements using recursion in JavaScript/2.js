// Даний багатовимірний масив довільного рівня вкладеності, що містить у собі рядки, наприклад, такий: ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]] За допомогою рекурсії злийте елементи цього масиву в один рядок: 'abcdefgjk'
function mergeArray(arr) {
    let result = '';

    arr.forEach(element => {
        if (Array.isArray(element)) {
            result += mergeArray(element);
        } else {
            result += element;
        }
    });

    return result;
}

const nestedArray = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
const mergedString = mergeArray(nestedArray);
console.log(mergedString);
