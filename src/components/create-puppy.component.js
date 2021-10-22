import React, {useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
import {usePuppiesContext} from '../Providers/Puppies/puppies.provider';
import API from '../utils/API';

const INITIAL_STATE = {
  name: '',
  gender: 'Male',
  mother: '',
  father: '',
  birthDate: '',
  deceasedDate: ''
};

const CreatePuppy = props => {

  const history = useHistory();
  const [state, dispatch, createPuppy, getPuppyData] = usePuppiesContext();
  const [formValues, setFormValues] = useState({...INITIAL_STATE});

  const handleInput = evt => {
    let element = document.getElementById("deceasedDatePicker");
    let checkbox = document.getElementById("flexCheckDefault");

    console.log ("is evt: ", evt.target.value);
    console.log ("dorm value: ", formValues.name);
    if (!evt) return;

    const { value, name } = evt.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    
    if (checkbox.checked) {
      element.classList.add("visible");
      element.classList.remove("invisible");
    }
    else {
      element.classList.remove("visible");
      element.classList.add("invisible");
    }

  };

  const handleBirthDateInput = (date) => {
    setFormValues({
      ...formValues,
      birthDate: date
    });
  }

  const handleDeceasedDateInput = (date) => {
    setFormValues({
      ...formValues,
      deceasedDate: date
    });
  }

  const handleSubmit = evt => {
    evt.preventDefault();

    console.log(formValues);

    API.createPuppy(formValues)
      .then(results => {
        createPuppy(formValues);
        history.push('/');
      })
      .catch (err => console.log(err));
  };

  return(
    <div>
      <h3>Create puppy Component</h3>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Name</label>
          <input  type="text"
            name="name"
            required
            className="form-control"
            value={formValues.name}
            onChange={handleInput}
            />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select className="form-control" 
            name="gender"
            required
            value={formValues.gender}
            onChange={handleInput}>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="form-group">
          <label>Mother's Name</label>
          <input  type="text"
            name="mother"
            required
            className="form-control"
            value={formValues.mother}
            onChange={handleInput}
            />
        </div>
        <div className="form-group">
          <label>Father's Name</label>
          <input  type="text"
            name="father"
            required
            className="form-control"
            value={formValues.father}
            onChange={handleInput}
            />
        </div>
        <div className="form-group">
          <label>Birth Date</label>
          <DateTimePicker 
            name="birthDate"
            value={formValues.birthDate}
            onChange={handleBirthDateInput}
          />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value={formValues.deceasedDate} onChange={handleInput} id="flexCheckDefault"/>
            <label className="form-check-label">
              Deceased
            </label>
          </div>
        </div>
        <div className="form-group invisible" id="deceasedDatePicker">
          <label>Deceased Date</label>
          <DateTimePicker 
            name="deceasedDate"
            value={formValues.deceasedDate}
            onChange={handleDeceasedDateInput}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Add A Puppy" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
};

export default CreatePuppy;