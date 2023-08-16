function func() {
    console.log(this);
}

func();
new func();

let obj = {
    name: "A",
    f: function() {
        func(); // Here this is a clobal object
    },
    g: func // Here this is the object 'obj'
}

obj.f()
obj.g()