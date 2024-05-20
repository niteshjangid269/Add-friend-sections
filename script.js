var arr=[
    {name: "Nitesh Jangid",img: "https://images.unsplash.com/photo-1519764622345-23439dd774f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",passion: "Software Engineer",status: "Strangers"},
    {name: "Sonu Jangid",img: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",passion: "Front-End Intern",status: "Strangers"},
    {name: "Harish Jangid",img: "https://images.unsplash.com/photo-1551022372-0bdac482b9d6?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",passion: "Photographer",status: "Strangers"},
    {name: "Krishan Jangid",img: "https://plus.unsplash.com/premium_photo-1677231559666-53bed9be43ba?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",passion: "Software Engineer",status: "Strangers"},
    {name: "Govind Jangid",img: "https://images.unsplash.com/photo-1546512565-39d4dc75e556?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",passion: "Finance Operations",status: "Strangers"},
];
function print(){
    var clutter="";
arr.forEach(function(val,index){
    clutter+= `<div id="card">
    <img src="${val.img}">
    <h3>${val.name}</h3>
    <h6>${val.passion}</h6>
    <h5 id=${val.status}>${val.status}</h5>
    <button class=${val.status==="Strangers"? "Blue" : "Red"} id=${index}>${val.status=="Strangers"? "Add Friend" : "Remove Friend" }</button>
</div>`
});
document.querySelector("#main").innerHTML=clutter;
}
print();
document.querySelector("#main").addEventListener("click", function(details){
    arr[details.target.id].status="RequestSent";
    print();
});