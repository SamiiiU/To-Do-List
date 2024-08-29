

let LeftBox = document.getElementById('left')
let MidBox = document.getElementById('middle')
let RightBox = document.getElementById('right')


let data = [

    
]

let dataMid = [

]

let dataRight = [

]



function Read() {
    
    let box = document.querySelector('.box')
    let code = ""
    data.map(d => (
        code += `<div class="list" draggable="true" id="${d.id}" data-task="${d.task}"><h1 >${d.task}</h1>
        <div class= "binEdit">
        <i class="fa-regular fa-trash-can text-red-400 trash cursor-pointer hover:text-red-600 "  id="${d.id}"></i>
        <i class="fa-regular fa-pen-to-square edit  cursor-pointer hidden " id="${d.id}"></i>
        </div>
        </div>`   
    ));


    box.innerHTML = code
    

    let lists = document.getElementsByClassName('list')
    console.log(lists)
    for (let list of lists){
        let selected = null
        list.addEventListener("dragstart", function (e) {
            selected = e.target;
        
            list.addEventListener("touchstart", function (e) {
                selected = e.target;
            
                // Add a visual indicator that the item is being dragged
                selected.style.backgroundColor = "lightblue";
            
                console.log("Touch start triggered");
            });
    
        RightBox.addEventListener("dragover" , function (e) {
            e.preventDefault();
            
        })

        MidBox.addEventListener("dragover" , function (e) {
            e.preventDefault();
            
        })

        LeftBox.addEventListener("dragover" , function (e) {
            e.preventDefault();
            
        })

        RightBox.addEventListener("drop" , function (e) {
            RightBox.appendChild(selected);
            let selectedId = selected.getAttribute("id");
            let selectedTask = selected.getAttribute("data-task")
            let newObj = {id : +selectedId  , task : selectedTask}
            dataRight.push(newObj)


            data = data.filter(dataItem => {
                
                return dataItem.id !== +selectedId; // Return true if the ids do not match
            });


            selected = null
    
        })

        MidBox.addEventListener("drop" , function (e) {
            MidBox.appendChild(selected);
            let selectedId = selected.getAttribute("id");
            let selectedTask = selected.getAttribute("data-task")
            let newObj = {id : +selectedId  , task : selectedTask}
            dataMid.push(newObj)


            data = data.filter(dataItem => {
                return dataItem.id !== +selectedId; // Return true if the ids do not match
            });

            
            selected = null
        })

        LeftBox.addEventListener("drop" , function (e) {
            console.log(selected)

            LeftBox.appendChild(selected);
            let selectedId = selected.getAttribute("id");
            let selectedTask = selected.getAttribute("data-task")
            let newObj = {id : +selectedId  , task : selectedTask}
            
            data.push(newObj)

            selected = null
        })
    });
    
    }
    trashSelect()
    editselect()

}


let Addbtn = document.querySelector('#addBtn')
let Savebtn = document.querySelector('#saveBtn')
let AddInput = document.querySelector('.add')


    

function trashSelect() {
    setTimeout(() => {
        let trashes = document.querySelectorAll('.trash')
    
        trashes.forEach(trash => {
            trash.addEventListener("click" , () => {
                let trashId = trash.getAttribute("id");
                
                data = data.filter(dataitem => {
                    
                    return dataitem.id !== +trashId; 
                })
            
                Read()
            })
        })
    } , 100)
    
}




function add (){
    
    newItem = {
        id : data.length + dataMid.length + dataRight.length +  1,
        task : AddInput.value,
    }
    
    if(AddInput.value != ""){
        data.push(newItem);
        AddInput.value = ""
        
        setTimeout(() =>{
            console.log(data , newItem)
            Read()
        } , 200)
    }
}

let editId = "";
Savebtn.style.display = 'none';

function editselect(){
    setTimeout(() => {
        let edits = document.querySelectorAll('.edit')
    
        edits.forEach(edit => {
            edit.addEventListener("click" , () => {
                Savebtn.style.display = 'inline';
                editId = +edit.getAttribute("id");
                AddInput.value = data[editId-1].task

                console.log(editId , "huu" , AddInput.value)
            
                Read()
            })
        })
    } , 100)

}

function Save(){
    let Edited = AddInput.value;

    data[editId-1].task = Edited

    console.log("Edited hai bhai",data)

    AddInput.value = "";

    Savebtn.style.display = 'none';
    Read()

}