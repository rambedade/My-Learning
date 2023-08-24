
//  return sum of the grades 


let sumGrades=(grades)=>{ 
                            // arrow function for sum problem
  let sum=0;

  grades.forEach((grade)=>{
    return sum= sum + grade ;
  })

  return sum ;

}
 let stud=[3,3,3,3,3,2]
let grades=[2,2,2,2,2]

console.log(sumGrades(grades))

