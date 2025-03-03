export type MovieDto = {
    id: number;
    title: string;
    description: string;
    releaseDate: Date;
    rating: number;
    imageUrl: string;
    trailerUrl: string;
    isDeleted: boolean;
    deletedAt: Date | null;
  }