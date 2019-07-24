const React = require('react');
require('./search.less')
class Search extends React.Component {
  render() {
    return <div className="text">SSR Search Page</div>
  }
}
module.exports = <Search/>;