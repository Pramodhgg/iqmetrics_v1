import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import $ from 'jquery';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
    constructor() {

    }
    ngOnInit(): void { }

    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 1000,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        navText: ['', ''],
        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 2,
            },
            740: {
                items: 5,
            },
            940: {
                items: 5,
            },
        },
        nav: true,
    };
}

