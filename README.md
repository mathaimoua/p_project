# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Setup

#### Install Node.js (v18 or higher recommended)

#### Be sure to create a database in supabase and have an ENV file similar to below:

REACT_APP_SUPABASE_URL=https://YOURPROJECTIDHERE.supabase.co
REACT_APP_SUPABASE_ANON_KEY=YOURSUPABASEANONKEYHERE


#### SQL Table setup for all 3 tables as well as allowing custom statements to be ran from app is found in CreateTables.md

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Purpose
This app pulls data from an API, stores it in a global state and prepares it for transformation. Once the user is content with the applied transformations, the report/data can be exported.

### Database
The app is tied to tables in supabase with an API key. The tables are protected with RLS with read-only access so sql injection is not possible through the app.

### Features
The app has built in defaults for SQL statements to be executed. The select element will also track the history of successful statements. Users have the ability to export to xlsx and csv. 
