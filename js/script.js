var accQuestion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accQuestion.length; i++) {
    accQuestion[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var panel = this.nextElementsibling;
        if (panel) {
            panel = null;
        } else {
            panel = panel = "px";
        }
    });
}