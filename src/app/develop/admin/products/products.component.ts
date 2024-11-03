import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListType, CategoryResponse, ProductResponse, ProductsType } from '../../models/products';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';
import { FilterPipe } from 'src/app/filter.pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  
  // @Output() productsCountChange = new EventEmitter<number>();

  // for showing all products number
  get totalProducts(): number {
    return this.productsList.length; // تعداد کل محصولات
  }


  productObj: ProductsType = {
    productId: 0,
    productSku: '',
    productName: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    createdDate: new Date(),
    deliveryTimeSpan: '',
    categoryId: 0,
    productImageUrl: '',
  };

  categoryList: CategoryListType[] = []; 
  productsList: ProductsType[] = [];

  constructor(private productSrv: ProductService) {}

  searchTerm: string = '';

  ngOnInit(): void {

    this.getAllCategory();
    this.getProducts();
  }

  getProducts() {
    this.productSrv.getProducts().subscribe((res: ProductResponse) => {
      this.productsList = res.data; // data به درستی به عنوان آرایه‌ای از ProductsType شناسایی می‌شود
    });
  }
  

  getAllCategory() {
    this.productSrv.getCategory().subscribe((res: CategoryResponse) => {
      this.categoryList = res.data; // چون data یک آرایه از CategoryListType است
    });
  } 

  // متد برای به‌دست آوردن نام دسته‌بندی بر اساس categoryId
  getCategoryName(categoryId: number): string {
    const category = this.categoryList.find(cat => cat.categoryId === categoryId);
    return category ? category.categoryName : 'دسته‌بندی نامشخص'; // اگر دسته‌بندی پیدا نشد
  }

  
  onSave(){
    this.productSrv.saveProduct(this.productObj).subscribe((res: CategoryResponse) => {
      if(res.result){
        alert('Product Created Successfully');
        this.getProducts();
      } else {
        alert(res.message);
      }
    });
  }

  // Button finction
  onUpdate(){
    this.productSrv.updateProduct(this.productObj).subscribe((res: CategoryResponse) => {
      if(res.result){
        alert('Product Updated Successfully !');
        this.getProducts();
      } else {
        alert(res.message);
      }
    });

  }


  // onDelete(item:ProductsType){
  //   const isDelete = confirm('Are you sure you want to delete this product ?');
  //   if(isDelete){
  //     this.productSrv.deleteProduct(item.productId).subscribe((res:any)=>{
  //       debugger;
  //       if(res.result){
  //         alert('Product Deleted Successfully !');
  //         this.getProducts();
  //       }else{
  //         alert(res.message);
  //       }
  //     })
  //   }
  // }

  onDelete(item: ProductsType) {
    const isDelete = confirm('Are you sure you want to delete this product ?');
    debugger;
    if (isDelete) {
      this.productSrv.deleteProduct(item.productId).subscribe((res: CategoryResponse) => {
        if (res.result) {
          alert('Product Deleted Successfully !');
          this.getProducts(); // به‌روزرسانی فهرست محصولات
        } else {
          alert(res.message); // پیام خطا در صورت عدم موفقیت
        }
      }, (error) => {
        alert('An error occurred while deleting the product.'); // پیام خطا در صورت بروز مشکل در درخواست
      });
    }
  }
  
  

  onEdit(item:ProductsType){
    this.productObj = item;
    this.openSidePanel();  
  }

  isSidePanelVisible: boolean = false;

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;

  }


  
}
