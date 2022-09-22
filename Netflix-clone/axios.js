import axios from "axios";
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
});

/*
    if we do instance.get('/foo-bar')
    now the url tht we send becomes "https://api.themoviedb.org/3/foo-bar"
    this just appends the same into the instance and then returns the same
*/
export default instance;
