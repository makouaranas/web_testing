import React from 'react';
import { Layout } from './components/Layout';
import { APP_NAME } from './utils/constants';

function App() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold text-gray-900">{APP_NAME}</h1>
      <p className="mt-4 text-gray-600">Welcome to your new Vite project!</p>
    </Layout>
  );
}

export default App;