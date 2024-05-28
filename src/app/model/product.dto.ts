import { FormControl } from "@angular/forms";

export interface ProductDto {
    name: FormControl<string>;
    description: FormControl<string>;
    price: FormControl<number>;
}