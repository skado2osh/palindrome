import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
title = "kk";
stringGiven = "";


isPalindrome=function (stringGiven:string): boolean{
if (stringGiven== undefined)
return false;
  const reversed= stringGiven.split("").reverse().join("");
  return reversed === stringGiven;
}
//if (stringGiven== undefined)
//return false;
    //if(stringGiven ==  stringGiven.split("").reverse().join(""))
    //return true;
    //else return false;}

}
