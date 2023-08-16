let a = { aname: "A" }
let b = { bname: "B" }

let c = {...a, ...b}
let d = Object.assign(a, b)

console.log(c)
console.log(d)

a.aname = "newA"
b.bname = "newB"

console.log(c)
console.log(d)