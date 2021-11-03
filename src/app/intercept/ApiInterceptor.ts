import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        //const baseUrl = document.getElementsByTagName('base')[0].href;
        //const baseUrl = 'http://ip172-18-0-4-bukjjeag7700009m2gm0-4000.direct.labs.play-with-docker.com/';
                const baseUrl = 'http://localhost:4000/';
        const apiReq = req.clone({ url: `${baseUrl}${req.url}` });
        return next.handle(apiReq);
    }
}