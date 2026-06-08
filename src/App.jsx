import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [addIncomeCard, setAddIncomeCard] = useState(false);

  const [incomeType, setIncomeType] = useState("-- --");

  const [incomeDate, setIncomeDate] = useState("");

  const [incomeAmount, setIncomeAmount] = useState("");

  const [incomeNotes, setIncomeNotes] = useState("");

  {
    /*persistance state management at local storage*/
  }
  const [incomeInputSummary, setIncomeInputSummary] = useState(() => {
    const income = localStorage.getItem("incomeInput");
    return income ? JSON.parse(income) : [];
  });

  {
    /*write in local storage using useEffect react hook*/
  }
  useEffect(() => {
    localStorage.setItem("incomeInput", JSON.stringify(incomeInputSummary));
  }, [incomeInputSummary]);

  const [addExpenseCard, setAddExpenseCard] = useState(false);

  const [expenseType, setExpenseType] = useState("-- --");

  const [expenseDate, setExpenseDate] = useState("");

  const [expenseAmount, setExpenseAmount] = useState("");

  const [expenseNotes, setExpenseNotes] = useState("");

  const [expenseInputSummary, setExpneseInputSummary] = useState(() => {
    const expense = localStorage.getItem("expenseInput");
    return expense ? JSON.parse(expense) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenseInput", JSON.stringify(expenseInputSummary));
  }, [expenseInputSummary]);

  {
    /*search input state management*/
  }
  const [searchInput, setSearchInput] = useState("");

  {
    /*search filter event handler. First combine income and expenses together*/
  }
  const allTransactions = [...incomeInputSummary, ...expenseInputSummary];

  const searchFilter = allTransactions.filter((item) => {
    const filter = searchInput.trim().toLowerCase();
    return (
      item.type.toLowerCase().includes(filter) ||
      item.date.toLowerCase().includes(filter) ||
      item.remark.toLowerCase().includes(filter)
    );
  });

  {
    /*filter by selection*/
  }
  const [filterBy, setFilterBy] = useState("Show All");

  const filteredList = searchFilter.filter((item) => {
    if (filterBy === "income") {
      return item.type === "salary" || item.type === "dividend";
    }
    if (filterBy === "expense") {
      return item.type !== "salary" && item.type !== "dividend";
    }
    return true;
  });

  {
    /**Delete event handler */
  }
  const deleteEntry = (indexToDelete) => {
    const updatedList = allTransactions.filter((item, currentIndex) => {
      return currentIndex !== indexToDelete;
    });
  };

  return (
    <section>
      <h1>My budget</h1>
      {/*drop down to key in details*/}
      <div className="income-expense-btn-container">
        <div>
          <button
            onClick={() => {
              setAddIncomeCard(!addIncomeCard);
              setAddExpenseCard(false);
            }}
          >
            Add income
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setAddExpenseCard(!addExpenseCard);
              setAddIncomeCard(false);
            }}
          >
            Add expense
          </button>
        </div>
      </div>
      {addIncomeCard && (
        <form>
          <div className="income-input">
            <h4>Income</h4>
            <div className="income-fields">
              <div>
                <label>Income type: </label>
                <select
                  value={incomeType}
                  onChange={(e) => setIncomeType(e.target.value)}
                >
                  <option value="-- --">-- --</option>
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
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIncomeInputSummary([
                    ...incomeInputSummary,
                    {
                      type: incomeType,
                      date: incomeDate,
                      amount: incomeAmount,
                      remark: incomeNotes,
                    },
                  ]);
                  setIncomeType("");
                  setIncomeDate("");
                  setIncomeAmount("");
                  setIncomeNotes("");
                }}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      )}
      {/*Expense drop down card*/}
      <div>
        {addExpenseCard && (
          <form>
            <div className="expense-input">
              <h4>Expense</h4>
              <div className="expense-fields">
                <div>
                  <label>Expense type: </label>
                  <select
                    value={expenseType}
                    onChange={(e) => setExpenseType(e.target.value)}
                  >
                    <option value="-- --">-- --</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Bills">Bills</option>
                    <option value="Rent">Rent</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <br />
                <div>
                  <label>Date: </label>
                  <input
                    type="date"
                    value={expenseDate}
                    onChange={(e) => setExpenseDate(e.target.value)}
                  ></input>
                </div>
                <br />
                <label>Amount: </label>
                <input
                  placeholder="Add amount here.."
                  type="number"
                  step="0.01"
                  min="0.00"
                  value={expenseAmount}
                  onChange={(e) => setExpenseAmount(e.target.value)}
                ></input>
                <br />
                <br />
                <label>Remarks: </label>
                <div className="editor-container">
                  <textarea
                    className="remark-editor"
                    placeholder="Add text..."
                    value={expenseNotes}
                    onChange={(e) => setExpenseNotes(e.target.value)}
                  ></textarea>
                </div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setExpneseInputSummary([
                      ...expenseInputSummary,
                      {
                        type: expenseType,
                        date: expenseDate,
                        amount: expenseAmount,
                        remark: expenseNotes,
                      },
                    ]);
                    setExpenseType("");
                    setExpenseDate("");
                    setExpenseAmount("");
                    setExpenseNotes("");
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
      {/*Transactions*/}
      <h2>My Transactions</h2>
      {/*search input field*/}
      <input
        placeholder="search here..."
        className="search-input"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      ></input>
      <div className="filter-by">
        <label>Filter by: </label>
        <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
          <option value="show all">Show all</option>
          <option value="income">Income Only</option>
          <option value="expense">Expenses Only</option>
        </select>
      </div>
      <div>
        <ul>
          <div className="transaction-header">
            <h4>Date</h4>
            <h4>Type</h4>
            <h4>Amount</h4>
            <h4>Remarks</h4>
            <h4>Action</h4>
          </div>
          {/*income display*/}
          {filteredList
            .filter(
              (item) => item.type === "salary" || item.type === "dividend",
            )
            .map((item, index) => (
              <li key={"income-" + index} className="transaction-list">
                <div>
                  <p>{item.date}</p>
                </div>
                <div>
                  <p>{item.type}</p>
                </div>
                <div>
                  <p>{item.amount}</p>
                </div>
                <div>
                  <p>{item.remark}</p>
                </div>
                <div>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </li>
            ))}
          {/*Expense display*/}
          {filteredList
            .filter(
              (item) => item.type !== "salary" && item.type !== "dividend",
            )
            .map((item, index) => (
              <li key={"Expense -" + index} className="transaction-list">
                <div>
                  <p>{item.date}</p>
                </div>
                <div>
                  <p>{item.type}</p>
                </div>
                <div>
                  <p>{item.amount}</p>
                </div>
                <div>
                  <p>{item.remark}</p>
                </div>
                <div>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default App;
