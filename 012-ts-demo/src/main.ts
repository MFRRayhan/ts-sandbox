import { z } from "zod";

const bookSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  category: z.string(),
  price: z.number(),
});

const booksSchema = z.array(bookSchema);

type Book = z.infer<typeof bookSchema>;

// const heading = document.getElementById("heading") as HTMLHeadingElement;
const btn = document.getElementById("btn") as HTMLButtonElement;

let data = [];

btn.addEventListener("click", async () => {
  const response = await fetch("https://tsapidemo.lwhh.org/api/v2/books");
  const books = await response.json();
  const result = booksSchema.safeParse(books);

  if (!result.success) {
    console.error(result.error.issues);
    return;
  }

  console.log(books);
  data = books;

  printBookDetails(books[1]);
});

function printBookDetails(book: Book) {
  console.log(`ID: ${book.id}`);
  console.log(`TITLE: ${book.title}`);
  console.log(`AUTHOR: ${book.author}`);
  console.log(`CATEGORY: ${book.category}`);
  console.log(`PRICE: ${book.price}`);
}
