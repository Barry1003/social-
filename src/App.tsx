import { Route, Routes } from 'react-router-dom';
import SignIn from './_auth/forms/SignIn';
import SignUp from './_auth/forms/SignUp';
import './Global.css';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import Rootlayout from './_root/Rootlayout';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* Public Routes */}
        <Route   element={<AuthLayout />}>
          <Route path='/Sign-in' element={<SignIn />} />
          <Route path='/Sign-up' element={<SignUp />} />
        </Route>

        {/* Private Routes */}
        <Route element={<Rootlayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
