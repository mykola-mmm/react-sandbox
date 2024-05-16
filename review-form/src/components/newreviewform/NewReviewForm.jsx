import React from 'react'

export default function NewReviewForm() {

    const ref = React.useRef()
    const ref2 = React.useRef()

    React.useEffect(() => {
        if (ref.current) {
            ref.current.focus()
        }
        return () => {} 
    }
    , [])

  return (
    <div>
        <label>
            Name:
            <input type="text" ref={ref}/>
        </label>
        <label>
            Name:
            <input type="text" ref={ref2}/>
        </label>
    </div>
  )
}
