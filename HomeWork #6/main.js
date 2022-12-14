const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

// 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список
// предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої
// літери, а _ – замінити на пробіл
function getSubjects(students) {
    let arrSubjects = Object.keys(students.subjects).map(subject =>
        (subject.charAt(0).toUpperCase() + subject.slice(1)).split('_').join(' '));
    return arrSubjects
}
console.log(getSubjects(students[0]))



// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для
// переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції,
// написані у попередніх домашніх завданнях :)
function getAverageMark(students) {
    let arrSubjects = Object.values(students.subjects).flat();
    let sumGrade = arrSubjects.reduce((previousValue, currentValue) => previousValue + currentValue);
    return (sumGrade / arrSubjects.length).toFixed(2)
}
console.log(getAverageMark(students[0]))

// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка
// повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання).
//  ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.
function getStudentInfo(students) {
    return {"course": students.course, "name": students.name, "averageMark": getAverageMark(students)};
}
console.log(getStudentInfo(students[0]))

// 4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у
// алфавітному порядку.
function getStudentsNames(students) {
    let studentsName = students.map(student => student.name);
    return studentsName.sort();
}
console.log(getStudentsNames(students))

// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику
// середньої оцінки.
function getBestStudent(students) {
    let bestGrade = 0;
    let bestStudent;
    students.forEach(element => {
        let averageMark = getAverageMark(element);
        if (averageMark > bestGrade) {
            bestGrade = averageMark;
            bestStudent = element.name;
        }
    })
    return bestStudent
}
console.log(getBestStudent(students))

// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому
// ключі це букви у слові, а значення – кількість їх повторень.
function calculateWordLetters(word) {
    let objCalc = {};
    for (i = 0; i < word.length; i++) {
        if (objCalc[word[i]] > 0) {
            objCalc[word[i]] += 1
        } else {
            objCalc[word[i]] = 1
        }
    }
    return objCalc;

}
console.log(calculateWordLetters("тесдіовтдтітвтат"))
