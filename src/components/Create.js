import './Create.css';
import { useState } from 'react';

function Create (props) {
    const [player, setPlayer] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [level, setLevel] = useState('');

    const playerHandler = (event) => {
      setPlayer(event.target.value);
    }

    const emailHandler = (event) => {
      setEmail(event.target.value);
    }

    const experienceHandler = (event) => {
      setExperience(event.target.value);
    }

    const levelHandler = (event) => {
      setLevel(event.target.value);
    }

    const onSubmit = (event) => {
      event.preventDefault();
      const data = {
        player: player,
        email: email,
        experience: experience,
        level: level

      }

      props.onAddPlayer(data);
      setPlayer('');
      setEmail('');
      setExperience('');
      setLevel('');

    }

    return (
      <div className="margin">
      <h1>Create Player</h1>
        <form onSubmit={onSubmit} className='form__controls'>
          <div className="form__control">
            <label>New Player</label>
            <input value={player} onChange={playerHandler} type="text" placeholder="New Player" />
          </div>
          <div className="form__control">
            <label>Email</label>
            <input value={email} onChange={emailHandler} type="text" placeholder="Email" />
          </div>
          <div className="form__control">
            <label>Experience</label>
            <input value={experience} onChange={experienceHandler} type="text" placeholder="Experience" />
          </div>
          <div className="form__control">
            <label>Level</label>
            <input value={level} onChange={levelHandler} type="text" placeholder="Level" />
          </div>
          <div>
            <button  type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
  
  export default Create