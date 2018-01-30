# Demo
Sample app using React, Redux and Es6


## Get Started
1. **Install Node Packages.** - `npm install`
2. **To Run the application** - `npm start`

## Please add your own api key for the movie module 
path for the code to be added : src/components/movie/index.js
  ```javascript
  /* avoid */
    this.state = {
        movies: this.props.movies,
        apikey: 'xyz', // please use your api key
        errors: {}
    };
  ```

