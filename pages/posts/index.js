import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../../services/postServices';

function Posts() {
    const [posts, setPosts] = useState([]);

    const fetchPostList = async () => {
        try {
            const response = await fetchPosts();
            // console.log(response.data);
            setPosts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPostList();
    }, []);
    return (
        <div>
            {posts.map(post => {
                return (
                    <div
                        style={{
                            border: '2px solid gray',
                            width: '33.5%',
                            marginTop: '15px',
                            padding: '10px',
                            marginLeft: '30%',
                            height: '40%',
                        }}
                    >
                        <Typography
                            style={{
                                textAlign: 'justify',
                            }}
                            multiline
                        >
                            {post.content}
                        </Typography>
                        <Typography
                            style={{
                                paddingTop: '10px',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                color: 'red',
                            }}
                        >
                            {post.created_at}
                        </Typography>
                    </div>
                );
            })}
        </div>
    );
}

export default Posts;
