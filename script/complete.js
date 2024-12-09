

let favourite = JSON.parse(localStorage.getItem("favourite")) || [];

let completed = JSON.parse(localStorage.getItem("completed")) || [];
myFirstList(completed);



function myFirstList(completed) {
    document.querySelector("tbody").innerHTML = "";

    completed.forEach((element, index) => {

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
        td5.innerText = "Add";
        td5.style.backgroundColor = "gray"
        td5.style. borderRadius = "20px"

        td5.addEventListener("click", function () {
            // completed.splice(index, 1);
            favourite.push(element)
            // console.log(favourite)
            localStorage.setItem("favourite", JSON.stringify(favourite))
        })

        row.append(td1, td2, td3, td4, td5);

        document.querySelector("tbody").append(row)
    })
}

