function calculateGrade() {

    const marks = [
        Number(document.getElementById("sub1").value),
        Number(document.getElementById("sub2").value),
        Number(document.getElementById("sub3").value),
        Number(document.getElementById("sub4").value),
        Number(document.getElementById("sub5").value)
    ];

    const error = document.getElementById("error");

    error.textContent = "";

    // Validation
    for (let i = 0; i < marks.length; i++) {

        if (isNaN(marks[i]) || marks[i] < 0 || marks[i] > 100) {

            error.textContent =
                `Please enter valid marks (0-100) for Subject ${i + 1}`;

            return;
        }
    }

    // Total
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    // Percentage
    const percentage = total / 5;

    // Grade
    let grade;

    if (percentage >= 90) {
        grade = "A";
    }
    else if (percentage >= 80) {
        grade = "B";
    }
    else if (percentage >= 70) {
        grade = "C";
    }
    else if (percentage >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    // Pass / Fail
    let status = "Pass";

    for (let mark of marks) {
        if (mark < 35) {
            status = "Fail";
            break;
        }
    }

    // Display Results
    document.getElementById("total").textContent = total;

    document.getElementById("percentage").textContent =
        percentage.toFixed(2);

    document.getElementById("grade").textContent = grade;

    const statusElement = document.getElementById("status");

    statusElement.textContent = status;

    if (status === "Pass") {
        statusElement.className = "pass";
    } else {
        statusElement.className = "fail";
    }
}