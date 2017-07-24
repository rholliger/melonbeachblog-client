import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import swal from 'sweetalert2';

export interface CanComponenetDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class ArticleTestGuard implements CanDeactivate<CanComponenetDeactivate> {
    canDeactivate(component: CanComponenetDeactivate): boolean | Observable<boolean> | Promise<boolean> {
        return swal({
            title: 'Leave Route',
            text: 'Do you really want to leave this route? All unsaved changes will be lost',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            confirmButtonClass: 'button confirm',
            cancelButtonClass: 'button cancel',
            buttonsStyling: false,
            customClass: 'alert'
        });
    }
}