import { Header } from 'components';
import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getUserInfo } from './service';
const HomePage = lazy(() => import('pages/Home'));
const RatesPage = lazy(() => import('pages/Rates'));

export const App = () => {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(pos => {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      getUserInfo({ latitude, longitude });
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/rates" element={<RatesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
