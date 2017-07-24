import swal from 'sweetalert2';

export class MessagingService {
    private messageData: object = {
        showCancelButton: true,
        confirmButtonText: 'Yes',
        confirmButtonClass: 'button confirm',
        cancelButtonClass: 'button cancel',
        buttonsStyling: false,
        customClass: 'alert'
    }

    // private showMessage(type: string, title: string, message: string) {
    //     const data = Object.assign(this.messageData, {
    //         title: title,
    //         text: message,
    //         type: type
    //     });
    //     return swal(data);
    // };

    warning(title: string, message: string): Promise<any> {
        this.messageData = Object.assign(this.messageData, {
            title: title,
            text: message,
            type: 'warning'
        });

        return swal(this.messageData);
    }

    error(title: string, message: string) {
        this.messageData = Object.assign(this.messageData, {
            title: title,
            text: message,
            type: 'error'
        });

        return swal(this.messageData);
    }

    info(title: string, message: string) {
        this.messageData = Object.assign(this.messageData, {
            title: title,
            text: message,
            type: 'info',
            showCancelButton: false,
            confirmButtonText: 'Ok'
        });

        return swal(this.messageData);
    }

    success(title: string, message: string) {
        this.messageData = Object.assign(this.messageData, {
            title: title,
            text: message,
            type: 'success',
            showCancelButton: false,
            confirmButtonText: 'Ok'
        });

        return swal(this.messageData);
    }
}