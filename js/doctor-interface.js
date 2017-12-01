var doctor = require('../js/doctor.js').doctorSearch;


$(document).ready(function(){


  $('#doctorListByIssue').click(function() {
    let issue = $('#issue').val();
    $('#issue').val("");

    let doctorSearch = new doctor(issue);

     $("#output").show();




















});
});
