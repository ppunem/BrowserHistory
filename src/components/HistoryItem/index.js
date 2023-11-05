import './index.css'

const HistoryItem = props => {
  const {details, delItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const removeItem = () => {
    delItem(id)
  }

  return (
    <li className="item-container">
      <p className="time">{timeAccessed}</p>
      <div className="app-container">
        <img src={logoUrl} className="app" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button className="del-button" type="button" onClick={removeItem}>
        <img
          testid="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
