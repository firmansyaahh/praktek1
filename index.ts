class student {
    nameStudent : String;
    addressStudent : String;
    majorStudent : String;

    constructor(nameStudent: String, addressStudent: String,majorstudent:String){
        this.nameStudent = nameStudent;
        this.addressStudent = addressStudent;
        this.majorStudent = majorstudent;
    }
    
    name() : void {
        console.log("studen name: "+ this.nameStudent)
    }
}