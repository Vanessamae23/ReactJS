import './Search.css';
import { useState } from 'react';

function Search (props) {
    const [player, setPlayer] = useState('');

    const playerHandler = (event) => {
      setPlayer(event.target.value);
    }

    const onSubmit = (event) => {
      event.preventDefault();
      const data = {
        player: player
      }

      props.onSearchPlayer(data);
      setPlayer('');

    }

    return (
      <>
        <h1>Search Player</h1>
        <form onSubmit={onSubmit} className='form__controls'>
          <div className="form__control">
            <label> Player Name</label>
            <input value={player} onChange={playerHandler} type="text" placeholder="New Player" />
          </div>
          <div>
            <button  type="submit">Submit</button>
          </div>
        </form>
      </>
    )
  }
  
  export default Search