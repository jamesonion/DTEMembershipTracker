const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('1vPreqXORmA9kow-FFAz5KArkesoAD0qRjmoxyzL8A9Y');
// const creds = require('./google-credentials.json')

/*

This function accepts a string representing the target email.

Returns an objects with the following attributes: total_points, event_points, and meeting_points

*/
export default async function getPointsByEmail(targetEmail) {
    console.log("in getpointbyemail and doc is " + doc);
    // alert("ENV: " + process.env.REACT_APP_DB_URI)
    // alert("KEY: " + process.env.REACT_APP_private_key)

    // if(process.env.REACT_APP_private_key) {
        // alert("It exists")
    // }
   
    try{
    await doc.useServiceAccountAuth({
        client_email: process.env.REACT_APP_client_email,
        private_key: process.env.REACT_APP_private_key
        // private_key: process.env.REACT_APP_private_key.replace("\\\\n", "\n")
    });}
    catch(err){
        console.log(err);
    }

    try{
    await doc.loadInfo(); 
    }catch(err){
        console.log(err);
    }

    const pointsSheet = doc.sheetsByIndex[0];
    console.log("points sheet: " + pointsSheet);
    const rows = await pointsSheet.getRows();
    console.log("rows: "+ rows);
    var data = {
        total_points: 0,
        event_points: 0,
        meeting_points: 0
    };

    alert("Beginning for each row")
    rows.forEach(row => {

        if(row.EMAIL != undefined && row.EMAIL.toLowerCase() == targetEmail.toLowerCase()) {
            
            if(row['TOTAL POINTS'] != '') { data.total_points = parseInt(row['TOTAL POINTS']); }
            if(row['EVENT POINTS'] != '') { data.event_points = parseInt(row['EVENT POINTS']); }
            if(row['MEETING POINTS'] != '') { data.meeting_points = parseInt(row['MEETING POINTS']); }

            return;

        }
        
    })

    return data;
}

// module.exports.getPointsByEmail = getPointsByEmail;


// Here is an example of how to call the above function:

// async function example() {
//     var testEmail = 'joseph.brody@ufl.edu'
//     const result = await getPointsByEmail(testEmail)
//     console.log(`${testEmail}:\n\tTotal Points: ${result.total_points}\n\tEvent Points: ${result.event_points}\n\tMeeting Points: ${result.meeting_points}`);
// }

// example()

