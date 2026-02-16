export type PricingType = 'Kostenlos' | 'Freemium' | 'Bezahlt';

export type Category = 
  | 'Text & Writing'
  | 'Bild & Design'
  | 'Video'
  | 'Code & Development'
  | 'Audio & Musik'
  | 'Produktivität'
  | 'Forschung & Analyse'
  | 'Chatbots & Assistenten';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: Category;
  rating: number;
  pricing: PricingType;
  url: string;
  isNew: boolean;
}

export interface CategoryInfo {
  name: Category;
  icon: string;
  description: string;
}
