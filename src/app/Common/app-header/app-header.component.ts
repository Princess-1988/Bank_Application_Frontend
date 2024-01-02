import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  
    @Input() public title: string | undefined ;
    @Input() public isUserLoggedIn: boolean | undefined ;
    @Input() public isAdmin: string | undefined ;
    @Input() public isUser: string | undefined ;
  
}
