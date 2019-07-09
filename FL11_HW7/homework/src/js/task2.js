const defaultData = {
    attempts: 3,
    maxRandomNumber: 8,
    possiblePrize: 100,
    totalPrize: 0
};
let attempts = defaultData.attempts,
    maxRandomNumber = defaultData.maxRandomNumber,
    possiblePrize = defaultData.possiblePrize,
    totalPrize = defaultData.totalPrize,
    multiplier = 2,
    step = 4,
    attemptsStep = 1;

let startGame = confirm('Do you want to play a game?');

if (startGame === false) {
    alert('You did not become a billionaire, but can.')
} else {
    while (attempts >= 1) {
        let randomNumber = Math.floor(Math.random() * maxRandomNumber) + 1;
        let userNumber = +prompt(
            `Choose a roulette pocket number from 0 to ${maxRandomNumber}` +
            `\n Attempts left: ${attempts}` +
            `\n Total prize: ${totalPrize}$` +
            `\n Possible prize on current attempt: ${possiblePrize}$`
        );

        if (userNumber === randomNumber) {
            totalPrize += possiblePrize;
            let isContinue = confirm(
                `Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`
            );

            if (isContinue === false) {
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                let isAgain = confirm('Do you wants to play again?');

                if (isAgain === false) {
                    break
                } else {
                    attempts = defaultData.attempts;
                    maxRandomNumber = defaultData.maxRandomNumber;
                    possiblePrize = defaultData.possiblePrize;
                    totalPrize = defaultData.totalPrize;
                }
            } else {
                attempts = defaultData.attempts;
                maxRandomNumber += step;
                possiblePrize *= multiplier;
            }
        } else {
            attempts -= attemptsStep;
            possiblePrize = Math.floor(possiblePrize / multiplier);

            if (attempts === 0) {
                alert(`Thank you for a game. Your prize is: ${totalPrize}`);

                let isAgain = confirm('Do you want to play again?');
                if (isAgain === false) {
                    break
                } else {
                    attempts = defaultData.attempts;
                    maxRandomNumber = defaultData.maxRandomNumber;
                    possiblePrize = defaultData.possiblePrize;
                    totalPrize = defaultData.totalPrize;
                }
            }
        }
    }
}
