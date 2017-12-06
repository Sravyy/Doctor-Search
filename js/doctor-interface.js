var Doctor = require('../js/doctor.js').doctorSearch;
// var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  let doctorSearch = new Doctor();
  $("#output").hide();

  $('#doctorListByIssue').click(function() {
    let userName = $('#userName').val();
    let issue = $('#issue').val();
    doctorSearch.issue(issue);
    $('#issue').val("");
    $('#userName').val("");

    $("#output").show();
    $('.input1').hide();
    $('.input2').hide();
});

  $('#doctorListByName').click(function() {
    let docName1 = $('#docName1').val();
    let docName2 = $('#docName2').val();
    doctorSearch.name(docName1, docName2);
    $('#docName1').val("");
    $('#docName2').val("");

    $("#output").show();
    $('.input1').hide();
    $('.input2').hide();

});

// $('#pagination-demo').twbsPagination({
//        totalPages: 35,
//        visiblePages: 7,
//        onPageClick: function (event, page) {
//            $('#page-content').text('Page ' + page);
//        }
//    });

});
