import React from 'react';
import NewsAPI from 'newsapi'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import All from './components/categories/All'
import Science from './components/categories/Science'
import Business from './components/categories/Business'
import Politics from './components/categories/Politics'
import Sports from './components/categories/Sports'
import LoadingScreen from './components/LoadingScreen'

const newsapi = new NewsAPI('cf7313e1ac4246f0a4d6188b4e531d56',
  { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' })


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      science: [],
      business: [],
      politics: [],
      sports: []
    }

  }

  componentDidMount() {
    newsapi.v2.topHeadlines({
      language: 'en',
      country: 'in'
    }).then(response => {
      this.setState({ articles: response.articles })

    });
    newsapi.v2.topHeadlines({
      category: 'science',
      language: 'en',
      country: 'in'
    }).then(response => {
      this.setState({ science: response.articles })
    });
    newsapi.v2.topHeadlines({
      category: 'business',
      language: 'en',
      country: 'in'
    }).then(response => {
      this.setState({ business: response.articles })
    });
    newsapi.v2.topHeadlines({
      category: 'politics',
      language: 'en',
      country: 'in'
    }).then(response => {
      this.setState({ politics: response.articles })
    });
    newsapi.v2.topHeadlines({
      category: 'sports',
      language: 'en',
      country: 'in'
    }).then(response => {
      this.setState({ sports: response.articles })
    });

  }


  render() {

    if (this.state.articles.length === 0) {
      return (
        <LoadingScreen />
      )
    }
    else {
      return (
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/politics">
                <Politics politics={this.state.politics} />
              </Route>
              <Route path="/sports">
                <Sports sports={this.state.sports} />
              </Route>
              <Route path="/business">
                <Business business={this.state.business} />
              </Route>
              <Route path="/science">
                <Science science={this.state.science} />
              </Route>
              <Route path="/">
                <All articles={this.state.articles} />
              </Route>
            </Switch>
          </div>
        </Router>)

    }
  }

}




export default App;
