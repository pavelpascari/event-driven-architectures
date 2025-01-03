import { BaseShell } from "@/components/layouts/base-shell";

const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <BaseShell>{children}</BaseShell>
    );
};

export default BlogLayout;
