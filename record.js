document.querySelector("form").addEventListener("submit", myFun)

function myFun(){
    event.preventDefault()
    let names = document.querySelector("#name").value
    console.log(names);
    let employeeIDs = document.querySelector("#employeeID").value
    let departments = document.querySelector("#department").value
    let exps = document.querySelector("#exp").value
    let emails = document.querySelector("#email").value
    let mbls = document.querySelector("#mbl").value




    var tRow = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.innerText = names
    var td2 = document.createElement("td")
    td2.innerText = employeeIDs
    var td3 = document.createElement("td")
    td3.innerText = departments
    var td4 = document.createElement("td")
    td4.innerText = exps
    var td5 = document.createElement("td")
    td5.innerText = emails
    var td6 = document.createElement("td")
    td6.innerText = mbls
    var td7 = document.createElement("td")
    // td7.innerText = "2"
    if(exps > 5){
        td7.innerText = "Senior"
    }

    else if(exps >= 2 && exps <= 5){
        td7.innerText = "Junior"
    }

    else if(exps <= 1){
        td7.innerText = "Fresher"
    }

    var td8 = document.createElement("td")
    td8.innerText = "Delet"
    td8.addEventListener("click", delItem)

    function delItem(event){
        // var row = event.parentNode.parentNode
        var n = document.querySelectorAll("tr").length
        // console.log(n)
        if(n > 1 && confirm("Are You Sure?") == true){
            var ele = event.parentNode.parentNode
            ele.remove()
        }
    }
    
    tRow.append(td1, td2, td3, td4, td5, td6, td7, td8)
    document.querySelector("tbody").append(tRow)
}


