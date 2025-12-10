function myFunction(){
    return false;
}
function  Reload(){
    location.reload();
}
function validname() {
    var fname=document.sal_form.fname;
    if(fname.value.length==0){
        alert("Name is required");
        fname.focus();
        return false;
    }
}
function validnbhours(){
    var nbh =document.sal_form.hours;
    if(nbh.value.length==0){
        alert(" nb hours is required");
        hours.focus();
        return false;
    }
    //is NAN not a number
    if(isNaN(nbh.value)){
        alert("you must enter a number");
        hours.focus();
        return false;
    }
}

function calculate(){
    var nbh=document.sal_form.hours.value;
    var rate = 0;
    var f;
    const tax = 2.5;
    const selectedValue=document.sal_form.Title.value;
    if(selectedValue=="ENG") rate=43;
    else if(selectedValue=="ACC") rate=30;
    else if(selectedValue=="worker") rate=22;
     
    if(document.getElementById('RS').checked) f=0;
    else if(document.getElementById('RM').checked) f=100;

    document.getElementById("ra").value=(nbh*rate+f)*(1-tax/100);
    
}
