var apiKey = require('./../.env').apiKey;

var doctorSearch = function() {

};

doctorSearch.prototype.issue = function(issue){
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${}&location=47.608013,-122.335167,50&limit=2&user_key=${}`
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


    $('.name').text(`${body.data[0].practices[0].name}`);
    // $('.city').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    // $('.state_long').text(`The humidity in ${city} is ${body.main.humidity}%`);
    // $('.street').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    // $('.street2').text(`The humidity in ${city} is ${body.main.humidity}%`);
    // $('.zip').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    // $('.phoneNum').text(`The humidity in ${city} is ${body.main.humidity}%`);
    // $('.website').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    // $('.availability').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
};


 //
 //     body.bikes.forEach(function(bike){
 //       // date in UNIX timestamp(formula to convert is =(((givenNumber)/60)/60)/24)+DATE(1970,1,1);
 //       if(bike.date_stolen >= 1511308800 && bike.date_stolen <= 1511848800)
 //       {
 //         $('#result').append(`Bike ID: ${bike.id}` +"<br>"+ `Bike title: ${bike.title}` +"<br>");
 //       }
 //     })
 //   }, function(error){
 //     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
 //   });
 // });

exports.doctorSearch = doctorSearch;
