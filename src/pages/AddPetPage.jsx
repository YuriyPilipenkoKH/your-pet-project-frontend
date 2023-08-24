import React from 'react';
import AddPetForm from '../components/Forms/AddPetForm/AddPetForm';
import { HomeWrapperTwo } from './pages.styled/Pages.styled';
import { useLocation } from 'react-router-dom';

export default function AddPetPage() {
  const location = useLocation();
  const state = location.state;
  return (
    <HomeWrapperTwo>
      <AddPetForm  state={state} />
    </HomeWrapperTwo>
  );
}
