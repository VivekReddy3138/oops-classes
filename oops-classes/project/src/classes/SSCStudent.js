class SSCStudent{

constructor(firstName,lastName,telMarks,hindiMarks,engMarks,mathsMarks,sciMarks,socMarks){
    this.firstName = firstName;
    this.lastName = lastName;
    this.telMarks = telMarks;
    this.hindiMarks = hindiMarks;
    this.engMarks = engMarks;
    this.mathsMarks = mathsMarks;
    this.sciMarks = sciMarks;
    this.socMarks = socMarks;
    console.log("Inside SSCStudent Constuctor")
    console.log(firstName,lastName,telMarks,hindiMarks,engMarks,mathsMarks,sciMarks,socMarks)
}

calculateResult = ()=>{
    console.log("Inside Calculate Result");
    let passMarks = 35;
    if(
        this.telMarks >= passMarks &&
        this.hindiMarks >= passMarks &&
        this.engMarks >= passMarks &&
        this.mathsMarks >= passMarks &&
        this.sciMarks >= passMarks &&
        this.socMarks >= passMarks 
    ){
    console.log(`${this.firstName} Passed in Tenth`);
    }else{
        console.log(`${this.firstName} failed in Tenth`)
    }
}


}

export default SSCStudent;