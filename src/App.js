import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://reactjs.org',
    author: 'Dan Abramov',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Redux saga',
    url: 'https://reactjs.org',
    author: 'Dan Abramov',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'jQuery',
    url: 'https://reactjs.org',
    author: 'Dan Abramov',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Sass',
    url: 'https://reactjs.org',
    author: 'Dan Abramov',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]

const App = () => {
  return (
    <div className="App">
      <div>
        <h1>My Hacker Stories</h1>
        <label htmlFor="search">Search</label>
        <input id="search" type="text" />
        <hr />
        <List />
      </div>
    </div>
  );
}

const List = () => {
  return list.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
        <span>{item.author} </span>
        <span>{item.num_comments} </span>
        <span>{item.points} </span>
    </div>
    )
  )
}

export default App;
