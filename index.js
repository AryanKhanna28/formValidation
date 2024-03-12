let button=document.getElementById('submit')
console.log(button)
// console.log(button.disabled)
let flag = new Array(5).fill(false);
console.log(flag);

function validateFname(e){
    let fname= e.target.value;
    console.log(fname);
    if(fname.length<4){
        alert("Please enter First Name");
        flag[0]=false;
    }
    else{
        flag[0]=true;
    }
    console.log(flag);
    validateForm();
}

function validateLname(e){
    let lname= e.target.value;
    console.log(lname);
    if(lname.length<4){
        alert("Please enter Last Name");
        flag[1]=false;
    }
    else{
        flag[1]=true;
    }
    console.log(flag);
    validateForm();
}

function validateEmail(e){
    let email= e.target.value;
    console.log(email);
    let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    let isValid = regex.test(email);
    if(isValid==false){
        alert("Please enter correct email");
        flag[2]=false;
    }
    else{
        flag[2]=true;
    }
    console.log(flag);
    validateForm();
}

function validatePass(e){
    let passward= e.target.value;
    console.log(passward);
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    let isValid = regex.test(passward);
    if(isValid==false){
        alert("Please enter correct passward");
        flag[3]=false;
    }
    else{
        flag[3]=true;
    }
    console.log(flag);
    validateForm();
}

function validatePhone(e){
    let phone= e.target.value;
    console.log(phone);
    if(phone.length==10){
        flag[4]=true;
    }
    else{
        alert("Please enter valid number");
        flag[4]=false;
    }
    console.log(flag);
    validateForm();
}

function validateForm(){
    let bool=false;
    for(let i=0;i<5;i++){
        if(flag[i]){
            bool=true;
        }
        else{
            bool=false;
        }
    }
    button.disabled=!bool;
}
