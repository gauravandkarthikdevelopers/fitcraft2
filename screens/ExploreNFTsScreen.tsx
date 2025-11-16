import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExploreNFTsScreen: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'hot' | 'popular' | 'walkcraft' | 'runcraft' | 'classy' | 'yoga'>('hot');

    const hotPicks = [
        { id: 1, name: 'Neon Spark', price: '4.1 ETH', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', time: null },
        { id: 2, name: 'Neon way!', price: '1.8 ETH', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop', time: '10:18:20' },
    ];

    const popularCollection = [
        { id: 1, name: 'My Hero', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop' },
        { id: 2, name: 'Light & Weight', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop' },
    ];

    const walkcraftNFTs = [
        { id: 1, name: 'From Future', price: '1.2 ETH', time: '12:34:00', image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&h=400&fit=crop' },
        { id: 2, name: 'Moon Dance', price: '1.8 ETH', time: '10:18:20', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop' },
        { id: 3, name: 'Jackson Shoe', price: '1.2 ETH', time: '01:54:02', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop' },
        { id: 4, name: 'Twister', price: '1.2 ETH', time: '12:34:00', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop' },
    ];

    const runcraftNFTs = [
        { id: 1, name: 'Get Together', price: '1.8 ETH', time: '10:18:20', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop' },
        { id: 2, name: 'Sporty', price: '1.8 ETH', time: '10:18:20', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop' },
    ];

    const classyNFTs = [
        { id: 1, name: '60 degree', price: '0.5 ETH', time: '10:18:20', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop' },
        { id: 2, name: 'Mr. Slide', price: '0.9 ETH', time: '10:18:20', image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop' },
        { id: 3, name: 'Wellwet', price: '1 ETH', time: '10:18:20', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop' },
        { id: 4, name: 'Hello Hello', price: '1.2 ETH', time: '10:18:20', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=400&fit=crop' },
    ];

    const yogaNFTs = [
        { id: 1, name: 'Wellwet', price: '1 ETH', time: '10:18:20', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop' },
        { id: 2, name: 'Wellwet', price: '1 ETH', time: '10:18:20', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop' },
        { id: 3, name: 'Wellwet', price: '1 ETH', time: '10:18:20', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop' },
        { id: 4, name: 'Wellwet', price: '1 ETH', time: '10:18:20', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop' },
        { id: 5, name: 'Wellwet', price: '1 ETH', time: '10:18:20', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop' },
        { id: 6, name: 'Wellwet', price: '1 ETH', time: '10:18:20', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop' },
    ];

    const topCollectors = [
        { id: 1, username: '@MrRocket68', earnings: '$14,000', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
        { id: 2, username: '@Lighterman', earnings: '$9,900', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
        { id: 3, username: '@Robotino', earnings: '$8,750', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
        { id: 4, username: '@Cool Skull', earnings: '$8,270', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
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
                    className="w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors border-2 border-purple-400"
                    aria-label="Explore NFTs"
                />
                <button
                    onClick={() => navigate('/app/procrafter')}
                    className="w-12 h-12 rounded-full bg-teal-500 hover:bg-teal-400 transition-colors"
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
                <span className="material-symbols-outlined text-white text-2xl">home</span>
                <h1 className="text-headline text-white">Explore NFT's</h1>
                <div className="flex gap-4">
                    <span className="material-symbols-outlined text-white text-2xl">search</span>
                    <span className="material-symbols-outlined text-white text-2xl">menu</span>
                </div>
            </header>

            {/* Hot Pick Section */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-title text-white">Hot pick</h2>
                    <span className="material-symbols-outlined text-white">chevron_right</span>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {hotPicks.map((nft) => (
                        <div key={nft.id} className="card-elevated rounded-2xl overflow-hidden min-w-[200px] flex-shrink-0">
                            <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-white font-bold mb-2">{nft.name}</h3>
                                <p className="text-orange-400 font-semibold mb-2">Current bid: {nft.price}</p>
                                {nft.time && (
                                    <>
                                        <p className="text-gray-400 text-xs mb-2">Time remaining: {nft.time}</p>
                                        <button className="btn-primary w-full text-sm py-2">Place bid</button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Popular Collection */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-title text-white">Popular collection</h2>
                    <span className="material-symbols-outlined text-white">chevron_right</span>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {popularCollection.map((nft) => (
                        <div key={nft.id} className="card-elevated rounded-2xl overflow-hidden min-w-[200px] flex-shrink-0">
                            <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-white font-bold">{nft.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Walkcraft NFTs */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-title text-white">Walkcraft NFTs</h2>
                    <span className="material-symbols-outlined text-white">chevron_right</span>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {walkcraftNFTs.map((nft) => (
                        <div key={nft.id} className="card-elevated rounded-2xl overflow-hidden min-w-[200px] flex-shrink-0">
                            <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-white font-bold mb-2">{nft.name}</h3>
                                <p className="text-orange-400 font-semibold mb-1">Current bid: {nft.price}</p>
                                <p className="text-gray-400 text-xs">Time remaining: {nft.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Top Collectors */}
            <section className="mb-8">
                <h2 className="text-title text-white mb-4">Top collectors this month</h2>
                <div className="space-y-3">
                    {topCollectors.map((collector, index) => (
                        <div key={collector.id} className="card-elevated p-4 flex items-center gap-4">
                            <div className="text-white font-bold text-lg w-8">{index + 1}.</div>
                            <img src={collector.avatar} alt={collector.username} className="w-12 h-12 rounded-full" />
                            <div className="flex-1">
                                <p className="text-white font-semibold">{collector.username}</p>
                            </div>
                            <p className="text-orange-400 font-bold">{collector.earnings}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Runcraft NFTs */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-title text-white">Runcraft NFTs</h2>
                    <span className="material-symbols-outlined text-white">chevron_right</span>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {runcraftNFTs.map((nft) => (
                        <div key={nft.id} className="card-elevated rounded-2xl overflow-hidden min-w-[200px] flex-shrink-0">
                            <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-white font-bold mb-2">{nft.name}</h3>
                                <p className="text-orange-400 font-semibold mb-1">Current bid: {nft.price}</p>
                                <p className="text-gray-400 text-xs">Time remaining: {nft.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Classy NFTs */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-title text-white">Classy NFTs</h2>
                    <span className="material-symbols-outlined text-white">chevron_right</span>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {classyNFTs.map((nft) => (
                        <div key={nft.id} className="card-elevated rounded-2xl overflow-hidden min-w-[200px] flex-shrink-0">
                            <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-white font-bold mb-2">{nft.name}</h3>
                                <p className="text-orange-400 font-semibold mb-1">Current bid: {nft.price}</p>
                                <p className="text-gray-400 text-xs">Time remaining: {nft.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Limited Edition */}
            <section className="mb-8">
                <h2 className="text-title text-white mb-4">Limited Edition</h2>
            </section>

            {/* Yoga to yogi NFTs */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-title text-white">Yoga to yogi Nft's</h2>
                    <span className="material-symbols-outlined text-white">chevron_right</span>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2">
                    {yogaNFTs.map((nft) => (
                        <div key={nft.id} className="card-elevated rounded-2xl overflow-hidden min-w-[200px] flex-shrink-0">
                            <img src={nft.image} alt={nft.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-white font-bold mb-2">{nft.name}</h3>
                                <p className="text-orange-400 font-semibold mb-1">Current bid: {nft.price}</p>
                                <p className="text-gray-400 text-xs">Time remaining: {nft.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ExploreNFTsScreen;

