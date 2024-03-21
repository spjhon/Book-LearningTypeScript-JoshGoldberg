type Book = {
    author?: string;
    pages: number;
   };
   // Ok
   const ok: Book = {
    author: "Rita Dove",
    pages: 80
   };

   const ok2: Book = {
    pages: 80
   };

   const missing: Book = {
    author: "Rita Dove",
   };
   // Error: Property 'pages' is missing in type
   // '{ author: string; }' but required in type 'Book'.