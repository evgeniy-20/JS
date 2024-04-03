// Допишіть наступний код так, щоб його запуск алертом виводив '!':

(function () {
    return function () {
        return function () {
            console.log('!');
        }
    }
})()()();
