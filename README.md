# XML Parser

This is an electron app that parses a directory of xml files into JSON and stores them in both a database and local storage.

Upon starting the app the user will be asked to type the paths to the xml input directory and to an output directory, where a local copy of the data will be stored.
The JSON data as well as all the ReturnedDebitItems will be stored on a mongoDB database and can be viewed by clicking on the 'View Returned Debit Items' tab.
A loading spinner is displayed while the files are being parsed.

## Running the app

`$ npm install`

The app requires that you are running a mongoDB database alongside it. Make sure you have mongo installed on your system and run it in a terminal.

`$ mongod`

In a second terminal, start the server

`$ npm run server`

The app then needs to be built using webpack, do this in a third terminal window

`$ npm run bundle`

Finally the app can be launched from a fourth terminal

`$ npm run dev`

## Using the app

Make sure the paths to the directories look as follows...

`/path/to/directory/`

For example, If i had my input and output folders on my Desktop (linux)

`/home/william/Desktop/input/`

There is a folder with some example xml files located in the repo if needed, though I recommend creating an input and output folder on the Desktop (it results in less typing).

## Running tests

Ensure you have installed all dependencies

`$ npm install`

Run the test suites

`$ npm test`

## For the future

If I were to carry on with this project I would build the electron app into downloadable .exe or .deb file. This would make it much easier to run since the webpack bundle would be prebuilt and the app could be launched like any other desktop program.
I would also host the database and server somewhere other than localhost such as Heroku. I would also add some extra features like the ability to search through the ReturnedDebitItems by date for example.


