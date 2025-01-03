import { BaseShell } from "@/components/layouts/base-shell";
import "@/styles/mdx.css";
const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <BaseShell>{children}</BaseShell>
    );
};

export default BlogLayout;
