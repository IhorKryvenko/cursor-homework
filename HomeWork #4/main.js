const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];


// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. 
// У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
function getPairs(studentName) {
    const pairs = [];
    let men = [];
    let women = [];
    for (i = 0; i < studentName.length; i++) {
        if (studentName[i].slice(-1) === "а") {
            women.push(studentName[i])
        } else {
            men.push(studentName[i])
        }
    }
    for (i = 0; i < men.length; i++) {
        pairs.push([men[i], women[i]])
    }
    return pairs;
}



// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 
// Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
function addThemesForPairs(pairs) {
    let arrPairsWithThemes = [];
    for (i = 0; i < pairs.length; i++) {
        arrPairsWithThemes.push([pairs[i].join(" і "), themes[i]])
    }
    return arrPairsWithThemes;
}


// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]
function studentGetAssessment(students, marks) {
    let arrStudentAssessment = [];
    for (i = 0; i < students.length; i++) {
        arrStudentAssessment.push([(students[i], marks[i])]);
    }
    return arrStudentAssessment
}

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): 
// [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function randomGetAssessment(pairs) {
    let minAssesment = 1;
    let maxAssesment = 5;
    let randomGetAssessment = [];

    for (let i = 0; i < pairs.length; i++) {
        let randomAssessment = Math.floor(Math.random() * (maxAssesment - minAssesment + 1) + minAssesment);
        randomGetAssessment.push(pairs[i].concat(randomAssessment));
    }
    return randomGetAssessment;
}




const createPair = getPairs(students);
const pairsWithTheme = addThemesForPairs(createPair);
const studentWithAssessment = studentGetAssessment(students, marks);
const pairsAndAssessment = randomGetAssessment(pairsWithTheme);

document.writeln(`<ul><li>${createPair}</li>
                      <li>${pairsWithTheme}</li>
                      <li>${studentWithAssessment}</li>
                      <li>${pairsAndAssessment}</li>
                    </ul>`);
