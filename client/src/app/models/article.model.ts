export interface ArticleModel{
    id: string;
    title: string;
    abstract: string;
    keywords: string;
    authorFirstName: string;
    authorSecondName: string;
    authorFirstSurname: string;
    authorSecondSurname: string;
    authorEmail: string;
    authorId: string;
    status: string;
    article: ArticleModel
}