function changedBG(color){
document.body.style.backgroundColor=color;
let txt =document.getElementById("chngcolor");
if(color=="#000000"){
    for(let elm of txt){
        elm.style.color="white";
    }
// actually there is no color vision because black color is not taken but if you choose other  color and color vision is occure than  we used this types of function. okkkkk
    }else{
        for(let elm of txt){
            elm.style.color="white";
        }
    }
   
}
