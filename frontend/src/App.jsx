import Card from './components/Card/card.jsx'
import './App.css'
import useFetch from './hooks/useFetch.jsx'

function App() {
  const { data } = useFetch("http://localhost:8084/user/allUser")

  return (
    <div className="App">
      {data && <>
        <Card cardInfo={data[Math.floor(Math.random() * data.length)]}/>
      </>}

    </div>
  )
}

export default App
