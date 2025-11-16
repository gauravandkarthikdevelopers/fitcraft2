import React from 'react';

const StatsScreen: React.FC = () => {
    const stats = [
        { label: 'Total Workouts', value: '127', icon: 'fitness_center', color: 'from-orange-500 to-yellow-400', change: '+12%' },
        { label: 'Calories Burned', value: '24,580', icon: 'local_fire_department', color: 'from-red-500 to-orange-500', change: '+8%' },
        { label: 'Active Days', value: '18', icon: 'calendar_today', color: 'from-blue-500 to-cyan-400', change: '+5%' },
        { label: 'Streak', value: '7 days', icon: 'whatshot', color: 'from-yellow-500 to-orange-500', change: '🔥' },
    ];

    const weeklyData = [
        { day: 'Mon', value: 65, color: 'bg-orange-500' },
        { day: 'Tue', value: 80, color: 'bg-orange-500' },
        { day: 'Wed', value: 45, color: 'bg-orange-500' },
        { day: 'Thu', value: 90, color: 'bg-yellow-400' },
        { day: 'Fri', value: 70, color: 'bg-orange-500' },
        { day: 'Sat', value: 85, color: 'bg-yellow-400' },
        { day: 'Sun', value: 60, color: 'bg-orange-500' },
    ];

    const maxValue = Math.max(...weeklyData.map(d => d.value));

    return (
        <div className="p-5 sm:p-6 pb-32">
            {/* Header */}
            <header className="mb-8 animate-fade-in-up">
                <h1 className="text-headline text-white mb-1">Statistics</h1>
                <p className="text-caption">Track your fitness progress</p>
            </header>

            {/* Stats Grid - NEW CARD STYLES */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                    <div 
                        key={stat.label}
                        className="card-elevated p-6 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color} mb-4 elevation-3`}>
                            <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                {stat.icon}
                            </span>
                        </div>
                        <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
                        <p className="text-caption mb-3">{stat.label}</p>
                        <div className="flex items-center gap-1">
                            <span className="text-xs font-semibold text-orange-400">{stat.change}</span>
                            <span className="text-xs text-gray-500">vs last week</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Weekly Activity Chart - NEW CARD STYLE */}
            <div className="card-elevated p-6 mb-8 animate-fade-in-up delay-300">
                <h2 className="text-title text-white mb-6">Weekly Activity</h2>
                <div className="flex items-end justify-between gap-2 h-48">
                    {weeklyData.map((day, index) => (
                        <div key={day.day} className="flex-1 flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: `${(index + 4) * 0.1}s` }}>
                            <div className="relative w-full flex items-end justify-center h-40">
                                <div 
                                    className={`w-full ${day.color} rounded-t-2xl transition-all duration-500 hover:opacity-80 cursor-pointer elevation-2`}
                                    style={{ 
                                        height: `${(day.value / maxValue) * 100}%`,
                                        minHeight: '8px'
                                    }}
                                ></div>
                            </div>
                            <span className="text-xs font-semibold text-gray-400">{day.day}</span>
                            <span className="text-xs text-orange-400 font-bold">{day.value}%</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Achievements - NEW CARD STYLES */}
            <div className="card-elevated p-6 animate-fade-in-up delay-400">
                <h2 className="text-title text-white mb-5">Recent Achievements</h2>
                <div className="space-y-3">
                    {[
                        { icon: 'emoji_events', title: 'Week Warrior', desc: '7 days in a row', color: 'from-yellow-400 to-orange-500' },
                        { icon: 'local_fire_department', title: 'Calorie Crusher', desc: 'Burned 5k calories', color: 'from-red-500 to-orange-500' },
                        { icon: 'speed', title: 'Speed Demon', desc: 'New 5k PR', color: 'from-blue-500 to-cyan-400' },
                    ].map((achievement, index) => (
                        <div 
                            key={achievement.title}
                            className="card-flat p-4 animate-fade-in-up hover:border-orange-500/30"
                            style={{ animationDelay: `${(index + 8) * 0.1}s` }}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${achievement.color} elevation-3`}>
                                    <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                        {achievement.icon}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-white text-base mb-1">{achievement.title}</p>
                                    <p className="text-caption">{achievement.desc}</p>
                                </div>
                                <span className="material-symbols-outlined text-orange-400">chevron_right</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsScreen;
