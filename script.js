function calculateHybrid() {
    let assignment = parseFloat(document.getElementById('assignment').value) || 0;
    let attendance = parseFloat(document.getElementById('attendance').value) || 0;
    let surprise = parseFloat(document.getElementById('surprise').value) || 0;
    let quiz = parseFloat(document.getElementById('quiz').value) || 0;
    let mst1 = parseFloat(document.getElementById('mst1').value) || 0;
    let mst2 = parseFloat(document.getElementById('mst2').value) || 0;
    let end = parseFloat(document.getElementById('end').value) || 0;
    let labmst = parseFloat(document.getElementById('labmst').value) || 0;
    
    let worksheets = 0;
    for (let i = 1; i <= 10; i++) {
        worksheets += parseFloat(document.getElementById('w' + i).value) || 0;
    }
    
    let worksheet = (worksheets / 300) * 45;
    let mst_avg = (mst1 + mst2) / 2;
    let s = (surprise / 12) * 4;
    let n = (labmst / 10) * 15;
    
    let total = ((assignment + quiz + mst_avg + attendance + s + worksheet + end + n) / 140) * 70;
    
    document.getElementById('result').innerHTML = `<h2>Your Internal Marks: ${total.toFixed(2)}</h2>`;
}

function calculateTheory() {
    let assignmentT = parseFloat(document.getElementById('assignmentT').value) || 0;
    let attendanceT = parseFloat(document.getElementById('attendanceT').value) || 0;
    let surpriseT = parseFloat(document.getElementById('surpriseT').value) || 0;
    let quizT = parseFloat(document.getElementById('quizT').value) || 0;
    let mst1T = parseFloat(document.getElementById('mst1T').value) || 0;
    let mst2T = parseFloat(document.getElementById('mst2T').value) || 0;
    
    let mst_avgT = (mst1T + mst2T) / 2;
    let sT = (surpriseT / 12) * 4;
    
    let totalT = assignmentT + quizT + mst_avgT + attendanceT + sT;
    
    document.getElementById('result').innerHTML = `<h2>Your Internal Marks: ${totalT.toFixed(2)}</h2>`;
}
