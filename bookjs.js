/*
*/
let flower = ["images/rose.png","images/krokus.png","images/carnation.png","images/lilie.png","images/pansy.png","images/marigold.png","images/edelweiss.png","images/lupine.png","images/snowdrop.png","images/orchid.png","images/lotus.png","images/bluepoppy.png","images/bluebell.png","images/redpoppy.png"];
let quotes = ["Lieben Sie jemanden?", "Wieviele Freunde haben Sie zurzeit?","Wem wären Sie lieber nie begegnet?","Wieviel Geld möchten Sie besitzen?","Wenn Sie alles Lachen abziehen, das auf Kosten von Dritten geht: finden Sie, dass die oft Humor haben?","Was versetzt Sie eher in Eifersucht: dass die Person, die Sie lieben, eine andere Person küsst, umarmt usw. oder dass es dieser andern Person gelingt, Humor zu befreien, den sie an Ihrem Partner nicht kennen?","Gesetzt den Fall, Sie wären in der Heimat verhasst: könnten Sie deswegen bestreiten, dass es Ihre Heimat ist?","Was fehlt Ihnen zum Glück?","Welche Hoffnung haben Sie aufgegeben?","Was macht Sie an Kindern traurig? a. Ähnlichkeiten mit der Mutter? b. Ähnlichkeiten mit Ihnen?","Hoffen Sie auf ein Jenseits?", "Möchten Sie wissen wie streben ist?","Wofür sind Sie dankbar?","Haben Sie schon einmal gemeint, dass Sie sterben, und was ist Ihnen dabei eingefallen?"];
let wireframes = ["vektor/vrose.png", "vektor/vkrokus.png","vektor/vcarnation.png","vektor/vlilie.png","vektor/vpansy.png","vektor/vmarigold.png","vektor/vedelweiss.png","vektor/vlupine.png","vektor/vsnowdrop.png","vektor/vorchid.png","vektor/vlotus.png","vektor/vbluepoppy.png","vektor/vbluebell.png","vektor/vredpoppy.png"];

let state = 0;
 // hallo
 document.querySelector('.container').addEventListener("DOMMouseScroll",function(e) {
    // console.log(e.screenX, window.innerWidth);
    //console.log(, e.screenX)
    //if (e.pageX < window.innerWidth * 0.5) {
        //console.log("links")
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        delta *= -1;
        let style_left = window.getComputedStyle(document.getElementById('image_left'));
        let matrix_left = new WebKitCSSMatrix(style_left.transform);
        let currentX_left = matrix_left.m41;
        let horizontalPosition_left = currentX_left - (delta*40);

        let style_right = window.getComputedStyle(document.getElementById('image_right'));
        let matrix_right= new WebKitCSSMatrix(style_right.transform);
        let currentX_right = matrix_right.m41;
        let horizontalPosition_right = currentX_right - (delta*40);

        document.getElementById('image_left').style.transform = "translateX("+horizontalPosition_left+"px)";
        document.getElementById('image_right').style.transform = "translateX("+horizontalPosition_right+"px)"; 

        document.getElementById('image_left_wireframe').style.transform = "translateX("+horizontalPosition_left+"px)";
        document.getElementById('image_right_wireframe').style.transform = "translateX("+horizontalPosition_right+"px)"; 

        if (horizontalPosition_right > window.innerWidth * 0.15) {
            // zeige den button an
            document.querySelector(".mybutton").style.opacity = 1;
        }
        else {
            document.querySelector(".mybutton").style.opacity = 0;
        }


        if (Math.abs(horizontalPosition_right) > window.innerWidth * 0.5) {
            state += 1;
            // 
            document.getElementById('image_left').src = flower[state]
            document.getElementById('image_right').src = flower[state]
            
            document.getElementById('image_left_wireframe').src = wireframes[state]
            document.getElementById('image_right_wireframe').src = wireframes[state]

            document.getElementById('image_left').style.transform = "translateX(50vw)";
            document.getElementById('image_right').style.transform = "translateX(50vw)"; 
    
            console.log("lade das nächste bild rein....")
            console.log(quotes[state])
        }

        document.querySelector('.mybutton').onmouseover = function(){
            document.querySelectorAll('.container_wireframe, .frage').forEach(function(element){
            element.classList.add("show")
          })
          const audio = document.querySelector(".whisper");
          audio.play();
          audio.currentTime = 0;
          //console.log(quotes[state])
          document.querySelector(".frage").innerHTML = quotes[state];
          console.log("vektorbild in")
        }

        document.querySelector('.mybutton').onmouseout = function(){
          document.querySelectorAll('.container_wireframe, .frage').forEach(function(element){
            element.classList.remove("show")
          })
          const audio = document.querySelector(".whisper");
          audio.pause();
          console.log("vektorbild out")
        }
        //console.log(quotes[state])
});

