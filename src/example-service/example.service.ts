import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { delay } from 'rxjs/operators';

@Injectable()
export class ExampleService {

    constructor() {}

    marco() : 'polo' { return 'polo'; }

    asyncMarco() : Observable<string> { return Observable.of('polo').pipe(delay(500)); }

}
