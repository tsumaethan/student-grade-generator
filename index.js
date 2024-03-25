function calculateGrade() {
    let marks = parseInt(document.getElementById('marks').value);
    let resultElement = document.getElementById('result');
    let grade;

    if (isNaN(marks)   || marks < 0 || mark >100) {
        resultElement.textContent = 'invalid input! please enter a number between 0 and 100.';
        return;
    }

    if (marks > 79) {
        grade = 'A';
        else if (marks >= 60) {
            grade = 'B';
            else if (marks >= 50) {
                grade = 'c';
                else if (marks >= 40) {
                    grade = 'D';
                    else if (marks < 4o) {
                        grade = 'E'
                    }
                    resultElement.textContent = "The Student grade is: ${grade}";
                }
            }
        }
    }
}