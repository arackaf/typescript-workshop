export interface CatalogItem {
  id: string;
  url: string;
  metadata: Record<string, string>;
}

export interface Artist extends CatalogItem {
  name: string;
}

export interface Album extends CatalogItem {
  name: string;
  trackCount: number;
}

export interface Song extends CatalogItem {
  name: string;
  duration: number;
}

// type this function - it takes in an artbitrary item that's a CatalogItem, and it returns a promise that will eventually
// hold an array of (in theory) similar items of the same type (though for now we're just hard coding the same item).
function getSimilarItems<T extends CatalogItem>(item: T): Promise<T[]> {
  return Promise.resolve([item, item, item]);
}

const x = getSimilarItems({ id: "", url: "", metadata: {}, name: "" } as Artist);

// x should be Promise<Artist[]>
