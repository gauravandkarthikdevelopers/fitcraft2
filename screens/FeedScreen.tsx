import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogWorkoutModal = ({ isOpen, onClose, onLog }: any) => {
    if (!isOpen) return null;

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLog();
    }

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="log-workout-title"
        >
            <div
                className="card-elevated p-6 w-full max-w-sm animate-scale-in"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 id="log-workout-title" className="text-title text-white">Log a Workout</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-200" 
                        aria-label="Close"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="workoutType" className="block text-caption mb-2 text-gray-300">Workout Type</label>
                        <div className="relative">
                            <select 
                                id="workoutType" 
                                name="workoutType" 
                                className="input-outlined w-full pr-10 appearance-none cursor-pointer"
                            >
                                <option className="bg-input-bg-dark">Running</option>
                                <option className="bg-input-bg-dark">Weightlifting</option>
                                <option className="bg-input-bg-dark">Cycling</option>
                                <option className="bg-input-bg-dark">Yoga</option>
                                <option className="bg-input-bg-dark">Swimming</option>
                                <option className="bg-input-bg-dark">Other</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                expand_more
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="duration" className="block text-caption mb-2 text-gray-300">Duration</label>
                            <input 
                                type="number" 
                                id="duration" 
                                name="duration" 
                                placeholder="45 min" 
                                className="input-outlined w-full" 
                            />
                        </div>
                        <div>
                            <label htmlFor="calories" className="block text-caption mb-2 text-gray-300">Calories</label>
                            <input 
                                type="number" 
                                id="calories" 
                                name="calories" 
                                placeholder="350" 
                                className="input-outlined w-full" 
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="notes" className="block text-caption mb-2 text-gray-300">Notes (optional)</label>
                        <textarea 
                            id="notes" 
                            name="notes" 
                            rows={3} 
                            placeholder="How did it feel?" 
                            className="input-outlined w-full resize-none"
                        ></textarea>
                    </div>
                    <div className="pt-2">
                        <button 
                            type="submit" 
                            className="btn-primary w-full flex items-center justify-center gap-2 group"
                        >
                            <span>Log Workout</span>
                            <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform duration-300">
                                check_circle
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const CommentModal = ({ isOpen, onClose, post, onAddComment }: any) => {
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState(post?.commentsList || []);

    // Update comments when post changes
    React.useEffect(() => {
        if (post?.commentsList) {
            setComments(post.commentsList);
        }
    }, [post]);

    if (!isOpen || !post) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim()) {
            const comment = {
                id: Date.now(),
                author: 'You',
                avatar: '/WhatsApp Image 2025-11-11 at 01.33.52.jpeg',
                text: newComment,
                timestamp: 'Just now',
                likes: 0,
                isLiked: false
            };
            const updatedComments = [...comments, comment];
            setComments(updatedComments);
            setNewComment('');
            onAddComment(post.id, updatedComments.length, updatedComments);
        }
    };

    const handleLikeComment = (commentId: number) => {
        setComments(comments.map((comment: any) => 
            comment.id === commentId 
                ? { ...comment, likes: comment.likes + 1, isLiked: !comment.isLiked }
                : comment
        ));
    };

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-end z-50 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="card-elevated w-full max-w-md rounded-t-3xl max-h-[85vh] flex flex-col animate-scale-in mb-24"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <h2 className="text-title text-white">Comments</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-200" 
                        aria-label="Close"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Comments List */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {comments.length === 0 ? (
                        <div className="text-center py-8">
                            <span className="material-symbols-outlined text-gray-500 text-5xl mb-3">chat_bubble_outline</span>
                            <p className="text-gray-400">No comments yet. Be the first to comment!</p>
                        </div>
                    ) : (
                        comments.map((comment: any) => (
                            <div key={comment.id} className="flex gap-3">
                                <img 
                                    src={comment.avatar} 
                                    alt={comment.author}
                                    className="w-10 h-10 rounded-full border-2 border-orange-400/50 flex-shrink-0"
                                />
                                <div className="flex-1">
                                    <div className="card-flat p-3 rounded-2xl">
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="font-bold text-white text-sm">{comment.author}</p>
                                            <p className="text-xs text-gray-400">{comment.timestamp}</p>
                                        </div>
                                        <p className="text-white text-sm">{comment.text}</p>
                                    </div>
                                    <div className="flex items-center gap-4 mt-2 ml-2">
                                        <button
                                            onClick={() => handleLikeComment(comment.id)}
                                            className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-lg">favorite_border</span>
                                            <span className="text-xs">{comment.likes || 0}</span>
                                        </button>
                                        <button className="text-gray-400 hover:text-orange-400 transition-colors text-xs">
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Comment Input */}
                <form onSubmit={handleSubmit} className="p-4 pb-6 border-t border-white/10">
                    <div className="flex gap-3 items-end">
                        <img 
                            src="/WhatsApp Image 2025-11-11 at 01.33.52.jpeg" 
                            alt="Your avatar"
                            className="w-10 h-10 rounded-full border-2 border-orange-400/50 flex-shrink-0"
                        />
                        <div className="flex-1">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Add a comment..."
                                rows={2}
                                className="input-outlined w-full resize-none text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={!newComment.trim()}
                            className="btn-primary px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                        >
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const initialPosts = [
    {
        id: 1,
        author: 'Roshan DS',
        avatar: '/WhatsApp Image 2025-11-11 at 01.33.52.jpeg',
        timestamp: '2h ago',
        content: 'Crushed my morning 5k run! Feeling energized and ready to tackle the day. Setting new personal records! 🏃‍♂️💨 #cardio #running #fitnessgoals',
        image: '/WhatsApp Image 2025-11-11 at 01.32.52.jpeg',
        stats: [
            { icon: 'directions_run', label: 'Distance', value: '5.02 km' },
            { icon: 'timer', label: 'Time', value: '24:15' }
        ],
        likes: 12,
        comments: 5,
        isLiked: false,
        commentsList: [
            {
                id: 1,
                author: 'Alex Johnson',
                avatar: '/WhatsApp Image 2025-11-11 at 01.33.52.jpeg',
                text: 'Amazing work! Keep it up! 💪',
                timestamp: '1h ago',
                likes: 3,
                isLiked: false
            },
            {
                id: 2,
                author: 'Sarah Miller',
                avatar: '/WhatsApp Image 2025-11-11 at 01.33.52.jpeg',
                text: 'You inspire me to run more! 🏃‍♀️',
                timestamp: '45m ago',
                likes: 1,
                isLiked: false
            },
            {
                id: 3,
                author: 'Mike Chen',
                avatar: '/WhatsApp Image 2025-11-11 at 01.33.52.jpeg',
                text: 'Great pace! What\'s your secret?',
                timestamp: '30m ago',
                likes: 0,
                isLiked: false
            }
        ]
    },
    {
        id: 2,
        author: 'Darshan DS',
        avatar: '/WhatsApp Image 2025-11-11 at 01.33.52.jpeg',
        timestamp: 'Yesterday',
        content: 'New PR on deadlifts today! So proud of the progress. Consistency is key. #gymlife #strengthtraining',
        image: '/WhatsApp Image 2025-11-11 at 01.41.34.jpeg',
        likes: 78,
        comments: 12,
        isLiked: true,
        commentsList: [
            {
                id: 1,
                author: 'Emma Wilson',
                avatar: '/WhatsApp Image 2025-11-11 at 01.33.52.jpeg',
                text: 'Incredible progress! 🔥',
                timestamp: '2h ago',
                likes: 5,
                isLiked: false
            },
            {
                id: 2,
                author: 'David Brown',
                avatar: '/WhatsApp Image 2025-11-11 at 01.33.52.jpeg',
                text: 'What weight did you hit?',
                timestamp: '1h ago',
                likes: 2,
                isLiked: false
            }
        ]
    }
];

const recentWorkouts = [
    { id: 1, type: 'Morning Run', icon: 'directions_run', duration: '30 min', date: 'Today' },
    { id: 2, type: 'Full Body Strength', icon: 'fitness_center', style: { fontVariationSettings: "'FILL' 1" }, duration: '1 hour', date: 'Yesterday' },
    { id: 3, type: 'Evening Yoga', icon: 'self_improvement', duration: '45 min', date: '2 days ago' },
];

const FeedScreen: React.FC = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState<any>(null);
    const [posts, setPosts] = useState(initialPosts);

    const handleLogWorkout = () => {
        console.log("Workout logged!");
        setIsModalOpen(false);
    };

    const handleLikeToggle = (postId: number) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    isLiked: !post.isLiked,
                    likes: post.isLiked ? post.likes - 1 : post.likes + 1,
                };
            }
            return post;
        }));
    };

    const handleComment = (post: any) => {
        setSelectedPost(post);
        setIsCommentModalOpen(true);
    };

    const handleAddComment = (postId: number, newCommentCount: number, updatedCommentsList: any[]) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: newCommentCount,
                    commentsList: updatedCommentsList
                };
            }
            return post;
        }));
        // Update selectedPost to reflect new comments
        setSelectedPost((prev: any) => {
            if (prev && prev.id === postId) {
                return {
                    ...prev,
                    comments: newCommentCount,
                    commentsList: updatedCommentsList
                };
            }
            return prev;
        });
    };

    return (
        <>
            <div className="p-5 sm:p-6 pb-32">
                {/* Navigation Circles */}
                <div className="flex gap-3 mb-6 justify-center">
                    <button
                        onClick={() => navigate('/app/feed')}
                        className="w-12 h-12 rounded-full bg-gray-600 hover:bg-gray-500 transition-colors border-2 border-gray-400"
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
                        className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-500 transition-colors"
                        aria-label="Ease"
                    />
                </div>

                {/* Header - NEW STYLE */}
                <header className="flex justify-between items-center mb-8 animate-fade-in-up">
                    <div>
                        <h1 className="text-headline text-white mb-1">Feed</h1>
                        <p className="text-caption">Stay motivated with your community</p>
                    </div>
                    <button 
                        onClick={() => setIsModalOpen(true)} 
                        className="btn-pill bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 flex items-center gap-2 px-4"
                        aria-label="Log a new workout"
                    >
                        <span className="material-symbols-outlined text-lg">add</span>
                        <span className="font-bold">Log</span>
                    </button>
                </header>

                {/* Create Post Button */}
                <div className="flex justify-end mb-6">
                    <button
                        onClick={() => navigate('/app/create-post')}
                        className="btn-floating fixed bottom-28 right-6 z-40 shadow-lg"
                        aria-label="Create new post"
                    >
                        <span className="material-symbols-outlined text-2xl">add</span>
                    </button>
                </div>

                {/* Posts - NEW CARD STYLES */}
                <div className="space-y-6">
                    {posts.map((post, index) => (
                        post.image ? (
                            <div 
                                key={post.id} 
                                className="card-elevated overflow-hidden animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative">
                                    <img 
                                        alt="Workout post" 
                                        className="w-full h-80 object-cover" 
                                        src={post.image} 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <img 
                                            alt="User avatar" 
                                            className="w-14 h-14 rounded-full mr-3 border-3 border-orange-400 shadow-lg" 
                                            src={post.avatar} 
                                        />
                                        <div>
                                            <p className="font-bold text-white text-base">{post.author}</p>
                                            <p className="text-xs text-gray-300">{post.timestamp}</p>
                                        </div>
                                    </div>
                                    <p className="text-white mb-5 text-body leading-relaxed">{post.content}</p>
                                    {post.stats && (
                                        <div className="grid grid-cols-2 gap-3 mb-5">
                                            {post.stats.map(stat => (
                                                <div 
                                                    key={stat.label} 
                                                    className="card-flat p-4"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-400/20">
                                                            <span className="material-symbols-outlined text-orange-400 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                                                {stat.icon}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                                                            <p className="font-bold text-white text-sm">{stat.value}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <div className="flex items-center gap-6 text-white pt-4 border-t border-white/10">
                                        <button 
                                            onClick={() => handleLikeToggle(post.id)} 
                                            className={`flex items-center gap-2 transition-all duration-300 hover:scale-110 ${post.isLiked ? 'text-red-500' : 'text-white hover:text-red-400'}`}
                                        >
                                            <span 
                                                className="material-symbols-outlined text-2xl transition-transform duration-300" 
                                                style={{ fontVariationSettings: post.isLiked ? "'FILL' 1" : "", transform: post.isLiked ? 'scale(1.2)' : 'scale(1)' }}
                                            >
                                                {post.isLiked ? 'favorite' : 'favorite_border'}
                                            </span>
                                            <span className="font-semibold">{post.likes}</span>
                                        </button>
                                        <button 
                                            onClick={() => handleComment(post)} 
                                            className="flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-orange-400"
                                        >
                                            <span className="material-symbols-outlined text-2xl">chat_bubble_outline</span>
                                            <span className="font-semibold">{post.comments}</span>
                                        </button>
                                        <button className="flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-orange-400">
                                            <span className="material-symbols-outlined text-2xl">share</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div 
                                key={post.id} 
                                className="card-elevated p-6 animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex items-center mb-4">
                                    <img 
                                        alt="User avatar" 
                                        className="w-14 h-14 rounded-full mr-3 border-3 border-orange-400 shadow-lg" 
                                        src={post.avatar} 
                                    />
                                    <div>
                                        <p className="font-bold text-white text-base">{post.author}</p>
                                        <p className="text-xs text-gray-400">{post.timestamp}</p>
                                    </div>
                                </div>
                                <p className="mb-5 text-gray-300 text-body leading-relaxed">{post.content}</p>
                                {post.stats && (
                                    <div className="grid grid-cols-2 gap-3 mb-5">
                                        {post.stats.map(stat => (
                                            <div 
                                                key={stat.label} 
                                                className="card-flat p-4"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-400/20">
                                                        <span className="material-symbols-outlined text-orange-400 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                                            {stat.icon}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                                                        <p className="font-bold text-white text-sm">{stat.value}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                                    <div className="flex items-center gap-6 text-gray-400">
                                        <button 
                                            onClick={() => handleLikeToggle(post.id)} 
                                            className={`flex items-center gap-2 transition-all duration-300 hover:scale-110 ${post.isLiked ? 'text-red-500' : 'hover:text-orange-400'}`}
                                        >
                                            <span 
                                                className="material-symbols-outlined text-2xl transition-transform duration-300" 
                                                style={{ fontVariationSettings: post.isLiked ? "'FILL' 1" : "", transform: post.isLiked ? 'scale(1.2)' : 'scale(1)' }}
                                            >
                                                {post.isLiked ? 'favorite' : 'favorite_border'}
                                            </span>
                                            <span className="font-semibold">{post.likes}</span>
                                        </button>
                                        <button 
                                            onClick={() => handleComment(post)} 
                                            className="flex items-center gap-2 transition-all duration-300 hover:scale-110 hover:text-orange-400"
                                        >
                                            <span className="material-symbols-outlined text-2xl">chat_bubble_outline</span>
                                            <span className="font-semibold">{post.comments}</span>
                                        </button>
                                    </div>
                                    <button className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-orange-400">
                                        <span className="material-symbols-outlined text-2xl">share</span>
                                    </button>
                                </div>
                            </div>
                        )
                    ))}
                </div>

                {/* Recent Workouts - NEW CARD STYLES */}
                <div className="mt-10 animate-fade-in-up delay-300">
                    <h2 className="text-title text-white mb-6">Your Recent Workouts</h2>
                    <div className="space-y-4">
                        {recentWorkouts.map((workout, index) => (
                            <div 
                                key={workout.id} 
                                className="card-elevated p-5 animate-fade-in-up"
                                style={{ animationDelay: `${(index + posts.length) * 0.1}s` }}
                            >
                                <div className="flex items-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 mr-4 shrink-0 elevation-3">
                                        <span 
                                            className="material-symbols-outlined text-white text-3xl" 
                                            style={workout.style}
                                        >
                                            {workout.icon}
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-white text-base mb-1">{workout.type}</p>
                                        <p className="text-caption">{workout.duration}</p>
                                    </div>
                                    <p className="text-caption shrink-0 font-medium">{workout.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <LogWorkoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onLog={handleLogWorkout} />
            <CommentModal 
                isOpen={isCommentModalOpen} 
                onClose={() => {
                    setIsCommentModalOpen(false);
                    setSelectedPost(null);
                }} 
                post={selectedPost}
                onAddComment={handleAddComment}
            />
        </>
    );
};

export default FeedScreen;
