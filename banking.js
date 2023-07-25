document.getElementById('deposit-button').addEventListener('click',function(){
   
   //Input deposit amount and update, show  it in Deposit Box

    const depositInput = document.getElementById('deposit-input');
    const depositInputText= depositInput.value;
    const depositAmount = parseFloat(depositInputText);

    const totalDeposit = document.getElementById('deposit-total');
    const ShowtotalDeposit = totalDeposit.innerText;
    const NewTotalDeposit = parseFloat( ShowtotalDeposit);
    
    totalDeposit.innerText = depositAmount + NewTotalDeposit;
     
    //clear the input field
    depositInput.value = '';


    //Updating total balance
    const balanceField = document.getElementById('balance-total');
    const balancefieldTxt = balanceField.innerText;
    const prevBalance = parseFloat(balancefieldTxt);

    const UpdatedBalance = prevBalance + depositAmount;
    
    balanceField.innerText = UpdatedBalance;

    //Withdrawing money
    document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-input');
    const withdrawFieldTxt = withdrawField.value;
    const WithdrawAmount = parseFloat(withdrawFieldTxt);

    //update withdrow total
    const withdrawTotal =  document.getElementById('withdraw-total');
    const prevWithdrawTxt = withdrawTotal.innerText;
    const prevWithdrawTotal = parseFloat(prevWithdrawTxt);
    withdrawTotal.innerText = prevWithdrawTotal + WithdrawAmount;
    
    const balanceTotal = document.getElementById('balance-total');

    const bltotaltxt = balanceTotal.innerText;
    const preBalance = parseFloat(bltotaltxt);
    balanceTotal.innerText = preBalance - WithdrawAmount;

    withdrawField.value = '';

    })

})
