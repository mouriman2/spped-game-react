import React from 'react';
import './index.css';

import { SpeedGame } from './game/SpeedGame';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <SpeedGame />
    </div>
  );
};

export default App;
