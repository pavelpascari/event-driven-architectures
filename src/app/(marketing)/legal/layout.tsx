import { BaseShell } from "@/components/layouts/base-shell";

const LegalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <BaseShell>{children}</BaseShell>
    );
}

export default LegalLayout;