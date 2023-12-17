const text1 = document.querySelector("#text");
const date = document.querySelector("#date");
const btn = document.querySelector(".btn");
const rez = document.querySelector(".rez1");
const data = [];

btn.addEventListener("click", () => {
    data.push({ text: text1.value, date: date.value });
    displayData();
});

function displayData() {
    rez.innerHTML = "";  
    data.forEach((item) => {
        const newItem = document.createElement("p");
        newItem.innerHTML = `${item.text}, ${item.date}`;
        const newbtn = createDeleteButton(item);
        newItem.appendChild(newbtn);
        rez.appendChild(newItem);
    });
}

function createDeleteButton(item) {
    const newbtn = document.createElement("button");
    newbtn.innerHTML = "delete";
    newbtn.classList.add("border-2", "p-3");  
    newbtn.addEventListener("click", () => {
        const itemIndex = data.indexOf(item);
        if (itemIndex !== -1) {
            data.splice(itemIndex, 1);
            displayData();
        }
    });
    return newbtn;
}