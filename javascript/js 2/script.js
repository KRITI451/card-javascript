let x= document.getElementById("main");
var s="";

let y= [ "https://i.pinimg.com/736x/e4/9f/b5/e49fb55001f9b5e75a05a9d82cd6ca6b.jpg", "https://i.pinimg.com/736x/4b/4e/13/4b4e13e3d507c888efdf09ac28a86cfc.jpg",
    "https://i.pinimg.com/736x/28/58/ab/2858aba433e68417694d1c6721597c55.jpg", "https://i.pinimg.com/736x/1e/11/c8/1e11c88b04d5fc8dfb3a0b848f13e84c.jpg", "https://i.pinimg.com/736x/28/d1/f1/28d1f1f897db2ea2994e480e84bcaaaa.jpg"
    ]
    
for(let i=0; i<=44; i++){
    let z= Math.floor(Math.random()*5);
    s+=`<div class="card"><img src="${y[z]}"/>
     </div>`;
}
x.innerHTML=s;


