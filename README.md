START WITH:

npm install
npm start (if you want to run the program)

CONFIGURE THE DEBUGGER:

Go to the Run view (Ctrl+Shift+D) and click on the gear button or Create a 'launch.json' link to create a launch.json debugger configuration file. Choose 'Edge: launch' from the Select Environment dropdown list. This will create a 'launch.json' file in a new .vscode folder in your project which includes a configuration to launch the website.

Change the port of the url from 8080 to 3000 (default port for new react projects).

LINTING:

First, install the ESLint command-line tool:
npm install -g eslint

Then install the ESLint extension by going to the Extensions view and typing 'eslint'.

Once the ESLint extension is installed and VS Code reloaded, you'll want to create an ESLint configuration file, .eslintrc.js. You can create one using the extension's ESLint: Create ESLint configuration command from the Command Palette (Ctrl+Shift+P).

The command will prompt you to answer a series of questions in the Terminal panel. Take the defaults, and it will create a .eslintrc.js file in your project root.

ESLint will now analyze open files.  You can modify the ESLint rules in the .eslintrc.js file.

INSTALLING REDUX:

Redux is not React specific by nature.  So it's needed to install react-redux on top of redux:

npm install redux react-redux

To work more efficiently with redux, you should work with redux-toolkit.  This will spare a lot of lines of code and make you redux related code more readable, maintainable and lean.  With regular redux.  To install redux-toolkit:

npm install @reduxjs/toolkit


HOW DOES REDUX WORK?

Redux is all about having one central data (State) store in your application.  Whichever cross-component or app-wide state you have goes into this one store.  

If some data there changes, we want to know about that in our component so that the UI can change.

For that, our Components subscribe to the store.  Then, whenever data changes, the store notifies the subscribed Components.  

How can we change the data present in the store?  One important rule: Components never ever directly manipulate the store data.  We have the subscription, but we don't have a direct data-flow in the other direction.

Therefore, we have a Reducer Function whose purpose is to update the Store Data.  How can we connect our components to those Reducer Function?  We can through "Actions".

Components dispatch Actions, we could also say that they "trigger" Actions.  An Action is simply a javascript object which describes the kind of operation the reducer should perform.  

Redux forward those actions to the reducer, reads the description of the desired operation that should be performed, and then, this operation is performed by the Reducer.  This will have for effect to replace the existing state in the Data Store, by a new one.  

When that happens, subscribed Components are notified and are re-executed.

Read the following links for better understanding of Redux Pros and Cons :
https://blog.boardinfinity.com/working-with-redux-pros-and-cons/
https://redux.js.org/faq/general#when-should-i-use-redux

WHICH IS BETTER?

"You may be thinking now, so which is better? There is no answer as to which is better. Instead, it's the same case as almost every other tool out there, it depends on what you're building.
If you have a small codebase with hardly any state changes, use vanilla React or maybe even Context API.
If you have a large app, multiple people working on it and states being used in many places of your app, you may need to consider using Redux.
Need complex logic when your updating the state, use Redux.
There is a great deal of planning that needs to happen before starting on your next big idea. Most of the time newbies will think of React and Redux as a combo deal when really they should focus on mastering React fundamentals."

source: https://levelup.gitconnected.com/you-might-not-need-redux-883cd1fcbab0