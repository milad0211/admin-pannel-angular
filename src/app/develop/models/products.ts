export class ProductsType{
    
    productId!: number;
    productSku!: string;
    productName!: string; 
    productPrice!: number;
    productShortName!: string; 
    productDescription!: string; 
    createdDate!: Date; 
    deliveryTimeSpan!: string; 
    categoryId!: number;
    productImageUrl!: string; 
      }

      export interface ProductResponse {
        message: string;
        result: boolean;
        data: ProductsType[]; // داده‌های محصولات به عنوان یک آرایه از ProductsType
      }
      


      export class CategoryListType {
        categoryId!: number;
        categoryName!: string;
        parentCategoryId!: number;
        userId?: number | null;
      }
      

      export interface CategoryResponse {
        message: string;
        result: boolean;
        data: CategoryListType[]; 
      }