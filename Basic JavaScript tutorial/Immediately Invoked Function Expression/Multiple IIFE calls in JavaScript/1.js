// Допишіть наступний код так, щоб його запуск консолем виводив '!':

(function () {
    return function () {
        return function () {
            return function () {
                return function () {
                    return console.log('!');
                }
            }
        }
    }
})()()()()();
