var name = prompt("Write the TO DO task name")
var project = document.getElementById('name')
var project1 = document.getElementById('name1')
var project2 = document.getElementById('name2')
project.innerText = name
project1.innerText = name
project2.innerText = name





function add() {
    var toDo = document.getElementById('to-do')
    var list = document.getElementById('list')

    // create li element

    var li = document.createElement('li')// li created
    li.setAttribute('class', 'li')// li class created
    li.setAttribute('id','li')

    var subLi = document.createElement('h4')
    subLi.setAttribute("class","subli")
    subLi.setAttribute("maxlenght","15")

    var liText = document.createTextNode(toDo.value)
    subLi.appendChild(liText)
    li.appendChild(subLi)
    toDo.value = ""; 
    console.log(list)

    
    // fa icon
   
    var deletfa = document.createElement('i')
    deletfa.setAttribute("class","fa text-white  fa-trash-o")

    // create delete btn
    var deletebtn = document.createElement('button')
    deletebtn.appendChild(deletfa)
    deletebtn.setAttribute('class','btn2')
    deletebtn.setAttribute('onclick','deleteBtn(this)')

    li.appendChild(deletebtn)


    // console.log(icon)


    // FA ICON
    var icon = document.createElement('i')
    icon.setAttribute("class","fa text-white  fa-pencil")

    // create edit button
    var editBtn = document.createElement('button')
    editBtn.appendChild(icon)
    editBtn.setAttribute("onclick","editButn(this)")
    editBtn.setAttribute("class"," btn1 ")

    li.appendChild(editBtn)

    list.appendChild(li)

}

function deleteAll(){
    list.innerHTML = ""
    // console.log(list)
}

function deleteBtn(e){
    // document.getElementById('li').remove()
    e.parentNode.remove()
}

function editButn(f){
    
    var vali = f.parentNode.firstChild.firstChild.nodeValue
    // console.log(vali)
    var valp = prompt("write any task",vali)
    f.parentNode.firstChild.firstChild.nodeValue = valp



}