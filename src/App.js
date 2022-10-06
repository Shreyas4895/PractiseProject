import './App.css';
import {useState,useEffect} from 'react';

function App() {

  const [endpoint,setEndpoint]=useState('')
  const [container,setContainer]=useState([])
  const [finalpoint,setFinalpoint]=useState('')


  useEffect(()=>{
    fetchMe()
  },[finalpoint])

const fetchMe =()=> {

  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endpoint}`, {
    "method": 'GET',
    "headers": {
      'X-RapidAPI-Key': 'a7976963admsh3ba4f9eed628e2ap12f935jsn53443e42349b',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  })
    .then(response =>{
      return response.json()
    })
    .then(data=>{
    setContainer(data.d)})

    .catch(err =>{
      console.error(err)
    });
}

const onChangeHandler=(e)=>{
setEndpoint(e.target.value)
}


const submitHandler=(e)=>{
  e.preventDefault()
  setFinalpoint(endpoint);
}

  return (
    <div className="App">
    <form onSubmit={submitHandler}>
      <input type="text" value={endpoint}  onChange={onChangeHandler}/>
      <button type="submit">submit</button>
      </form>
      <div className="element">
      {container.map((item,index)=>{
        return(
        <div key={index} className='element-div'>
          <img src={item.i.imageUrl} alt=""/>
          <p>{item.l}</p>
          </div>
      )
      })}
      </div>
    </div>
  );
}

export default App;
