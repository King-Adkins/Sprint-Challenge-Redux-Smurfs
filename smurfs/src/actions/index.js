import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING = 'FETCHING';
export const UPDATING = 'UPDATING';
export const CREATING = 'CREATING';
export const DELETING = 'DELETING';
export const ERROR = 'ERROR';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

//Writing empty functions just to have them defined

// get the data from api
export const getSmurfs = () => {
  return (dispatch) => {
    dispatch( {type: FETCHING } );
    axios
      .get('http://localhost:3333/smurfs')
      .then( (response) => {
        dispatch({type: UPDATING, smurfs: response.data})
      } ) 
      .catch( (err) => {
        dispatch({type: ERROR, errmsg: 'There was a problem! The Smurfs couldnt get past Gargamel!'})
      })
  }
};

//post to add new smurf
export const addSmurf = (smurf) => {
  return (dispatch) => {
    dispatch({type: CREATING } );
    axios
      .post('http://localhost:3333/smurfs', smurf )
      .then((response) => {
        dispatch({type: UPDATING, smurfs: response.data});
      })
      .catch((err) => {
        dispatch({type: ERROR, errMsg: "Azrael caught the Smurf! Try again."})
      });
  };
};

//stretch edit smurfs
export const editSmurf = () => {};

//stretch delete
export const deleteSmurf = () => {};