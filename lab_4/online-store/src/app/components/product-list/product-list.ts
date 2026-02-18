import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Nike Air Max 270',
      description:
        'Кроссовки Nike Air Max 270 с максимальной воздушной подушкой для комфорта весь день. Лёгкий сетчатый верх, резиновая подошва с отличным сцеплением. Классический чёрный цвет подойдёт к любому образу.',
      price: 54990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h15/h40/86316415189022.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h15/h40/86316415189022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h15/h40/86316415189022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h15/h40/86316415189022.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-120560703/?c=750000000',
    },
    {
      id: 2,
      name: 'Colorblock Розовый набор',
      description:
        'Яркий подарочный набор в розовом цвете в стиле colorblock. Стильное оформление, идеально подойдёт как подарок на любой праздник. Включает несколько предметов в единой цветовой гамме.',
      price: 12990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0e/hae/85460634173470.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0e/hae/85460634173470.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0e/hae/85460634173470.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0e/hae/85460634173470.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-256gb-chernyi-titanium-117524369/?c=750000000',
    },
    {
      id: 3,
      name: 'Oversized Кофта унисекс',
      description:
        'Стильная кофта оверсайз из мягкого хлопка с флисовой подкладкой. Свободный крой подойдёт как для мужчин, так и для женщин. Отлично сочетается с джинсами и кроссовками, подходит для повседневной носки.',
      price: 18990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha4/h84/85912983797790.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/h84/85912983797790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/h84/85912983797790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/h84/85912983797790.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-256gb-chernyi-118999039/?c=750000000',
    }
  ];
}
