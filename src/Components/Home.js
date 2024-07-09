import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SearchIcon from '@mui/icons-material/Search';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Home() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#"> <SearchIcon/></Navbar.Brand>
        <p className='padding-left:20px;'><GroupIcon /><NotificationsIcon/></p>
        
      
      </Container>
    </Navbar>
  );
}

export default Home;