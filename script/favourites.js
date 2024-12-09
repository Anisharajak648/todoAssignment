
let favourite = JSON.parse(localStorage.getItem("favourite")) || [];
displayTable(favourite)


function displayTable(favourite) {
    document.querySelector("tbody").innerHTML = "";
    favourite.forEach(element => {

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


        row.append(td1, td2, td3, td4);

        document.querySelector("tbody").append(row);

    })


}
