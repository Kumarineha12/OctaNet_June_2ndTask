document.querySelector('#btn').onclick = function(){
    if(document.querySelector('#statement input').value.length == 0){
        alert("Please First Enter Something")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#statement input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var lists = document.querySelectorAll(".delete");
        for(var i=0; i<lists.length; i++){
            lists[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#statement input").value = "";
    }
}