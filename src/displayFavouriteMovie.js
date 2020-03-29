import React, {Component} from 'react'

class displayFavouriteMovie extends Component {
	
	render() {
    //console.log("Props",this.props);
     
    const profiles  = this.props.profile;
	const users = this.props.user;
	const movies = this.props.movie;
      
      
     return (
       <div>
     	<ol>
       		{profiles.map(prof => 
             { const userName = users[prof.userID].name;
               const favMovieName = movies[prof.favoriteMovieID].name;
  
           	return (
             <li key = {prof.id}>  <p> {userName} favourite movie is {favMovieName} </p> </li>
			 );

			})}</ol>

	</div>
     )}}






export default displayFavouriteMovie