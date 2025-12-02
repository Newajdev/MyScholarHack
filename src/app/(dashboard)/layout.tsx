export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar Placeholder */}
            <aside className="w-64 bg-gray-100 p-4 hidden md:block">
                <nav className="space-y-2">
                    <div className="font-bold mb-4">Dashboard</div>
                    {/* Add navigation links here */}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}
