import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-icon',
  templateUrl: './favorite-icon.component.html',
  styleUrls: ['./favorite-icon.component.css']
})
export class FavoriteIconComponent implements OnInit {
  liked = false;

  onClick = () => this.liked = !this.liked;
  constructor() { }

  ngOnInit() {
  }

}
