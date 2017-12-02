var apiKey = require('./../.env').apiKey;

var doctorSearch = function() {

};

doctorSearch.prototype.issue = function(issue){
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=47.608013,-122.335167,50&limit=10&user_key=${apiKey}`
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let body = JSON.parse(response);

    if(body.data.length == 0){
      return $("#output").text("No Doctors found for this search!");
    } else{

      body.data.forEach(function(item){

        if(item.practices[0].accepts_new_patients === true){

        $("#output").append(`Doctor's Name: ${item.profile.first_name}  ${item.profile.last_name}`+ "<br>"+ `Visit Address: ${item.practices[0].visit_address.city}, ${item.practices[0].visit_address.state_long}, ${item.practices[0].visit_address.street}, ${item.practices[0].visit_address.street2}, ${item.practices[0].visit_address.zip}`+ "<br>" +`Website Link: ${item.practices[0].website}` + "<br>" + `Phone Number: ${item.practices[0].phones[0].number}` +"<br>"+ `Accepting New Patients: yes` +"<br>"+"<br>");
      } else {
        $("#output").append(`Doctor's Name: ${item.profile.first_name}  ${item.profile.last_name}`+ "<br>"+ `Visit Address: ${item.practices[0].visit_address.city}, ${item.practices[0].visit_address.state_long}, ${item.practices[0].visit_address.street}, ${item.practices[0].visit_address.street2}, ${item.practices[0].visit_address.zip}`+ "<br>" +`Website Link: ${item.practices[0].website}` + "<br>" + `Phone Number: ${item.practices[0].phones[0].number}` +"<br>"+ `Accepting New Patients: yes` +"<br>"+"<br>");
        }
    });
  };
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
};


doctorSearch.prototype.name = function(docName1, docName2){
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${docName1}&last_name=${docName2}&location=47.608013,-122.335167,50&limit=10&user_key=${apiKey}`
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let body = JSON.parse(response);

    if(body.data.length == 0){
      return $("#output").text("No Doctors found for this search!");
    } else{

      body.data.forEach(function(item){

        if(item.practices[0].accepts_new_patients === true){

        $("#output").append(`Doctor's Name: ${item.profile.first_name}  ${item.profile.last_name}`+ "<br>"+ `Visit Address: ${item.practices[0].visit_address.city}, ${item.practices[0].visit_address.state_long}, ${item.practices[0].visit_address.street}, ${item.practices[0].visit_address.street2}, ${item.practices[0].visit_address.zip}`+ "<br>" +`Website Link: ${item.practices[0].website}` + "<br>" + `Phone Number: ${item.practices[0].phones[0].number}` +"<br>"+ `Accepting New Patients: yes` +"<br>"+"<br>");
      } else {
        $("#output").append(`Doctor's Name: ${item.profile.first_name}  ${item.profile.last_name}`+ "<br>"+ `Visit Address: ${item.practices[0].visit_address.city}, ${item.practices[0].visit_address.state_long}, ${item.practices[0].visit_address.street}, ${item.practices[0].visit_address.street2}, ${item.practices[0].visit_address.zip}`+ "<br>" +`Website Link: ${item.practices[0].website}` + "<br>" + `Phone Number: ${item.practices[0].phones[0].number}` +"<br>"+ `Accepting New Patients: yes` +"<br>"+"<br>");
        }
    });
  };
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
  };



exports.doctorSearch = doctorSearch;
