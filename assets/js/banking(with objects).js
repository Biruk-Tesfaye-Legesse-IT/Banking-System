// jshint esversion:6


let person1 = {
    Name: "",
    Password: "",
    Account: "",
    Balance: ""



};

let person2 = {
    Name: "",
    Password: "",
    Account: "",
    Balance: ""

};

let person3 = {
    Name: "",
    Password: "",
    Account: "",
    Balance: ""

};

//Credentials and balance of person1
person1.Name = "USER1";
person1.Password = "password1";
person1.Account = "10001";
person1.Balance = 1000;

//Credentials and balance of person1
person2.Name = "USER2";
person2.Password = "password2";
person2.Account = "10002";
person2.Balance = 45;

//Credentials and balance of person1
person3.Name = "USER3";
person3.Password = "password3";
person3.Account = "10003";
person3.Balance = 500;











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

function transfer(balance) {
    var customers = [person1, person2, person3];
    var accounts = [person1.Account, person2.Account, person3.Account];
    if (balance <= 50) {
        console.log("We are sorry your current balance is insufficient for a withdrawal");

    } else {
        const amount = prompt("Enter amount you want to transfer: ");
        if (amount > balance - 50) {
            console.log("We are sorry your current balance is insufficient for a withdrawal of such amount");
        } else {
            const account = prompt("Enter the account number you want to transfer to: ");
            if (accounts.includes(account)) {

                var nameIndex = function(account) {
                    return accounts.indexOf(account);
                };

                index = nameIndex(account);



                var recipient = customers[index];

                console.log(recipient.Name);

                recipient.Balance = Number(recipient.Balance) + Number(amount);

                balance = balance - amount;



                let confirm = prompt("Press 1 to confirm or 0 to correct the transaction \n  Recipient: " + recipient.Name + "\n Amount: " + amount);

                switch (confirm) {
                    case "1":
                        console.log("You have transferred " + amount + " ETB to " + recipient.Name + "\n Your current balance is: " + balance + " ETB");
                        break;

                    case "0":
                        transfer();
                        break;

                    default:
                        break;
                }

            } else {


                console.log("Account number doesn't exist");
            }
        }


    }

}