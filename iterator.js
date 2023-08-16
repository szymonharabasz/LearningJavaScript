class Fibonacci {
    constructor(max) {
        this.max = max
        this.a = 1
        this.b = 1
    }

    next() {
        let result = {value: this.a, done: this.a >= this.max};
        let temp = [this.b, this.a + this.b];
        this.a = temp[0];
        this.b = temp[1];
        return result;
    }

    [Symbol.iterator]() {
        return this;
    }
}

for (let num of new Fibonacci(1000)) {
    console.log(num)
}