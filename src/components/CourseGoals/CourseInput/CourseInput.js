import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const[isValid,setisValid]=useState(false)
  const goalInputChangeHandler = event => {
    if(event.target.value.length>0)
    setisValid(false)
    setEnteredValue(event.target.value);


  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim(" ").length===0)
    {
  
    setisValid(true)
    return
    }

    else

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? "invalid" : "" } `}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit" isValid={isValid} >Add Goal</Button>
    </form>
  );
};

export default CourseInput;
