console.log(1) //同步任务 A
setTimeout( //同步任务 B
()=> { console.log(2) } //任务B产生的异步宏任务
, 1000)
new Promise ( //同步任务C
(resolve) => { console.log(3); resolve(4); }
)
.then( //任务C执行过程中resolve(4>语句产生的异步微任务
(num) => { console.log(num) }
)
setTimeout( //同步任务 D
()=> { console.log(5) } //任务D产生的异步宏任务
, 1000)