function isGPA(gpa) {
    validGPA=true
    if (gpa<0 || gpa>4.0) {
        validGPA=false}
    return validGPA

}

console.log(isGPA(-1))
console.log(isGPA(0))
console.log(isGPA(2))
console.log(isGPA(4))
console.log(isGPA(4.1))
