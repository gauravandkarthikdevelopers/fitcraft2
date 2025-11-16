import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden p-6 bg-background-dark">
            {/* Animated gradient background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-3xl animate-float"></div>
                <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-gradient-to-tl from-primary/30 to-accent/40 blur-3xl animate-float delay-300"></div>
            </div>

            {/* Main content */}
            <div className="z-10 flex w-full max-w-md flex-col items-center text-center animate-fade-in-up">
                {/* Logo/Icon - New Design */}
                <div className="mb-12 animate-scale-in delay-200">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-3xl blur-2xl opacity-60 animate-pulse-glow"></div>
                        <div className="relative flex items-center justify-center h-28 w-28 bg-gradient-to-br from-orange-500 to-yellow-400 rounded-3xl elevation-4">
                            <span className="material-symbols-outlined text-white text-6xl" style={{ fontVariationSettings: "'FILL' 1, 'wght' 600" }}>
                                directions_run
                            </span>
                        </div>
                    </div>
                </div>

                {/* Title - New Typography */}
                <h1 className="mb-6 text-display bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(249,115,22,0.6)] animate-fade-in-up delay-300">
                    FitCraft
                </h1>

                {/* Subtitle */}
                <p className="mb-16 max-w-sm text-body text-gray-300 leading-relaxed animate-fade-in-up delay-400">
                    Track your progress, connect with friends, and crush your fitness goals with style.
                </p>

                {/* Action buttons - NEW BUTTON STYLES */}
                <div className="w-full space-y-4 animate-fade-in-up delay-500">
                    <button 
                        onClick={() => navigate('/signup')}
                        className="btn-primary w-full flex items-center justify-center gap-3 group"
                    >
                        <span>Get Started</span>
                        <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform duration-300">
                            arrow_forward
                        </span>
                    </button>
                    
                    <button 
                        onClick={() => navigate('/login')}
                        className="btn-secondary w-full"
                    >
                        Log In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
