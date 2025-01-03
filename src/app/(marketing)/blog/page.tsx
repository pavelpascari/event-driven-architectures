const BlogHome: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <h1>Blog Home</h1>
            {children}
        </div>
    );
}

export default BlogHome;