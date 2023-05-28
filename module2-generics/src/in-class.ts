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

let someArtist: Artist = {
  id: "",
  url: "",
  metadata: {},
  name: "",
};

// type this function - it takes in an artbitrary item that's a CatalogItem, and it returns an array of (in theory)
// similar items of the same type (though for now we're just hard coding the same item).
function getSimilarItems(item: unknown): unknown {
  return [item, item, item];
}

const x = getSimilarItems(someArtist);

// x should be Promise<Artist[]>
