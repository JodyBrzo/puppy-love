import React, { useState, useContext } from 'react';
import CreatePuppyComponent from '../components/create-puppy.component'
import { PuppiesContext } from '../Providers/Puppies/puppies.provider'

const CreatePuppy = () => {
  return (
    <CreatePuppyComponent/>
  );
};

export default CreatePuppy;