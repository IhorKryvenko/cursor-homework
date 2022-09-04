const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. 
// У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
function getPairs(studentName) {
    let men = studentName.filter((name) => (name.slice(-1) === "а"));
    let women = studentName.filter((name) => (name.slice(-1) !== "а"));
    let pairs = [];
    for (i = 0; i < men.length; i++) {
        pairs.push([men[i], women[i]])
    }
    console.log(pairs);
    return pairs;
}



// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 
// Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
function addThemesForPairs(pairs) {
    let arrPairsWithThemes = [];
    for (i = 0; i < pairs.length; i++) {
        arrPairsWithThemes.push(new Array(pairs[i].join(" і "), themes[i]))
    }
    return arrPairsWithThemes;
}


// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]
function studentGetAssessment(students, marks) {
    let arrStudentAssessment = [];
    for (i = 0; i < students.length; i++) {
        arrStudentAssessment.push(new Array(students[i], marks[i]));
    }
    return arrStudentAssessment
}

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): 
// [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function randomGetAssessment(pairsStudents) {
    let minAssesment = 1;
    let maxassesment = 5;
    let randomGetAssessment = pairsStudents.slice(0);
    console.log(randomGetAssessment);
    for (i = 0; i < randomGetAssessment.length; i++) {
        let randomValue = Math.floor(Math.random() * (maxassesment - minAssesment + 1) + minAssesment);
        randomGetAssessment[i].push(randomValue);
    }
    return randomGetAssessment
}





const createPair = getPairs(students);
const pairsWithTheme = addThemesForPairs(createPair);
const studentWithAssessment = studentGetAssessment(students, marks);
const pairsAndAssessment = randomGetAssessment(createPair);

document.writeln(`<ul><li>${createPair}</li>
                      <li>${pairsWithTheme}</li>
                      <li>${studentWithAssessment}</li>
                      <li>${pairsAndAssessment}</li>
                    </ul>`);

