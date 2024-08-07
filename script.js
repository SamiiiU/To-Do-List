

let LeftBox = document.getElementById('left')
let MidBox = document.getElementById('middle')
let RightBox = document.getElementById('right')


let data = [
    {id : 1 , task : "Workout "},
    {id : 2 , task : "Sleep"}
]



function Read() {
    let box = document.querySelector('.box')
    let code = ""
    data.map(d => (
        code += ` <div class="list" draggable="true">
                <input class="input" value="${d.task}"></input>
                </div>`   
    ));

    box.innerHTML = code

    let lists = document.getElementsByClassName('list')
    console.log(lists)
    for (let list of lists){
        list.addEventListener("dragstart", function (e) {
        let selected = e.target;
        console.log("this is " ,selected);

        

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
            selected = null
            
        })

        MidBox.addEventListener("drop" , function (e) {
            MidBox.appendChild(selected);
            selected = null
        })

        LeftBox.addEventListener("drop" , function (e) {
            LeftBox.appendChild(selected);
            selected = null
        })
    });
}
}




