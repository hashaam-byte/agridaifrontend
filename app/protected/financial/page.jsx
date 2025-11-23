'use client'
import React, { useState } from 'react';
import { 
  DollarSign, TrendingUp, TrendingDown, Plus, Calendar,
  ArrowUpRight, ArrowDownRight, Wallet, PieChart, BarChart3,
  Download, Filter, Search, Edit2, Trash2, X, ShoppingCart,
  Package, Truck, Users, Zap
} from 'lucide-react';

export default function FinancialPage() {
  const [showAddTransaction, setShowAddTransaction] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('month'); // 'week', 'month', 'year'
  const [transactionType, setTransactionType] = useState('all'); // 'all', 'income', 'expense'

  const [transactions, setTransactions] = useState([
    { id: 1, type: 'income', category: 'Crop Sales', amount: 450000, description: 'Maize harvest sale', date: '2025-11-20', crop: 'Maize' },
    { id: 2, type: 'expense', category: 'Inputs', amount: 85000, description: 'Fertilizer purchase', date: '2025-11-18', crop: 'All' },
    { id: 3, type: 'income', category: 'Crop Sales', amount: 280000, description: 'Tomato sales', date: '2025-11-15', crop: 'Tomatoes' },
    { id: 4, type: 'expense', category: 'Labor', amount: 45000, description: 'Harvesting labor', date: '2025-11-12', crop: 'Maize' },
    { id: 5, type: 'expense', category: 'Equipment', amount: 120000, description: 'Irrigation equipment', date: '2025-11-10', crop: 'All' },
    { id: 6, type: 'income', category: 'Crop Sales', amount: 195000, description: 'Cassava sales', date: '2025-11-08', crop: 'Cassava' },
    { id: 7, type: 'expense', category: 'Pest Control', amount: 35000, description: 'Pesticide application', date: '2025-11-05', crop: 'Tomatoes' },
    { id: 8, type: 'expense', category: 'Seeds', amount: 28000, description: 'Rice seeds', date: '2025-11-03', crop: 'Rice' }
  ]);

  const categories = {
    income: ['Crop Sales', 'Livestock', 'Government Support', 'Other'],
    expense: ['Inputs', 'Labor', 'Equipment', 'Pest Control', 'Seeds', 'Transport', 'Other']
  };

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const netProfit = totalIncome - totalExpense;
  const profitMargin = totalIncome > 0 ? ((netProfit / totalIncome) * 100).toFixed(1) : 0;

  const expenseBreakdown = [
    { category: 'Inputs', amount: 85000, percentage: 28, color: 'blue' },
    { category: 'Equipment', amount: 120000, percentage: 40, color: 'purple' },
    { category: 'Labor', amount: 45000, percentage: 15, color: 'yellow' },
    { category: 'Pest Control', amount: 35000, percentage: 12, color: 'red' },
    { category: 'Seeds', amount: 28000, percentage: 9, color: 'green' }
  ];

  const monthlyData = [
    { month: 'Jun', income: 420, expense: 280 },
    { month: 'Jul', income: 380, expense: 310 },
    { month: 'Aug', income: 520, expense: 290 },
    { month: 'Sep', income: 490, expense: 330 },
    { month: 'Oct', income: 580, expense: 310 },
    { month: 'Nov', income: 925, expense: 313 }
  ];

  const filteredTransactions = transactions.filter(t => 
    transactionType === 'all' || t.type === transactionType
  );

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Financial Tracker</h1>
          <p className="text-gray-400">Monitor income, expenses, and profitability</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all flex items-center gap-2">
            <Download className="w-5 h-5" />
            Export
          </button>
          <button 
            onClick={() => setShowAddTransaction(true)}
            className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-xl text-white font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/50"
          >
            <Plus className="w-5 h-5" />
            Add Transaction
          </button>
        </div>
      </div>

      {/* Financial Overview Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 backdrop-blur-sm rounded-2xl border border-emerald-500/30 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-emerald-500/20 rounded-xl">
              <TrendingUp className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-emerald-400 text-sm font-medium">+12.5%</span>
          </div>
          <p className="text-gray-400 text-sm mb-1">Total Income</p>
          <p className="text-3xl font-bold text-white">{formatCurrency(totalIncome)}</p>
        </div>

        <div className="bg-gradient-to-br from-red-500/20 to-red-500/10 backdrop-blur-sm rounded-2xl border border-red-500/30 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-500/20 rounded-xl">
              <TrendingDown className="w-6 h-6 text-red-400" />
            </div>
            <span className="text-red-400 text-sm font-medium">+8.2%</span>
          </div>
          <p className="text-gray-400 text-sm mb-1">Total Expenses</p>
          <p className="text-3xl font-bold text-white">{formatCurrency(totalExpense)}</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/30 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-500/20 rounded-xl">
              <DollarSign className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-blue-400 text-sm font-medium">{profitMargin}%</span>
          </div>
          <p className="text-gray-400 text-sm mb-1">Net Profit</p>
          <p className="text-3xl font-bold text-white">{formatCurrency(netProfit)}</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-500/20 rounded-xl">
              <Wallet className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-purple-400 text-sm font-medium">Monthly</span>
          </div>
          <p className="text-gray-400 text-sm mb-1">Profit Margin</p>
          <p className="text-3xl font-bold text-white">{profitMargin}%</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Income vs Expenses Chart */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-emerald-400" />
              Income vs Expenses
            </h2>
            <div className="flex gap-2">
              {['week', 'month', 'year'].map(period => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all capitalize ${
                    selectedPeriod === period
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          <div className="h-64 flex items-end justify-between gap-2">
            {monthlyData.map((data, i) => (
              <div key={i} className="flex-1 flex flex-col gap-2">
                <div className="relative flex-1 flex items-end gap-1">
                  <div 
                    className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
                    style={{ height: `${(data.income / 6) * 100}%` }}
                    title={`Income: ${formatCurrency(data.income * 1000)}`}
                  ></div>
                  <div 
                    className="flex-1 bg-gradient-to-t from-red-500 to-red-400 rounded-t-lg hover:opacity-80 transition-opacity cursor-pointer"
                    style={{ height: `${(data.expense / 6) * 100}%` }}
                    title={`Expense: ${formatCurrency(data.expense * 1000)}`}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 text-center">{data.month}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-sm text-gray-400">Income</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-400">Expenses</span>
            </div>
          </div>
        </div>

        {/* Expense Breakdown */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <PieChart className="w-6 h-6 text-emerald-400" />
            Expense Breakdown
          </h2>

          <div className="flex items-center justify-center mb-6">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full transform -rotate-90">
                {expenseBreakdown.reduce((acc, expense, i) => {
                  const prevPercentage = expenseBreakdown.slice(0, i).reduce((sum, e) => sum + e.percentage, 0);
                  const circumference = 2 * Math.PI * 70;
                  const offset = circumference - (circumference * expense.percentage / 100);
                  const rotateOffset = (circumference * prevPercentage / 100);

                  acc.push(
                    <circle
                      key={i}
                      cx="96"
                      cy="96"
                      r="70"
                      stroke={
                        expense.color === 'blue' ? '#3b82f6' :
                        expense.color === 'purple' ? '#a855f7' :
                        expense.color === 'yellow' ? '#eab308' :
                        expense.color === 'red' ? '#ef4444' :
                        '#22c55e'
                      }
                      strokeWidth="24"
                      fill="none"
                      strokeDasharray={`${circumference}`}
                      strokeDashoffset={offset}
                      style={{
                        strokeDashoffset: offset,
                        transformOrigin: 'center',
                        transform: `rotate(${(rotateOffset / circumference) * 360}deg)`
                      }}
                    />
                  );
                  return acc;
                }, [])}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{formatCurrency(totalExpense)}</p>
                  <p className="text-sm text-gray-400">Total</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {expenseBreakdown.map((expense, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-${expense.color}-500`}></div>
                  <span className="text-white text-sm">{expense.category}</span>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium text-sm">{formatCurrency(expense.amount)}</p>
                  <p className="text-gray-400 text-xs">{expense.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
          
          <div className="flex gap-3">
            <div className="relative flex-1 md:flex-initial">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-64 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            
            <select
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all" className="bg-gray-900">All</option>
              <option value="income" className="bg-gray-900">Income</option>
              <option value="expense" className="bg-gray-900">Expenses</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Date</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Category</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Description</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Crop</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Amount</th>
                <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4">
                    <span className="text-gray-300 text-sm">{new Date(transaction.date).toLocaleDateString()}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                      transaction.type === 'income' 
                        ? 'bg-emerald-500/20 text-emerald-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {transaction.category}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-white text-sm">{transaction.description}</td>
                  <td className="py-4 px-4 text-gray-400 text-sm">{transaction.crop}</td>
                  <td className="py-4 px-4 text-right">
                    <span className={`font-semibold ${
                      transaction.type === 'income' ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}{formatCurrency(transaction.amount)}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-all">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-red-400 transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Transaction Modal */}
      {showAddTransaction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
             onClick={() => setShowAddTransaction(false)}>
          <div className="bg-gray-900 rounded-2xl border border-white/10 max-w-md w-full"
               onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Add Transaction</h2>
              <button onClick={() => setShowAddTransaction(false)} className="p-2 rounded-lg hover:bg-white/10 text-gray-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
                <div className="grid grid-cols-2 gap-3">
                  <button className="py-3 px-4 bg-emerald-500/20 border-2 border-emerald-500/50 rounded-xl text-emerald-400 font-medium">
                    Income
                  </button>
                  <button className="py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:bg-white/10 font-medium">
                    Expense
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500">
                  <option value="" className="bg-gray-900">Select category</option>
                  {categories.income.map((cat, i) => (
                    <option key={i} value={cat} className="bg-gray-900">{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Amount (₦)</label>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <input
                  type="text"
                  placeholder="e.g., Maize harvest sale"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Crop/Field</label>
                <input
                  type="text"
                  placeholder="e.g., Maize Field A"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowAddTransaction(false)} className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:bg-white/10 transition-all">
                  Cancel
                </button>
                <button className="flex-1 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white hover:from-emerald-600 hover:to-teal-600 transition-all">
                  Add Transaction
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}