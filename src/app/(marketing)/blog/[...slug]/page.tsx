const BlogPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <h1>Blog Page</h1>
            {children}
        </div>
    );
}

export default BlogPage;
