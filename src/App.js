import React from 'react';
import logo from './logo.svg';
import './App.css';

function contentHeader() {
  return (
    <header className='header' id='header'>
      <h1 className='studentName'>
        Sally Student
      </h1>
      <h4 className='tag'>
        Full stack developer excited to help companies achieve their visions in the modern world.
      </h4>
    </header>
  );
}

function contentMain(){
  return (
    <main>
      <section>
        <h2>Education</h2>
        <ul>
          <li>North Hall High School - 3.8 GPA</li>
          <li>Georgia State University - Bachelor's in Health Informatics</li>
          <li>Thinkful - Engineering Immersion</li>
        </ul>
      </section>
      <section>
        <h2>Work History</h2>
        <p>
          <b>Walmart - Assistant Manager</b><br />
          <i>Jun 2016-Feb 2018</i><br />
          Work up shift schedules, train new employees, oversee inventory and ordering of new stock, handling high-level customer issues, checking out and counting drawers of registers<br />
          <br />
          <b>US Army - Military Secretary</b><br />
          <i>Mar 2018-Nov 2019</i><br />
          Filing and managing of military records for Col. Phil Darnell. Assisted the Col in disseminating information to subordinates, and performing various other military duties when required. Also handled scheduling meetings, and office management in the Colonel's absence.<br />
        </p>
      </section>
    </main>
  )
}

function contentFooter(){
  return (
    <footer>
      <address>
        Sally Student<br />
        <a href="mailto:sallystudent@gmail.com" target="_blank">sallystudent@gmail.com</a><br />
        <a href="tel:+14042230987">(404)223-0987</a><br />
        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/05/29/16/ww-11.jpg?w968h681" alt="Action Shot" />
      </address>
    </footer>
  )
}


export default {
  contentHeader,
  contentMain,
  contentFooter,
}

//css
//props