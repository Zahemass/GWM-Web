const list_items = [];

function add(){
    list_items.push(document.getElementById('Title').value);
    let text = "<ul id = 'list-container'>";
    for (i=0; i < list_items.length; i++){
        if (list_items[i] !== ""){   
        text += "<li> <input class = 'form-check-input' id = 'checkbox_id"+i+"' type='checkbox' name = 'checked'>  <label id = 'items'>" + list_items[i] + "</label> </li>";
        }
    }
    text += "</ul>";    
    document.getElementById("items").innerHTML = text;
    document.getElementById('Title').value = "";
};   

function remove(){
    count = 0;
    for (i=0; i < list_items.length; i++){
        if (list_items[i] !== ""){ 
            let checkbox = document.getElementById("checkbox_id"+i);
            if (checkbox.checked === true){
                count += 1; 
            };
        };
    };
    for (i=0; i < list_items.length; i++){
        if (list_items[i] !== ""){ 
            let checkbox = document.getElementById("checkbox_id"+i);
            if (checkbox.checked === true){
                list_items.splice(i,count);
            };
        };    
    };
    if (document.getElementById('Title').value === ""){
        return add();
    };
};



