document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

const makePerson = ({ name, lastName, age, job }) => {
  return {
    name,
    lastName,
    age,
    job  
  }
}

// const dev = makePerson('Andrey', 'Dmitriev', 30, 'Web Dev')
const dev = makePerson({
  name: "Scott",
  lastName: "Tolinski",
  age: 32,
  job: "Web Dev"
})

console.log(dev)