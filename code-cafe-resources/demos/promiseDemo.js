'use strict';

const getData = () => {
    console.log("getData Running");
    return Promise.resolve("yay!");
};

console.log("top");

getData().then((result) => {
    console.log("result", result);
}).catch((error) => {
    console.error("error", error);
});

console.log("end");
