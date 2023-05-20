let database = [{id:1,name:"john",age:"18",profession:"developer"},
                {id:2, name:"jack",age:"20", profession:"developer"},
                {id:3, name:"karen", age:"19",profession:"admin"}]
let temp = document.getElementById("insert");
function display(){
    for(let i=0;i<database.length;i++){
    let elements = document.createElement("div");
    elements.className = "insertedNames";
    elements.innerText = "ID: "+database[i].id + " Name: "+database[i].name  + " Profession: "+database[i].profession +" Age: "+ database[i].age;
    temp.append(elements)
    }
}

display();
let masterIndex = 4;
function updateDataBase(){
    let values = document.getElementsByTagName("input");
    let obj = {id:"",name:"",age:"",profession:""};
    obj.id = masterIndex++;
    obj.name = values[0].value;
    obj.profession = values[1].value;
    obj.age = values[2].value;
    database.push(obj);


        let elements = document.createElement("div");
        elements.className = "insertedNames";
        elements.innerText = "ID: "+masterIndex + " Name: "+obj.name  + " Profession: "+obj.profession +" Age: "+ obj.age;
        temp.append(elements);
    
    console.log(database);


}

let forSelect = document.getElementById("forProfession");
console.log(forSelect)
function filter(){
    let output = database.filter(function(element,index,database){
        return element.profession=="developer";
    })

    
    console.log(output);
}