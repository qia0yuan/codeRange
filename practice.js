let ar1 = Array(4)
ar1[0] = 'Jan'
ar1[1] = 'Feb'
ar1[2] = 'Mar'
ar1[3] = 'Apr'
let ar2 = Array('1', '2', '3', '4')
let ar3 = ['5', '6', '7', '8']
console.log(ar1)
;(function display (ary) {
  for (member of ary) {
    console.log(member)
  }
})(ar1)

// associative array for (key in emp) {}
let obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}
;(function showObj (obj) {
  for (key in obj) {
    console.log(obj[key])
  }
})(obj1)

let test = []
test['hi'] = 2
test['gee'] = 4
test['fun'] = () => {
  console.log('look at this')
}
test[4] = 10
test.push('hello')
test.push('hello George')
test.pop()
test.shift()
test.unshift('hehe')
console.log(Object.keys(test))
console.log(test.length)
console.log(test['fun']())

const myObj = {}
myObj['a'] = 1
myObj['b'] = 2
myObj['c'] = 3
myObj['d'] = 4
console.log(`${myObj.a}			${myObj.b}
	${myObj.c} hello ${myObj.d}`)

function MyConstructor (a, b) {
  this.name = a
  this.age = b
  MyConstructor.prototype.doIt = () => {
    console.log(`I'm getting there,my friend!`)
    return this
  }
}

const obj = new MyConstructor('George', 24)
obj.doIt().doIt()

console.log(toString.call(myObj))
console.log(toString(myObj))

// deal with circular obj
const customStringify = v => {
  const cache = new Set()
  return JSON.stringify(v, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        // Circular reference found
        try {
          // If this value does not reference a parent it can be deduped
          return JSON.parse(JSON.stringify(value))
        } catch (err) {
          // discard key if value cannot be deduped
          return
        }
      }
      // Store value in our set
      cache.add(value)
    }
    return value
  })
}
// import { inspect } from 'util';
let util = require('util')
var a = {}
a.foo = 1
a.hi = 2
a.hello = 3
a.hey = a
a.bar = a

console.log(customStringify(a))
console.log(util.inspect(a))

// interview question
let oo = {
  name: 'George',
  myFunc: function () {
    console.log('hey dude!' + this.name)
  }
}
oo.myFunc()

function pp (cb) {
  cb()
}

pp(oo.myFunc)

// interview question
for (var i = 0; i <= 5; i++) {
  ;(function (j) {
    setTimeout(function () {
      console.log(j)
    }, 0)
  })(i)
}

// interview question
function bad (person) {
  if (
    JSON.stringify(person) ===
    JSON.stringify({
      name: 'Lian'
    })
  ) {
    console.log('hey')
  } else {
    console.log('ha')
  }
}
bad({
  name: 'Lian'
})

// ES6 class constructor
class Vehicle {
  constructor (make, model, year) {
    this.make = make
    this.model = model
    this.year = year
  }
  print () {
    console.log(`This vehicle is: ${this.make} ${this.model} ${this.year}.`)
  }
  disclaimer () {
    console.log(`This is an exercise.`)
  }
}

class Suv extends Vehicle {
  /* constructor (make, model, year, size) {
    super(make, model, year)
  }*/
  disclaimer () {
    console.log(`This is a practice.`)
  }
}
let vehicle = new Vehicle('Jeep', 'Grand Cherokee', '2017')
vehicle.disclaimer()
let jeep = new Suv('Jeep', 'Grand Cherokee', '2017')
jeep.print()
jeep.disclaimer()

// Get person with max salary
let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250
}
let dummy = {};
((a) => {
  const [name = null] = Object.entries(a).sort((x, y) => y[1] - x[1])[0] || []
  console.log(name)
})(dummy)
