import Navigation from './Navigation';
import BookList from './BookList';
import '../App.css';

const Home = () => (
  <div className="page">
    <div className="page-nav">
      <h2>WazaCode bookstore</h2>
      <Navigation />
      <div className="user">
        <i className="fa-solid fa-user" />
      </div>
    </div>
    <BookList />
  </div>
);

export default Home;
