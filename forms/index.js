
let basicNext=document.getElementById("basic-next");
let othersNext=document.getElementById("others-next");
let workNext=document.getElementById("work-next");
let educationNext=document.getElementById("education-next");
let teamNext=document.getElementById("team-next");
let tab1 = document.getElementById("firstTab")
let tab2 = document.getElementById("secTab")
let tab3 = document.getElementById("thirdTab")
let tab4 = document.getElementById("fourthTab")
let tab5= document.getElementById("fifthTab")
tab2.style.display="none"
tab1.style.display="none"
tab3.style.display="none"
tab4.style.display="none"
tab5.style.display="block"

basicNext.addEventListener('click',(event)=>{
    register.getFname();
    register.validateFname();
    register.getEmail();
    register.getPassword();
    register.getConfirmPassword();
    register.validateEmail();
    register.validatePassword();
    register.validateConfirmPassword();
    if(register.checkBasic() == true){
        tab1.style.display="none"
        tab2.style.display="none"
    }
})
othersNext.addEventListener('click',()=>{
    register.getDate()
    register.validateDate()
    // register.validateGender()
    // register.validateState()
    register.getPhone()
    register.validatePhone()
    register.validateGender()
    if(register.checkOthers() == true){
        tab2.style.display="none"
        tab3.style.display="block"
    }
})
workNext.addEventListener( 'click',()=>{
  
})


class RegForm{
     alphareg=/^[A-Za-z ]+$/
     emailreg=/^([a-z]+[\.-\d]*)@$/;
     emailDomainReg=/^([a-z-]+)\.([a-z\-]{2,8})(\.[a-z]{2,8})?$/;
     dateReg=/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/; 
     numberReg=/^[6789]{1}[\d]{9}$/;
    user={
    fname:"" ,
    fnameErr:"",
    email:"",
    emailErr:"",
    password:"",
    passwordErr:"",
    confirmPassword:"",
    confirmPasswordErr:"",
    date:"",
    dateErr:"",
    phone:"",
    phoneErr:"",
    genderErr:"",
    stateErr:""
    }
    getFname(){
        this.user.fname=document.getElementById("fname").value;
    }
    getEmail(){
        this.user.email=document.getElementById("email").value;
    }
    getPassword(){
        this.user.password=document.getElementById("password").value;
    }
    getConfirmPassword(){
        this.user.confirmPassword=document.getElementById("Cpassword").value;
    }
    getDate(){
        this.user.date = document.getElementById("DOB").value
    }
    getPhone(){
        this.user.phone = document.getElementById("phoneNum").value
    }
    
    
    validateFname(){
        if(this.user.fname == ""){
            this.user.fnameErr = "Firstname required";
            this.displayErrorMsgBasic(3,this.user.fnameErr);
        }
        else if(this.alphareg.test(this.user.fname) == false){
            this.user.fnameErr = "Should contain only alphabets";
            this.displayErrorMsgBasic(3,this.user.fnameErr);
        }
        else 
        {
            this.removeErrorMsgBasic(3);
            this.user.fnameErr = "";
        }

    }

    validateEmail(){
        if(this.user.email == "")
        {
           this.user.emailErr = "Email id required";
           this.displayErrorMsgBasic(0,this.user.emailErr);
        }
        else if(this.emailreg.test(this.user.email.substring(0,(this.user.email.indexOf("@"))+1)) == false){
           this.user.emailErr = "Invalid username";
           this.displayErrorMsgBasic(0,this.user.emailErr);
        }
        else if(this.emailDomainReg.test(this.user.email.substring((this.user.email.indexOf("@"))+1,this.user.email.length)) == false){
            this.user.emailErr= "Invalid domain name";
            this.displayErrorMsgBasic(0,this.user.emailErr);
         }
         else
             {
                this.removeErrorMsgBasic(0);
                this.user.emailErr= "";
            }
    }

        validatePassword(){
            if(this.user.password == "")
            {
               this.user.passwordErr = "Password required";
               this.displayErrorMsgBasic(1,this.user.passwordErr);
            }
            else
            {
                this.removeErrorMsgBasic(1);
                this.user.passwordErr = "";
            }
           }

