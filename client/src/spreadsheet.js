const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('1vPreqXORmA9kow-FFAz5KArkesoAD0qRjmoxyzL8A9Y');
// const creds = require('./google-credentials.json')

/*

This function accepts a string representing the target email.

Returns an objects with the following attributes: total_points, event_points, and meeting_points

*/
export default async function getPointsByEmail(targetEmail) {
    console.log("in getpointbyemail and doc is " + targetEmail);
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
        console.log("this error");
        console.log(err);
    }
//-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDzJt4jK+MvfvVJ\nmxO4sgRSRKhUI9ctwGZOEInX43MO8S8N+fkHZwrM0JyS2+mgWH8bhrORH3pWB5S6\n4j250zUz5Xe7n3bRosJzZnI/lOVQnfqE12WSgGaWp5Y3G7ofcRWh13OI5kEpbDTH\niHBmXiPiGRse8aFP5gVblIJ+DgirjyPcw/H3oB6k9w21sHyPDJ59lRES5gOjKavM\n3hEU56vzAuXRrLNHFqDD0IOVJhzDM9+BJoNY82vYivqHRoUkWxObcjyrEn/aNJun\no/ZpiZ1c0YawZLiuuOCU5lg+kfjrAFmIrsvCWnaoGTeyKeUmmydi+oGVoArcRouT\nlOEgzXyXAgMBAAECggEABw4KJPAZi9+9ozCWLmYv3Ok0DxjpHeE2tq4hKbvmMzlJ\nObkWgiH5vL6SxGoQCcB3k6dhX2UP6h4XMSLuUo1vvj06r51tV6DGzo1a5EBgNOoY\ngjEzt7/0+gsLvzaVPGNOEt+K8R5pJpgGogFx7W5u0RkUYd315bkRT7pr3NdwZfXX\nQ7GT6qizaMOei7DPUNYUUEs/xClNnIyRQg9/8LJAbPFTa3/T0GQehRq1Wj/vj304\njv3Wv5budjLEMbS3E0Koce9BVojx2P088P+iffJutOA5f51MNTeM/b0Eo9NLHrLh\nhLUIX1/iDujGM/IkboWdqab+AxzWKQSjVbYUa2buuQKBgQD/XWu3IdxQKTJvlt+K\nrqNVXYAV4bYm0Zbh5ZwxomvQ7KYLWbsBgSC0haEFOsMatW5Tcd8aiOgkeoEvOkdp\nwPjqGdlaxF9RAV1rbETKaHgodTNOPOt0wuLDUrsPo2/xaF4JpsYvIwBytJd12USX\njIqdM7MH4Ns3Q8vsMHNGM9KirwKBgQDzwavjSxRfr+78DP9BwprPPAJk46Fi/3VU\nn3bqzA37Cm9iMx1XALxhV2Xj3sHQQCcl2LM3WHfIutXXWps9lnHAaiT/AnaMOONQ\ngurrcBTNP4qDmLn6riQJkEDogDc9szxM12aMRv/jqvarMx54ZGhtvdUEbcWHwDjg\nGPYaFjJemQKBgACbnFIHRpr6PiB933JZEBJ38oIa03AsN4u6HDESDeelaI/GWuea\nAxXq64MzrJs3q1ePgdRyVvsfP4d5QApEZ1NHVHke1os+0ZYb394LeZ2/Caw6AOV6\nQUftvnw/C1krwm2LdBVQpAOh4mppZfxmXT4ajWaLZnovMyEQzHVyUiIJAoGBAJIN\nZVSXU+nRnLxhfUCFvgSVzElvKvAKaN7/fV1KTsYwhnSsc9QBmN4qY96ZRj/lcI94\nvElZNMyNRjv3CjVow1erQeeaLjXukCVZjDDtw0kH3ZLkG+tcFDO2v22QBYlur57L\nIaLDl+duNMZ3prY0U24N5Gj27Phd8LY1vp/61MthAoGBANZF5FKtobLxlBBo7215\nBTjP46SjoEPtTuDhMys8r6E2IWHf2wOo9CbFVsADlMySC76gBzdq/AnwmLU0BIR8\ng4zjII3cCzTDcA6LXjYA3+IdnKJEF8c5SOnHz5nL9yBjR/Ob+bZwTPIs751dP0g1\ns3m10Fcy1q+I1ysq3cJ+ohak\n-----END PRIVATE KEY-----\n
    try{
    await doc.loadInfo(); 
    }catch(err){
        console.log("that error");
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

