window.addEventListener("load", function ()
{
  let counter = 0; 

  function buttonclicked()
  {
    counter++; 
    let clickCounterElement = document.getElementById("clickcounter");
    clickCounterElement.innerHTML = "clicked " + counter + " times. "; 
  }

  let clickButtonElement =
    document.getElementById("clickbutton");

  clickButtonElement.addEventListener("click", buttonclicked);

  
});