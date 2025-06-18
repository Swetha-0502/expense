import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Filter from "../components/Filter";
import { Expense } from "../types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ExpensePage: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  const [filterMonth, setFilterMonth] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("expenses");
    if (stored) setExpenses(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAddOrUpdate = (expense: Expense) => {
    if (editingExpense) {
      setExpenses((prev) =>
        prev.map((ex) => (ex.id === expense.id ? expense : ex))
      );
      setEditingExpense(null);
    } else {
      setExpenses((prev) => [expense, ...prev]);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure?")) {
      setExpenses((prev) => prev.filter((e) => e.id !== id));
    }
  };

  const handleEdit = (expense: Expense) => {
    setEditingExpense(expense);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  const filteredExpenses = filterMonth
    ? expenses.filter((ex) => ex.date.split("-")[1] === filterMonth)
    : expenses;

  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
      <Filter selectedMonth={filterMonth} onChange={setFilterMonth} />
      <ExpenseForm
        onAddOrUpdate={handleAddOrUpdate}
        editingExpense={editingExpense}
        onCancelEdit={() => setEditingExpense(null)}
      />
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default ExpensePage;
