
let basicNext=document.getElementById("basic-next");
let othersNext=document.getElementById("others-next");
let workNext=document.getElementById("work-next");
let educationNext=document.getElementById("education-next");
let teamNext=document.getElementById("team-next");

let otherPrev=document.getElementById("others-prev");
let workPrev=document.getElementById("work-prev");
let educationPrev=document.getElementById("education-prev");
let teamPrev=document.getElementById("team-prev");

let tab1 = document.getElementById("firstTab")
let tab2 = document.getElementById("secTab")
let tab3 = document.getElementById("thirdTab")
let tab4 = document.getElementById("fourthTab")
let tab5= document.getElementById("fifthTab")
let tab6= document.getElementById("sixthTab")
tab2.style.display="none"
tab1.style.display="block"
tab3.style.display="none"
tab4.style.display="none"
tab5.style.display="none"
tab6.style.display="none"

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
        tab2.style.display="block"
    }
})
othersNext.addEventListener('click',()=>{
    register.getDate()
    register.validateDate()
    register.getPhone()
    register.validatePhone()
    register.validateGender()
    register.validateState()
    if(register.checkOthers() == true){
        console.log(register.checkOthers())
        tab2.style.display="none"
        tab3.style.display="block"
    }
})
workNext.addEventListener( 'click',()=>{
    tab3.style.display="none"
        tab4.style.display="block"
})
educationNext.addEventListener('click',()=>{
   register.validateGrade()
   register.getYear()
   register.validateYear()
   if(register.checkEducation() == true){
   
    tab4.style.display="none"
    tab5.style.display="block"
}   
})
teamNext.addEventListener('click',()=>{
    register.validatePract()
    register.validateAgree()
    if(register.checkTeam() == true){
   
        tab5.style.display="none"
        tab6.style.display="block"
    }   
})

otherPrev.addEventListener('click',()=>{
    tab1.style.display="block"
    tab2.style.display="none"
})

workPrev.addEventListener('click',()=>{
    tab2.style.display="block"
    tab3.style.display="none"
})

educationPrev.addEventListener('click',()=>{
    tab3.style.display="block"
    tab4.style.display="none"
})

teamPrev.addEventListener('click',()=>{
    tab4.style.display="block"
    tab5.style.display="none"
})




class RegForm{
     alphareg=/^[A-Za-z ]+$/
     emailreg=/^([a-z]+[\.-\d]*)@$/;
     emailDomainReg=/^([a-z-]+)\.([a-z\-]{2,8})(\.[a-z]{2,8})?$/;
     dateReg=/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/; 
     numberReg=/^[6789]{1}[\d]{9}$/;yearErr
     yearReg = /^(0[1-9]|1[0-2])\/(\d{4})$/
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
    stateErr:"",
    gradeErr:"",
    year:"",
    yearErr:"",
    agreeErr:"",
    practErr:""
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
    getYear(){
        this.user.year = document.getElementById("YearsOfPass").value
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
                 this.user.dateErr = "";
            }
           }
           validateGender(){
            if((document.getElementById("male").checked == false) && (document.getElementById("female").checked == false))
            {
             this.user.genderErr = "Gender required";
             this.displayErrorMsgOthers(1,this.user.genderErr);yearErr
            }
            else{
             this.removeErrorMsgOthers(1);
             this.user.genderErr = "";
            }  
           }
           validatePhone(){
              
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
            let state = document.getElementById("Vstate")
            if(state.options[state.selectedIndex].value == "")
            {
             this.user.stateErr = "State required";
             this.displayErrorMsgOthers(2,this.user.stateErr);
            }
            else{
             this.removeErrorMsgOthers(2);
             this.user.stateErr = "";
            }
           }
           validateGrade(){
            let graduation = document.getElementById("graduation")
            if(graduation.options[graduation.selectedIndex].value == "")
            {
             this.user.gradeErr = "Graduation required";
             this.displayErrorMsgEducation(0,this.user.gradeErr);
            }
            else{
             this.removeErrorMsgEducation(0);
             this.user.gradeErr = "";
            }
           }
           validateYear(){
               if(this.user.year == "")
               {
                this.user.yearErr = "year of pass required";
                this.displayErrorMsgEducation(1,this.user.yearErr);
               }
            else if(this.yearReg.test(this.user.year) == false){
                this.user.yearErr = "Invalid format (mm/YYYY)";
             this.displayErrorMsgEducation(1,this.user.yearErr);
            }
            else{
                this.removeErrorMsgEducation(1);
                this.user.yearErr = "";
            }
           }
           validatePract(){
            let pract = document.getElementById("practice")
            if(pract.options[pract.selectedIndex].value == "")
            {
             this.user.practErr = "Practice required";
             this.displayErrorMsgTeam(0,this.user.practErr);
            }
            else{
             this.removeErrorMsgTeam(0);
             this.user.practErr = "";
            }
           }
           validateAgree(){
               let agree = document.getElementById("agree")
               if(agree.checked == false)
               {
                this.user.agreeErr = "Tick required";
                this.displayErrorMsgTeam(1,this.user.agreeErr);
               }
               else{
                this.removeErrorMsgTeam(1);
                this.user.agreeErr = "";
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
        console.log(this.user.dateErr,this.user.genderErr,this.user.phoneErr,this.user.stateErr)
        console.log(result)
        return result;
    }
    checkEducation(){
        let result = false
        if(this.user.gradeErr=="" && this.user.yearErr==""){
             result = true
        }
        return result;
    }
    checkTeam(){
        let result = false
        if(this.user.practErr=="" && this.user.agreeErr==""){
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
    displayErrorMsgEducation(index,message){
        const form_group = document.getElementsByClassName("form-group-education")[index];
        form_group.classList.add("invalid");
        form_group.getElementsByTagName("span")[0].textContent = message;
    }
    removeErrorMsgEducation(index){
        const form_group = document.getElementsByClassName("form-group-education")[index];
        form_group.classList.remove("invalid");
        form_group.classList.add("valid");
        form_group.getElementsByTagName("span")[0].textContent = "";
    }
    displayErrorMsgTeam(index,message){
        const form_group = document.getElementsByClassName("form-group-team")[index];
        form_group.classList.add("invalid");
        form_group.getElementsByTagName("span")[0].textContent = message;
    }
    removeErrorMsgTeam(index){
        const form_group = document.getElementsByClassName("form-group-team")[index];
        form_group.classList.remove("invalid");
        form_group.classList.add("valid");
        form_group.getElementsByTagName("span")[0].textContent = "";
    }

}

const register= new RegForm();
