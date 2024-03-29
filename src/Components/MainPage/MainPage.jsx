import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Introduction from './SubSections/Introduction';
import About from './SubSections/About';
import Work from './SubSections/Work';
import Contacts from './SubSections/Contact';
import Projects from './SubSections/Projects';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3),
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  pageBreak: {
    height: '70vh',
  },
  badgeHelper: {
    padding: theme.spacing(10),
  },
  topSpace: {
    padding: theme.spacing(6),
  }
}));

const scrollToRef = (ref) => {
  if (ref.current) {
    window.scrollTo({ top: ref.current.offsetTop, left: 0, behavior: 'smooth' });
  }
};

export default function MainPage(props) {
  const classes = useStyles();

  const refs = {
    info: useRef(),
    about: useRef(),
    work: useRef(),
    projects: useRef(),
    contact: useRef(),
  }

  const {selectedAnchor, setSelectedAnchor} = props;

  useEffect(() => {
    if (selectedAnchor) {
      if (selectedAnchor === 'info') {
        scrollToRef(refs['info'])
      }
      else {
        scrollToRef(refs[selectedAnchor]);
      }
      setSelectedAnchor();
    }
  }, [selectedAnchor, setSelectedAnchor, refs])

  return (
    <div className={classes.root} >

      <div ref={refs['info']} className={classes.container}>
        <div className={classes.topSpace} />
        <Introduction setSelectedAnchor={props.setSelectedAnchor} />
      </div>
      <div className={classes.pageBreak} />

      <div ref={refs['about']} className={classes.container}>
        <div className={classes.topSpace} />
        <About />
      </div>
      <div className={classes.pageBreak} />

      <div ref={refs['work']}>
        <div className={classes.topSpace} />
        <Work />
      </div>
      <div className={classes.pageBreak} />

      <div ref={refs['projects']}>
        <div className={classes.topSpace} />
        <Projects />
      </div>
      <div className={classes.pageBreak} />

      <div ref={refs['contact']}>
        <div className={classes.topSpace} />
        <Contacts />
      </div>
      <div className={classes.pageBreak} />

    </div>
  )
}
