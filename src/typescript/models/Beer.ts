export interface Beer {
  id: string;
  type: 'beer';
  attributes: {
    name: string;
    abv: string;
    ibu: string;
    details: string;
    brewery_id: number;
    beer_style_id: number;
    created_at: string;
    updated_at: string;
    beer_logo: string | null;
  };
  relationships: {
    brewery: {
      data: {
        type: string;
        id: string;
      };
    };
    beer_style: {
      data: {
        type: string;
        id: string;
      };
    };
  };
}
