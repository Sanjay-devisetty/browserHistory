/* eslint-disable no-unused-vars */
import './index.css'

const History = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-container">
      <div className="site-container">
        <p className="time-accessed">{timeAccessed}</p>
        <img className="site-logo" src={logoUrl} alt="domain logo" />
        <p className="site-name"> {title}</p>
        <p className="site-url"> {domainUrl} </p>
      </div>
      <button data-testid="delete" className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default History
