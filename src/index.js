document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// const arr = ['hi', 'Andrey', 'new item', 'second item']
// const [a, b, ...c] = arr
// console.log(a)
// console.log(b)
// console.log(c)

// const person = {
//   name: "Andrey",
//   age: 30,
//   job: "Web Dev"
// }

// const makePerson = (name, age, job) => {
//   return {
//     name: name,
//     age: age,
//     job: job
//   }
// }

const makePerson = (name, age, job) => {
  return {
    name,
    age,
    job
  }
}

const dev = makePerson('Andrey', 30, 'webDev')
// const name = dev.name

const { name, ...rest } = dev

console.log(rest)