import { useState } from "react";
import Balance from "./Components/Balance";
import Inc_Exp_Liste from "./Components/Inc_Exp_Liste";
import Transactions from "./Components/Transactions";

/* eslint-disable react/no-unknown-property */
function App() {
  const [exp, setExp] = useState([
    { id: 1, label: "Grocery", amount: '150$' },
    { id: 2, label: "Make Up", amount: '70$' },
    { id: 3, label: "Skin care", amount: '60$' },
    { id: 4, label: "Buy tablet", amount: '450$' },
  ]);
  
  const [inc, setInc] = useState([
    { id: 1, label: "Salary", amount: '9500$' },
    { id: 2, label: "Freelance", amount: '400$' },
    { id: 3, label: "Clothes Store", amount: '800$' },
    { id: 4, label: "YouTube", amount: '900$' },
  ]);
  function addIncomes(income) {
    setInc([income, ...inc]);
    
  }
  function addExpenses(expenses) {
    setExp([expenses, ...exp]);
  }
  function removeIncome(id) {
    setInc(inc.filter(income => income.id !== id));
}

function removeExpense(id) {
    setExp(exp.filter(expense => expense.id !== id));
}
  return (
    <>
      <div className="container">
        <div className="row my-2">
          <div className="col-md-8 mx-auto">
            <div className="card bg-success">
              <div className="card-body">
                <Balance balance="9000" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto my-1">
            <div className="bg-white border mb-2 mx-2 text-center border-success">
            <Transactions addIncomes={addIncomes}  addExpenses={ addExpenses}  />
            </div>
          </div>
        </div>
      
        <div className="bg-red border text-center border-success">
          <Inc_Exp_Liste
            removeIncome={removeIncome} 
            removeExpense={removeExpense}
            income={inc}
            expense={exp} /> {/* Changed here */}
        </div>
      </div>
    </>
  );
}

export default App;
