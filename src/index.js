document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// Consistency Is King
// Clear, searchable & obvios

const makePerson = ({ firstName, lastName, age, job }) => {
  return {
    name: firstName + ' ' + lastName,
    lastName,
    age,
    job,
    salary: 16000 * 4
  }
}

// const dev = makePerson('Andrey', 'Dmitriev', 30, 'Web Dev')
const dev = makePerson({
  firstName: "Scott",
  lastName: "Tolinski",
  age: 32,
  job: "Web Dev"
})

// DO NOT DO
// const hireDev = ({ devInfo }) => {
//   const hiredDevInfo = {
//     hired: true,
//     ...devInfo
//   }
//   return hiredDevInfo
// }

// Correct
const hireDev = ({ dev }) => {
  const hiredDev = {
    hired: true,
    ...dev
  }
  return hiredDev
}

console.log(hireDev({ dev }))

console.log(dev)
