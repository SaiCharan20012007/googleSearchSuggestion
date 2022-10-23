// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {id, suggestion, selectSuggesstion} = props

  const onSelect = () => {
    selectSuggesstion(id)
  }
  return (
    <li className="Item">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrowImage"
        onClick={onSelect}
      />
    </li>
  )
}
export default SuggestionItem
