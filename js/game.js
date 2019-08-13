var game = () => {
    
    let mix = Math.floor(Math.random() * 6 + 1);
    let output = "";
    let mix1 = Math.floor(Math.random() * 6) + 1;
    let output1 = "";
    let mix2 = Math.floor(Math.random() * 6) + 1;
    let output2 = "";
    let checkbox = document.getElementsByName('checkbox');
    let user = "";
    for (let i = 0; i < checkbox.length; i++ ) {
        if (checkbox[i].checked) {
            if (checkbox[i].value == mix || checkbox[i].value == mix1 || checkbox[i].value == mix2 ){
                user += 1000 + "reil";
            }else {
                user = "lose!";
            }
        }
    }
    switch (mix) {
        case 1:
            output = "<img src='../images/1.PNG' style='width:100px;'>";
            break;
        case 2:
            output = "<img src='../images/2.PNG' style='width:100px;'>"
            break;
        case 3:
            output = "<img src='../images/3.PNG' style='width:100px;'>";
            break;
        case 4:
            output = "<img src='../images/4.PNG' style='width:100px;'>";
            break;
        case 5:
            output = "<img src='../images/5.PNG' style='width:100px;'>";
            break;
        case 6:
            output = "<img src='../images/6.PNG' style='width:100px;'>";
            break;
    }
    
    switch (mix1) {
        case 1:
            output1 = "<img src='../images/1.PNG' style='width:100px;'>"
            break;
        case 2:
            output1 = "<img src='../images/2.PNG' style='width:100px;'>";
            break;
        case 3:
            output1 = "<img src='../images/3.PNG' style='width:100px;'>";
            break;

        case 4:
            output1 = "<img src='../images/4.PNG' style='width:100px;'>";
            break;
        case 5:
            output1 = "<img src='../images/5.PNG' style='width:100px;'>";
            break;

        case 6:
            output1 = "<img src='../images/6.PNG' style='width:100px;'>";
            break;

    }
    
    switch (mix2) {
        case 1:
            output2 = "<img src='../images/1.PNG' style='width:100px;'>";
            break;
        case 2:
            output2 = "<img src='../images/2.PNG' style='width:100px;'>"
            break;
        case 3:
            output2 = "<img src='../images/3.PNG' style='width:100px;'>";
            break;

        case 4:
            output2 = "<img src='../images/4.PNG' style='width:100px;'>";
            break;

        case 5:
            output2 = "<img src='../images/5.PNG' style='width:100px;'>";
            break;
        case 6:
            output2 = "<img src='../images/6.PNG' style='width:100px;'>";
            break;
    }

    let result = document.getElementById('result');
    setTimeout(() => {
        result.innerHTML = output + output1 + output2 + " " +"You get" + " " + user ;
    }, 1000);

}
var clear = () => {
    let result = document.getElementById('result');
    result.innerHTML = "";
}
var clearGame = document.getElementById('clear');
clearGame.addEventListener('click', clear);

var playGame = document.getElementById('play');
playGame.addEventListener('click', game);