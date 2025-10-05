
# Arrays and Hashing

## What are they?

**Arrays** are one of the most fundamental data structures. Think of them as a numbered list of items. You can quickly access any item if you know its position (index), but adding or removing items in the middle can be slow because it might require shifting other items around.

**Hashing** is a technique used to map data of any size to a fixed-size value (a "hash"). This is often used in a data structure called a **Hash Table** or **Hash Map** (in JavaScript, these are implemented as `Map` objects or plain `Objects`).

## Real-World Analogy

Imagine a library. The entire library is like an **array** of books. If you know a book's exact shelf and position, you can go right to it.

Now, think of the library's catalog system. You can look up a book by its title (the "key") and the catalog tells you exactly where to find it (the "value"). This catalog system is like a **Hash Table**. It provides a fast way to look up information without having to search through every single shelf.

In programming, we use hashing to create these "catalogs" for data, allowing for near-instant lookups, insertions, and deletions. This is incredibly useful for problems involving frequency counts, finding duplicates, or grouping items.
