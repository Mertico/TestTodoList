import { useState } from 'react'
import style from './Example.module.css'
import { Plus } from 'lucide-react'

export function Example() {
  const [count, setCount] = useState(0)
  return (
    <div className={style.root}>
      count is {count}
      <button onClick={() => setCount((count) => count + 1)}>
        <Plus />
      </button>
    </div>
  )
}
