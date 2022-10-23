// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from './SuggestionItem'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {updatedList: suggestionsList, searchValue: ''}

  typing = event => {
    this.setState({searchValue: event.target.value})
  }

  selectSuggesstion = id => {
    const {updatedList} = this.state
    const selectedData = updatedList.filter(each => each.id === id)
    this.setState({updatedList: selectedData})
    const des = selectedData[0].suggestion
    this.setState({searchValue: des})
  }

  render() {
    const {updatedList, searchValue} = this.state
    const filterdData = updatedList.filter(each =>
      each.suggestion.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="bgContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="googleLogo"
        />
        <div className="card">
          <div className="searchBar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchLogo"
            />
            <input
              type="search"
              className="searchB"
              placeholder="Search Google"
              onChange={this.typing}
              value={searchValue}
            />
          </div>
          <ul>
            {filterdData.map(each => (
              <SuggestionItem
                suggestion={each.suggestion}
                key={each.id}
                id={each.id}
                selectSuggesstion={this.selectSuggesstion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
