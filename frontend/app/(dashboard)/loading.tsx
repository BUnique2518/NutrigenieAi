export default function DashboardLoading() {
    return (
        <div className="flex h-screen bg-black items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-400 mx-auto mb-4"></div>
                <p className="text-gray-400 font-semibold">Loading dashboard...</p>
            </div>
        </div>
    );
}
