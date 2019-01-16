
// "If / Else If / Else" statement:

function myIfElseFunction() {

    let gradeOne = document.getElementById("gradeOne").value;
    let responseOne = document.getElementById("response1");
    
    if (gradeOne === "A") {
        responseOne.innerHTML = "Impressive! You Got An &quot;A&quot;! I'm So Proud Of You!";
    } else if (gradeOne === "B") {
        responseOne.innerHTML = "A &quot;" + gradeOne + "&quot; Is Good... But Try Harder For An &quot;A&quot;!";
    } else if (gradeOne === "C") {
        responseOne.innerHTML = "Ok, You Passed... But You Can Do Better Than That!";
    } else if (gradeOne === "D") {
        responseOne.innerHTML = "It's Time To Have A Talk...";
    } else if (gradeOne === "F") {
        responseOne.innerHTML = "Getting An &quot;" + gradeOne + "&quot; Is Unacceptable! You're Grounded!";
    } else {
        responseOne.innerHTML = "ERROR";
    };
};

// Switch statement:

function mySwitchFunction() {

    let gradeTwo = document.getElementById("gradeTwo").value;
    let responseTwo = document.getElementById("response2");

    switch (gradeTwo) {
        case "A":
        responseTwo.innerHTML = "Impressive! You Got An &quot;A&quot;! I'm So Proud Of You!";
        break;
        case "B":
        responseTwo.innerHTML = "A &quot;" + gradeTwo + "&quot; Is Good... But Try Harder For An &quot;A&quot;!";
        break;
        case "C":
        responseTwo.innerHTML = "Ok, You Passed... But You Can Do Better Than That!";
        break;
        case "D":
        responseTwo.innerHTML = "It's Time To Have A Talk...";
        break;
        case "F":
        responseTwo.innerHTML = "Getting An &quot;" + gradeTwo + "&quot; Is Unacceptable! You're Grounded!";
        break;
        default:
        responseTwo.innerHTML = "ERROR";
        break;
    };

};

// Ternary Operator Statement:

function myTernaryFunction() {

    let gradeThree = document.getElementById("gradeThree").value;
    let responseThree = document.getElementById("response3");

    gradeThree === "A" ? responseThree.innerHTML = "Impressive! You Got An &quot;A&quot;! I'm So Proud Of You!" :
    gradeThree === "B" ? responseThree.innerHTML = "A &quot;" + gradeThree + "&quot; Is Good... But Try Harder For An &quot;A&quot;!" :
    gradeThree === "C" ? responseThree.innerHTML = "Ok, You Passed... But You Can Do Better Than That!" :
    gradeThree === "D" ? responseThree.innerHTML = "It's Time To Have A Talk..." :
    gradeThree === "F" ? responseThree.innerHTML = "Getting An &quot;" + gradeThree + "&quot; Is Unacceptable! You're Grounded!" :
    responseThree.innerHTML = "ERROR";

};

