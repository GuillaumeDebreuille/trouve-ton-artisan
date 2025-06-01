import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../artisan.service';

@Pipe({
  name: 'nameFilter',
  standalone: true
})

export class NameFilterPipe implements PipeTransform {

  transform(value: Artisan[], search: string): Artisan[] {
    if (!value || value.length === 0) return [];
    if (!search) return value;

    return value.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

}
