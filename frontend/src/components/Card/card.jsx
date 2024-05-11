import './style.css'

const card = ({cardInfo}) => {
  
  return (
    <div className="cardContainer">
        <img src="https://source.unsplash.com/random/?paisage" alt="foto aleatoria"/>
        <h2>{cardInfo.name}</h2>
        <span>{cardInfo.email}</span>
    </div>
  )
}

export default card