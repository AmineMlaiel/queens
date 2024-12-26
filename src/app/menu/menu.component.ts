import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  isSignature?: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems = signal<MenuItem[]>([
    {
      id: 1,
      name: "Royal Espresso",
      description: "Single origin Ethiopian beans, perfectly roasted and extracted",
      price: 4.50,
      category: "Espresso",
      isSignature: true
    },
    {
      id: 2,
      name: "Golden Latte",
      description: "Our signature blend with honey and turmeric, topped with gold dust",
      price: 6.50,
      category: "Specialty",
      isSignature: true
    },
    {
      id: 3,
      name: "Crown Cappuccino",
      description: "Velvety microfoam with our house blend espresso",
      price: 5.50,
      category: "Classics"
    },
    {
      id: 4,
      name: "Lavender Dream",
      description: "House-made lavender syrup with oat milk and espresso",
      price: 6.00,
      category: "Specialty"
    },
    {
      id: 5,
      name: "Regal Cold Brew",
      description: "24-hour steeped premium beans with subtle chocolate notes",
      price: 5.00,
      category: "Cold Drinks"
    },
    {
      id: 6,
      name: "Majestic Mocha",
      description: "Belgian chocolate melted into our signature espresso",
      price: 6.00,
      category: "Classics",
      isSignature: true
    }
  ]);

  categories = ["All", "Espresso", "Classics", "Specialty", "Cold Drinks"];
  selectedCategory = signal<string>("All");

  filteredMenu = computed(() =>
    this.selectedCategory() === "All"
      ? this.menuItems()
      : this.menuItems().filter(item => item.category === this.selectedCategory())
  );

  ngOnInit() {
    this.selectedCategory.set("All");
  }

  filterCategory(category: string) {
    this.selectedCategory.set(category);
  }
}
