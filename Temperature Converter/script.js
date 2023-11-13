const celsius=document.querySelector("#celsius");
fahrenheit=document.querySelector("#fahrenheit");



window.addEventListener("load",()=>celsius.focus());

celsius.addEventListener("input",()=>{
    fahrenheit.value=((celsius.value*9)/5+32).toFixed(3);
    if(!celsius.value) fahrenheit.value="";
});
fahrenheit.addEventListener("input",()=>{
    celsius.value=(((fahrenheit.value-32)*5)/9).toFixed(3);
    if(!fahrenheit.value) celsius.value="";
});