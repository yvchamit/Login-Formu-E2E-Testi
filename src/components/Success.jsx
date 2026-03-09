import { Button, Container } from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";

function Success() {
  const location = useLocation();
  const history = useHistory();
  const userName = location.state?.userName || "Misafir";

  const handleLogout = () => {
    history.replace("/");
  };

  return (
    <Container className="mt-5 text-center">
      <h2>Hoş geldin {userName} 👋</h2>
      <p>Başarıyla giriş yaptın.</p>

      <Button color="danger" onClick={handleLogout}>
        Çıkış Yap
      </Button>
    </Container>
  );
}

export default Success;
