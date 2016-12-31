import { Component, OnInit } from '@angular/core';
import { ScreeningService } from './services/index';
import { IResult, IScreeing } from './interfaces/index';
@Component({
  moduleId: module.id,
  selector: 'polestar',
  templateUrl: 'polestar.component.html',
  styleUrls: ['polestar.component.css'],
  providers: [ScreeningService]
})
export class PoleStarComponent {

  constructor(private _screeningService: ScreeningService) {

  }
  ngOnInit(): void {
    this._screeningService.GetScreenings()
      .subscribe((screeing: IScreeing) => { },
      error => {
        //this.errorMessage = <any>error
      }
      );
  }
}
