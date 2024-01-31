export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  onDiscount: boolean;
}

export const Products: Product[] = [
  {
    id: 1,
    name: 'Brosse à cheveux',
    description: 'Parfait pour les cheveux bouclés',
    price: 12.99,
    stock: 20,
    onDiscount: false,
  },
  {
    id: 2,
    name: 'Sèche cheveux',
    description: 'Nouveau modèle 2024 avec 4 températures différentes',
    price: 77.77,
    stock: 4,
    onDiscount: false,
  },
  {
    id: 3,
    name: 'Shampoing',
    description: 'Shampoing contre les pélicules',
    price: 9.89,
    stock: 31,
    onDiscount: true,
  },
];
