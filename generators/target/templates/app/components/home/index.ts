import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {NGReact} from './components/ng-react/index';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./template.html')
})


export class Home implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    NGReact.initialize('Hello From React!');
  }

}
