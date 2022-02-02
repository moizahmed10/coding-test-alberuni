# Running The Project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Code WalkThrough

A separate folder was created for components where the there tables reside.
The Tables are passed the data via props and are purely presentational components

The App.js file contains all the data and control logic.

The data is read from the JSON file in the useEffect using the fetch API
The response is then restructured and stored into 3 separate state variables for each respective table.

The data is the mapped and displayed in the table components

For the Search Functionality the input from the user in the search is stored and checked if it exists in any of  the existing data objects using the .filter method

A custom modal was added which pops up when the user clicks the add button.

When the user hits submit checks for length are run to ensure that no empty values are passed.
If the check passes then the object is added to the relative state if not then an error message is displayed.


# Question 1

I spent 2 hours 40 min on this assignment. If i had more time i would have liked to focus more on the styling aspect of the application

# Question 2

Data Mapping and displyaing
Search
Modal