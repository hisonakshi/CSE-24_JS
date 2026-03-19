function calculateResult() {
    let n = parseInt(document.getElementById("subject").value, 10);
    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid number of subjects");
        return;
    }

    let total = 0;

    for (let i = 0; i < n; i++) {
        let input = prompt("Enter the marks of subject " + (i + 1));
        let x = parseFloat(input);
        if (isNaN(x)) {
            alert("Invalid marks for subject " + (i + 1));
            return;
        }
        total += x;
    }

    let avg = total / n;
    let grade;

    if (avg >= 90) {
        grade = "A";
    } else if (avg >= 80) {
        grade = "B";
    } else if (avg >= 70) {
        grade = "C";
    } else if (avg >= 60) {
        grade = "D";
    } else {
        grade = "fail";
    }

    let r = avg > 40 ? "pass" : "fail";

    document.getElementById("result").innerHTML =
        "Your Total Marks : " + total + "<br/>" +
        "Your Average Marks : " + avg + "<br/>" +
        "Your grade is " + grade + "<br/>" +
        "And You are " + r + "<br/>";
}
