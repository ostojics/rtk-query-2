interface ApiData<T = unknown> {
  data: T;
  included: any[];
  jsonapi: {
    version: string;
  };
  meta: {
    current_page: number;
    next_page: number | null;
    per_page: number;
    prev_page: number | null;
    total_count: number;
    total_pages: number;
  };
}

export default ApiData;
