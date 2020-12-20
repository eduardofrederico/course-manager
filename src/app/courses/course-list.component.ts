import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component ({
    selector: 'app-course-list',
    templateUrl: './course-list-component.html'
})
export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 100.00,
                code: '2001',
                duration: 120,
                rating: 3.7,
                releaseDate: 'Feb - 2020'
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 120.00,
                code: '2002',
                duration: 128,
                rating: 4.2,
                releaseDate: 'Aug - 2020'
            },
            {
                id: 3,
                name: 'Salesforce',
                imageUrl: '',
                price: 150.00,
                code: '2003',
                duration: 136,
                rating: 4.6,
                releaseDate: 'Jan - 2021'
            },
            {
                id: 4,
                name: 'Java',
                imageUrl: '',
                price: 120.00,
                code: '2004',
                duration: 128,
                rating: 4.1,
                releaseDate: 'Jan - 2021'
            },
            {
                id: 5,
                name: 'Java',
                imageUrl: '',
                price: 120.00,
                code: '2004',
                duration: 128,
                rating: 4.8,
                releaseDate: 'Jan - 2021'
            }
        ]
    }
}