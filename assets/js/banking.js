// jshint esversion:6


(function init() {
    var service = prompt(
        "Dear Customer, what do you want to do today? \n 1.Deposit \n 2.Withdraw \n  3.Balance \n  4.Transfer"
    );



    var balance = 40;


    switch (service) {
        case "1":
            deposit(balance);
            break;

        case "2":
            withdraw(balance);
            break;



        case "3":
            checkBalance(balance);
            break;


        case "4":
            transfer(balance);
            break;

    }
})();

// ======================================== Deposit ====================================================

function deposit(balance) {
    const amount = prompt("Enter amount you want to deposit: ");
    balance = balance + amount;
    console.log("You have deposited" + amount + "ETB. \n Your current balance is: " + balance + " ETB");




}

// ========================================= Withdrawal =====================================================

function withdraw(balance) {
    if (balance <= 50) {
        console.log("We are sorry your current balance is insufficient for a withdrawal");

    } else {
        const amount = prompt("Enter amount you want to withdraw: ");
        if (amount > balance - 50) {
            console.log("We are sorry your current balance is insufficient for a withdrawal of such amount");
        } else {
            balance = balance - amount;
            console.log("You have withdrawn " + amount + "ETB. \n Your current balance is: " + balance + " ETB");
        }

    }


}


// ======================================== Balance ============================================================

function checkBalance(balance) {

    console.log(balance + " ETB");


}

// ==============================================================================================================