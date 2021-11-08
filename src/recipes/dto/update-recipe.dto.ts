/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeDto } from './create-recipe.dto';

export class UpdateRecipeDto extends PartialType(CreateRecipeDto) {
    id: number;
    RecipeTitle: string 
    created_at: Date
    content: string 
    user_id: number 
    likes: number
    comments: string 
    imageUrl : string
}
