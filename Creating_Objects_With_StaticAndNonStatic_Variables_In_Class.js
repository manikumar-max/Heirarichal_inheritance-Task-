// // first Class --  1
// class Innomatics{
//     static instituteName = "FULL STACK EXPERTS ACADEMY";
//     static trainers = "'vineeth sir','sanket sir','balaji sir'";
//     static mentors = "'lakshmi narayana sir','jaffer ali sir'";
//     setData(studentName,studentAge,studentBatch,studentCourse,studentPassedout){
//         this.studentName = studentName;
//         this.studentAge = studentAge;
//         this.studentBatch = studentBatch;
//         this.studentCourse = studentCourse;
//         this.studentPassedout = studentPassedout;
//     };
//     displayDetails(){
//         console.log("my mentors are",Innomatics.mentors);
//         console.log("hello my name is ",this.studentName);
//         console.log("hello my age is ",this.studentAge);
//     }
// }

// let student1 = new Innomatics();
// student1.setData("mani",23,60,"python fsd",2026);
// console.log("my institute name is",Innomatics.instituteName);
// console.log("my trainers are",Innomatics.trainers);
// student1.displayDetails();
// console.log("my batch is",student1.studentBatch);
// console.log("my course is",student1.studentCourse);
// console.log("i have cleared my btech in ",student1.studentPassedout);

// console.log("=================================================")

// let student2 = new Innomatics();
// student1.setData("kumar",26,58,"java fsd",2025);
// console.log("my institute name is",Innomatics.instituteName);
// console.log("my trainers are",Innomatics.trainers);
// student1.displayDetails();
// console.log("my batch is",student1.studentBatch);
// console.log("my course is",student1.studentCourse);
// console.log("i have cleared my btech in ",student1.studentPassedout);

// // second Class -- 2
// class Mobile{
//     static mobileOs = "Android";
//     static mobileNetwork = "5G";
//     static mobileWarranty = `"12 months"`;
//     setValues(brand,model,color,storage,batteryCapacity){
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//         this.storage = storage;
//         this.batteryCapacity = batteryCapacity;
//     }
//     displayValues(){
//         console.log(Mobile.mobileOs);
//         console.log(Mobile.mobileNetwork);
//         console.log(Mobile.mobileWarranty);
//         console.log(this.brand);
//         console.log(this.model);
//     }
// }
// let mobile1 = new Mobile();
// mobile1.setValues("samsung","galaxy s24","black","256gb","4000 MAh");
// mobile1.displayValues();
// console.log(mobile1.color);
// console.log(mobile1.storage);
// console.log(mobile1.batteryCapacity);

// console.log("=================================");
// let mobile2 = new Mobile();
// mobile2.setValues("RED MI","Note 17 pro","blue","256gb","10000 MAh");
// mobile2.displayValues();
// console.log(mobile2.color);
// console.log(mobile2.storage);
// console.log(mobile2.batteryCapacity);

// third class -- 3
// class Laptop{
//     static laptopOs = "Windows";
//     static laptopNetwork = "5G";
//     static laptopWarranty = `" 2 years"`;
//     setValues(brand,model,color,storage,batteryCapacity){
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//         this.storage = storage;
//         this.batteryCapacity = batteryCapacity;
//     }
//     displayValues(){
//         console.log(Laptop.laptopOs);
//         console.log(Laptop.laptopNetwork);
//         console.log(Laptop.laptopWarranty);
//         console.log(this.brand);
//         console.log(this.model);
//     }
// }
// let laptop1 = new Laptop();
// laptop1.setValues("Dell","inspiron 3583","black","1 TB","20000 MAh");
// laptop1.displayValues();
// console.log(laptop1.color);
// console.log(laptop1.storage);
// console.log(laptop1.batteryCapacity);

// console.log("=================================");
// let laptop2 = new Laptop();
// laptop2.setValues("Lenovo","Idea pad slim 3","blue","256gb","10000 MAh");
// laptop2.displayValues();
// console.log(laptop2.color);
// console.log(laptop2.storage);
// console.log(laptop2.batteryCapacity);

// fourth class --> 4
// class Movie {
//     static videoQuality = "4k ultra HD";
//     static audioFormat = "dolby atmos";
//     static theatreName = "prasas IMax";
//     setMovieDetails(title,director,leadingActor,genre,releaseYear){
//         this.title = title;
//         this.director = director;
//         this.leadingActor = leadingActor;
//         this.genre = genre;
//         this.releaseYear = releaseYear;
//     }
//     displayDetails(){
//         console.log(Movie.videoQuality);
//         console.log(Movie.audioFormat);
//         console.log(Movie.theatreName);
//         console.log(this.title);
//         console.log(this.director);
//         console.log(this.leadingActor);
//         console.log(this.genre);
//         console.log(this.releaseYear);
//     }
// }

// let movie1 = new Movie();
// movie1.setMovieDetails("bahubali 1","s.s.rajamouli","prabhas","history",2015);
// movie1.displayDetails();
// console.log("====================================")
// let movie2 = new Movie();
// movie2.setMovieDetails("Devara","Koratala siva","NTR","Action",2024);
// movie2.displayDetails();

// fifth class --> 5
// class JobListing {
//     static employeeType = "full time";
//     static workSetup = "Remote";
//     static jobDuration = " 2 years";    
//     setJobDetails(jobId,positionTitle,department,requiredSkill,officeLocation){
//         this.jobId = jobId;
//         this.positionTitle = positionTitle;
//         this.department = department;
//         this.requiredSkill = requiredSkill; 
//         this.officeLocation = officeLocation;
//     }
//     displayDetails(){
//         console.log(JobListing.employeeType);
//         console.log(JobListing.workSetup);
//         console.log(JobListing.jobDuration);
//         console.log(this.jobId);
//         console.log(this.positionTitle);
//         console.log(this.department);
//         console.log(this.requiredSkill);
//         console.log(this.officeLocation);
//     }
// }

// let employee1 = new JobListing();
// employee1.setJobDetails(101,"frontend Developer","Engineering","javascript","hyderabad");
// employee1.displayDetails();
// console.log("=========================");

// let employee2 = new JobListing();
// employee2.setJobDetails(102,"Backend Developer","Engineering","Python","Bangalore");
// employee2.displayDetails();


//  calculating student marks to know he got passed or failed.
class StudentTotalMarks{
    static passMarks = 35;
    studentTotalMarks(telugu,hindhi,english,maths,science,social){
        this.totalMarks = telugu+hindhi+english+maths+science+social;
        if(this.totalMarks<=34){
            return `sorry buddy you're failed you've got only ${this.totalMarks}`
        }else if(this.totalMarks>34 && this.totalMarks <= 60){
            return `heyy buddy you've got passed your's rocksolid marks are ${this.totalMarks}`
        }
    }
}

let student1 = new StudentTotalMarks();
console.log(student1.studentTotalMarks(10,10,10,10,10,10));

class Student {
     static name = "Mani Kumar";
     setDetails(course){
          this.course = course
           return this.course;
    }
}
let mani = new Student( );
console. log(Student.name) ;
console.log(mani.setDetails(60));