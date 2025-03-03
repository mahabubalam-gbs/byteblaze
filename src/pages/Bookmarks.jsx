import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { deleteBlog, getStoredBlogs } from "../Utils/handleLS";
import EmptyState from "../components/EmptyState";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const storedBlogs = getStoredBlogs();
        setBlogs(storedBlogs)
    }, [])

    const handleBlogDelete = (id) => {
        deleteBlog(id);
        const storedBlogs = getStoredBlogs();
        setBlogs(storedBlogs)

    }
    if (blogs.length < 1) return <EmptyState message={'No Bookmarks Found'} address={'/blogs'} label={'Browse Blogs'}></EmptyState>
    return (
        <div className="container max-w-6xl py-12 gap-12 mx-auto  grid justify-center grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
            {
                blogs.map(blog => <BlogCard handleBlogDelete={handleBlogDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>)
            }
        </div>
    );
};

export default Bookmarks;