import React, {Component, useEffect} from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/API';
import Table from 'react-bootstrap/Table';
import {usePuppiesContext} from '../Providers/Puppies/puppies.provider';
import puppiesTypes from '../Providers/Puppies/puppies.types';

const PuppyList = () => {
  console.log ("we are in puppyList function");

  const [state, dispatch, createPuppy, getPuppyData] = usePuppiesContext();

  const getPuppies = () => {
    console.log ("we are in getPuppies function")
    API.getAllThePuppies()
      .then(results => {
        // getPuppyData(results.data);
        dispatch ({ 
          type: puppiesTypes.GET_PUPPIES,
          payload: results.data
        });
      })
      .catch (err => console.log(err));
  }

  useEffect(() => {
    console.log ("we are in useEffect");
    getPuppies();
  }, []);


  const Puppy = props => (
    <tr>
      <td>{props.puppy.name}</td>
      <td>{props.puppy.gender}</td>
      <td>{props.puppy.mother}</td>
      <td>{props.puppy.father}</td>
      <td>{props.puppy.birthDate.substring(0,10)}</td>
      <td>{props.puppy.deceasedDate ? props.puppy.deceasedDate.substring(0,10) : ''}</td>
      <td>
        <Link to={"/edit/"+props.puppy._id}>edit</Link> | <a href="#" onClick={() => { props.deletePuppy(props.puppy._id) }}>delete</a>
      </td>
    </tr>
  )
  
  const renderPuppies = () => {
    console.log("A list of puppies", state.puppies);
    if(state.puppies && state.puppies.length > 0) {
      return state.puppies.map(currentPuppy => {
        return <Puppy puppy={currentPuppy} deletePuppy={deletePuppy} key={currentPuppy._id}/>;
      })
    }
  }

  const deletePuppy = (puppyId) => {
    
  }

  return(
    <div>
      <h3>Puppies</h3>
        <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Mother</th>
                <th>Father</th>
                <th>Birth Date</th>
                <th>Deceased Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { renderPuppies() }
            </tbody>
          </Table>
    </div>
  )
};

export default PuppyList;