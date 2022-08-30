function createInstitue(students)
{
    const institute={
        students : students,teach  ()  {
    
            console.log('start demo')
        }
    };
    return institute;

}
let i1=createInstitue(30);
i1.teach();
console.log(i1.students);
let i2=createInstitue(40);
console.log(i2);
//constructor function
function NewInstitute(students){
    this.students=students;
    this.teach=function teach(){
        console.log('start demo1')
    }

}
let n1=new NewInstitute(56);
console.log(n1);
