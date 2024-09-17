//  Допишіть наступний код так, щоб його запуск console.log виводив '!':

(function () {
    return function () {
        return function () {
            console.log('!');
        };
    };
})()()();
