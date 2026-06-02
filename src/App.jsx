import { useState } from "react";
import "./App.css";

function App() {
  const [addIncomeCard, setAddIncomeCard] = useState(false);

  const [incomeType, setIncomeType] = useState("salary");

  const [incomeDate, setIncomeDate] = useState("");

  const [incomeAmount, setIncomeAmount] = useState("");

  const [incomeNotes, setIncomeNotes] = useState("");

  const [incomeInputSummary, setIncomeInputSummary] = useState([]);

  return (
    <section>
      <h1>My budget</h1>
      {/*drop down to key in details*/}
      <div className="income-expense-btn-container">
        <div>
          <button onClick={() => setAddIncomeCard(!addIncomeCard)}>
            Add income
          </button>
        </div>
        <div>
          <button>Add expense</button>
        </div>
      </div>
      {addIncomeCard && (
        <form>
          <div className="income-input">
            <h4>Income</h4>
            <div className="income-fields">
              <div>
                <label>Income type: </label>
                <select value={incomeType} onChange={(e) => setIncomeType(e.target.value)}>
                  <option value="salary">Salary</option>
                  <option value="dividend">Dividend</option>
                </select>
              </div>
              <br />
              <div>
                <label>Date: </label>
                <input
                  type="date"
                  value={incomeDate}
                  onChange={(e) => setIncomeDate(e.target.value)}
                ></input>
              </div>
              <br />
              <label>Amount: </label>
              <input
                placeholder="Add amount here.."
                type="number"
                step="0.01"
                min="0.00"
                value={incomeAmount}
                onChange={(e) => setIncomeAmount(e.target.value)}
              ></input>
              <br />
              <br />
              <label>Remarks: </label>
              <div className="editor-container">
                <textarea
                  className="remark-editor"
                  placeholder="Add text..."
                  value={incomeNotes}
                  onChange={(e) => setIncomeNotes(e.target.value)}
                ></textarea>
              </div>
              <button onClick={(e) => e.preventDefault(), setIncomeInputSummary([...incomeInputSummary, type=incomeType.item, date=incomeDate.item, amount=incomeAmount.item, notes=incomeNotes.item])}>Save</button>
            </div>
          </div>
        </form>
      )}
      {/*Transactions*/}
      <h2>My Transactions</h2>
    </section>
  );
}

export default App;
