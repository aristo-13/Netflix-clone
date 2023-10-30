import axios from "axios"

export default axios.create(
 {
    baseURL:'https://api.themoviedb.org/3',
    /* headers:{
         accept: 'application/json',
        'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTU5OGFlMzhmMGNlYjFmZjQ5ZDMzMjU3MmM5MDA2ZSIsInN1YiI6IjY1MTQ4NjNkYTE5OWE2MDBhYjE3ODZkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BnepoUV2gJqirkIfzpEQKmd7CcokAg1eiRTl7GmP2tQ',
    } */
 }
) 
