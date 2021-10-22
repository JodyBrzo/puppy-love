import React, { useState, useContext } from 'react';
import PuppyListComponent from '../components/puppy-list.component'
import { PuppiesContext } from '../Providers/Puppies/puppies.provider'

const PuppiesPage = () => {
  return (
    <PuppyListComponent/>
  );
};

export default PuppiesPage;