import { useEffect } from "react";
import useState from 'react-usestateref'
import './style.css'

function Home() {

const [result, setResult, resultRef] = useState("Input numbers below")
const [numbers, setNumbers, numbersRef] = useState("");
const [history, setHistory, historyRef] = useState(JSON.parse(localStorage.getItem("Result")) || []);
let errorsObj = {input: ''}
const [formValid, setFormValid] = useState(errorsObj)

function kangaroo(x1, v1, x2, v2) {
    
    let result

    if(x2 > x1 && v2 > v1) return result = "NO";
    if(x2 < x1 && v2 < v1) return result = "NO";
    if((x1 - x2)/(v2 - v1) % 1 === 0) return result = "YES";
    return result = "NO";
    
    
}

  const output = [...numbers] 
  let x1 = parseInt(output[0])
  let v1 = parseInt(output[1])
  let x2 = parseInt(output[2])
  let v2 = parseInt(output[3])

  async function handleSubmit (event) {
    event.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj }
    if (numbers === "") {
        errorObj.input = "Input is required"
        error = true
    } else if (numbers.length > 4 || numbers.length < 4) {
        errorObj.input = "enter only four numbers"
        error = true
    }

    setFormValid(errorObj)

    if (!error) {
        setResult(kangaroo(x1, v1, x2, v2))

        let added = [[output, resultRef.current]].concat(historyRef.current)
        await setHistory(added)
        
        
        localStorage.setItem('Result', JSON.stringify(historyRef.current));
        console.log(resultRef.current)
    }

  }

  console.log(numbers.length)

  const [outputs, setOutputs] = useState() 
    
    useEffect(() => {
        setOutputs(results)
    }, [])
    
    let results;

    if(localStorage.getItem("Result")){
        results = JSON.parse(localStorage.getItem("Result"))
    }else  {
        results = []
    }

  return (
    <div className="home">
      <div className="result">
        <h3>
            Output: 
        <span> {result}</span>
        </h3>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
            <label>Enter Only 4 Numbers</label>
            <input
            type="number" 
            value={numbers}
            placeholder="Enter Numbers"
            onChange={(e) => setNumbers(e.target.value)}
            className="input-box"
            />
            <input type="submit" className="button" />
            {formValid.input && <div>{formValid.input}</div>}
        </form>
      </div>
       
       <button className="button history-btn"><a href="/history">Go to History</a></button>
    </div>
  );
}

export default Home;
