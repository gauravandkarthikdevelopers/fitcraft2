import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProcrafterScreen: React.FC = () => {
    const navigate = useNavigate();
    const [activeMainTab, setActiveMainTab] = useState<'gymcraft' | 'yogacraft'>('gymcraft');
    const [activeSubTab, setActiveSubTab] = useState<'discover' | 'trainers' | 'myplan'>('discover');

    const liveWorkouts = [
        { id: 1, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop' },
        { id: 2, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
    ];

    const liveYogaSessions = [
        { id: 1, image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop' },
        { id: 2, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop' },
    ];

    const fitcraftWorkouts = [
        { id: 1, name: 'Quick ab burner', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
        { id: 2, name: 'Arms & back', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop' },
    ];

    const premiumWorkouts = [
        { id: 1, title: 'Weight loss', rating: 4.9, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop' },
        { id: 2, title: 'HIIT Cardio for beginners', rating: 4.8, image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop' },
    ];

    const topYogasanas = [
        { id: 1, title: 'Yoga for Flexibility', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop' },
        { id: 2, title: 'Hatha Yoga', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop' },
    ];

    const premiumYogaWorkouts = [
        { id: 1, title: 'Yoga for Backpain', rating: 4.9, image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop' },
        { id: 2, title: 'Awaken ur kundalini', rating: 4.8, image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop' },
    ];

    const trainers = [
        { id: 1, name: 'Varun', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
        { id: 2, name: 'scarlet', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop' },
        { id: 3, name: 'Ambuja', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop' },
        { id: 4, name: 'Leela', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop' },
    ];

    return (
        <div className="p-5 sm:p-6 pb-32 bg-background-dark min-h-screen">
            {/* Navigation Circles */}
            <div className="flex gap-3 mb-6 justify-center">
                <button
                    onClick={() => navigate('/app/feed')}
                    className="w-12 h-12 rounded-full bg-gray-600 hover:bg-gray-500 transition-colors"
                    aria-label="Feed"
                />
                <button
                    onClick={() => navigate('/app/explore-nfts')}
                    className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors"
                    aria-label="Explore NFTs"
                />
                <button
                    onClick={() => navigate('/app/procrafter')}
                    className="w-12 h-12 rounded-full bg-teal-500 hover:bg-teal-400 transition-colors border-2 border-teal-300"
                    aria-label="Procrafter"
                />
                <button
                    onClick={() => navigate('/app/ease')}
                    className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-500 transition-colors"
                    aria-label="Ease"
                />
            </div>

            {/* Header */}
            <header className="flex items-center justify-between mb-6">
                <h1 className="text-headline text-blue-400">Procrafter</h1>
                <span className="material-symbols-outlined text-white text-2xl">home</span>
            </header>

            {/* Main Tabs */}
            <div className="flex gap-6 mb-6">
                <button
                    onClick={() => setActiveMainTab('gymcraft')}
                    className={`text-lg font-semibold transition-all ${
                        activeMainTab === 'gymcraft' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
                    }`}
                >
                    GymCraft
                </button>
                <button
                    onClick={() => setActiveMainTab('yogacraft')}
                    className={`text-lg font-semibold transition-all ${
                        activeMainTab === 'yogacraft' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
                    }`}
                >
                    YogaCraft
                </button>
            </div>

            {activeMainTab === 'gymcraft' ? (
                <>
                    {/* Live Workout Sessions */}
                    <section className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <h2 className="text-title text-white">Live workout sessions</h2>
                                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">LIVE</span>
                            </div>
                            <span className="material-symbols-outlined text-white">chevron_right</span>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {liveWorkouts.map((workout) => (
                                <div key={workout.id} className="min-w-[280px] flex-shrink-0 rounded-2xl overflow-hidden">
                                    <img src={workout.image} alt="Live workout" className="w-full h-40 object-cover" />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Sub Tabs */}
                    <div className="flex gap-6 mb-6">
                        <button
                            onClick={() => setActiveSubTab('discover')}
                            className={`text-base font-semibold transition-all ${
                                activeSubTab === 'discover' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
                            }`}
                        >
                            Discover
                        </button>
                        <button
                            onClick={() => setActiveSubTab('trainers')}
                            className={`text-base font-semibold transition-all ${
                                activeSubTab === 'trainers' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
                            }`}
                        >
                            Trainers
                        </button>
                        <button
                            onClick={() => setActiveSubTab('myplan')}
                            className={`text-base font-semibold transition-all ${
                                activeSubTab === 'myplan' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
                            }`}
                        >
                            My plan
                        </button>
                    </div>

                    {activeSubTab === 'discover' && (
                        <>
                            {/* Search Bar */}
                            <div className="flex gap-3 mb-6">
                                <div className="flex-1 relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="input-outlined w-full pl-12 pr-4 border-green-400"
                                    />
                                </div>
                                <button className="p-3 border-2 border-green-400 rounded-xl">
                                    <span className="material-symbols-outlined text-green-400">tune</span>
                                </button>
                            </div>

                            {/* Fitcraft Workouts */}
                            <section className="mb-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-title text-blue-400">Fitcraft workouts</h2>
                                    <span className="material-symbols-outlined text-white">chevron_right</span>
                                </div>
                                <div className="flex gap-4 overflow-x-auto pb-2 mb-4">
                                    {fitcraftWorkouts.map((workout) => (
                                        <div key={workout.id} className="min-w-[280px] flex-shrink-0 rounded-2xl overflow-hidden">
                                            <img src={workout.image} alt={workout.name} className="w-full h-40 object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {fitcraftWorkouts.map((workout) => (
                                        <button key={workout.id} className="btn-secondary flex-1 py-3 text-sm">
                                            {workout.name}
                                        </button>
                                    ))}
                                </div>
                            </section>

                            {/* Popular Premium Workouts */}
                            <section className="mb-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-title text-blue-400">Popular Premium workouts</h2>
                                    <span className="material-symbols-outlined text-white">chevron_right</span>
                                </div>
                                <div className="flex gap-4 overflow-x-auto pb-2">
                                    {premiumWorkouts.map((workout) => (
                                        <div key={workout.id} className="card-elevated min-w-[280px] flex-shrink-0 rounded-2xl overflow-hidden">
                                            <img src={workout.image} alt={workout.title} className="w-full h-40 object-cover" />
                                            <div className="p-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-white font-semibold">{workout.title}</p>
                                                    <div className="flex items-center gap-1">
                                                        <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                                                        <span className="text-white text-sm">{workout.rating}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}

                    {activeSubTab === 'trainers' && (
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-title text-blue-400">Professional Trainers</h2>
                                <span className="material-symbols-outlined text-white">chevron_right</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {trainers.map((trainer) => (
                                    <div key={trainer.id} className="card-elevated rounded-2xl overflow-hidden">
                                        <img src={trainer.image} alt={trainer.name} className="w-full h-48 object-cover" />
                                        <div className="p-4 text-center">
                                            <p className="text-white font-semibold">{trainer.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </>
            ) : (
                <>
                    {/* Live Yoga Sessions */}
                    <section className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <h2 className="text-title text-white">Live Yoga sessions</h2>
                                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">LIVE</span>
                            </div>
                            <span className="material-symbols-outlined text-white">chevron_right</span>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {liveYogaSessions.map((session) => (
                                <div key={session.id} className="min-w-[280px] flex-shrink-0 rounded-2xl overflow-hidden">
                                    <img src={session.image} alt="Live yoga" className="w-full h-40 object-cover" />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Sub Tabs */}
                    <div className="flex gap-6 mb-6">
                        <button
                            onClick={() => setActiveSubTab('discover')}
                            className={`text-base font-semibold transition-all ${
                                activeSubTab === 'discover' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
                            }`}
                        >
                            Discover
                        </button>
                        <button
                            onClick={() => setActiveSubTab('trainers')}
                            className={`text-base font-semibold transition-all ${
                                activeSubTab === 'trainers' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
                            }`}
                        >
                            Trainers
                        </button>
                        <button
                            onClick={() => setActiveSubTab('myplan')}
                            className={`text-base font-semibold transition-all ${
                                activeSubTab === 'myplan' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
                            }`}
                        >
                            My plan
                        </button>
                    </div>

                    {activeSubTab === 'discover' && (
                        <>
                            {/* Search Bar */}
                            <div className="flex gap-3 mb-6">
                                <div className="flex-1 relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="input-outlined w-full pl-12 pr-4 border-green-400"
                                    />
                                </div>
                                <button className="p-3 border-2 border-green-400 rounded-xl">
                                    <span className="material-symbols-outlined text-green-400">tune</span>
                                </button>
                            </div>

                            {/* Top Yogasanas */}
                            <section className="mb-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-title text-blue-400">Top Yogasanas</h2>
                                    <span className="material-symbols-outlined text-white">chevron_right</span>
                                </div>
                                <div className="flex gap-4 overflow-x-auto pb-2">
                                    {topYogasanas.map((yoga) => (
                                        <div key={yoga.id} className="card-elevated min-w-[280px] flex-shrink-0 rounded-2xl overflow-hidden">
                                            <img src={yoga.image} alt={yoga.title} className="w-full h-40 object-cover" />
                                            <div className="p-4">
                                                <p className="text-white font-semibold">{yoga.title}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Popular Premium Workouts */}
                            <section className="mb-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-title text-blue-400">Popular Premium workouts</h2>
                                    <span className="material-symbols-outlined text-white">chevron_right</span>
                                </div>
                                <div className="flex gap-4 overflow-x-auto pb-2">
                                    {premiumYogaWorkouts.map((workout) => (
                                        <div key={workout.id} className="card-elevated min-w-[280px] flex-shrink-0 rounded-2xl overflow-hidden">
                                            <img src={workout.image} alt={workout.title} className="w-full h-40 object-cover" />
                                            <div className="p-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-white font-semibold">{workout.title}</p>
                                                    <div className="flex items-center gap-1">
                                                        <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                                                        <span className="text-white text-sm">{workout.rating}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}

                    {activeSubTab === 'trainers' && (
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-title text-blue-400">Professional Yoga teachers</h2>
                                <span className="material-symbols-outlined text-white">chevron_right</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {trainers.map((trainer) => (
                                    <div key={trainer.id} className="card-elevated rounded-2xl overflow-hidden">
                                        <img src={trainer.image} alt={trainer.name} className="w-full h-48 object-cover" />
                                        <div className="p-4 text-center">
                                            <p className="text-white font-semibold">{trainer.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </>
            )}
        </div>
    );
};

export default ProcrafterScreen;

