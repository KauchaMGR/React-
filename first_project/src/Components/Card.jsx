import React from 'react'

const Card = ({name,desc,img}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{desc}</p>
      <img src={img} alt="my pp photo" />
    </div>
  )
}

export default Card
