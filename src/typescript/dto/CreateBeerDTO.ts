export interface CreateBeerDTO {
  name: string;
  details: string;
  abv: string;
  ibu: string;
  brewery_id: string;
  beer_style_id: string;
  beer_logo: string | null;
}
