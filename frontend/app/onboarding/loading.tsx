export default function OnboardingLoading() {
    return (
        <div className="flex h-screen bg-gradient-to-br from-purple-50 via-purple-50 to-blue-50 items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-600 mx-auto mb-4"></div>
                <p className="text-gray-600 font-semibold">Loading onboarding...</p>
            </div>
        </div>
    );
}
