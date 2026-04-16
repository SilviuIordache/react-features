type OpenLibraryWork = {
  key: string;
  title: string;
  authors: { key: string; name: string }[];
  first_publish_year: number;
  cover_id: number | null;
};

export type OpenLibrarySubjectResponse = {
  name: string;
  work_count: number;
  works: OpenLibraryWork[];
};