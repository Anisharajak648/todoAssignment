


let completed = JSON.parse(localStorage.getItem("completed")) || [];
let array = JSON.parse(localStorage.getItem("TODOlist")) || [];
myFirstList(array);

document.querySelector("#form").addEventListener("submit", function (event) {
    event.preventDefault();
    let a = document.querySelector("#name").value;
    let b = document.querySelector("#type").value;
    let c = document.querySelector("#date").value;
    let d = document.querySelector("#priority").value;

    let obj = {
        a,
        b,
        c,
        d
    };

    array.push(obj);
    // console.log(array)

    localStorage.setItem("TODOlist", JSON.stringify(array));
    myFirstList(array);
})

function myFirstList(array) {
    document.querySelector("tbody").innerHTML = "";

    array.forEach((element) => {

        let row = document.createElement("tr");
        let td1 = document.createElement("td")
        td1.innerText = element.a;
       

        let td2 = document.createElement("td");
        td2.innerText = element.b;
        

        let td3 = document.createElement("td");
        td3.innerText = element.c;
       

        let td4 = document.createElement("td");
        td4.innerText = element.d;
        if(element.d == "Low"){
            td4.style.backgroundColor = "teal";
            td4.style.color = "white";
        }
        else if(element.d == "Medium"){
             td4.style.backgroundColor = "green";
            td4.style.color = "white";
        }
        else{
            td4.style.backgroundColor = "red";
            td4.style.color = "white";
        }
       

        let td5 = document.createElement("td");
        td5.innerText = "completed";
        td5.style. cursor=  "pointer";

        td5.addEventListener("click", function () {
            // array.splice(index, 1);
            completed.push(element)
            // console.log(completed)
            localStorage.setItem("completed", JSON.stringify(completed))
        })

        row.append(td1, td2, td3, td4, td5);

        document.querySelector("tbody").append(row)
    })
}

