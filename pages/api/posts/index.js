import dbConnect from '../../../utils/dbConnect';
import Post from '../../../entity/Post';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    if (method === 'GET') {
        try {
            const posts = await Post.find().sort({ created_at: -1 });
            res.status(200).json({ success: true, data: posts });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    } else if (method === 'POST') {
        try {
            const content = req.body.content;
            const post = await Post.create({ content });
            res.status(201).json({ success: true, data: post });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    } else {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};
