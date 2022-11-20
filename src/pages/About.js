import React from 'react';
import classes from './About.module.css';

const About = () => {
  return (
    <div>
      <p className={classes['about__source-code']}>
        Fun project for learning. View on{' '}
        <a
          href='https://github.com/parvizbabakishiyev/countries'
          target='_blank'
          rel='noreferrer'
        >
          Github
        </a>
      </p>
      <p className={classes['about__credits-header']}>Credits: </p>
      <p className={classes['about__credits']}>
        Country information is available via{' '}
        <a href='https://restcountries.com/' target='_blank' rel='noreferrer'>
          <span className={classes['about__credits-link']}>REST Countries</span>
        </a>
      </p>
      <p className={classes['about__credits']}>
        Icons used in the project:{' '}
        <a
          href='https://github.com/krystonschwarze/coolicons'
          target='_blank'
          rel='noreferrer'
        >
          <span className={classes['about__credits-link']}>
            coolicons by Kryston Schwarze
          </span>
        </a>
      </p>
    </div>
  );
};

export default About;
