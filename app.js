var ul_list = document.querySelector('.list_ul');
var todo_button = document.querySelector('.todo_button');
var todo_input = document.querySelector('.todo_input');
var filter_list = document.querySelector('.filter_list');


// event listeners
todo_button.addEventListener("click",addtodo);
ul_list.addEventListener("click", delete_list);
filter_list.addEventListener("change", filterthelist);


function addtodo(event){
    event.preventDefault(); //prevents from default behavior of event i think
    
    var list_div = document.createElement('div');
    list_div.classList.add('todo_div');
    var li_element = document.createElement('li');
    li_element.classList.add('list_content');

    // appending
     //appending to the ul
    

    //adding list
    
    list_div.appendChild(li_element);

    li_element.innerText = todo_input.value;

    //delete and completed creating elements
    var deleted_btn = document.createElement('button');
    deleted_btn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleted_btn.classList.add('delete_button');

    var completed_btn = document.createElement('button');
    completed_btn.innerHTML = '<i class="far fa-check-square"></i>';
    completed_btn.classList.add('complete');

   
   

    //appending delete and completed elements to list_div

    /* PROBLEM 2 -SOLVED  ( just add flex )
        i  appended delete and complete buttons to list_div( which div that contains 
            li tag, delete button, mark button
            they are not in same line
            )
    */
    list_div.appendChild(deleted_btn);
    list_div.appendChild(completed_btn);


    ul_list.appendChild(list_div);
    //clear input value
    todo_input.value = "";

}

function delete_list(e){
    var target = e.target;
    if(target.classList[0]==='delete_button'){
      //  target.parentElement.remove();
        var targetlist = target.parentElement;
        targetlist.classList.add('falling');
        addEventListener("transitionend", function(){
            target.parentElement.remove();
        });
    }
    if(target.classList[0]==='complete'){
        var parent_div = target.parentElement;
        parent_div.classList.toggle('completed_deco');
    }
}

function filterthelist(e){
 
    var todos = ul_list.childNodes;

    todos.forEach(function(childnodeitem){
        console.log(childnodeitem);
        console.log("inside");
            console.log(childnodeitem.classList.contains("completed_deco"));
        
    });
           
    
}

