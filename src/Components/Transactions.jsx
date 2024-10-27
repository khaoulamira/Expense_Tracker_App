import { useState } from 'react';

function Transactions({ addIncomes, addExpenses }) {
    const [label, setLabel] = useState("");
    const [amount, setAmount] = useState(0);

    function DisplayTransact(e) {
        setAmount(e.target.value);
    }

    function addIncome() {
        if (label.trim() === "") return; // Prevent adding if the label is empty
        const income = { id: Date.now(), label, amount }; // Create income object
        addIncomes(income);
        resetFields();
    }

    function addExpense() {
        if (label.trim() === "") return; // Prevent adding if the label is empty
        const expense = { id: Date.now(), label, amount }; // Create expense object
        addExpenses(expense);
        resetFields();
    }

    function resetFields() {
        setTimeout(() => {
            setAmount(0);
            setLabel("");
        }, 300);
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="row g-2 my-3">
                        <div className="col-auto d-flex align-items-center">
                            <label className="mr-sm-2">Transaction</label>
                            <button onClick={addIncome} className="btn btn-sm btn-success mx-2">
                                <i className="bi bi-bag-dash-fill"></i>
                            </button>
                            <input 
                                type="text" 
                                value={label} 
                                onChange={(e) => setLabel(e.target.value)} 
                                className="hover-effect mx-md-1" 
                                placeholder="Enter transaction name" 
                            />
                           
                            <button onClick={addExpense} className="btn btn-sm btn-danger">
                                <i className="bi bi-bag-plus-fill"></i>
                            </button>
                        </div>
                        <div className=" col-auto">
                            <label className="mx-2">Money</label>
                            <input
                                min={0}
                                onChange={DisplayTransact}
                                value={amount}
                                className='hover-effect mx-md-2'
                                type="number"
                                placeholder='How much'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transactions;
