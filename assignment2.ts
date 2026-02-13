function bankEvaluateLoanCreteria(): void  {
    let customerName = "John Doe";
    let creditScore = 720;
    let income = 55000.0;
    let isEmployed = true;
    let debtToIncomeRatio = 35.0;

    if (creditScore >= 750) {
        console.log("Loan is automatically Approved for " + customerName);
    }
    else if (creditScore > 650 && creditScore < 750) {
        if (income >= 50000) {
            if (isEmployed) {
                if (debtToIncomeRatio < 40) {
                    console.log("Loan is Approved for " + customerName);
                }
                else {
                    console.log("Loan is Denied for " + customerName + " due to DTI ratio greater than 40%.");
                }
            }
        }
    }

    else {
        console.log("Loan is Denied for " + customerName + " due to credit score less than 650.");
    }
}


bankEvaluateLoanCreteria();



