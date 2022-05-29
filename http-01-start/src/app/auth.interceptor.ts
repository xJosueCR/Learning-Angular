import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error("Method not implemented.");
        const modifiedRequest = req.clone({
            headers: req.headers.append(
                'Auth', 'xyz'
            )
        })
        return next.handle(modifiedRequest)
    }

}