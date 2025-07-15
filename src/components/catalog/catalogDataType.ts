export interface NewsProps {
    id: number
    badge: string
    name: string
    image: string
    category: 'news' | 'promotion';
    link: string
}