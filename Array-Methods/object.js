

let arr = []

let student={
    id:23,
    city:'Pune',
    school:'nes'
}

let studKeys=Object.keys(student)

console.log(studKeys)               // [ 'id', 'city', 'school' ]

studKeys.forEach((key)=>{
    arr.push(key,student[key])
})

console.log(arr)