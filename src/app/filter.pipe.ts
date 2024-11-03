// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filter',
//   standalone: true // اینجا standalone را به true تنظیم کنید
// })
// export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchTerm: string): any[] {
//     if (!items || !searchTerm) {
//       return items;
//     }
//     return items.filter(item => 
//       item.productName.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }
// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true // اینجا standalone را به true تنظیم کنید
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string, categoryList: any[]): any[] {
    if (!items || !searchTerm || !categoryList) {
      return items;
    }
    
    return items.filter(item => {
      const categoryName = this.getCategoryName(item.categoryId, categoryList);
      return (
        item.productName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        categoryName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }

  // متد برای به‌دست آوردن نام دسته‌بندی بر اساس categoryId
  private getCategoryName(categoryId: number, categoryList: any[]): string {
    const category = categoryList.find(cat => cat.categoryId === categoryId);
    return category ? category.categoryName : 'دسته‌بندی نامشخص'; // اگر دسته‌بندی پیدا نشد
  }
}
