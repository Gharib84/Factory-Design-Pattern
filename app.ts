enum personCategory{
    Infant,
    Child,
    Adult
}
interface Iperson{
    category: personCategory;
    canSignContract(): boolean;
    printDetails();
}

abstract class Person implements Iperson{
    category: personCategory;
    private DateOfBirth: Date;
    constructor(dateofbirth: Date){
        this.DateOfBirth = dateofbirth;

    }
    abstract canSignContract(): boolean;
         printDetails(): void{
            document.write((`Person:`) + "<br>");
            document.write((`Date Of Birth: ${this.DateOfBirth.toDateString()}
        `) + "<br>");
        document.write((`category: ${personCategory[this.category]}
        `) + "<br>");
        document.write((`can sign:  ${this.canSignContract()}
        `) + "<br>"); 

    }
}

class Infant extends Person{
    constructor(dateofbirth: Date){
        super(dateofbirth);
        this.category = personCategory.Infant;
    }
    canSignContract(): boolean{
        return false;
    }
}

class Child extends Person{
    constructor(dateofbirth: Date){
        super(dateofbirth);
        this.category = personCategory.Child;
    }
    canSignContract(): boolean{
        return false;
    }

}

class Adult extends Person{
    constructor(dateofbirth: Date){
        super(dateofbirth);
        this.category = personCategory.Adult;
    }
    canSignContract(): boolean{
        return true;
    }
}


class PersonFactory{
    constructor(){}
    getPerson(dateofbirth: Date):Iperson{
         let dateNow = new Date();
         let CurrentMonth = dateNow.getMonth() + 1;
         let CurrentDate = dateNow.getDate();
         let dattwoyears = new Date(
             dateNow.getFullYear()-2, CurrentMonth, CurrentDate
         );
         let date_18year = new Date(
             dateNow.getFullYear()-18, CurrentMonth, CurrentDate
         );
         if(dateofbirth >= dattwoyears ) return new Infant(dateofbirth);
         if(dateofbirth >= date_18year) return new Child(dateofbirth);
         return new Adult(dateofbirth);
    }
}

let factory = new PersonFactory();
let first = factory.getPerson(new Date(2016, 0, 1));
first.printDetails();

let second = factory.getPerson(new Date(2001, 0, 1));
second.printDetails();

let third = factory.getPerson(new Date(1984, 12, 1));
third.printDetails();






