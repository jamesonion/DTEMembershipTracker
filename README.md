Dream Team Engineering (DTE) is a student organization that is dedicated to creating novel technologies to enhance the lives of the children at UF Health Shands.  We created an internal tool for DTE to help facilitate their operations. DTE members are able to create an account and view a calendar of events, view their points and status in the organization, as well as complete embedded google forms within the application for point opportunities and event sign-in.


## Testing the Application
Ensure that cookies are enabled.

Create an account using an email present within the google form below. Accounts can be created that are not on the google sheet, but they will not have any point information. Your password must contain at least 8 characters, mixed case, a number, and a special character. Alternatively, you can skip registration and use the following login to test the application:
joseph.brody@ufl.edu
Password123!

##Google Sheets
To switch the google sheet that is currently being read by the program (a test sheet is being read on deployment) begin by sharing the google sheet with the client_email defined below. Then copy the id of the sheet (found in url) and paste as the value passed to the GoogleSpreadSheet constructor in line 3 of /client/src/spreadhsheet.js.
Development Sheet: https://docs.google.com/spreadsheets/d/1vPreqXORmA9kow-FFAz5KArkesoAD0qRjmoxyzL8A9Y/edit?usp=sharing    

##Google Calendar
The current calendar can be switched by adding the new embedded code to line 28 of /client/src/views/events.js

##Google Forms
The current google form can be switched by adding the new embedded code to line 27 of /client/src/views/submit.js
