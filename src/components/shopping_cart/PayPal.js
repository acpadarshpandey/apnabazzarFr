import React, {useState, useEffect,  Fragment} from "react";
import { PayPalButton } from "react-paypal-button-v2";


const Paypal = (props) => {
 
    useEffect(() => {
        console.log(props.amount);
    })
    
    const handleSuccess = (data) => {
        props.callback(data);
        
    }
    const handleError = (data) => {
        props.callback(data);
    }

    
    return (
        <PayPalButton
            amount={props.amount}
            onSuccess={() => handleSuccess(true)}
            onError={() => handleError(false)}
            options={{
                clientId: "ASEYahn6OkINKDMa-5LLHGo0ZGARznV0Spl-AGWX4dvZBK3jYjaWpPPmHr7AlEEK2kmvaQi8NocrBwlY"
            }}
        />
    )
}



export default Paypal;



















