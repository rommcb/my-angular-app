import { Component, OnInit } from '@angular/core';
import { TestHttpServiceService } from 'src/app/shared/services/test-http-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  getResult: any;

  constructor(
    private readonly testService: TestHttpServiceService,
    ) {}

  ngOnInit(): void {
    this.testService.getStuff()
    .subscribe((res) => {
      console.log('res from welcome component', res)
      this.getResult = res.msg;
      })
    }

}
