"use client";
import React, { useEffect } from 'react'

function Page() {

  useEffect(() => {
    fetch("http://localhost:3001/").then(
      response => response.json()
    ).then(
      data => {
        console.log(data);
      }
    )
  }, [])

  return (
    <div>
      <h1>Anéis do Poder</h1>
    </div>
  )
}

export default Page;