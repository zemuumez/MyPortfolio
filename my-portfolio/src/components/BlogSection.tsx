import React from "react";

interface BlogPostCardProps {
  imageUrl: string;
  title: string;
  likes: number;
  comments: number;
  link: string;
  isAnimated?: boolean;
  animationDelay?: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ imageUrl, title, likes, comments, link, isAnimated, animationDelay }) => {
  return (
    <div
      className={`single-blog bg-[#26272a] flex flex-col justify-between w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] xl:w-[calc(20%-1rem)] group ${isAnimated ? "animate-me" : ""}`}
    >
      <div>
        <a href={link} className="featured-img block overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full opacity-60 filter grayscale group-hover:opacity-100 group-hover:filter-none transition-all duration-500 ease-in-out transform group-hover:scale-110" />
        </a>
        <div className="post-title p-6 text-center">
          <h3 className="text-lg lg:text-xl text-white font-futura-medium leading-snug">
            <a href={link} className="hover:text-brand-red transition-colors duration-300">{title}</a>
          </h3>
        </div>
      </div>
      <div className="like-comment flex justify-between items-center p-5 border-t border-[#35373d] relative">
        <a href={link} className="read-more absolute top-[-26px] left-1/2 transform -translate-x-1/2 w-[50px] h-[50px] border border-[#35373d] rounded-full flex items-center justify-center bg-[#26272a] hover:bg-brand-red hover:border-brand-red transition-all duration-300">
          <img src="/assets/images/arrow-right-white.png" alt="arrow" className="w-4 h-4" />
        </a>
        <span className="like text-sm text-[#8b8a8a] font-bold flex items-center">
          <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 512 512"><path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/></svg>
          {likes}
        </span>
        <span className="comment text-sm text-[#8b8a8a] font-bold flex items-center">
          <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 512 512"><path d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"/></svg>
          {comments}
        </span>
      </div>
    </div>
  );
};

const blogPosts = [
  { imageUrl: "/assets/images/blog-card-ai-future.jpg", title: "The Future of Artificial Intelligence in Business.", likes: 190, comments: 75, link: "#" },
  { imageUrl: "/assets/images/blog-card-ux-importance.jpg", title: "The Importance of User Experience (UX) in Web Design.", likes: 241, comments: 62, link: "#" },
  { imageUrl: "/assets/images/blog-card-webapp-best-practices.jpg", title: "WebApp Development Best Practices.", likes: 170, comments: 58, link: "#" },
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="blog-section relative py-20 md:py-28 bg-cover bg-center" style={{ backgroundImage: "url(/assets/images/blog-background.jpg)"}}>
      <img src="/assets/images/blog-ellipse.png" alt="ellipse" className="ellipse absolute top-[70px] left-[90px] max-w-[590px] z-0 opacity-50 hidden lg:block animate-spin-slow" />
      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="section-title text-right text-5xl md:text-7xl lg:text-[140px] font-bold mb-12 md:mb-20 text-transparent"
          style={{ WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "#333" }}
        >
          Articles
        </h2>
        <div className="blog-wrapper flex flex-col lg:flex-row gap-5 md:gap-8">
          <div className="single-blog title w-full lg:w-1/4 flex flex-col justify-center items-start p-4 order-first lg:order-none">
            <h2 className="text-4xl lg:text-5xl text-white font-futura-bold mb-6">My Articles</h2>
            <a href="blog.html" className="link-default inline-flex items-center text-white font-futura-medium group">
              More Article
              <span className="ml-2 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center transition-all duration-300 group-hover:animate-pulse">
                <img src="/assets/images/arrow-right-white.png" alt="arrow" className="w-4 h-4" />
              </span>
            </a>
          </div>
          {blogPosts.map((post, index) => (
            <BlogPostCard
              key={index}
              imageUrl={post.imageUrl}
              title={post.title}
              likes={post.likes}
              comments={post.comments}
              link={post.link}
              isAnimated={true}
              animationDelay={`${0.3 * index}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
