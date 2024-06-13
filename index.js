// let inputData = document.getElementById("search")
// let BtnData = document.getElementById("inputBtn")
// let textData = document.getElementById("textData")




// BtnData.addEventListener('click', () => {

//     textData.innerHTML += `
//         <h1 class="text-[white] pl-[50px] pt-[20px] text-[25px]">${inputData.value}</h1>
//     `
//     inputData.value = "";
//     counter++;
// })


let inputData = document.getElementById("search");
let BtnData = document.getElementById("inputBtn");
let textData = document.getElementById("textData");

let counter = 1;

BtnData.addEventListener('click', () => {
    if (inputData.value.trim() !== "") {
        textData.innerHTML += `
            <h1 class="text-[white] pl-[50px] pt-[20px] text-[25px]">${counter}. ${inputData.value}</h1>
        `;
        inputData.value = "";
        counter++;
    }
});
