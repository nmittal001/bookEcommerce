export class SearchData {
    id: string;
    items: {
      id: string;
      volumeInfo: {
        title: string;
        subtitle: string;
        authors: string[];
        description: string;
        imageLinks: {
          thumbnail: string;
          smallThumbnail: string;
        };
      };
    };

    constructor() {}
  };

  export interface SearchDataInterface {
    id: string;
    volumeInfo: {
      title: string;
      subtitle: string;
      authors: string[];
      description: string;
      imageLinks: {
        thumbnail: string;
        smallThumbnail: string;
      };
    };
  }