import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateProductsDto } from "./dto/products.dto";
import { UpdateProductsDto } from "./dto/update.product.dto";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService) {}
    //create
    @Post('register')
    createProduct(@Body() product: CreateProductsDto): Promise<CreateProductsDto> {
        return this.productService.createProduct(product)
    }

    //list all
    @Get()
    getAll() {
        return this.productService.listAllProducts()
    }

    //list one
    @Get(':id')
    getOne(@Param('id') params: CreateProductsDto): Promise<CreateProductsDto> {
        return this.productService.listOne(params)
    }

    //update item
    @Patch(':id')
    updateProduct(@Param('id') id: number, @Body() updateProduct: UpdateProductsDto) {
        return this.productService.update(id, updateProduct)
    }

    @Delete(':id')
    removeProduct(@Param('id') id: number) {
        return this.productService.removeItem(id)
    }
}