import React, {Component, useEffect} from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import Table from 'react-bootstrap/Table';
import usePuppyContext from '../Providers/Puppies/puppies.provider';

const PuppyList = () => {

  const [state, dispatch] = usePuppyContext();

  const getPuppies = () => {
    API.getAllPuppies()
      .then(results => {
        usePuppyContext.getPuppies(results.data);
      })
      .catch (err => console.log(err));
  }

  useEffect(() => {
    getPuppies();
  }, []);
  
  const Puppy = props => (
    <tr>
      <td>{props.puppy.name}</td>
      <td>{props.puppy.gender}</td>
      <td>{props.puppy.mother}</td>
      <td>{props.puppy.father}</td>
      <td>{props.puppy.birthDate.substring(0,10)}</td>
      <td>{props.puppy.deceasedDate.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </td>
    </tr>
  )
  
  const puppyList = () => {
    return this.state.puppies.map(currentPuppy => {
      return <Puppy puppy={currentPuppy} deletePuppy={this.deletePuppy} key={currentPuppy._id}/>;
    })
  }

  const deletePuppy = (puppyId) => {
    
  }

  return(
    <div>
      <h3>Puppies</h3>
        <Table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { puppyList() }
            </tbody>
          </Table>
    </div>
  )
};

export default PuppyList;