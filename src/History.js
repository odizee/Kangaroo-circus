import { useState } from 'react'
import { useEffect } from 'react'

function History() {
    const [output, setOutput] = useState() 
    
    useEffect(() => {
        
        let result = JSON.parse(localStorage.getItem("Result"))

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
                    <tr>
                        <td>2345</td>
                        <td>NO</td>
                    </tr>
                    <tr>
                        <td>9784</td>
                        <td>NO</td>
                    </tr>
                    <tr>
                        <td>9784</td>
                        <td>NO</td>
                    </tr>
                {
                    output?.slice(0).reverse().map((result,i) =>(
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
