// Tipos genéricos para dados extraídos do scraping

export interface ScrapedImage {
  url: string;
  alt?: string;
  isPrimary?: boolean;
}

export interface ScrapedContact {
  phone?: string;
  whatsapp?: string;
  email?: string;
  website?: string;
  facebook?: string;
  instagram?: string;
}

export interface ScrapedAddress {
  street?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  fullAddress?: string;
}

export interface ScrapedPlace {
  name: string;
  description?: string;
  shortDescription?: string;
  address?: ScrapedAddress;
  contact?: ScrapedContact;
  images: ScrapedImage[];
  category?: string;
  subcategory?: string;
  urlOriginal: string;
  slug?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  features?: string[];
  section: 'onde_ir';
}

export interface ScrapedEstablishment {
  name: string;
  description?: string;
  shortDescription?: string;
  address?: ScrapedAddress;
  contact?: ScrapedContact;
  images: ScrapedImage[];
  category?: string;
  subcategory?: string;
  type: 'accommodation' | 'restaurant' | 'activity' | 'service';
  urlOriginal: string;
  slug?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  amenities?: string[];
  cuisineType?: string;
  priceRange?: string;
  openingHours?: string;
  section: 'onde_ficar' | 'onde_comer' | 'o_que_fazer';
}

export interface ScrapedMedicalEstablishment {
  name: string;
  description?: string;
  shortDescription?: string;
  address?: ScrapedAddress;
  contact?: ScrapedContact;
  images: ScrapedImage[];
  specialty?: string;
  category?: string;
  subcategory?: string;
  urlOriginal: string;
  slug?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  services?: string[];
  acceptsInsurance?: boolean;
  insurancePlans?: string[];
  section: 'guia_medico';
}

export type ScrapedItem = ScrapedPlace | ScrapedEstablishment | ScrapedMedicalEstablishment;

export interface ScrapingResult {
  section: string;
  totalItems: number;
  successCount: number;
  errorCount: number;
  items: ScrapedItem[];
  errors: Array<{
    url: string;
    error: string;
  }>;
}

export interface ScrapingProgress {
  current: number;
  total: number;
  status: 'idle' | 'scraping' | 'processing' | 'saving' | 'completed' | 'error';
  message?: string;
}
