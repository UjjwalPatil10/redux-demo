import { Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Insurance } from './pages/Insurance';
import { Teams } from './pages/Teams';
import { LawyerLogin } from './pages/Login';
import { LawyerOnboarding } from './pages/Onboarding';
import { OnboardingForm } from './pages/OnboardingForm';
import { Dashboard } from './pages/Dashboard';
import { Documents } from './pages/Documents';
import { ApplicationForm } from './pages/ApplicationForm';
import { ChangePassword } from './pages/ChangePassword';


export const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'insurance',
        element: <Insurance />
      },
      {
        path: 'teams',
        element: <Teams />
      },
      {
        path: 'lawyer-login',
        element: <LawyerLogin />
      },
      {
        path: 'lawyer-on-boarding',
        element: <LawyerOnboarding />
      },
      {
        path: 'lawyer-on-boarding-form',
        element: <OnboardingForm />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'documents',
        element: <Documents />
      },
      {
        path: 'application-form',
        element: <ApplicationForm />
      },
      {
        path: 'change-password',
        element: <ChangePassword />
      },
      // {
      //   path: '*',
      //   element: <Navigate to="/404" />
      // }
    ]
  },
  // {
  //   path: '404',
  //   element: <NotFound />
  // }
];
