 function isPalindrome(s) {
     let newNumber = s;
     if (typeof s === 'number') {
         newNumber = s.toString();
     }

     for (let i = 0; i < newNumber.length; i++) {
         if (newNumber.length < 3) {
             return false;
         }
         if (newNumber[i] == "-") {
             return false;
         }
         if (i != 0 && newNumber[i - 1] == newNumber[i + 1]) {
             return true;
         }


     }
 }
 console.log(isPalindrome(121));