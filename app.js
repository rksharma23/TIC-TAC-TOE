let boxes = document.querySelectorAll(".boxes");
let turnX = true;
let result = document.querySelector("#winner");

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnX)
        {
            box.innerText = "X";
            turnX = false;
        }
        else
        {
            box.innerHTML = "0";
            turnX = true;
        }
        box.disabled = true;
        checkForWin();
    });
});

const showWinner = (value1) => {
    result.innerText = `Winner is ${value1}`;
    result.classList.remove("hide");
};

const checkForWin = ()=>{
    for(let pattern of winningPatterns)
    {
        // console.log(pattern[0], pattern[1], pattern[2]);
        let value1 = boxes[pattern[0]].innerText;
        let value2 = boxes[pattern[1]].innerText;
        let value3 = boxes[pattern[2]].innerText;
        if(value1 != "" && value2 != "" && value3 != "")
        {
            if(value1 === value2 && value2 === value3)
            {
                showWinner(value1);
                break;
            }
        }
    }
};