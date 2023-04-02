let hoverElement = document.querySelector(".iconView");
let listener = document.querySelector(".equilibrium");

listener.addEventListener("mouseover", function () {hoverElement.style.display="block"});

listener.addEventListener("mouseout", function () {hoverElement.style.display="none"});


// pytanie do bardziej doświadczonego programisty to dlaczego nie udało mi się tego zrobić tylko przy użyciu css