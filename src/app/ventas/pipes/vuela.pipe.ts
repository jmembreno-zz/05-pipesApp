import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'pvuela'
})
export class VuelaPipe implements PipeTransform {

    transform(valor: boolean): string {

        return (valor ? 'si vuela' : 'no vuela');

    }

}