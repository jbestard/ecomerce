import { Component } from '@angular/core';
import axios from 'axios';
//import * as qs from 'qs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(){


    var data = ""/*qs.stringify({
     'username': 'frontEndDev',
    'password': 'aecfqawZQU8PkpgU',
    'grant_type': 'password',
    'client_id': 'all' 
    });*/
   /* var config = {
      //method: 'post',
     // url: 'https://app.customily.com/api/token1',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Cookie': 'userToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6ImZyb250RW5kRGV2Iiwic3ViIjoiZnJvbnRFbmREZXYiLCJyb2xlIjoiVXNlciIsImlzcyI6ImFwcC5jdXN0b21pbHkuY29tIiwiYXVkIjoiYWxsIiwiZXhwIjoxNjM0OTY3MTQzLCJuYmYiOjE2MzIzNzUxNDN9.weRItwOvA8a38jdK3KLlQrCBBVesbGeqv4rlYaPF6aY'
      },
      data : data
    };
    
    // Make a request for a user with a given ID
      axios.post('https://www.google.com', config)
        .then(function (response:any) {
        // handle success
        console.log(response);
        })
        .catch(function (error:any) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });*/

  }

}
