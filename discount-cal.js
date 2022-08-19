document.getElementById('apply').addEventListener('click', function() {
    let userPrice = document.getElementById('input-user-price');
    let userPriceString = userPrice.value;
    let userPriceNumber = parseFloat(userPriceString);
    userPrice.value = ''; 

    let setUserPrice = document.getElementById('set-user-price');

    setUserPrice.innerText = userPriceNumber;
    let discountPriceElement = document.getElementById('discount-price');
    let cuponCode = document.getElementById('coupon-code');
    let cuponCodeString = cuponCode.value;
    let discount = 30;
    cuponCode.value = '';
    if (isNaN(userPriceNumber)) {
        if (isNaN(userPriceNumber)) {
            alert('Enter Valid Number');
            setUserPrice.innerText = '00';
        }
        else if (cuponCodeString !== 'DOM') {
            alert('Enter Valid Cupon Code');
            setUserPrice.innerText = '00';
        }
    }

    if(cuponCodeString.length > 0) {
        if (cuponCodeString === 'DOM') {
            let priceAfterDiscount = userPriceNumber - (userPriceNumber * discount / 100);
            discountPriceElement.innerText = priceAfterDiscount;
            let setUserPriceValue = setUserPrice.innerText;
            setUserPrice.innerHTML = `<del>${setUserPriceValue}</del>`;
           
            setUserPrice.innerText = userPriceNumber;
        }
        else if (cuponCodeString !== 'DOM') {
            alert('Enter Valid Cupon Code');
            setUserPrice.innerText = '00';
        }
        else{
            alert('Enter Valid Cupon Code');
        }
    }
    
});
