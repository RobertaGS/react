import React, {useState, useEffect} from 'react';

const Users = () => {
    //state visuomet apsiraso virsuje
    //state pavadinimas(kintamojo vardas), metodas(keisiantis state reiksme), pradine state reiksme
    const [resourceType, setResourceType] = useState('users');
    const [items, setItems] = useState([]);

    // //darysime request'a (issikviesime pati metoda)
    // //turiu dvi reiksmes, kurias kviesime (f-jos iskvietima ir parametra, kuriam)
    // //bus kvieciama nurodyta f-ja
    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //     .then(responce =>Response.json())
    //     .then(json => setItems(json))
    // }, [resourceType])
    
  return (
    <div>

    <h3>{resourceType}</h3>
    </div>
  )
}

export default Users