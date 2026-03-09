import { Button, Container } from "reactstrap";

function Success() {

  return (
    <Container className="mt-5 text-center">
      <h2>Hoş geldin 👋</h2>
      <p>Başarıyla giriş yaptın.</p>

      <Button color="danger">
        Çıkış Yap
      </Button>
    </Container>
  );
}

export default Success;
