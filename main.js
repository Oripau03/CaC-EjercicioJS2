let section = document.getElementById("section");
let paragraf = document.getElementById("multi")

let tope = 11;
let base = 9;
let j = 0;
let i = 0;

for (i = tope; i >= base; i--) {
    let title = document.createElement("h1")
    title.innerText = `La tabla del ${i}`;
    section.appendChild(title)

    for (j = 1; j <= 10; j++) {
        let table = document.createElement("p")
        multi = i * j;
        table.innerText = `${i} x ${j} = ${multi}`;
        section.appendChild(table);
    }
    
    let end = document.createElement("br");
    section.appendChild(end);
}


