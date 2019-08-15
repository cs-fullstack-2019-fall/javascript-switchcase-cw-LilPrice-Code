//Problem 1
var userPrint = parseInt(prompt("Enter a number to print the following.\n 1 for 1\n 2 for 2\n 3 for 3\n 4 for 4\n 5 for 5\n"));
switch (userPrint) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
        case 3:
        console.log(3);
        break;
        case 4:
        console.log(4);
        break;
        case 5:
        console.log(5);
        break;
    default:
        alert("INVALID ANSWER");
}

// Problem 2
var binNum = parseInt(prompt("Enter a Binary Number."));

switch (binNum) {
    case 1:
        alert(1);
        break;
    case 10:
        alert(2);
        break;
    case 11:
        alert(3);
        break;
    case 100:
        alert(4);
        break;
    case 101:
        alert(5);
        break;
    default:
        alert("INVALID ANSWER");
        break;

}

//Problem 3 + Challange
let Attendance = [];
var breakingBad = 1;
var checkIn;


while (breakingBad === 1){
    checkIn = parseInt(prompt("Who is Checking in? \n1 for Teacher\n2 for Student\n3 for Parent\n4 to Quit"));
    switch (checkIn) {
        case 1:
            alert("THANK YOU Teacher.");
            Attendance.push("Teacher");
            break;
        case 2:
            alert("THANK YOU Student.");
            Attendance.push("Student");
            break;
        case 3:
            alert("THANK YOU Parent.");
            Attendance.push("Parent");
            break;
        case 4:
            alert("Goodbye");
            breakingBad = 2;
            break;
        default:
            alert("INVALID ANSWER");
            break;

    }

}
console.log(Attendance);