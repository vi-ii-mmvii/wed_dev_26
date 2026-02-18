import { Component } from '@angular/core';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [ProductList],
  template: `
    <header class="site-header">
      <div class="header-inner">
        <h1 class="site-title">Online Store</h1>
        <p class="site-subtitle">Лучшие товары с Kaspi.kz</p>
      </div>
    </header>
    <main>
      <app-product-list></app-product-list>
    </main>
    <footer class="site-footer">
      <p>© 2025 Online Store · Товары с kaspi.kz</p>
    </footer>
  `,
  styleUrl: './app.css'
})
export class App {}
