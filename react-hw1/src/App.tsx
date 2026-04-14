import { useState, useEffect, useMemo } from "react"

// 1 
function Hello() {
  return <h1>React Hello</h1>
}

// 2 
function UserCard({ name, title }) {
  return (
    <div>
      <p>{name}</p>
      <p>{title}</p>
    </div>
  )
}

// 3 
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>
  )
}

// 4 
function CounterReset() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

// 5 
function Toggle() {
  const [on, setOn] = useState(false)

  return (
    <div>
      <p>{on ? "ON" : "OFF"}</p>
      <button onClick={() => setOn(v => !v)}>Toggle</button>
    </div>
  )
}

// 6 
function ShowHide() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(v => !v)}>Hide/Show</button>
      {show && <p>This is a text paragraph</p>}
    </div>
  )
}

// 7 
function ProductList() {
  const products = [
    { id: 1, name: "Phone" },
    { id: 2, name: "Laptop" },
    { id: 3, name: "Tablet" }
  ]

  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  )
}

// 8 
function FilterAvailable() {
  const items = [
    { id: 1, name: "Phone", available: true },
    { id: 2, name: "Laptop", available: false },
    { id: 3, name: "Tablet", available: true }
  ]
  const [list, setList] = useState(items)

  function showAvailable() {
    setList(items.filter(i => i.available))
  }

  return (
    <div>
      <button onClick={showAvailable}>Show Available</button>
      <ul>
        {list.map(i => <li key={i.id}>{i.name}</li>)}
      </ul>
    </div>
  )
}

// 9 
function SearchList() {
  const items = ["Ali", "Sara", "Mona", "Adam", "Lina"]
  const [query, setQuery] = useState("")

  const results = items.filter(name =>
    name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map((name, i) => <li key={i}>{name}</li>)}
      </ul>
    </div>
  )
}

// 10 
function AddItem() {
  const [items, setItems] = useState(["Task 1", "Task 2"])
  const [value, setValue] = useState("")

  function add() {
    if (value.trim() === "") return
    setItems(prev => [...prev, value.trim()])
    setValue("")
  }

  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="New item..."
      />
      <button onClick={add}>Add</button>
      <ul>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}

