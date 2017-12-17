import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})

export class AppNavbarComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
  }

  useLanguage(language: string) {
    this.translate.use(language);
}

}

