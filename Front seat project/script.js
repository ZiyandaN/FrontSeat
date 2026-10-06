function myFunction()
        {
            let num1 = parseInt(document.getElementById('num1').value);
            let num2 = parseInt(document.getElementById('num2').value);
            let calculate = (document.getElementById('calculate').value);
            let result;


            if(calculate === 'subtract')
            {
                if(num1 < num2)
                {
                    document.getElementById('result').value ="Not enough money!";
                    return;
                }
                result = num1 - num2;
            }

              
                document.getElementById('result').value = result;

        }