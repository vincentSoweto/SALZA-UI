import AuthForm from '../components/AuthForm';
import MainNavigation from '../components/MainNavigation';
import Dashboard from './dashboard';

const AuthPage = () => {
  return (<>
  <MainNavigation/>
  <AuthForm />
  <Dashboard />
  </>);
};

export default AuthPage;
