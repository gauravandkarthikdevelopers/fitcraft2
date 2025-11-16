
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import MainLayout from './screens/MainLayout';
import FeedScreen from './screens/FeedScreen';
import StatsScreen from './screens/StatsScreen';
import NutritionScreen from './screens/NutritionScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExploreNFTsScreen from './screens/ExploreNFTsScreen';
import ProcrafterScreen from './screens/ProcrafterScreen';
import EaseScreen from './screens/EaseScreen';
import CreatePostScreen from './screens/CreatePostScreen';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Navigate to="feed" replace />} />
          <Route path="feed" element={<FeedScreen />} />
          <Route path="stats" element={<StatsScreen />} />
          <Route path="nutrition" element={<NutritionScreen />} />
          <Route path="profile" element={<ProfileScreen />} />
          <Route path="explore-nfts" element={<ExploreNFTsScreen />} />
          <Route path="procrafter" element={<ProcrafterScreen />} />
          <Route path="ease" element={<EaseScreen />} />
          <Route path="create-post" element={<CreatePostScreen />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
