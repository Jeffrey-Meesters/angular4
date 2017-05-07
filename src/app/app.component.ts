import { Component } from '@angular/core';
import $ from 'jquery/dist/jquery';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
  <div class="wrapper">
    <h1>Hey guys!</h1>
    <p> I am {{myObject.name}} and I'm {{myObject.age}} years young.
    I life in the {{myObject.location}}.</p>
    <p>My girlfriends' name is {{myObject.girlfriendsName}}.</p><br>

    <ul>
      <li *ngFor="let arr of myArr"> {{arr}}</li>
    </ul>

    <ul>
      <li *ngIf="my == 'something'"> I exist</li>
    </ul>

    <ul>
      <li *ngIf="!my; else otherTmpl"> I exist</li>
    </ul>

    <ng-template #otherTmpl>No, I do!</ng-template>

    <div *ngIf="truthy; then tmpl1 else tmpl2"></div>
    <ng-template #tmpl1>Truth!</ng-template>
    <ng-template #tmpl2>false!</ng-template>
    <br><br>
    <!-- propperty binding -->
    <img [@myAnimation]="state" (mouseover)="animateMe()" (mouseleave)="animateMe()" src="{{angularLogo}}">
    <img [@myAnimation]="state" (mouseover)="animateMe()" (mouseleave)="animateMe()" [src]="angularLogo">
    <img [@myAnimation]="state" (mouseover)="animateMe()" (mouseleave)="animateMe()" bind-src="angularLogo">

    <button class="switcher" [disabled]="buttonStatus">I change color</button>
    <button (click)="myEvent($event)">Click Button</button>
    <button (mouseenter)="myEvent($event)">Hover button</button>



  </div>
  `,
  styleUrls: [
    './app.component.css'
  ],
  animations: [
    trigger('myAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state ('large', style({
        transform: 'scale(1.2)',
      })),

      transition("small <=> large", animate('300ms ease-in')),
    ]),
  ]
})
export class AppComponent {
  myObject = {
    name: "Jeffrey",
    age: 28,
    location: "Netherlands",
    girlfriendsName: "Laura"
  }

  myArr = ["him", "hers", "yours", "something",];

  my = "something"

  truthy = true;

  angularLogo = "https://angular.io/resources/images/logos/angular/angular.png";

  buttonStatus = false;

  myEvent(event) {
    if (this.buttonStatus) {
      this.buttonStatus = false;
      $(".switcher").css("background-color", "grey")
    } else {
      this.buttonStatus = true;
      $(".switcher").css("background-color", "#42bcf4")
    }
  }

  // buttonColor = true;
  //   myEvent(event) {
  //     console.log(event)
  //     if (this.buttonColor) {
  //      return this.buttonColor = false;
  //    } else {
  //      return this.buttonStatus = true;
  //    }
  //   }

  state:string = 'small'

  animateMe() {
    this.state = (this.state === 'small' ? 'large': 'small');
  }
}
