const starsel = document.querySelectorAll(".fas");
const emojiel = document.querySelectorAll(".far");
const colors = ["red","orange","lightblue","blue","green"];

updaterating(0);

starsel.forEach((starsel,index)=>{
    starsel.addEventListener("click", ()=>{
        updaterating(index);
    });
});

function updaterating(index){
    starsel.forEach((starsel,idx)=>{
        if(idx < index + 1){
            starsel.classList.add("active");
        }else{
            starsel.classList.remove("active");
        }
    });

    emojiel.forEach(emojiel=>{
        emojiel.style.transform = `translateX(-${index * 50}px)`;
        emojiel.style.color = colors[index];
    });
}
