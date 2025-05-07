import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Cell,
} from "recharts";
import Button from "../components/UI/Button/Button";

const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
        <div className="rounded-lg px-4 py-2 backdrop-blur-md bg-[#1C1C1E]/90 text-white shadow-lg">
            <p className="text-sm font-semibold">{label}</p>
            {payload.map((entry, index) => (
                <p key={index} className="text-xs">
                    {entry.name}: {entry.value}
                </p>
            ))}
        </div>
    );
};

const Dashboard = () => {
    const [investedProperties, setInvestedProperties] = useState([]);
    const [goal, setGoal] = useState(null);
    const [showGoalModal, setShowGoalModal] = useState(false);
    const [goalInput, setGoalInput] = useState("");

    useEffect(() => {
        const data = [
            {
                id: 101,
                title: "Lakeview Condo in Chicago",
                location: "Chicago, IL",
                price: 950000,
                investmentRequired: 150000,
                ownershipShare: 30,
                valueGrowth: [150000, 155000, 160000, 162000],
            },
            {
                id: 102,
                title: "Oceanfront Villa in Miami",
                location: "Miami, FL",
                price: 2000000,
                investmentRequired: 250000,
                ownershipShare: 50,
                valueGrowth: [250000, 260000, 275000, 280000],
            },
            {
                id: 103,
                title: "Modern Loft in San Francisco",
                location: "San Francisco, CA",
                price: 1300000,
                investmentRequired: 180000,
                ownershipShare: 40,
                valueGrowth: [180000, 185000, 187000, 190000],
            },
        ];
        setInvestedProperties(data);
    }, []);

    useEffect(() => {
        document.body.style.overflow = showGoalModal ? "hidden" : "auto";
    }, [showGoalModal]);

    const totalInvestment = investedProperties.reduce((acc, p) => acc + p.investmentRequired, 0);
    const avgOwnership = investedProperties.length
        ? investedProperties.reduce((acc, p) => acc + p.ownershipShare, 0) / investedProperties.length
        : 0;

    const ownershipData = investedProperties.map((p) => ({
        name: p.title,
        value: p.ownershipShare,
    }));

    const investmentData = investedProperties.map((p) => ({
        name: p.title,
        investment: p.investmentRequired,
    }));

    const growthData = Array.from({ length: 4 }).map((_, i) => {
        const obj = { name: `Month ${i + 1}` };
        investedProperties.forEach((p) => {
            obj[p.title] = p.valueGrowth?.[i] || 0;
        });
        return obj;
    });

    const topPerformingProperties = investedProperties
        .map((p) => {
            const [initial, latest] = [p.valueGrowth[0], p.valueGrowth.at(-1)];
            return {
                ...p,
                roi: ((latest - initial) / p.investmentRequired) * 100,
            };
        })
        .sort((a, b) => b.roi - a.roi)
        .slice(0, 3);

    const recentActivities = [
        { message: "Added Oceanfront Villa in Miami to your portfolio", isGrowth: null },
        { message: "Lakeview Condo value increased by $12,000", isGrowth: true },
        { message: "Modern Loft in San Francisco value decreased by $3,000", isGrowth: false },
        { message: "Invested $50,000 in Oceanfront Villa", isGrowth: null },
    ];

    const getActivityArrow = (isGrowth) => {
        if (isGrowth === null) return null;
        return isGrowth ? (
            <FaArrowUp className="ml-2 text-green-500" />
        ) : (
            <FaArrowDown className="ml-2 text-red-500" />
        );
    };

    const goalProgress = goal ? Math.min((totalInvestment / goal) * 100, 100) : 0;

    return (
        <div className="min-h-screen px-6 py-20 text-white bg-[#121212] sm:px-12 relative">
            {/* Goal Modal */}
            {showGoalModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg">
                    <div className="bg-[#1C1C1E] backdrop-blur-2xl backdrop-saturate-100 p-6 rounded-2xl shadow-lg max-w-sm w-full">
                        <h2 className="mb-4 text-lg font-semibold text-white">Set Your Investment Goal</h2>
                        <input
                            type="number"
                            value={goalInput}
                            onChange={(e) => setGoalInput(e.target.value)}
                            placeholder="Enter goal amount"
                            className="pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white /mt-2 mb-[0.5rem] placeholder:text-white/40 w-full /appearance-none px-4 py-3 bg-[#252527] border border-white/20 rounded-xl [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        />
                        <div className="flex justify-end mt-2 space-x-4">
                            <Button variant="outline" onClick={() => setShowGoalModal(false)}
                                className="text-blue-500 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">
                                Cancel</Button>
                            <Button
                                onClick={() => {
                                    setGoal(parseFloat(goalInput));
                                    setShowGoalModal(false);
                                }}
                                className="rounded-lg"
                            >
                                Save Goal
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="flex items-center justify-between mb-12">
                <h1 className="text-4xl font-semibold tracking-tight">Your Investment Dashboard</h1>
                {/* <Button onClick={() => setShowGoalModal(true)} className="rounded-full">
                    {goal ? "Edit Goal" : "Set Goal"}
                </Button> */}
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
                {[
                    { label: "Total Investment", value: `$${totalInvestment.toLocaleString()}` },
                    { label: "Average Ownership", value: `${avgOwnership.toFixed(1)}%` },
                    { label: "Properties Invested", value: investedProperties.length },
                ].map((card, i) => (
                    <div key={i} className="p-6 border shadow-md backdrop-blur-lg rounded-xl bg-white/5 border-white/10">
                        <h2 className="text-sm text-gray-400">{card.label}</h2>
                        <p className="mt-2 text-2xl font-semibold text-white">{card.value}</p>
                    </div>
                ))}
            </div>

            {/* Goal Tracker */}
            <div className="p-6 mb-12 border shadow-md rounded-xl bg-white/5 backdrop-blur-md border-white/10">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium text-white">Goal Tracker</h3>
                    <Button onClick={() => setShowGoalModal(true)} className="rounded-full text-sm px-4 py-1.5">
                        {goal ? "Edit Goal" : "Set Goal"}
                    </Button>
                </div>
                {goal ? (
                    <>
                        <p className="mb-2 text-lg text-gray-300">Current Goal: ${goal.toLocaleString()}</p>
                        <div className="w-full h-4 bg-gray-700 rounded-full">
                            <div
                                className={`h-4 rounded-full ${goalProgress === 100 ? "bg-green-500" : "bg-blue-500"}`}
                                style={{ width: `${goalProgress}%` }}
                            />
                        </div>
                        <p className="mt-2 text-sm text-gray-300">{goalProgress.toFixed(2)}%</p>
                        {goalProgress === 100 && (
                            <p className="mt-2 font-medium text-green-400">Goal Reached! Set a new one?</p>
                        )}
                    </>
                ) : (
                    <p className="text-sm text-gray-400">No goal set. Click "Set Goal" to begin.</p>
                )}
            </div>

            {/* Charts */}
            <div className="grid gap-8 mb-16 md:grid-cols-2">
                <div className="p-6 border shadow-md rounded-xl bg-white/5 backdrop-blur-md border-white/10">
                    <h3 className="mb-4 text-xl font-medium text-white">Ownership Distribution</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={ownershipData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={100}
                                label
                                fill="#007AFF"
                            >
                                {ownershipData.map((_, i) => (
                                    <Cell key={i} fill={`hsl(${i * 40}, 70%, 50%)`} />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className="p-6 border shadow-md rounded-xl bg-white/5 backdrop-blur-md border-white/10">
                    <h3 className="mb-4 text-xl font-medium text-white">Investment per Property</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={investmentData}>
                            <XAxis dataKey="name" stroke="#ccc" />
                            <YAxis stroke="#ccc" />
                            <Tooltip content={<CustomTooltip />} />
                            <Bar
                                dataKey="investment"
                                fill="#34C759"
                                barSize={40}
                                radius={[6, 6, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="p-6 mb-8 border shadow-md rounded-xl bg-white/5 backdrop-blur-md border-white/10">
                <h3 className="mb-4 text-xl font-medium text-white">Recent Activity</h3>
                <ul>
                    {recentActivities.map((activity, index) => (
                        <li key={index} className="flex items-center mb-2 text-sm text-gray-300">
                            <span>{activity.message}</span>
                            {getActivityArrow(activity.isGrowth)}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Top Performing Properties */}
            <div className="p-6 mb-8 border shadow-md rounded-xl bg-white/5 backdrop-blur-md border-white/10">
                <h3 className="mb-4 text-xl font-medium text-white">Top Performing Properties</h3>
                <ul>
                    {topPerformingProperties.map((p, i) => (
                        <li key={i} className="mb-2 text-sm text-white">
                            <strong>{p.title}</strong> — ROI: {p.roi.toFixed(2)}%
                        </li>
                    ))}
                </ul>
            </div>

            {/* Portfolio Diversification */}
            <div className="p-6 border shadow-md rounded-xl bg-white/5 backdrop-blur-md border-white/10">
                <h3 className="mb-4 text-xl font-medium text-white">Portfolio Diversification</h3>
                <ul>
                    {investedProperties.map((p, i) => (
                        <li key={i} className="mb-2 text-sm text-white">
                            {p.type} {p.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;