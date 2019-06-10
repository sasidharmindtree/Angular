import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  students: Student[] = [];

    constructor(private studentservice: StudentService) {}

    ngOnInit() {
        const studentsObservable = this.studentservice.getStudents();
        studentsObservable.subscribe((studentsData: Student[]) => {
            this.students = studentsData;
        });
    }

}
