<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_images')->insert([
            [
                'product_id' => '1',
                'product_images_name' => 'product-keychronk2-1.webp',
                'product_images_priority' => '1',
            ],
            [
                'product_id' => '1',
                'product_images_name' => 'product-keychronk2-2.webp',
                'product_images_priority' => '2',
            ],
            [
                'product_id' => '1',
                'product_images_name' => 'product-keychronk2-3.webp',
                'product_images_priority' => '3',
            ],
            [
                'product_id' => '1',
                'product_images_name' => 'product-keychronk2-4.webp',
                'product_images_priority' => '4',
            ],
            [
                'product_id' => '2',
                'product_images_name' => 'product-keychronk4-1.webp',
                'product_images_priority' => '1',
            ],
            [
                'product_id' => '2',
                'product_images_name' => 'product-keychronk4-2.webp',
                'product_images_priority' => '2',
            ],
            [
                'product_id' => '2',
                'product_images_name' => 'product-keychronk4-3.webp',
                'product_images_priority' => '3',
            ],
            [
                'product_id' => '2',
                'product_images_name' => 'product-keychronk4-4.webp',
                'product_images_priority' => '4',
            ],
            [
                'product_id' => '3',
                'product_images_name' => 'product-keychronk10-1.webp',
                'product_images_priority' => '1',
            ],
            [
                'product_id' => '3',
                'product_images_name' => 'product-keychronk10-2.webp',
                'product_images_priority' => '2',
            ],
            [
                'product_id' => '3',
                'product_images_name' => 'product-keychronk10-3.webp',
                'product_images_priority' => '3',
            ],
            [
                'product_id' => '3',
                'product_images_name' => 'product-keychronk10-4.webp',
                'product_images_priority' => '4',
            ],
            [
                'product_id' => '4',
                'product_images_name' => 'product-keychronk8-1.webp',
                'product_images_priority' => '1',
            ],
            [
                'product_id' => '4',
                'product_images_name' => 'product-keychronk8-2.webp',
                'product_images_priority' => '2',
            ],
            [
                'product_id' => '4',
                'product_images_name' => 'product-keychronk8-3.webp',
                'product_images_priority' => '3',
            ],
            [
                'product_id' => '4',
                'product_images_name' => 'product-keychronk8-4.gif',
                'product_images_priority' => '4',
            ],
            [
                'product_id' => '5',
                'product_images_name' => 'product-keychronk6-1.webp',
                'product_images_priority' => '1',
            ],
            [
                'product_id' => '5',
                'product_images_name' => 'product-keychronk6-2.webp',
                'product_images_priority' => '2',
            ],
            [
                'product_id' => '5',
                'product_images_name' => 'product-keychronk6-3.webp',
                'product_images_priority' => '3',
            ],
            [
                'product_id' => '5',
                'product_images_name' => 'product-keychronk6-4.gif',
                'product_images_priority' => '4',
            ],
        ]); //
    }
}
