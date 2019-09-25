import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BaseApiExternaInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (!req.url.match(/^http(s)?:\/\/(.*)$/)) {
            const url = `${environment.API_MARVEL}/${req.url}`.replace(/([^:]\/)\/+/g, '$1');
            req = req.clone({ url });
        }
        return next.handle(req);
    }
}