import {
    Component,
    OnDestroy,
    OnInit,
    ɵbypassSanitizationTrustStyle,
} from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';

import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


import $ from 'jquery';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    userLoggedIn = false;
    successMessage: string = '';
    faPrev = faAngleDoubleLeft;
    faNext = faAngleDoubleRight;


    constructor() { }
    ngOnInit(): void { }
    ngOnDestroy(): void {
    }
    nextIcon = '<span class="material-icons">keyboard_arrow_left</span>';
    prevIcon = '<span class="material-icons">keyboard_arrow_right</span>';

    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        navSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 4000,
        autoplayHoverPause: false,
        lazyLoad: true,
        autoHeight: false,
        navText: [this.nextIcon, this.prevIcon],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            740: {
                items: 1,
            },
            940: {
                items: 1,
            },
        },
        nav: false,
    };
}
