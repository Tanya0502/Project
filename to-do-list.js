 var list = document.getElementById("Mondaylist")

 function add() {
        var inputText = document.getElementById("monday-input").value
        var listItem = document.createElement("li")

        listItem.innerHTML = inputText
        document.getElementById("monday-input").value =""
        list.appendChild(listItem) 
}
