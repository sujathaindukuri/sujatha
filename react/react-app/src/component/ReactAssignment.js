import React, {useEffect, useState} from 'react';
function CalculateBalance(props)
{
    const[budget,storeBudget] = useState("");
    const[expenses,storeExpenses] = useState("");
    const[calculation,setCalculation] = useState(0);
    useEffect( () => { setCalculation(() =>  budget - expenses);},[expenses]);

    


    return(
        <div>
            
            <br></br>
            <input type="label" for="budget" value="Budget"/>
            <input type="number" id="budget" name="budget"  onChange={(e) => storeBudget(e.target.value)}/><br>
            </br><br></br>
            <input type="label" for="budget" value="expense"/>
            <input type="number" id="expenses" name="expenses"  onChange={(e) => storeExpenses(e.target.value)}/><br></br><br></br>
            <input type="label" for="balance" value="Balance"/>
            <input type="number" id="balance" name="balance"  value={calculation} onChange={() => setCalculation()}/>
           
        </div>
    );
}
export default CalculateBalance;