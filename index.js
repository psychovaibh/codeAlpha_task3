let textarea = document.querySelector("textarea"),
filname = document.querySelector(".file-name input"),
selectmenu = document.querySelector(".file-type select"),
savebtn = document.querySelector(".save-btn")


savebtn.addEventListener("click",()=>{
    console.log(textarea.value);
    const blob = new Blob([textarea.value], {type: selectmenu.value});
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = filname.value;
    link.href = url;
    link.click();
})