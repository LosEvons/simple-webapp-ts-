import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Resource } from '../DTO/resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private _resources: Array<Resource> = [
    new Resource("wood", { autoHarvesterCount: 2 }),
    new Resource("stone"),
    new Resource("iron")
  ]

  constructor() {

  }


  getResources(): Observable<Array<Resource>> {

    const getResourcesObservable = new Observable<Array<Resource>>(observer => {
      setTimeout(() => {
        observer.next(this._resources)
      }, 100);
    });

    return getResourcesObservable;
  }

  private findResource(id: number): Observable<Resource> {
    return new Observable<Resource>(observer => {
      let activeResource = this._resources.find(
        resource => resource.id == id);
      if (activeResource == undefined) return;
      observer.next(activeResource)
    })
  }


  gatherResource(id: number): Observable<Resource> {
    return new Observable<Resource>(observer => {
      this.findResource(id).subscribe(activeResource => {
        activeResource.resourceCount += activeResource.autoHarvesterStrength;
        observer.next(activeResource)
      });
    });

  }

  buyAutoHarvester(id: number): Observable<Resource> {
    return new Observable<Resource>(observer => {
      this.findResource(id).subscribe(activeResource => {
        activeResource.autoHarvesterCount += 1;
        observer.next(activeResource)
      });
    })

  }

  improveAutoHarvester(id: number): Observable<Resource> {
    return new Observable<Resource>(observer => {
      this.findResource(id).subscribe(activeResource => {
        activeResource.autoHarvesterStrength += 1;
        observer.next(activeResource);
      });
    });
  }

  gatherAllResources(): Observable<Array<Resource>> {
    return new Observable<Array<Resource>>(observer => {
      this._resources.forEach(resource => {
        resource.resourceCount += resource.autoHarvesterCount * resource.autoHarvesterStrength;
      })
    });
  }

}
