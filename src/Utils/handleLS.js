import toast from "react-hot-toast";
// get stored blogs

const getStoredBlogs = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem('blog-list');
    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs);
        return blogs;
    }
    return blogs;
}


// save blogs to LS

const saveBlogsToLS = (blog) => {
    let blogs = getStoredBlogs();

    const isExist = blogs.find(storedBlog => storedBlog.id === blog.id);

    if (isExist) {
        return toast.error('Already added to Bookmarks')
    }
    blogs.push(blog)

    localStorage.setItem('blog-list', JSON.stringify(blogs))
    toast.success('Blog Bookmarked  successfully')
}

// delete blog from LS

const deleteBlog = (id) => {
    let blogs = getStoredBlogs();
    const remainingBlogs = blogs.filter(storedBlog => storedBlog.id !== id);
    localStorage.setItem('blog-list', JSON.stringify(remainingBlogs))
    toast.success('Blog Removed from Bookmark')
}

export { getStoredBlogs, saveBlogsToLS, deleteBlog }