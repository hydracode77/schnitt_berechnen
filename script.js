function calc1_1(oralAverage, writtenAverage) {
    return ((oralAverage + writtenAverage) / 2).toFixed(2);
}

function calc2_1(oralAverage, writtenAverage) {
    return ((oralAverage + (2 * writtenAverage)) / 3).toFixed(2);
}

function calc3_2(oralAverage, writtenAverage) {
    return (((3 * writtenAverage) + (2 * oralAverage)) / 5).toFixed(2);
}

document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const oralGrades = parseGrades(document.getElementById('oralGrades').value);
    const writtenGrades = parseGrades(document.getElementById('writtenGrades').value);
    const ratio = document.getElementById('ratio').value;

    const oralAverage = calculateAverage(oralGrades);
    const writtenAverage = calculateAverage(writtenGrades);

    let result;
    if (ratio === '1:1') {
        result = calc1_1(oralAverage, writtenAverage);
    } else if (ratio === '2:1') {
        result = calc2_1(oralAverage, writtenAverage);
    } else if (ratio === '3:2') {
        result = calc3_2(oralAverage, writtenAverage);
    }

    document.getElementById('result').innerText = `Der berechnete Notendurchschnitt ist: ${result}`;
});

function parseGrades(input) {
    // Ersetze alle Kommas durch Punkte, um einheitliches Format zu erhalten
    const standardizedInput = input.replace(/,/g, '.');
    // Teile den Eingabestring bei Leerzeichen auf
    return standardizedInput.split(' ').map(Number);
}

function calculateAverage(grades) {
    // Berechne Durchschnitt
    return grades.reduce((total, grade) => total + grade, 0) / grades.length;
}
