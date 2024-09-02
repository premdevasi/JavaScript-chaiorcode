
//when all reslove for promise.all()
// const p1 = new Promise( (res, rej) => {
//     setTimeout(() => res("p1 success"), 3000);
// })

// const p2 = new Promise( (res, rej) => {
//     setTimeout(() => res("p2 success"), 1000);
// })

// const p3 = new Promise( (res, rej) => {
//     setTimeout(() => res("p3 success"), 2000);
// })

//if fail one of them
const p1 = new Promise( (res, rej) => {
    setTimeout(() => rej("p1 fail"), 1000);
})

const p2 = new Promise( (res, rej) => {
    setTimeout(() => rej("p2 fail"), 3000);
})

const p3 = new Promise( (res, rej) => {
    setTimeout(() => rej("p3 fail"), 2000);
})

Promise.any([p1, p2, p3]).then( (res) => {
    console.log(res);
})
.catch( (err) =>{
    console.error(err);
    console.log(err.errors);
})