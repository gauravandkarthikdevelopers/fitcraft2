import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePostScreen: React.FC = () => {
    const navigate = useNavigate();
    const [postText, setPostText] = useState('');
    const [selectedPhotos, setSelectedPhotos] = useState<string[]>([]);
    const [selectedVideos, setSelectedVideos] = useState<string[]>([]);
    const photoInputRef = useRef<HTMLInputElement>(null);
    const videoInputRef = useRef<HTMLInputElement>(null);

    const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newPhotos: string[] = [];
            Array.from(files).forEach((file) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    if (event.target?.result) {
                        newPhotos.push(event.target.result as string);
                        if (newPhotos.length === Array.from(files).length) {
                            setSelectedPhotos([...selectedPhotos, ...newPhotos]);
                        }
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const handleVideoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newVideos: string[] = [];
            Array.from(files).forEach((file) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    if (event.target?.result) {
                        newVideos.push(event.target.result as string);
                        if (newVideos.length === Array.from(files).length) {
                            setSelectedVideos([...selectedVideos, ...newVideos]);
                        }
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const removePhoto = (index: number) => {
        setSelectedPhotos(selectedPhotos.filter((_, i) => i !== index));
    };

    const removeVideo = (index: number) => {
        setSelectedVideos(selectedVideos.filter((_, i) => i !== index));
    };

    const handlePost = () => {
        // In a real app, this would send data to backend
        console.log('Post created:', { postText, photos: selectedPhotos.length, videos: selectedVideos.length });
        navigate('/app/feed');
    };

    return (
        <div className="min-h-screen bg-background-dark p-5 sm:p-6">
            {/* Header */}
            <header className="flex items-center mb-8">
                <button
                    onClick={() => navigate('/app/feed')}
                    className="mr-4 text-white hover:text-blue-400 transition-colors"
                >
                    <span className="material-symbols-outlined text-2xl">arrow_back</span>
                </button>
            </header>

            {/* Post Text Input */}
            <div className="mb-8">
                <h2 className="text-white mb-4 text-lg">
                    <span className="text-blue-400">+</span> Post what you feel
                </h2>
                <div className="bg-blue-900/30 rounded-2xl p-4 min-h-[200px] border border-blue-800/50">
                    <textarea
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                        placeholder=""
                        className="w-full bg-transparent text-white placeholder-gray-500 resize-none outline-none text-body"
                        style={{ minHeight: '150px', caretColor: 'white' }}
                    />
                </div>
            </div>

            {/* Photo Section */}
            <div className="mb-8">
                <h2 className="text-white mb-4 text-lg">
                    <span className="text-blue-400">+</span> Photo
                </h2>
                <div className="flex gap-4">
                    {selectedPhotos.map((photo, index) => (
                        <div key={index} className="relative">
                            <img
                                src={photo}
                                alt={`Photo ${index + 1}`}
                                className="w-32 h-32 object-cover rounded-xl"
                            />
                            <button
                                onClick={() => removePhoto(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                    {selectedPhotos.length < 2 && (
                        <>
                            <button
                                onClick={() => photoInputRef.current?.click()}
                                className="bg-blue-900/30 w-32 h-32 rounded-xl flex items-center justify-center hover:bg-blue-900/50 transition-colors border border-blue-800/50"
                            >
                                <span className="material-symbols-outlined text-white text-3xl">open_in_full</span>
                            </button>
                            {selectedPhotos.length === 0 && (
                                <button
                                    onClick={() => photoInputRef.current?.click()}
                                    className="bg-blue-900/30 w-32 h-32 rounded-xl flex items-center justify-center hover:bg-blue-900/50 transition-colors border border-blue-800/50"
                                >
                                    <span className="material-symbols-outlined text-white text-3xl">open_in_full</span>
                                </button>
                            )}
                        </>
                    )}
                </div>
                <input
                    ref={photoInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handlePhotoSelect}
                    className="hidden"
                />
            </div>

            {/* Video Section */}
            <div className="mb-8">
                <h2 className="text-white mb-4 text-lg">
                    <span className="text-blue-400">+</span> Video
                </h2>
                <div className="flex gap-4">
                    {selectedVideos.map((video, index) => (
                        <div key={index} className="relative">
                            <video
                                src={video}
                                className="w-32 h-32 object-cover rounded-xl"
                                controls={false}
                            />
                            <button
                                onClick={() => removeVideo(index)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                    {selectedVideos.length < 2 && (
                        <>
                            <button
                                onClick={() => videoInputRef.current?.click()}
                                className="bg-blue-900/30 w-32 h-32 rounded-xl flex items-center justify-center hover:bg-blue-900/50 transition-colors border border-blue-800/50"
                            >
                                <span className="material-symbols-outlined text-white text-3xl">open_in_full</span>
                            </button>
                            {selectedVideos.length === 0 && (
                                <button
                                    onClick={() => videoInputRef.current?.click()}
                                    className="bg-blue-900/30 w-32 h-32 rounded-xl flex items-center justify-center hover:bg-blue-900/50 transition-colors border border-blue-800/50"
                                >
                                    <span className="material-symbols-outlined text-white text-3xl">open_in_full</span>
                                </button>
                            )}
                        </>
                    )}
                </div>
                <input
                    ref={videoInputRef}
                    type="file"
                    accept="video/*"
                    multiple
                    onChange={handleVideoSelect}
                    className="hidden"
                />
            </div>

            {/* Post Button */}
            <button
                onClick={handlePost}
                disabled={!postText.trim() && selectedPhotos.length === 0 && selectedVideos.length === 0}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Post
            </button>
        </div>
    );
};

export default CreatePostScreen;

