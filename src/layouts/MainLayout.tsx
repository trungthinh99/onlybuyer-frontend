import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: '375px',
        height: '100vh',
        flexGrow: 1,
        boxShadow: 1,
        padding: 0,
      }}
    >
      <Outlet />
    </Container>
  );
};

export default MainLayout;
