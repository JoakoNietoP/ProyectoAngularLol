import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { AcercaDeComponent } from '../acerca-de/acerca-de.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
