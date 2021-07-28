======FUNCTIONALITY========
In this application, you should be able to add a new customer.
Based on what the customer inputs on the "allergies" field, when the customer clicks "view recipes" it should not return recipes that contain any allergens indicated by the customer.

=======WHAT WENT WELL=======
Setting up and getting the list of customers to display was fairly easy. Most of the initial set up and functionality worked as intended.

=======WHAT DIDN'T GO WELL=======
I had a lot of trouble getting the data from the API to appear on the browser. I was able to access it on the console, but it wouldn't display on the browser.
Learning to filter the recipes has definitely been a bit of challenge. As of now, it works if the allergen is hardcoded in the file rather than by customer input.

Also, my addform wouldn't work and took me hours to figure out why. 

I ran out of time in trying to figure out to add and combine the allergens API to work along the recipes API. The initial set up on the back end took me about two and a half days because I ran into a lot of trouble with the files structures, the correct key words and codes I needed to make it work, then the migrations weren't working, and then deploying to Heroku was extremely difficult because the errors on the Heroku logs weren't super clear in pinpointing the main problem. Once the migrations worked, it kept saying something about a buildpack, but I had added the buildpack. Then I realized I had some files one level too deep that I needed to move out to the root directory; however, it still wouldn't deploy. Finally, after the files and migrations were done correctly, the final error turned out to be a typo in the manage.py file.

Additionally, I spent a lot of time googling and asking a few classmates about pulling from a third party API on the Django backend, but none of them were sure how to do it and kept saying to pull on the front end. The docs and videos I found were all about making the API with Django rather than pulling from an outside API. As a result, I was not able to figure out in time how to set up a portion in the back end to store the recipes and allergens API.

I did create models for them, initially in the same models.py as the customers model, because some information I found online talked about having models in the same file and I was able to create a table for the recipe in PostgreSQL, which I can access via PostgreSQL, but I was not able to connect it. However, after talking to a teammate about it (a teammate from one of my volunteer projects) he said it would make more sense, and I agree, to have the recipes/allergens models in their own file. However, after further discussion and due to the limited time, it was considered that refactoring the back end to add the API would be very time costly and may not fully work.

=====FUTURE IMPROVEMENTS========
1. Take more time in figuring out how to properly pull from the API on the backend and store the data on the PostgreSQL table, rather than manually writing it.
2. In order to have better functionality and customers to view their own page and selections, I feel authentication would be needed, which I didn't have enough time to complete.
3. Rather than clicking a button to see the recipes, maybe once logged in, the customer can automatically see all of the recipes that he/she would be able to get based on their input.
4. A much better design of the front end.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
