import { File } from "./file";

type Category = {
    _id?: string;
    name: string;
    description: string;
    status?: string;
    createdAt?: Date;
    updatedAt?: Date;
};

type Article = {
    _id?: string;
    title: string;
    content: string;
    creator: User | string;
    category: Category | string;
    status: string;
    media?: File[];
    createdAt?: Date;
    updatedAt?: Date;
};



type Comment = {
    _id?: string;
    message: string;
    user: User;
    reply?: Comment;
    createdAt?: Date;
    updatedAt?: Date;
}

type Like = {
    _id?: string;
    user: User;
    createdAt?: Date;
    updatedAt?: Date;
}

type Engagement = {
    _id?: string;
    article: Article;
    comments: Comment[];
    likes: Like[];
    createdAt?: Date;
    updatedAt?: Date;
}