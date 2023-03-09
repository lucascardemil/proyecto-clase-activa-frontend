import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/Course';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    private url = environment.apiUrl;

    constructor(
        private http: HttpClient,
    ) { }

    getCourse() {
        return this.http.get(`${this.url}/courses/`);
    }

    getIdCourse(id: number) {
        return this.http.get(`${this.url}/courses/${id}`);
    }

    getCourseForLevel(id: number) {
        return this.http.get(`${this.url}/courses/getCourseForLevel/${id}`);
    }

    addCourse(curso: Course) {
        return this.http.post(`${this.url}/courses/addCourse`, curso);
    }

    updateCourse(curso: Course) {
        return this.http.put(`${this.url}/courses/updateCourse`, curso);
    }

    deleteCourse(id: number) {
        return this.http.delete(`${this.url}/courses/deleteCourse/${id}`);
    }


}
