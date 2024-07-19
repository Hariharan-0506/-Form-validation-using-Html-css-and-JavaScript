function validationform(){
    var firstname=document.Validateform.firstname.value;
    var lastname=document.Validateform.lastname.value;
    var city=document.Validateform.city.value;
    var Address=document.Validateform.Address.value;
    var Number=document.Validateform.Number.value;
    
    if (firstname == null || firstname== "")
        {
        alert("Please fill in all fields.");
        return false;
     }
     else if(lastname==null || lastname=="")
     {
        alert("please fill in all fields");
        return false;
     }
     else if(city==null || city=="")
     {
        alert("please fill in city fields");
        return false;
     }
     else if(Address==null || Address=="")
     {
        alert("please fill in all fields");
        return false;
     }
     else if(Number.length<10 || Number.length>10)
     {
        alert("Check the number");
        return false;
     }
     return true;
    
}