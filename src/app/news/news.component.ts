import { Component, OnInit } from '@angular/core';
//import { user } from '../user';
import { newdata } from '../mockdata';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
  news = newdata;


}
