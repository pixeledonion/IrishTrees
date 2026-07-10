import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Timeline } from './pages/Timeline';
import { PeriodDetail } from './pages/PeriodDetail';
import { Rewilding } from './pages/Rewilding';
import { Sources } from './pages/Sources';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="timeline/:id" element={<PeriodDetail />} />
        <Route path="rewilding" element={<Rewilding />} />
        <Route path="sources" element={<Sources />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
