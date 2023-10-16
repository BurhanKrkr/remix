interface Product {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  code: number;
  dropRatio: number;
}

interface PhoneListProps {
    Phones: {
      products: Product[];
      horizontalProducts: Product[];
    };
  }
  
  interface PhoneCardProps {
    phone: Product;
    horizontalProducts: Product[];
  }
