import axios from 'axios';

const createPost = async ({ content }) => {
    try {
        const response = await axios.post(`http://localhost:3000/api/posts`, {
            content: content
        });
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const fetchPosts = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/api/posts`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export { createPost, fetchPosts };
