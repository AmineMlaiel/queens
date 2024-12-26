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
    },
    //
    {
      id: 7,
      name: "Espresso Can Panna",
      description: "A bold shot of rich espresso topped with a dollop of silky whipped cream, offering a perfect harmony of strength and indulgence",
      price: 7.50,
      category: "Espresso",
      isSignature: true
    },
    {
      id: 8,
      name: "Freddo",
      description: "A refreshing twist on espresso, expertly chilled and frothed to deliver a smooth, velvety coffee experience, perfect for hot days",
      price: 5.50,
      category: "Espresso",
      isSignature: true
    },
    {
      id: 9,
      name: "Raf",
      description: "A luxurious blend of espresso, cream, and sugar, gently steamed together to create a creamy, velvety coffee delight with a hint of sweetness",
      price: 4.0,
      category: "Espresso",
      isSignature: true
    },
    {
      id: 10,
      name: "Irish ",
      description: "A bold espresso blend infused with a hint of Irish cream flavor, delivering a rich and indulgent coffee experience with a velvety finish",
      price: 3.50,
      category: "Espresso",
      isSignature: true
    },
    {
      id: 11,
      name: "Espresso Macchiato",
      description: "A rich shot of espresso delicately marked with a dollop of velvety steamed milk, offering a bold yet smooth coffee experience",
      price: 8.50,
      category: "Espresso",
      isSignature: true
    }
    //
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
