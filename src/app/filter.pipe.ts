import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    return items.filter(it => {
      const productName = it.productname == undefined ? false : it.productname.toLowerCase().includes(searchText);
    //   const price = it.price == undefined ? false : it.price.toLowerCase().includes(searchText);
      const description = it.description == undefined ? false : it.description.toLowerCase().includes(searchText);
       
      return (productName + description 
        );
    });
  }
}