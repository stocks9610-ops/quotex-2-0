import ChartIframe from "../components/ChartIframe";

export default function Nexus() {
    return (
        <div className="flex flex-col h-screen">
            <header className="h-16 bg-[#131722] border-b border-[#2a2e39] flex items-center justify-between px-4">
                <h1 className="text-xl font-bold text-white">
                    NEXUS <span className="text-neon-green">PRO</span>
                </h1>
                <div className="text-sm text-gray-400">Equity Balance: $42,150.00</div>
            </header>
            <main className="flex-1">
                <ChartIframe src="/quotex2_0_final/chart.html" />
            </main>
        </div>
    );
}
