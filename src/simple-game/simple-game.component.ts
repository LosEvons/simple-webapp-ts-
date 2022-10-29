import { Component, OnInit } from '@angular/core';
import { Resource } from 'src/DTO/resource';
import { ResourceService } from 'src/services/resource.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-simple-game',
  templateUrl: './simple-game.component.html',
  styleUrls: ['./simple-game.component.css']
})
export class SimpleGameComponent implements OnInit {
  resources: Array<Resource> | undefined
  gameTime = 1;

  constructor(private resourceService: ResourceService) {
    resourceService.getResources().subscribe(resources => {
      this.resources = resources;
    })

    interval(1000).subscribe(next => {
      this.gameTime += 1;

      resourceService.gatherAllResources().subscribe(resources => {
        this.resources = resources
      })
    })
  }

  ngOnInit(): void {
  }


}
