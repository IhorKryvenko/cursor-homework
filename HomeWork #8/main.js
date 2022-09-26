// У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу.

// 1. У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються
// при створенні студента(в конструктор).

// 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський
// Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.

// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

// 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка
// поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]

// 5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

// 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки
// та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)

// 7. Створіть метод this.recover, який дозволить поновити студента

class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.dismiss = false;
    }
    getInfo = () => {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
    }
    get getMarks() {
        return !this.dismiss ? this.marks : null
    }

    set setMarks(marks) {
        this.marks.push(marks);
    }
    getAverageMark() {
        let sum = this.marks.reduce((previousValue, currentValue) => previousValue + currentValue)
        return sum / this.marks.length;
    }
    dismissStuden() {
        this.dismiss = true;
        return "Student off"
    }
    recoverStudent() {
        this.dismiss = false;
        return "Student on"
    }
}

const bob = new Student('Вищої Школи Психотерапії м.Одеса', '1', 'Остап Родоманський Бендер', [5, 2, 4, 1]);

console.log(bob.getInfo());

bob.setMarks = 3;
console.log(bob.getMarks)
console.log(bob.getAverageMark())

console.log(bob.dismissStuden())
bob.getMarks = 6
console.log(bob.getMarks);

console.log(bob.recoverStudent())
bob.setMarks = 6
console.log(bob.getMarks);