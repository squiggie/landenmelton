import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string;
  position: string;
  description: Array<String> = [];
  projects: Array<any> = [];
  project = {
    img: '',
    title: '',
    description: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    link: ''
  };

  constructor() {
    // setup descriptions
    this.description.push('Hello, my name is Landen. I\'m a mobile and web developer that\'s been doing what I do for almost 15 years. Having worked for small and large companies, I know what it takes to make projects happen. I\'ve worked with startups that only have a few hundred dollars to companies that have endless budgets and each of my customers get the same amount of energy and attention from me.');
    this.description.push('I have extensive experience building and maintaining back end systems for financial instututions. I\'ve worked with and supported datacenter and cloud infrastructure systems for years. If your system run Windows or Linux, I\'ve likely dealt with it before. From Apache to Nginx, Powershell to Bash, Java to Javascript, I\'ve probably had to hack on it or design and implement full systems with it.');
    this.description.push('My most recent passion is designing and building mobile and web applications using Wordpress, HTML, CSS and Javascript; specifically dealing with frameworks like Angular and Ionic. If you\'re looking for a developer with extensive experience, that can clearly communicte needs, specifications, deadlines, cost and more, you\'ve found him. I\'d love to speak with you about your next project.');

    const project1 = this.project;
    project1.img = 'assets/devotable-min.png';
    project1.title = 'Devotable';
    project1.description = 'Devotable is a daily devotion website and mobile application that allows users to read and study daily Bible devotions from various authors.';
    project1.link = 'http://devotableapp.com';
    this.projects.push(project1);
  }
}
