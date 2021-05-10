import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { faHeadset, faHandPointLeft, faHandPointRight, faHandPointDown, faPoll, faTruckLoading, faUserFriends, faFilePowerpoint, faFeather, faSearch, faPen } from '@fortawesome/free-solid-svg-icons';

import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';


import $ from 'jquery';

@Component({
    selector: 'app-consultancy',
    templateUrl: './consultancy.component.html',
    styleUrls: ['./consultancy.component.css']
})
export class ConsultancyComponent implements OnInit {
    faUserTie = faUserTie;
    faUsersCog = faUsersCog;
    faHeadset = faHeadset;
    faBusinessTime = faBusinessTime;
    faHandPointLeft = faHandPointLeft
    faHandPointRight = faHandPointRight
    faHandPointDown = faHandPointDown
    faPoll = faPoll
    faUserFriends = faUserFriends
    faFilePowerpoint = faFilePowerpoint
    faFeather = faFeather
    faSearch = faSearch
    faPen = faPen
    faTruckLoading = faTruckLoading
    faqs = [
        {
            ques: 'What is IQmetrics Solution ‘specialty?',
            ans: 'We do most of our work with firms that provide services to businesses and consumers. We work in: Business Process Outsourcing, Customer Relationship Management, Consumer Packaged Goods, ecommerce & Internet Services, Financial Services, Manufacturing, Professional Services, Software Development, Telecommunications, and Utilities/Energy. We have completed numerous searches in: Accounting and Finance, Business Development, Executive and General Management, Human Resources, Information Technology, Legal, Operations, Sales and Marketing, Software Development, Manufacturing, Utilities/Energy, and Engineering. Most of our work is in the C-suite and their direct reports (EVP, SVP, VP, and Director levels). We are at our finest finding strategic, difficult to locate and entice individuals for those situations when cultural and chemistry fit are key to the executive’s success, and helping to staff core executive management teams for growing, early stage, or turnaround companies.'
        },
        {
            ques: 'What are your fees?',
            ans: 'Our fee for services is 33% of the successful candidate’s anticipated compensation. Invoices are released as follows: 1/3 to initiate the search, 1/3 30 days later, and a final invoice when the search is completed. A final adjustment to the third invoice may be necessary to “true the wheel” after the search is completed.'
        },
        {
            ques: 'Are your fees negotiable?',
            ans: 'Yes, to a certain degree. If we execute multiple searches for a client, a reduced fee of 25% is billed for second and third searches. The searches must be similar. What is your risk? Why should I pay up front? I pay for result. When you pay a recruiter a “success fee”, you do not have the benefit of a “trusted advisor”; you have a recruiter who is only interested in closing a deal, not in undertaking a serious project on your behalf. When you “invest” in the process, you become a partner in our process. We are both stakeholders in the project.'
        },
        {
            ques: 'What is your success rate?',
            ans: 'Our success rates 98%. We have never failed to deliver qualified talent to our clients. The only exception being when the client has decided to either cancel or suspend the search for their own reasons. Has IQmetrics Solution ever had to reimburse fees  for non-performance? Have you ever had to honor the replacement guarantee? Since we have been in business, we have never had to honor the replacement guarantee or reimburse fees to a client for any reason, including failure to identify qualified candidates'
        },
        {
            ques: 'How long is your guarantee?',
            ans: 'We guarantee our searches for one year. In the event that the candidate(s) hired through our search engagement leaves within a year of employment, we will reinitiate, upon your request, a search for the same position and level of candidate as the original placement, and credit to this effort all the fees paid on the original engagement, subject to the following conditions:  The placement’s departure is for cause, the result of his or her inability to perform the responsibilities of the position as defined in the Position Description agreed to at the start of the assignment, or is a result of a discovery of a misrepresentation of his or her credentials, or the placement resigns, unless the focus of the job has changed requiring an unanticipated relocation, or the responsibilities or authority of the position are significantly different than represented at the time of hiring.'
        },
        {
            ques: 'What makes iQmetrics Solution different? Why should we engage your firm?',
            ans: 'We take the time and have the skill to fully understand your company and your unique situation. Our search process is rigorous and thorough, insuring you get a “true” search, not just a database dump of the “usual suspects”. We are out in front of you so you don’t have to chase us down to get a progress report. We utilize in-depth behavioral interview protocols when interviewing your candidates, we do thorough references and complete behavioral profiles for your use in more fully understanding the candidate you select. After the search is completed, we will work with you to ensure that a smooth onboarding process is executed with your new executive hire.'
        },
        {
            ques: 'What kinds of companies does iQmetrics Solution work best with?',
            ans: 'Our repeat clients include: The Fortune 1000, mid-sized, start-up, turnaround, private equity funded, and roll-ups. We work best with companies that are highly challenged, entrepreneurial, rapidly changing/rapidly growing, or where the re-tooling of management teams and corporate culture change is in order.'
        },
        {
            ques: 'What do you do for your clients that is qualitatively different from your competition?',
            ans: 'It is not the “terms of service” that differentiates us from our competition, but the “quality and depth of service” clients receive, such as: 3-to 4-hour structured screening interviews, Psychological profiling, Our understanding and appreciation of your unique organization culture Deep reference checks, Our experience in providing clarity and definition to an ill-defined or new position, Our credibility in the marketplace and our commitment to understanding your industry, company, and situation.'
        },
        {
            ques: 'How long does the search take?',
            ans: 'Generally speaking, we complete most searches within 60-90  days. '
        }
    ]
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

