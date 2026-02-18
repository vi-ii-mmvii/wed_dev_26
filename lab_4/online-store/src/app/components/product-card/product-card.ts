import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;

  activeImage = 0;

  get stars(): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < Math.round(this.product.rating));
  }

  setImage(index: number): void {
    this.activeImage = index;
  }

  shareWhatsApp(): void {
    const text = encodeURIComponent('Check out this product: ' + this.product.link);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
