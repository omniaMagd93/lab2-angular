import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Array<object>;
  title: string;
  response: Array<string>;

  constructor(
    private myservice: MyserviceService,
  ) {
  }
  getResponse(): void {
    let endpoint = 'students';
    this.myservice.getPath(endpoint).subscribe(
      res => {
        console.log(res);
        this.response = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  ngOnInit() {
    this.getResponse();
  }

}