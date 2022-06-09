import React, {useState, useEffect} from 'react';

const Posts = () => {
    //state visada virsuje apsirasome
    //[state pavadinimas], [metodas keisiantis state reiksme], [pradine state reiksme]
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    //reikalingas, tam kad zinotu, kuomet daryti uzklausa
    //turi du dalykus - dvi reiksmes: f-jos iskvietima ir parametra, kuriam paseikeitus 
    //bus kvieciama nurodyta funkcija
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(responce => responce.json())
        .then(json => setItems(json))

    }, [resourceType])

  return (
      //pasiruosiu printinima, kitaip tariant informacijos isprintinimas
    <div>
    <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
        <button onClick={() => setResourceType('users')}>Users</button>

    </div>
    <h3>{resourceType}</h3>
    {/*gautu duomenu is API spausdinimas*/}
    {items.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>
    })}
    </div>
  )
}

export default Posts