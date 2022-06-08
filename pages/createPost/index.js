import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { createPost } from '../../services/postServices';

function CreatePost() {
    const [content, setContent] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await createPost({ content });
            let contentItem = response.data.content;
            if (contentItem.length > 120) {
                alert(
                    'The letter is longer than the maximum allowed length (120)'
                );
            }else{
                window.location = window.location;
            }
        } catch (error) {
            console.log(error)
            if (error) {
                alert(
                    'The letter is longer than the maximum allowed length (120)'
                );
                window.location = window.location;
            }
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >
            <form>
                <TextField
                    variant="outlined"
                    placeholder="Post your thoughts"
                    multiline
                    required
                    rows={4}
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    style={{
                        width: '35%',
                        height: '20%',
                        marginBottom: '20px',
                        paddingTop: '10px',
                        paddingLeft: '30%',
                    }}
                />
                <button
                    onClick={handleSubmit}
                    style={{
                        marginLeft: '56.3%',
                        width: '120px',
                        cursor: 'pointer',
                    }}
                >
                    Send
                </button>
            </form>
        </div>
    );
}

export default CreatePost;
