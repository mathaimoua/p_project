# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Setup
You will need a database in supabase with the url and an anon key. Make sure lib>supabaseClient.js is set up like below and use an env file:

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)


### Purpose
This app pulls data from an API, stores it in a global state and prepares it for transformation. Once the user is content with the applied transformations, the report/data can be exported.

### Database
The app is tied to tables in supabase with an API key. The tables are protected with RLS with read-only access so sql injection is not possible through the app.

### Features
The app has built in defaults for SQL statements to be executed. The select element will also track the history of successful statements. Users have the ability to export to xlsx and csv. 
