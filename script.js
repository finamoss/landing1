quote = document.querySelector("#quotebutton");
ask = document.querySelector("#contactarepbutton");
reason = document.querySelector("#contactwhy");
submit = document.querySelector("#submitbutton");

ask.addEventListener("click",()=>{reason.selectedIndex=1;});

quote.addEventListener("click",()=>{reason.selectedIndex=0;});

submit.addEventListener("mousedown",()=>{
    submit.style.boxShadow = "0px 0px 0px";
    submit.style.top = "3px";
    submit.style.left = "5px";
});
submit.addEventListener("mouseup",()=>{
    submit.style.boxShadow = "3px 3px 2px lightslategray";
    submit.style.top = "0px";
    submit.style.left = "0px";
});

ask.addEventListener("mousedown",()=>{
    ask.style.boxShadow = "0px 0px 0px";
    ask.style.top = "3px";
    ask.style.left = "5px";
});
ask.addEventListener("mouseup",()=>{
    ask.style.boxShadow = "3px 3px 2px lightslategray";
    ask.style.top = "0px";
    ask.style.left = "0px";
});
quote.addEventListener("mousedown",()=>{
    quote.style.boxShadow = "0px 0px 0px";
    quote.style.top = "3px";
    quote.style.left = "5px";
});
quote.addEventListener("mouseup",()=>{
    quote.style.boxShadow = "3px 3px 2px lightslategray";
    quote.style.top = "0px";
    quote.style.left = "0px";
});