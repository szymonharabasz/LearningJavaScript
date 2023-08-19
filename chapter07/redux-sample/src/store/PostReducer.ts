export const POST_TYPE = "POST_TYPE";

export interface Post {
    id: number;
    title: string;
    body: string;
}

export interface PostAction {
    type: string;
    payload: Post | null;
}

export const PostReducer = (state: Post | null = null, action: PostAction): Post | null => {
    switch (action.type) {
        case POST_TYPE:
            console.log("payload", action.payload);
            return action.payload;
        default:
            return state;
    }
};