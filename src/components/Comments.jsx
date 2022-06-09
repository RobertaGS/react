import React, { useState, useEffect } from 'react'

const Comments = () => {
    //state apsirasau visuomet virsuje
    //const [state pavadinimas], [metodas keisantis state reiksme], [pradine state reiksme]
    const [resourceType, setResourceType] = useState('comments');
    const [items, setItems] = useState([]);

  return (
      
    <div>
    <h3>{resourceType}</h3>
    </div>
  )
}

export default Comments