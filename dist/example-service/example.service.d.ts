import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
export declare class ExampleService {
    constructor();
    marco(): 'polo';
    asyncMarco(): Observable<string>;
}
