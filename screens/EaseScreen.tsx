import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EaseScreen: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'awareness' | 'foodcraft' | 'medicraft'>('awareness');

    const yogicScience = [
        { id: 1, title: 'Breath', subtitle: 'The Prana', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop' },
        { id: 2, title: 'Fruit', subtitle: 'miracle food', image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=300&h=400&fit=crop' },
        { id: 3, title: 'Balance in life', subtitle: '', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=400&fit=crop' },
    ];

    const renownedDoctors = [
        { id: 1, title: 'Coconut oil', subtitle: 'the best oil', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop' },
        { id: 2, title: 'Strong as a', subtitle: 'bull', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=400&fit=crop' },
        { id: 3, title: 'Heart', subtitle: 'The Engine', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=400&fit=crop' },
    ];

    const haircare = [
        { id: 1, title: 'Haircare', subtitle: 'The best way', image: 'https://images.unsplash.com/photo-1522338247362-0c4b1bd9f518?w=300&h=400&fit=crop' },
        { id: 2, title: 'Scalp Growth', subtitle: '', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=400&fit=crop' },
        { id: 3, title: 'Strengthen', subtitle: 'hair roots', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=400&fit=crop' },
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
                    className="w-12 h-12 rounded-full bg-teal-500 hover:bg-teal-400 transition-colors"
                    aria-label="Procrafter"
                />
                <button
                    onClick={() => navigate('/app/ease')}
                    className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-500 transition-colors border-2 border-green-400"
                    aria-label="Ease"
                />
            </div>

            {/* Header */}
            <header className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-white text-2xl">home</span>
                <h1 className="text-headline text-blue-400">Ease</h1>
            </header>

            {/* Navigation Tabs */}
            <div className="flex gap-6 mb-6">
                <button
                    onClick={() => setActiveTab('awareness')}
                    className={`text-base font-semibold transition-all ${
                        activeTab === 'awareness' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
                    }`}
                >
                    Awareness
                </button>
                <button
                    onClick={() => setActiveTab('foodcraft')}
                    className={`text-base font-semibold transition-all ${
                        activeTab === 'foodcraft' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
                    }`}
                >
                    Foodcraft
                </button>
                <button
                    onClick={() => setActiveTab('medicraft')}
                    className={`text-base font-semibold transition-all ${
                        activeTab === 'medicraft' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400'
                    }`}
                >
                    Medicraft
                </button>
            </div>

            {activeTab === 'awareness' && (
                <>
                    {/* Yogic Science Section */}
                    <section className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-title text-blue-400">Yogic Science</h2>
                            <span className="material-symbols-outlined text-white">chevron_right</span>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {yogicScience.map((item) => (
                                <div key={item.id} className="card-elevated min-w-[200px] flex-shrink-0 rounded-2xl overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                                    <div className="p-4">
                                        <p className="text-white font-bold text-lg mb-1">{item.title}</p>
                                        {item.subtitle && <p className="text-gray-300 text-sm">{item.subtitle}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Renowned Doctors Section */}
                    <section className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-title text-blue-400">Renowned Doctors</h2>
                            <span className="material-symbols-outlined text-white">chevron_right</span>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {renownedDoctors.map((item) => (
                                <div key={item.id} className="card-elevated min-w-[200px] flex-shrink-0 rounded-2xl overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                                    <div className="p-4">
                                        <p className="text-white font-bold text-lg mb-1">{item.title}</p>
                                        {item.subtitle && <p className="text-gray-300 text-sm">{item.subtitle}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Haircare Section */}
                    <section className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-title text-blue-400">Haircare</h2>
                            <span className="material-symbols-outlined text-white">chevron_right</span>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {haircare.map((item) => (
                                <div key={item.id} className="card-elevated min-w-[200px] flex-shrink-0 rounded-2xl overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                                    <div className="p-4">
                                        <p className="text-white font-bold text-lg mb-1">{item.title}</p>
                                        {item.subtitle && <p className="text-gray-300 text-sm">{item.subtitle}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </>
            )}

            {activeTab === 'foodcraft' && (
                <div className="text-center py-20">
                    <p className="text-gray-400 text-lg">Foodcraft content coming soon...</p>
                </div>
            )}

            {activeTab === 'medicraft' && (
                <div className="text-center py-20">
                    <p className="text-gray-400 text-lg">Medicraft content coming soon...</p>
                </div>
            )}
        </div>
    );
};

export default EaseScreen;

