import './App.css';
import Comments from './comments';
import Likes from './likes';
import Title from './title';
import Spin from "./loader/spin"
import { useSelector } from 'react-redux';

function App() {
  const error = useSelector(state => state.appReducer.error)

  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title/>
            <Likes/>
          </div>
          <Comments/>
        </div>
      </div>
    </div>
  );
}

export default App;
