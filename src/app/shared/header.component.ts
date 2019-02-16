import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
    constructor() { }
    pageTitle = 'Products';
    description = 'Resize this responsive page to see the effect!';

    ngOnInit() {
        console.log('On Init');
     }
}
