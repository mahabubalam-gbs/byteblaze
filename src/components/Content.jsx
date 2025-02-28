import { useLoaderData } from "react-router-dom";
import image from '../assets/404.jpg';
import Markdown from 'react-markdown'
import rehypeRaw from "rehype-raw";


const Content = () => {
    const blog = useLoaderData();
    const { title, cover_image, tags, body_html, canonical_url } = blog;

    return (
        <div rel="noopener noreferrer" className=" mx-auto group bg-white text-gray-800 hover:no-underline focus:no-underline  border border-opacity-30 p-2">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || image} />
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                {
                    tags.map((tag, index) => <a key={index} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)
                }

            </div>
            <div className="pb-3">
                <a target="_blank" href={canonical_url} className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
            </div>
            <div>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>

            </div>


        </div>
    );
};

export default Content;