import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fileSize' })
export class FileSizePipe implements PipeTransform {
    transform(value: number, format: string) {
        let newValue;

        switch(format) {
            case 'B':
                return value + ' ' + format;
            case 'KB':
                newValue = value / (1 * 1000);
                break;
            case 'MB':
            default:
                newValue = value / (1000 * 1000);
                break;
            case 'GB':
                newValue = value / (1000000 * 1000);
                break;
        }

        return newValue.toFixed(1) + ' ' + format;
    }
}