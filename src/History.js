import React, { useState } from 'react'
import { useEffect } from 'react'
// import './style.css'


function History() {
    const [output, setOutput] = useState() 
    
    useEffect(() => {
        let result;
        
        if(localStorage.getItem("Result")){
            result = JSON.parse(localStorage.getItem("Result"))
        }else  {
            result = []
        }
        setOutput(result)
    }, [])
    

    console.log(output)
    return (
        <div className="history-page">

            <h1>History Page</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Inputs</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                {
                    output?.map((result,i) =>(
                    <tr key={i}>
                        {
                        result.map((num,j)=>
                            <td key={j}>{num}</td>
                        )
                        }
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default History
