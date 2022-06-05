
 function validate()
 {
   
    
 
 var name = document.form1.name.value;
 var empid = document.form1.empid.value;
 var date = document.getElementById('joindate').value;
 var hours = document.getElementById('workhours').value;
 var designation = document.getElementById('designation').value;
 
 if(name=="" || name==null){
     alert('please enter name');
     
     return false;
 
 }
  else if(empid=="" || empid==null){
     alert('please enter employeeid');
     return false;
 
 }
 else if(date=="" || date==null){
     alert('please enter date');
    return false;
 
 }
 else if(hours=="" || hours==null){
     alert('please enter working hours');
    return false;
 
 }
 else if(designation=="" || designation == null){
     alert('please enter designation');
     return false;
 
 }
 
 return true;
 
 }

function salary(){
   
   var sal;
   var empname=document.form1.name.value;
   
window.localStorage.setItem('ename',empname);
var role=document.form1.designation.value;
window.localStorage.setItem('emprole',role);
var hours=document.form1.workhours.value;
if(role=="manager")
{
 sal=hours*95;

}
else if (role=="consultant") {
     sal=hours*70;
    
} else if (role=="trainee") {
     sal=hours*45;
    
}
window.localStorage.setItem('empsal',sal);


}