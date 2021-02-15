
const form = document.getElementById("form")

form.addEventListener("submit", (event) => {event.preventDefault()});

let x = document.getElementsByTagName("LI");

    var i; 
    for(i = 0; i < x.length; i++) {
        let span = document.createElement("SPAN");
        let deleteBtn = document.createElement("BUTTON");
        document.getElementsByTagName("BUTTON")[1].setAttribute("id", "deleted")
        span.className = "deleted";
        span.appendChild(deleteBtn);
        x[i].appendChild(span);
}

let deleted = document.getElementsByClassName("deleted"); 

    var i; 
    for(i = 0; i < deleted.length; i++) {
        deleted[i].onclick = function() {
            let div = this.parentElement; 
            div.style.display = "none"; 
        }
}

function newTask() {

        let li = document.createElement("LI");
        let category = document.getElementById("category").value; 
        let task = document.getElementById("task").value; 
        let input = (category + " " + " " + "/" + " " + task); 
    
        let text = document.createTextNode(input); 
        li.appendChild(text);
    
        if(input === "") {
            alert("Please Enter Your Task");
        } else {
            document.getElementById("list").appendChild(li); 
        }
        form.reset(); 
    
        let span = document.createElement("SPAN");
        let deleteBtn = document.createElement("BUTTON"); 
        span.className = "deleted";
        span.appendChild(deleteBtn);
        li.appendChild(span);
    
        for (i = 0; i <deleted.length; i++) {
                deleted[i].onclick = function() {
                    let div = this.parentElement;
                    div.style.display = "none"; 
                }
        }
}

