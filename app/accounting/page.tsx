"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, TrendingDown, Search } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const transactions = [
  {
    id: "TR001",
    date: "2024-01-15",
    description: "Product Sales",
    type: "Income",
    amount: 2500.00,
    category: "Sales",
  },
  {
    id: "TR002",
    date: "2024-01-14",
    description: "Office Supplies",
    type: "Expense",
    amount: -150.75,
    category: "Operations",
  },
  {
    id: "TR003",
    date: "2024-01-14",
    description: "Consulting Fee",
    type: "Income",
    amount: 1200.00,
    category: "Services",
  },
  {
    id: "TR004",
    date: "2024-01-13",
    description: "Utility Bills",
    type: "Expense",
    amount: -450.00,
    category: "Utilities",
  },
  {
    id: "TR005",
    date: "2024-01-13",
    description: "Online Sales",
    type: "Income",
    amount: 3450.25,
    category: "Sales",
  },
]

export default function AccountingPage() {
  const [search, setSearch] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.description
      .toLowerCase()
      .includes(search.toLowerCase())
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "income" && transaction.type === "Income") ||
      (activeTab === "expenses" && transaction.type === "Expense")
    return matchesSearch && matchesTab
  })

  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((acc, t) => acc + t.amount, 0)

  const totalExpenses = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, t) => acc + t.amount, 0)

  const netIncome = totalIncome + totalExpenses

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Accounting</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <DollarSign className="mr-2 h-4 w-4" /> Add Transaction
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              ${totalIncome.toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              ${Math.abs(totalExpenses).toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Income</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${netIncome >= 0 ? "text-green-600" : "text-red-600"}`}>
              ${netIncome.toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
            All Transactions
          </TabsTrigger>
          <TabsTrigger value="income" onClick={() => setActiveTab("income")}>
            Income
          </TabsTrigger>
          <TabsTrigger value="expenses" onClick={() => setActiveTab("expenses")}>
            Expenses
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{transaction.category}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell className={transaction.type === "Income" ? "text-green-600" : "text-red-600"}>
                    ${Math.abs(transaction.amount).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  )
}