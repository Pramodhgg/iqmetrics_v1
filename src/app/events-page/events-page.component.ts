import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';

import $ from 'jquery';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css'],
})
export class EventsPageComponent implements OnInit {
  faCoffee = faStar;
  faHalfStar = faStarHalf;
  isenroll = false;

  constructor(private route: Router) {}

  reviews = [
    {
      tagname: 'RA',
      name: 'Rohith A',
      date: '20/10/2020',
      time: '10:14:30',
      rating: 5,
      comments: 'Great deal of help for projects. Good feedback and materials.',
    },
    {
      tagname: 'SA',
      name: 'P Sumantha Aithal',
      date: '20/10/2020',
      time: ' 10:09:15',
      rating: 4,
      comments: 'The learning experience was really good.',
    },
    {
      tagname: 'AA',
      name: 'Anju Aravindan ',
      date: '20/10/2020',
      time: '10:14:30',
      rating: 4.5,
      comments:
        'I got to understand the use of Google colab and now i am able to code any ml program.',
    },
    {
      tagname: 'PK',
      name: 'Pavan Kumar H V',
      date: '20/10/2020',
      time: '10:25:43',
      rating: 4,
      comments: 'Everyone was friendly to us',
    },
    {
      tagname: 'SG',
      name: 'Sinchana G S',
      date: '20/10/2020',
      time: '11:03:35',
      rating: 4.5,
      comments: "Learning new topics that haven't known by me",
    },
    {
      tagname: 'AS',
      name: 'Anjana sree ',
      date: '20/10/2020',
      time: '11:46:38',
      rating: 4.5,
      comments: 'This was a better experience ',
    },
    {
      tagname: 'AR',
      name: 'Akhiya Ramesan',
      date: '20/10/2020',
      time: '11:47:02',
      rating: 4.5,
      comments: 'Internship trainer was really supportive and helpful.',
    },
    {
      tagname: 'AG',
      name: 'Amal George',
      date: '20/10/2020',
      time: '12:19:26',
      rating: 5,
      comments: 'Overall it was good. thank you!',
    },

    {
      tagname: 'KR',
      name: 'K Raksha',
      date: '20/10/2020',
      time: '17:41:27',
      rating: 4.5,
      comments: 'I got knowledge about machine learning',
    },
    {
      tagname: 'S',
      name: 'Shreya',
      date: '20/10/2020',
      time: '17:48:10',
      rating: 4.5,
      comments:
        'I got the knowledge of machine learning and got the idea to create own project',
    },
    {
      tagname: 'S',
      name: 'Sandeep',
      date: '20/10/2020',
      time: '19:33:09',
      rating: 4.5,
      comments: 'Nothing',
    },
    {
      tagname: 'AM',
      name: 'ABHIRAM K MADHU',
      date: '20/10/2020',
      time: '19:45:17',
      rating: 4.5,
      comments:
        'it would be good for students if you give the same course what they prefer',
    },
    {
      tagname: 'PN',
      name: 'POOJA M N',
      date: '20/10/2020',
      time: '21:24:12',
      rating: 4.5,
      comments: 'ITS  WAS GOOD EXPERIENCE FOR US',
    },
    {
      tagname: 'CD',
      name: 'clevan joyal dsouza',
      date: '22/10/2020',
      time: '09:32:48',
      rating: 4.5,
      comments: 'it was good experience',
    },
    {
      tagname: 'KM',
      name: 'Kirti Shankar M',
      date: '22/10/2020',
      time: '11:09:43',
      rating: 3.5,
      comments: 'Overall experience was good',
    },
    {
      tagname: 'SP',
      name: 'Spoorthi P',
      date: '23/10/2020',
      time: '13:52:02',
      rating: 4.5,
      comments:
        'It was a good learning experience overall. I wish you provide a internship course which emphasise more on coding in python which gives more confidence in coding. Thank you.',
    },
    {
      tagname: 'SA',
      name: 'Salman ahmed',
      date: '24/10/2020',
      time: '23:43:50',
      rating: 4.5,
      comments: 'No comments',
    },
    {
      tagname: 'MF',
      name: 'Mohamed Fazil',
      date: '27/10/2020',
      time: '18:58:16',
      rating: 4.5,
      comments:
        'It would be better if the mentor allocates a purticular time or session when he is free to ask doubts apart from class atleast once in a week and it would be appreciated for extended support is provided ',
    },
  ];
  ngOnInit(): void {
    this.route.navigate(['/programs']);
    window.addEventListener('scroll', () => {
      const parallaxEffect = document.querySelectorAll('.parallax');
      let srcollPosition = window.pageYOffset;
      $('.parallax').css({
        transform: 'translate(0px,' + -srcollPosition * 0.2 + '%)',
      });
    });
  }
  @HostListener('document:wheel', ['$event'])
  scrollfunction() {
    if (
      document.body.scrollTop > 2200 ||
      document.documentElement.scrollTop > 2200
    ) {
      $('mat-card').addClass('toggler');
    } else {
      $('mat-card').removeClass('toggler');
    }
  }

  showFeedback() {
    document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' });
  }

  isEnroll() {
    if (this.isenroll) {
      this.isenroll = false;
    } else {
      this.isenroll = true;
    }
  }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoHeight: true,
    autoplay: false,
    autoplayTimeout: 500,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    navSpeed: 1000,
    navText: ['', ''],
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
    nav: true,
  };
}
