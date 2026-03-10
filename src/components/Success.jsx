import { Button, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

function Success({ username }) {
  const history = useHistory();
  const handleLogout = () => {
    history.replace("/");
  };

  return (
    <Container className="mt-5 text-center">
      <h2>Hoş geldin 👋</h2>
      <h4>{username}</h4>
      <p>Başarıyla giriş yaptın.</p>

      <Button color="danger" onClick={handleLogout}>
        Çıkış Yap
      </Button>
    </Container>
  );
}

export default Success;
