let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const comp = document.querySelector("#comp");
const you = document.querySelector("#you");
const opp = document.querySelector("#opp");


const msg = document.querySelector(".msg");

const Drawgame = (CompChoice) => {
    console.log("Game was a draw");
    msg.innerText="Game-Draw";
    msg.style.color=" black";
    msg.style.backgroundColor=" rgb(245, 244, 244)";
    opp.innerText="same";



};

const Compchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randId = Math.floor(Math.random() * 3);
    return options[randId];
}

const showwinner = (userwin,CompChoice,userchoice) => {
    if (userwin) {
        userScore++;
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
        you.innerText=userScore;
        opp.innerText=CompChoice;

        
        console.log("You win! ");
    } else {
        compScore++;
        console.log("You lose!");
        msg.innerText="Computer win!";
        msg.style.backgroundColor="red";
        comp.innerText=compScore;
        opp.innerText=CompChoice;



    }
}

const Playgame = (userchoice) => {
    console.log("Your choice: ", userchoice);
    const CompChoice = Compchoice();
    console.log("Computer's choice: ", CompChoice);

    let userwin; // Initialize userwin at the start of the function

    if (userchoice === CompChoice) {
        Drawgame();
        return; // Exit the function early if it's a draw
    } else {
        if (userchoice === "rock") {
            userwin = CompChoice !== "paper";
        } else if (userchoice === "paper") {
            userwin = CompChoice !== "scissors";
        } else { // userchoice === "scissors"
            userwin = CompChoice !== "rock";
        }
    }

    showwinner(userwin,CompChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        Playgame(userchoice);
    });
});