        validateConfirmPassword(){
            if(this.user.confirmPassword == "")
            {
               this.user.confirmPasswordErr = "Confirm Password required";
               this.displayErrorMsgBasic(2,this.user.confirmPasswordErr);
            }
            else if(this.user.password != this.user.confirmPassword){
                this.user.confirmPasswordErr = "Password mismatch";
                this.displayErrorMsgBasic(2,this.user.confirmPasswordErr);
            }
            else
            {
                this.removeErrorMsgBasic(2);
                this.user.confirmPasswordErr= "";
            }
           }
           validateDate(){
            const formatBirth = this.user.date.split('/')
            const current = new Date();
            const yyyy = current.getFullYear();
            let mm = current.getMonth() + 1; 
            let dd = current.getDate();
            if (dd < 10) 
              dd = '0' + dd;
            if (mm < 10) 
              mm = '0' + mm;
            let currentDate = dd+"/"+mm+"/"+yyyy
            let extractCurrent = currentDate.split('/')
            let age = extractCurrent[2] - formatBirth[2]
           
            if(this.user.date == "")
             {
                this.user.dateErr = "Birth date required";
                this.displayErrorMsgOthers(0,this.user.dateErr);
             }
             else if(this.dateReg.test(this.user.date) == false){
                this.user.dateErr = "Invalid date format";
                this.displayErrorMsgOthers(0,this.user.dateErr);
             }
             else if(age < 20){
                this.user.dateErr = "Eligible once you are 20";
                this.displayErrorMsgOthers(0,this.user.dateErr);
             }
             else
             {
                 this.removeErrorMsgOthers(0);
                 this.user.birthDateError = "";
            }
           }
           validateGender(){
            if((document.getElementById("male").checked == false) && (document.getElementById("female").checked == false))
            {
             this.user.genderErr = "Gender required";
             this.displayErrorMsgOthers(1,this.user.genderErr);
            }
            else{
             this.removeErrorMsgOthers(1);
             this.user.genderErr = "";
            }  
           }
           validatePhone(){
               console.log("hello")
            if(this.user.phone == "")
            {
               this.user.phoneErr = "Phone number required";
               this.displayErrorMsgOthers(3,this.user.phoneErr);
            }
            else if(this.numberReg.test(this.user.phone) == false){
               this.user.phoneErr = "starts with 6/7/8/9 and contain only 10 digits";
               this.displayErrorMsgOthers(3,this.user.phoneErr);
            }
            else
                {
                    this.removeErrorMsgOthers(3);
                    this.user.phoneErr = "";
               }
           }
           validateState(){
            let state = document.getElementsByClassName(".state")
            if(state.options[state.selectedIndex].value == "Choose State")
            {
             this.user.stateErr = "State required";
             this.displayOthersErrorMessage(2,this.user.stateErr);
            }
            else{
             this.removeOthersErrorMessage(2);
             this.user.stateErr = "";
            }
           }
    checkBasic(){
        let result = false
        if(this.user.emailErr=="" && this.user.passwordErr=="" && this.user.confirmPasswordErr=="" && this.user.fnameErr=="" ){
             result = true
        }
        return result;
    }
    checkOthers(){
        let result = false
        if(this.user.dateErr=="" && this.user.genderErr=="" && this.user.phoneErr=="" && this.user.stateErr=="" ){
             result = true
        }
        return result;
    }
    
    displayErrorMsgBasic(index,message){
        const form_group = document.getElementsByClassName("form-group-basic")[index];
        form_group.classList.add("invalid");
        form_group.getElementsByTagName("span")[0].textContent = message;
    }
    removeErrorMsgBasic(index){
        const form_group = document.getElementsByClassName("form-group-basic")[index];
        form_group.classList.remove("invalid");
        form_group.classList.add("valid");
        form_group.getElementsByTagName("span")[0].textContent = "";
    }
    displayErrorMsgOthers(index,message){
        const form_group = document.getElementsByClassName("form-group-others")[index];
        form_group.classList.add("invalid");
        form_group.getElementsByTagName("span")[0].textContent = message;
    }
    removeErrorMsgOthers(index){
        const form_group = document.getElementsByClassName("form-group-others")[index];
        form_group.classList.remove("invalid");
        form_group.classList.add("valid");
        form_group.getElementsByTagName("span")[0].textContent = "";
    }


}

const register= new RegForm();
