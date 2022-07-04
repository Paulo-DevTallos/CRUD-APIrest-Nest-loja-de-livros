import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductsDto } from "./dto/products.dto";
import { UpdateProductsDto } from "./dto/update.product.dto";

@Injectable()
export class ProductsService {
    
    constructor(@InjectModel('products') private readonly productModel: Model<CreateProductsDto>) {}
    
    //register product
    async createProduct(create: CreateProductsDto): Promise<CreateProductsDto>  {
        const newProduct = await new this.productModel(create)     
        return newProduct.save()
    }
    
    //list all products
    async listAllProducts() {
        return await this.productModel.find()
    }
    
    //listone
    async listOne(id: CreateProductsDto): Promise<CreateProductsDto> {
        return this.productModel.findOne({ id })    
    }
    
    //update item
    async update(id: number, updateProduct: UpdateProductsDto) {
        return await this.productModel.findByIdAndUpdate(
            { _id: id },
            { $set: updateProduct },
            { new: true }
            )
        }
    
    //remove item
    async removeItem(id: number) {
        return await this.productModel.deleteOne({
            _id: id
        }).exec()
    }
}
    

    