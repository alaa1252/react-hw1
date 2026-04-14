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

// 11 
function DeleteItem() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
  ])

  function remove(id) {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => remove(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

// 12 
function InlineEdit() {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" }
  ])
  const [editingId, setEditingId] = useState(null)
  const [editingValue, setEditingValue] = useState("")

  function startEdit(item) {
    setEditingId(item.id)
    setEditingValue(item.name)
  }

  function save(id) {
    setItems(prev => prev.map(i => i.id === id ? { ...i, name: editingValue } : i))
    setEditingId(null)
    setEditingValue("")
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {editingId === item.id ? (
            <>
              <input
                value={editingValue}
                onChange={e => setEditingValue(e.target.value)}
              />
              <button onClick={() => save(item.id)}>Save</button>
            </>
          ) : (
            <>
              {item.name}
              <button onClick={() => startEdit(item)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

// 13 
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", done: false },
    { id: 2, text: "Read a book", done: false },
    { id: 3, text: "Exercise", done: false }
  ])

  function toggle(id) {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  return (
    <ul>
      {todos.map(t => (
        <li key={t.id}>
          <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
          <span style={{ textDecoration: t.done ? "line-through" : "none" }}>
            {t.text}
          </span>
        </li>
      ))}
    </ul>
  )
}

// 14 
function CharCounter() {
  const [value, setValue] = useState("")

  return (
    <div>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Type here..."
      />
      <p>{value.length}</p>
    </div>
  )
}

// 15 
function SimpleForm() {
  const [form, setForm] = useState({ name: "", email: "" })
  const [submitted, setSubmitted] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(form)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>{submitted.name} - {submitted.email}</p>}
    </div>
  )
}

// 16 
function FormValidation() {
  const [form, setForm] = useState({ name: "", email: "" })
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    let e2 = {}
    if (form.name.length < 3) e2.name = "Name must be at least 3 characters"
    if (!form.email.includes("@")) e2.email = "Email must contain @"
    setErrors(e2)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

// 17 
function SelectLevel() {
  const [level, setLevel] = useState("Beginner")

  return (
    <div>
      <select value={level} onChange={e => setLevel(e.target.value)}>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      <p>Selected: {level}</p>
    </div>
  )
}

// 18 
function Tabs() {
  const [activeTab, setActiveTab] = useState("Overview")

  const content = {
    Overview: "This is the overview content.",
    Lessons: "These are the lessons.",
    Reviews: "These are the reviews."
  }

  return (
    <div>
      <div>
        {["Overview", "Lessons", "Reviews"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{ fontWeight: activeTab === tab ? "bold" : "normal" }}
          >
            {tab}
          </button>
        ))}
      </div>
      <p>{content[activeTab]}</p>
    </div>
  )
}

