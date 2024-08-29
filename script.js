const studentform=document.getElementById('studentform');
const studentlist=document.getElementById('studentlist');
const errorDiv=document.getElementById('error');
const students=[];
studentform.addEventListener('submit',function(Event));
{
    Event.preventDefault();
    const studentid=document.getElementById('studentid').value;
    const studentname=document.getElementById('studentname').value;
    const studentage=document.getElementById('studentage').value;
}
try{
    addstudent(studentid,studentname,studentage);
    display students();
    errorDiv.text Content="";
}
catch(error){
    errorDiv.text Content=error.message;
studentform.onformdata.reset();
};
function addstudent(id,name,age)
{
    if(!id||!name||!age){
        throw new Error('age must be a postive number');
    }
    const studentExists=students.some(student=>student.id==id);
    if(studentExists)
       throw new Error()
}




















