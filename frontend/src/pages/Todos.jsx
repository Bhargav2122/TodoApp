import React, { useEffect, useState } from 'react'
import api from '../axios/axios'
import { useRecoilValue } from 'recoil'
import { userAtom } from '../atoms/userAtom'

export const Todos = () => {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])
  const [editingId, setEditingId] = useState(null)
  const user = useRecoilValue(userAtom)

  const fetchTodos = async () => {
    const res = await api.get('/todos/')
    setTodos(res.data)
  }

  const handleAddOrEdit = async () => {
    if (!text.trim()) return

    if (editingId) {
      await api.put(`/todos/${editingId}`, { text })
      setEditingId(null)
    } else {
      await api.post('/todos/', { text })
    }

    setText('')
    fetchTodos()
  }

  const handleEdit = (todo) => {
    setText(todo.text)
    setEditingId(todo._id)
  }

  const handleDelete = async (id) => {
    await api.delete(`/todos/${id}`)
    fetchTodos()
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAddOrEdit()
  }

  const handleToggle = async (id) => {
    await api.patch(`/todos/${id}/toggle`)
    fetchTodos()
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <section className="m-10 flex-col items-center justify-center">
      <h1 className='text-center mb-9 text-2xl font-quick font-bold'>Welcome, {user?.fullname}</h1>
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your todo"
          className="w-full sm:w-64 text-white bg-black rounded-[20px] h-10 px-4 text-sm outline-none"
        />
        <button
          onClick={handleAddOrEdit}
          className="w-full sm:w-24 h-10 rounded-[20px] bg-black text-white text-sm"
        >
          Add
        </button>
      </div>

      <ul className="pt-8">
        {todos.map((todo) => (
          <li
            className={`bg-black text-white flex justify-between items-center mb-4 h-12 px-4 rounded-lg ${
              todo.completed ? 'line-through text-gray-500 bg-opacity-60' : ''
            }`}
            key={todo._id}
          >
            {todo.text}
            <aside className="flex justify-evenly items-center gap-4">
              <button onClick={() => handleDelete(todo._id)}>❌</button>
              <button onClick={() => handleEdit(todo)} className="bg-white text-black px-3 py-1 rounded-lg">
                Edit
              </button>
              <input type="checkbox" className='h-6 w-10' checked={todo.completed} onChange={()=> handleToggle(todo._id)} />
            </aside>
          </li>
        ))}
      </ul>
    </section>
  )
}