// 19 
function ModalDemo() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && (
        <div
          onClick={e => { if (e.target === e.currentTarget) setOpen(false) }}
          style={{
            position: "fixed", top: 0, left: 0,
            width: "100%", height: "100%",
            background: "rgba(0,0,0,0.5)"
          }}
        >
          <div style={{
            background: "white", color: "black",
            margin: "100px auto", padding: "20px", width: "300px"
          }}>
            <p>Modal Content</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

// 20 
function CountdownTimer() {
  const [count, setCount] = useState(10)

  useEffect(() => {
    if (count === 0) return
    const id = setInterval(() => {
      setCount(prev => prev - 1)
    }, 1000)
    return () => clearInterval(id)
  }, [count])

  return <p>Countdown: {count}</p>
}

// 21 
function FetchPosts() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(r => r.json())
      .then(d => {
        setData(d)
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to load")
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <ul>
      {data.map(p => <li key={p.id}>{p.title}</li>)}
    </ul>
  )
}

// 22 
function Pagination() {
  const items = Array.from({ length: 20 }, (_, i) => "Item " + (i + 1))
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 5

  const total = Math.ceil(items.length / perPage)
  const visible = items.slice((currentPage - 1) * perPage, currentPage * perPage)

  return (
    <div>
      <ul>
        {visible.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <button
        onClick={() => setCurrentPage(p => p - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span> Page {currentPage} of {total} </span>
      <button
        onClick={() => setCurrentPage(p => p + 1)}
        disabled={currentPage === total}
      >
        Next
      </button>
    </div>
  )
}

// 23 
function SortList() {
  const original = [
    { id: 1, name: "Banana", price: 30 },
    { id: 2, name: "Apple", price: 10 },
    { id: 3, name: "Mango", price: 50 }
  ]
  const [items, setItems] = useState(original)
  const [asc, setAsc] = useState(true)

  function sortByName() {
    const sorted = [...items].sort((a, b) =>
      asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    )
    setItems(sorted)
    setAsc(v => !v)
  }

  function sortByPrice() {
    const sorted = [...items].sort((a, b) =>
      asc ? a.price - b.price : b.price - a.price
    )
    setItems(sorted)
    setAsc(v => !v)
  }

  return (
    <div>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPrice}>Sort by Price</button>
      <ul>
        {items.map(i => <li key={i.id}>{i.name} - ${i.price}</li>)}
      </ul>
    </div>
  )
}

// 24 
function MemoSearch() {
  const items = Array.from({ length: 1000 }, (_, i) => "Item " + (i + 1))
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    return items.filter(item => item.toLowerCase().includes(query.toLowerCase()))
  }, [items, query])

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <p>{filtered.length} results</p>
      <ul>
        {filtered.slice(0, 10).map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}

// 25 
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initial
  })

  function set(newValue) {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, set]
}

function LocalStorageDemo() {
  const [theme, setTheme] = useLocalStorage("theme", "light")

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  )
}


// app part
const tasks = [
  { id: 1,  label: "Hello Component",       component: <Hello /> },
  { id: 2,  label: "UserCard Props",         component: <UserCard name="Ali" title="Developer" /> },
  { id: 3,  label: "Counter",               component: <Counter /> },
  { id: 4,  label: "Counter + Reset",       component: <CounterReset /> },
  { id: 5,  label: "Toggle ON/OFF",         component: <Toggle /> },
  { id: 6,  label: "Show / Hide",           component: <ShowHide /> },
  { id: 7,  label: "Product List (map)",    component: <ProductList /> },
  { id: 8,  label: "Filter Available",      component: <FilterAvailable /> },
  { id: 9,  label: "Search List",           component: <SearchList /> },
  { id: 10, label: "Add Item",              component: <AddItem /> },
  { id: 11, label: "Delete Item",           component: <DeleteItem /> },
  { id: 12, label: "Inline Edit",           component: <InlineEdit /> },
  { id: 13, label: "Todo Checkbox",         component: <TodoList /> },
  { id: 14, label: "Char Counter",          component: <CharCounter /> },
  { id: 15, label: "Simple Form",           component: <SimpleForm /> },
  { id: 16, label: "Form Validation",       component: <FormValidation /> },
  { id: 17, label: "Select Level",          component: <SelectLevel /> },
  { id: 18, label: "Tabs",                  component: <Tabs /> },
  { id: 19, label: "Modal",                 component: <ModalDemo /> },
  { id: 20, label: "Countdown Timer",       component: <CountdownTimer /> },
  { id: 21, label: "Fetch API Posts",       component: <FetchPosts /> },
  { id: 22, label: "Pagination",            component: <Pagination /> },
  { id: 23, label: "Sorting",               component: <SortList /> },
  { id: 24, label: "useMemo Search",        component: <MemoSearch /> },
  { id: 25, label: "useLocalStorage Hook",  component: <LocalStorageDemo /> }
]

export default function App() {
  const [active, setActive] = useState(1)

  const current = tasks.find(t => t.id === active)

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Challenges</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
        {tasks.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            style={{ fontWeight: active === t.id ? "bold" : "normal" }}
          >
            {t.id}
          </button>
        ))}
      </div>

      <h2>{current.id}. {current.label}</h2>

      <div style={{ marginTop: "16px" }}>
        {current.component}
      </div>
    </div>
  )
}
