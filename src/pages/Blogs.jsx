import { Link, useLoaderData, useNavigation } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";


const Blogs = () => {
    const blogs = useLoaderData()
    const { id } = blogs[0]
    const navigation = useNavigation();

    if (navigation.state === "loading") return <Loader></Loader>
    return (
        <section className="py-6 while:bg-white white:text-gray-800">
            <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
                <Link rel="noopener noreferrer" to={`/blog/${id}`} className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    <img src={blogs[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{blogs[0].title}</h3>
                        <span className="text-xs text-gray-400">{
                            new Date(blogs[0].published_at).toDateString()
                        }</span>
                        <p>{blogs[0].description}</p>
                    </div>
                </Link>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        blogs.slice(1).map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
        </section >
    );
};

export default Blogs;
