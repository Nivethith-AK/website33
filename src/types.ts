export interface Designer {
  id: string;
  name: string;
  specialization: string;
  bio: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}
