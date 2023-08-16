function func(num) {
    console.log(this, num);
}

let myObj = {
    name: "Szymon"
}

func2 = func.bind(myObj);

func(42);
func2(43);

func.call(myObj, 44);
func.apply(myObj, [45]);
