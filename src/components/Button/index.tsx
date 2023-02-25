import React from 'react'

function Button(props: {title: string}): JSX.Element {
  return (
    <button {...props} className="bg-purple-600 px-2 py-1 text-white shadow-lg shadow-purple-500/25 hover:bg-purple-500 cursor-pointer rounded-md">{props.title}</button>
  )
}

export default Button