import React, { useState, useContext } from 'react';
import PuppyListComponent from '../components/puppy-list.component'
import { PuppiesContext } from '../Providers/Puppies/puppies.provider'

const CreatePuppy = () => {
  return (
    <PuppyListComponent/>
  );
};

export default CreatePuppy;