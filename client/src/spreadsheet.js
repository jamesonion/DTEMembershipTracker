

const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = JSON.parse(GOOGLE_CREDENTIALS)
const doc = new GoogleSpreadsheet('1vPreqXORmA9kow-FFAz5KArkesoAD0qRjmoxyzL8A9Y');

/*

This function accepts a string representing the target email.

Returns an objects with the following attributes: total_points, event_points, and meeting_points

*/
export default async function getPointsByEmail(targetEmail) {

    

    await doc.useServiceAccountAuth({
        client_email: creds.client_email,
        private_key: creds.env.private_key
    });

    
    await doc.loadInfo(); 

    const pointsSheet = doc.sheetsByIndex[0];

    const rows = await pointsSheet.getRows();

    var data = {
        total_points: 0,
        event_points: 0,
        meeting_points: 0
    };

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

