export interface Post {
    id: number,
    title: string,
    href: string,
    description:string,
    date: string,
    datetime: string,
    category: { title: string, href: string },
    author: {
      name: string,
      role: string,
      href: string,
      imageUrl:string,
    }
}