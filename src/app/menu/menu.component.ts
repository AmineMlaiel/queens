import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  isSignature?: boolean;
  imageUrl: string;
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
      name: "Royal Coffee",
      description: "Single origin Ethiopian beans, perfectly roasted and extracted",
      price: 4.50,
      category: "Coffee",
      isSignature: true,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 2,
      name: "Golden Latte",
      description: "Our signature blend with honey and turmeric, topped with gold dust",
      price: 6.50,
      category: "Specialty",
      isSignature: true,
      imageUrl: "assets/img/roya-coffee.jpg"
    },
    {
      id: 3,
      name: "Crown Cappuccino",
      description: "Velvety microfoam with our house blend coffee",
      price: 5.50,
      category: "Classics",
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 4,
      name: "Lavender Dream",
      description: "House-made lavender syrup with oat milk and coffee",
      price: 6.00,
      category: "Specialty",
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 5,
      name: "Regal Cold Brew",
      description: "24-hour steeped premium beans with subtle chocolate notes",
      price: 5.00,
      category: "Cold Drinks",
      imageUrl: "assets/img/royal-coffee.jpg",
      isSignature: true
    },
    {
      id: 6,
      name: "Majestic Mocha",
      description: "Belgian chocolate melted into our signature coffee",
      price: 6.00,
      category: "Classics",
      isSignature: true,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 7,
      name: "Coffee Can Panna",
      description: "A bold shot of rich coffee topped with a dollop of silky whipped cream, offering a perfect harmony of strength and indulgence",
      price: 7.50,
      category: "Coffee",
      isSignature: true,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 8,
      name: "Freddo",
      description: "A refreshing twist on coffee, expertly chilled and frothed to deliver a smooth, velvety coffee experience, perfect for hot days",
      price: 5.50,
      category: "Coffee",
      isSignature: true,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 9,
      name: "Raf",
      description: "A luxurious blend of coffee, cream, and sugar, gently steamed together to create a creamy, velvety coffee delight with a hint of sweetness",
      price: 4.00,
      category: "Coffee",
      isSignature: true,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 10,
      name: "Irish",
      description: "A bold coffee blend infused with a hint of Irish cream flavor, delivering a rich and indulgent coffee experience with a velvety finish",
      price: 3.50,
      category: "Coffee",
      isSignature: true,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 11,
      name: "Coffee Macchiato",
      description: "A rich shot of coffee delicately marked with a dollop of velvety steamed milk, offering a bold yet smooth coffee experience",
      price: 8.50,
      category: "Coffee",
      isSignature: true,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    // Juices
    {
      id: 12,
      name: "Orange Jus",
      description: "A refreshing juice made with freshly squeezed oranges, offering a tangy and revitalizing experience.",
      price: 4.00,
      category: "Juice",
      isSignature: false,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 13,
      name: "Pineapple Jus",
      description: "A tropical treat made from ripe pineapples, bursting with sweet and tart flavors, perfect for a sunny day.",
      price: 4.50,
      category: "Juice",
      isSignature: false,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 14,
      name: "Mango Jus",
      description: "A smooth, creamy juice made with juicy mangoes, delivering a sweet and tropical burst of flavor.",
      price: 5.00,
      category: "Juice",
      isSignature: true,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 15,
      name: "Milkshake",
      description: "A rich and creamy milkshake made with fresh milk and your choice of flavor, blending indulgence and freshness.",
      price: 5.50,
      category: "Juice",
      isSignature: true,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 16,
      name: "Watermelon Jus",
      description: "A cool, hydrating juice made with juicy watermelon, perfect for quenching your thirst on a hot day.",
      price: 4.25,
      category: "Juice",
      isSignature: false,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    // Chicha
    {
      id: 17,
      name: "Chicha Monte",
      description: "A flavorful chicha with a smooth blend of spices and herbs, offering a unique, aromatic experience.",
      price: 6.00,
      category: "Chicha",
      isSignature: true,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 18,
      name: "Chicha Pomme",
      description: "A fruity twist on traditional chicha, infused with apple flavors that are both refreshing and tangy.",
      price: 5.50,
      category: "Chicha",
      isSignature: false,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 19,
      name: "Chicha Love",
      description: "A sweet and aromatic chicha with a touch of rosewater, offering a delicate and romantic flavor.",
      price: 6.50,
      category: "Chicha",
      isSignature: false,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 20,
      name: "Chicha Sheikh",
      description: "A rich and exotic chicha with a blend of premium spices, creating a regal, bold flavor experience.",
      price: 7.00,
      category: "Chicha",
      isSignature: false,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 21,
      name: "Chicha Chichkhen",
      description: "A traditional chicha with a modern twist, featuring a delightful blend of flavors that will captivate your senses.",
      price: 5.75,
      category: "Chicha",
      isSignature: true,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    // Water
    {
      id: 22,
      name: "Water 0.5L",
      description: "",
      price: 1.00,
      category: "Water",
      isSignature: false,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 23,
      name: "Water 1L",
      description: "",
      price: 1.50,
      category: "Water",
      isSignature: false,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    // Gazouz
    {
      id: 24,
      name: "Fanta",
      description: "A refreshing citrus soda with a tangy and sweet flavor, perfect for cooling down on a hot day.",
      price: 2.00,
      category: "Cold Drinks",
      isSignature: false,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 25,
      name: "Coke",
      description: "The classic, bold cola drink with a fizzy and sweet taste that never goes out of style.",
      price: 2.00,
      category: "Cold Drinks",
      isSignature: false,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 26,
      name: "Appla",
      description: "A refreshing apple-flavored soda with a sweet, crisp taste that’s perfect for any occasion.",
      price: 2.25,
      category: "Cold Drinks",
      isSignature: false,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 27,
      name: "Boga",
      description: "A delicious, fruity soda that combines the tang of berries with a sweet, bubbly finish.",
      price: 2.50,
      category: "Cold Drinks",
      isSignature: false,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 28,
      name: "Swipess",
      description: "A refreshing and zesty soda with a blend of tropical fruit flavors, perfect for a quick thirst quencher.",
      price: 2.25,
      category: "Cold Drinks",
      isSignature: false,
      imageUrl: "assets/img/royal-coffee.jpg"
    },
    {
      id: 29,
      name: "Perpsi",
      description: "A crisp, bubbly soda with a refreshing taste that offers a sweet and slightly tangy sensation.",
      price: 2.00,
      category: "Cold Drinks",
      isSignature: false,
      imageUrl: "assets/img/royal-coffee.jpg"
    }
  ]);

  categories = ["Chic", "Coffee", "Cold Drinks", "Specialty", "Classics", "Juice", "Water", "Chicha"];
    selectedCategory = signal<string>("All");
    activeItem: MenuItem | null = null;

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
  showPreview(item: MenuItem) {
    this.activeItem = item;
  }

  hidePreview() {
    this.activeItem = null;
  }
}
