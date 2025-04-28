export interface Course {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
  longDescription: string;
  level: string;
  price: number;
  salePrice?: number;
  duration: string;
  lessons: number;
  image?: string;
  instructor?: {
    name: string;
    title: string;
    image?: string;
  };
  syllabus?: {
    title: string;
    lessons: {
      title: string;
      duration: string;
    }[];
  }[];
  requirements?: string[];
  includes?: string[];
  learningOutcomes?: string[];
}

export interface Post {
  _id: string;
  mainImage: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  slug: {
    current: string;
  };
  category: {
    title: string;
  };
}
