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
import { Package, Plus, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const inventory = [
  {
    id: "INV001",
    name: "Laptop Dell XPS 13",
    category: "Electronics",
    quantity: 50,
    price: 1299.99,
    status: "In Stock",
  },
  {
    id: "INV002",
    name: "Wireless Mouse",
    category: "Accessories",
    quantity: 100,
    price: 29.99,
    status: "In Stock",
  },
  {
    id: "INV003",
    name: "27\" Monitor",
    category: "Electronics",
    quantity: 5,
    price: 399.99,
    status: "Low Stock",
  },
  {
    id: "INV004",
    name: "USB-C Cable",
    category: "Accessories",
    quantity: 200,
    price: 19.99,
    status: "In Stock",
  },
  {
    id: "INV005",
    name: "Mechanical Keyboard",
    category: "Accessories",
    quantity: 0,
    price: 149.99,
    status: "Out of Stock",
  },
]

export default function InventoryPage() {
  const [search, setSearch] = useState("")

  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Inventory</h2>
        <div className="flex items-center space-x-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Item
          </Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inventory.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {inventory.filter((item) => item.status === "Low Stock").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {inventory.filter((item) => item.status === "Out of Stock").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Value</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${inventory.reduce((acc, item) => acc + item.price * item.quantity, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search inventory..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}