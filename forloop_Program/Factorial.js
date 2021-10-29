function factorial(n)
    {
        var res = 1, i;
        for (i = 2; i <= n; i++)
            res *= i;
        return res;
    }
 
    // Driver method
     
        var num = 5;
        console.log("Factorial of " + num + " is " +factorial(num));