import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import image from '../assets/404.jpg'


const BlogCard = ({ blog }) => {

    const { id, title, cover_image,
        published_at, description } = blog;
    return (
        <Link to={`/blog/${id}`} rel="noopener noreferrer" className="max-w-sm mx-auto group bg-white text-gray-800 hover:no-underline focus:no-underline border-2 border-primary border-opacity-30 hover:border-secondary hover:scale-105 transition p-2">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || image} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs text-gray-400">{
                    new Date(published_at).toDateString()
                }</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

BlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default BlogCard;



