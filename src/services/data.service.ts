import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { STATIC_DATA } from '../data/data';
import { NamedResource } from '../common/common';
import { generateNode } from '../data/generator';

@Injectable()
export class TreeDataService {
  private _data$: BehaviorSubject<NamedResource> = new BehaviorSubject<any>({ name: 'root', children: STATIC_DATA });

  public get data$(): Observable<any> {
    return this._data$.asObservable();
  }

  public randomData$(depth: number, children: number): Observable<NamedResource> {
    const data = generateNode(depth, children);
    console.log(data);
    return of(data);
  }
}
