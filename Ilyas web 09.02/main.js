let x = document.getElementById("text");
x.innerHTML = x.innerText.split(" ").map(word=> word.length > 8 ? '<span class="h">'+word+'</span>': word)
.join(" ");
let y = document.createElement('y');
y.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";
y.innerText = "© from here";
document.body.appendChild(y);
x.innerHTML =x.innerHTML.split(/[.]/).join('<p></p>');
let c=x.innerText.split(" ").length;
let c1 = document.createElement('y');
c1.innerText = "Here " + c + " words" ;
document.body.appendChild(document.createElement("br"));
document.body.appendChild(c1);
for (let i=0; i< x.innerText.length; i++) {
    x.innerHTML = x.innerHTML.replace(/\?/g, '😲');
    x.innerHTML = x.innerHTML.replace(/\!/g, '🤔');
}

