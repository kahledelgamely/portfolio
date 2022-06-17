import React from 'react'

export default function Portfolio({ title, active, setSelected, id }) {
  return (
    <li className={active ? "portfolio active" : "portfolio"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  )
}
