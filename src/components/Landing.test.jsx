import { render, screen, fireEvent, act } from '@testing-library/react';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from "./Landing"
import { AuthContext } from "../App"
import { MemoryRouter, Route, Routes } from 'react-router-dom';


describe('Test Landing Page', () => {
  const setAsteroidInput = jest.fn();
  const setAsteroidName = jest.fn();
  const authContextValues = {
    setAsteroidName,
    setAsteroidInput,
    setComposition: jest.fn(),
    setFromYear: jest.fn(),
    setToYear: jest.fn(),
    setMinMass: jest.fn(),
    setMaxMass: jest.fn(),
    darkMode: false,
    recclassList: [],
    asteroidName: 'Initial Asteroid Name',
    composition: 'Initial Composition',
    fromYear: 2000,
    toYear: 2020,
    minMass: 0,
    maxMass: 100,
  }
  const MockLanding = () => {
    return (
      <Router>
        <AuthContext.Provider value={authContextValues}>
          <Landing />
        </AuthContext.Provider>
      </Router>
    )

  }
  it('input value should be changed when typed', () => {
    render(
      <MockLanding />
    )
    const inputElement = screen.getByTestId('asteroid-input');
    fireEvent.change(inputElement, { target: { value: 'New Asteroid' } });
    expect(inputElement.value).toBe('New Asteroid');
    expect(setAsteroidInput).toHaveBeenCalledWith('New Asteroid');
    expect(setAsteroidName).toHaveBeenCalledWith('New Asteroid');

  });

  it('test if link goes to correct route', async () => {


    render(
      <MemoryRouter initialEntries={['/initial-route']}>
        <AuthContext.Provider value={authContextValues}>
          <Routes>
            <Route path="/initial-route" element={<Landing />} />
            <Route path="/search-results" element={<div>Search Results Page</div>} />
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>
    )
    const buttonElement = screen.getByRole('link', { name: /SEARCH/i });

    fireEvent.click(buttonElement);

    console.log(screen.debug());
    await screen.findByText('Search Results Page');


  })
});
