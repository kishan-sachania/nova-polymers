import { Card, Button, Navbar, Container, Nav, Col, Row, Toast, Table } from "react-bootstrap";
import { People, EnvelopeAt, TelephoneFill } from 'react-bootstrap-icons';
import { useState } from "react";
import { title } from "process";
import img1 from '../assets/download-removebg-preview.png';
import green_pip from '../assets/greenpip-removebg-preview.png';
import perot_green from '../assets/perot_green.jpeg';
import orange_pip from '../assets/orange.jpg';
import transperent from '../assets/white-transparent.jpg';
import shapes from '../assets/shape.jpeg';
export default function Home() {

  var id1 = 0;
  var image1 = "data:image/jpeg;base64,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";
  var name1 = "PVC Short range";
  var discription1 = "PVC Flexible Garden Pipe is lightweight and yet tough, easy to use and carry. PVC Flexible Garden Pipe has excellent griping for watering. PVC Flexible Garden Pipe is available in various sizes and meter lengths. PVC Flexible Garden Pipe is available in different florescent colours like yellow, orange, pink, green.";
  const onClicks = (item: any) => {
    setDetail(item.id);
    setImgurl(item.imgae);
    setImgname(item.name);
    setImgdisc(item.matirial);
    setImgesize(item.size);
    setLength(item.length);
    setWeight(item.weight);
  };
  const [imgId, setDetail] = useState();
  const [imgUrl, setImgurl] = useState("");
  const [imgName, setImgname] = useState("");
  const [imgDisc, setImgdisc] = useState("");
  const [imgSize, setImgesize] = useState("");
  const [imgLength, setLength] = useState("");
  const [imgWeight, setWeight] = useState("");
  var CardList = [{
    id: 0,
    imgae: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFhUXGBUVFRYYGBUWGRUYFRUWFhUWGhUYHSggGB0lHRUVITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTgtLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQCBQYHAf/EAEAQAAECAwMICAMGBgIDAAAAAAEAAgMEESExUQUSQWFxgZGhBhMiMlKxwdEUQuEHI2KCkvAVQ1NywvEzoiRj8v/EABsBAQACAwEBAAAAAAAAAAAAAAACAwEEBQYH/8QANxEAAgECAwQIBQQBBQEAAAAAAAECAxEEITEFEkGREzJRYXGBobEiQsHR8AZSkuEVIzNiwvEU/9oADAMBAAIRAxEAPwD3BERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREARRPjtF7gNpCrPytAF8VnGvkoucY6tEowlLRF5Fq/4/L+OuwFfDl+BieCh09P8AcuZPoKv7XyNqi1A6QQTjy91K3LMI+LhXyWVWpvijDo1F8rNkipDKcLS6m0EeYU8KZY7uuadhBUlOL0ZBxa4EyJVFIwEREAREQBERAEREAREQBERAEREARV5uaZDaXPcAB+7tK5TKfSxxq2CKDxG/cNC16+Kp0Veb8i+hhqtd/AvPgdbHmmMFXuDRrK0s10qgtsYC86rBxK4iYmnONXOLna7VEXHSaLjVdrzfUVvHNnZo7Hiv9x39DpJrpZGPdDWD9RWpj5ZiuvivOw08lrHR2jXtUfxbj3RwC59TFVqnWkzpU8BShpBeZdMdx0E7ar51rsPJVM+IdC+Zr8RxVGZs9Gl2G1hzAHy/9gj5k6GDiCtWyG/QRz9lYzowFKjf/pXxlK2fsUToxvqn4tlkTT/6YO4FWIE+2vbh5u4rUhsWtgrsIV6Xm4jLHtdTW2vmrKc2nrzIVaMWtF5PP6my6xhFREpw9KHkqZL72uD9ht52rOYmIDmk5jSdVWn2WtfCYbWOIOB9wra0vDyZTRp5Z3Xik/bM2Uvl2Mw0D3DU60c1uJPpc8f8jA7W2w8FyHXOFjruI4rJtL2mnkqqeMrQ0kyypgKE1nFeKPS5DLsCLc6h8LrD9VswV5F1ttt+K20h0gjQqAOzm4OtHG8Lp0drrSovNHLr7Hks6T8mekItFknpJDi0a7sPwJsOwrehdanVhUjvQd0cipSnTluzVmERFYVhERAEREAREQBUcq5SZAYXu2NGknBWY8UNaXE0ABJ2BeZZbyo6PEzibLmjAe60sbi+gjl1nobuBwbxM7PqrU+5Uyo+M4uebNA0DYtfnZ2xfYx7NNYA3qN9lAF5icpTlvSebPW04RhFRirGT4uhoWBZ4nbgkV2aPM4qox7n93u+I3bsVBRb0LYxyuWDEaLgPNYunVh1TBf2jru4IZgC4AckyJqK4Idc46DwKFz8DyWJmjoWGe86DyWd0nutcETQ5l7TUAjepxlGI6y08FTEKIdHNTw5SLeBwqrIOWi9CE409ZWv3knWPBqQ4bj6K5K5VcDY88fQqr1MU3xGjaSFGclxHGwsdsNVYoy+S5Q1SllNo2c/PNJrmtcDqoRvFqpuDTawkajbwKpx4MVthG4rCHGINCKFQqylJu6JU6EYpbjLgi0sPBRxYZFrN7fZfRRwodxwUUvFOcWu7w561StLk0nqtSSDMB1ikLy3WFVnINDntv061ZgnObtRpLQSStvLQlL7Ki5dL0d6TFlGRTVlwdpb7hcjKONrTeDTaNBX1js1+boNo9VdRrVKM7xZr4jCQrxcJI9lhxAQCDUG44rNef8ARjL5hOEKIfu3WAn5D7L0Cq9RhsTGvDeXmeQxWFnh57svJ9oREWyawREQBEQoDnemkyWwM0fO4NOwWnyXnM1Go9uGldp04mfvIcPBpd+ogDyXF5Qg1IO0Lze0p71fwPWbGgo0VfjdlotqLNqgimlDuKhl5gt7LldaWuXOZ0XFwfcV5mX6wAA3G3WMFhGeGNpdS5WDALbW3YI6ICKObxUd6+TClolmjUF5dqXyrRfzW0iyMNwsJbst81Ti5Ai0rDAibDQ8CrqcVLJFssTBLPL85EHxrR/pfP4hqPIKjMwYzD22OZtBHNV2PG1W9CuJqVMXTjmzctn9XNWG5QeBYSN59lr5KK5trRyU0eeiGynAD0WVS7mip7SoaOz80SPn3G8V/V7LODPOFos3kei1tH+E8Fek4sVloafNY6N3uzP+Tw1rZcyxEyuT3iTvBVGZmw91aplGdJ7zBwHotQ+I2qnutqzbLaeLw97xsvBpnQyMS2immofaaRetRkWITEAF1Ct+5loJ0LUqR3JGx0qk95GE2aNK+y4o3mvroOda6wYY7VHHiF3ZZfyChrkiKzW6Yyjs57jouSYdV7cVmyGIbKcTidJWEvCNc92xo1YqV82SuruXkiaObl6L0QygYsABxq5hzTrGg8PJeaTUW1rdJPIXruPs/B+9w7HqujsuUo1ku1M5O2KSeG3nqnl7HZIiL0h5UIiIAiIgPPenT6TI/sb5laOM3ObThtXS9P5f7xjsWEcD9VyUKLSwrzGPTVaVz2Gz/iwsGuC+phQOscKELIQnC41HNTPY119h0FY5rm6xiFos3lI+Q5ohWmTDTeFA2MDfbtTq2HUoNEZRXFFpsu113I05KxBgOYfceoVBsIi5wPJXpSaiN0Gmr6K+k43zyNWspWyd+5mydHeRYK6qhw5rWTUmx3elm1xDaeS2DZ1mlvKnl7LD46GLnPbsNeRW7Nq3XOdGDetM1kOQhi6HTbX1WUSTd8hDfyg+ZV8zQP8APP5mqPPttijh9FWpuL+GT9DEsFRm86aX8ii1kw3+aP0D3V2BMEDtgO/LTzWfZxJ2f6UUVmAdwPsszrVv3EFs3Cv5Xzf3NdPSfWGtg/KFU/gEHSOdPJbNzTpJ4LDqx+IrUdapxZt0tn4aGaj7v3ZBAk4UPuta3ZfxKzrgKqYQ/wAIG1KYu4KNru7N5WSsirEhE940GAv4r62HQUa3epXRmi5QRJzBYstC1KTMuqANXWnkFUnJwNtO4YrJxiOuFBibOV6MkmtOc45ztGA2BZSXEtiop/FmRyMFxPWPvPdGAXf9AIwLYrRe1wqcaj0XCzc0IYHjd3R/kdS637MoZpGcdJbxtXT2cmq6b435HM2veeGlJ9qO7REXoTyQREQBERAaHpfAa6ASb2lpB1k09V5zHhV/dy6b7SMoHPgwK0b2oj9Y7reFSdy51sTOsueLD+LWuNtKmpSO9sTEpxnBPOL90VmxC2w2jmpocfA+/BfH0uuOGjcVDEh4rjSjY9DlItlzT3gPIp8O03OI22qkHOGnjashHOlvA+hUWkY3GtGWxLP0EHerEu97b2Hd9FRhzYGkjaCFdl8oN/8AlwVlNWd72KKynazVzYQpttLc8bRX0SPONHhO1tFi3KDMXDa0L6/KTdBB2tW05K3WRz1Se91Xz/oi+PZphMKxdOw/6I5qT+K/gYfyocq/+pnBVby/ev4l3Ry/Y/5GLJoaGAbyFO2KD8zRxKr/AMRJ+Vo3LITJPzNG5SjPvv6EZU7/AC287/QliOadJJ1NsVKKXV7IO+g5Kxnt/qDmq8eO3QTwooVHfs/PMnSTTtn53IXMdpICxMAaXcFG6OMRxUEadYL3bgtezZuqEmWTCYNe0r5ngXADYqBnwe6wnaQFg6ddpo3ULSpKBPo3xNgXHZtWsynllkJvZ7T7hW6vqqU7Ok2Ek6sdqoQJR0Z9TcLz/iFsUoRXxS0LYUk85aFvJLHxHGI8kudpPovYeg8FrZc0IJzjnAfKQBYddPNebw82CwxCLG2NGJ0BXOguW3QJtrHnsTFA/U8k5rvTeujgOu6kvA8z+otpwUoUFx17uz1PYUQIuycIIiIAiIUB5r9pcMfEQ3G4sodQqffkuZoTZWj2XHxAXEa1uunE1/5z2u7paxg1GlQeLjxXPxGmubc9vdPiHuudiI77aOdhdoywmLlUjmr2a7V+ZotMnwezFFD4vcKRzHAVaat4hVGxGxLHdl/J3sVFR8M2EjVeDuXIqU2tT6JhcTRr01OnLJ/ln2FwxRpbTZajaG5w8lCydabIgzT4ha36KZ0GoqKOGItVDi+w2721MqHBTQmQz3hyVVstXuuLTqPoV8fAmG/MDtaPRIxtn7j4ZZKX0Nn8DC+V5H6h6qKJApc/mf8AIKnC6w3lg25wUsSFFpX7s7HjyVjW8sormV7ri858/wDwV/E7l7LLPH4uI9lRfGiD5BxURjxMGha7izZVJPj6o2jKHTTaT6BTtEPS924e9FqITYrvmaOXMq03JhpV8dvGvkFdThxSTKqkYLWdvDP6EseYhi6u0knkqUQi8DO9FlEloYuiFx1CiqPa392rEuxk4Ril8N/zxM3PxcGjALDOYLgSeCBmDfRfC3E8PdYyJOVtcjF8Z2puoXqFxOzXpVuHAOgU1n91U0OXaDb2j+9CzvJFbqRX9/Y18CQL7TY3HSVuIMBrG1NGsb+7EivawZ0Q0wGkrRZQn3RO92WC5vrrK2KVGVR3ehxdq7Zp4WGbvJ6L84Es3N9c6vdhsuGGJOsrGUeXxGu2U1UuVAB0Sgub5rp+jcoxsSG6IOznsbtLnALpQWkUfN62IniKu9PNto9rg1zRW+grwWaIuoejCIiAIURAeMdOXl0xFcNDyP02ei00aMaDOqWm1rhew4bKroOkzMybjMdc9xIOBNo5Fc8/sEtcKtPLWtKWrPL1W1Ul4mXXtcKPI1PFx24FZiZcyx/aboP1VKNKU7TDYdIu3hQw4726xhePoqpwUlmbOE2hWwst6nK3s/E3DWMfaw7vooupLTVpLDiLjuuK1ue0mrSWOw+qtMyg9tkRtR4gtOphZLOLueywH6lpT+Gr8L5x/ot/HxG99gePEyw72m/crsh0hZcHj+yIKeapQnsfaxw2fRRzEux1j2jatXOL0s+7L00O+5060bq1ua5rQ6OJMQXipYWnFpqOCpPzdB9Fo4WTS01hxXAYVWxhh4FsQE/ib6hYlDf0avyf2Ixq9Dm1K3d8S9CVzRisDCGKrR5zNvDTsKrHK7NIdyVbw1RcGFtXDvLpI+3ubHqXaHDgvolX+I8FSg5chj5iNxV2D0gGiJ/19KIqT4p8iz/JwtlOPNGbZDUTtqpPhqDugKYZYc7+YdwUMxNCnbeTqJHureifBPka89qU/mnH+RXfDbpXxmpqqTGVWg0ZDLtdbFVdPzDrgGDVZzKzHCzepz6238LT0lfwRuHdkVe4NGsrXzGWWtshC3xuu3Ba18uSaufU8TxKkgyoPdbnHE2rZp4RI89jP1JVnlSVu95v7IhMR7znWuPidcNilgyRcak5x5BXxKhtsRwGr6LNk3ohN/MfZbajwPM1Ks5yu3n6k0vJtZQvv0NF5Vh0cmLCZcGOD3DQKXDb7rWOmc0nNOfEN7jbTZrVqTgEFrPniEV0kNJ9SpLWxmmkpZHuzTYF9WEFlGgYADgs10T1QREQBERAcL9o+Rs9ojtFwzXeh9OC85MwB2Ygs0Ow2r3uPBa9pa4VBFCDpqvLul/RYwiXNFYZuOH4XLXqwd7o420MNJPpY5riciYLmWtNRqtB3LEvY68Zpx0LF0J8I9k/l0LEzLHd4ZpxC196xxr9h8jSx1OGpQAUuJGrQpxDItY7gjo5ue0HXcVnUzGRWzNNLcRYVagT723mv9w/yCwrDNxLTr919+HdoIO9RlTjJZm7hcfiMM70pte3LQ2MvOsOo8QtnBjilrQ4YiwrVSmSs6+nqr56OPaKtc4bHVWpLDOPU+56XD/qOtZdLSUu9OzJIstBfq2j1CoR8gM+Wu41WcaHEZeSaYhp9iqjcqkd5hGtpryoqtypHhy/LHTW09m4pWq2T/5r/svuRxMiU0E71WdLht7SOPmtxByi03P3O+qkyhMfdEAAucQB+oE+SzDET3kn6mtjdlYH/wCedam7WV8mpL1MMmSGcKuAA1krZvybCaKkjULFq5SHUDOiAYgA+atRmwgLXOJ3rb8EeLVXuXmyrOPY0Ua2pxJuWpeRe942fRSzpBsa3ea+VVUZKYhWp2ISqX1fIl+KhjutLtqz+LiusHZGpRtgkYDms2S9cXeXBLlbkjFoaD2iXuwFvEqYl77B2RgPUqeFK0FXUaFn8RTswm/mKxqR3j4yG2CKkVebmrqfs/yO6LH659zKOO35W+u5afIWQHx4gAtJtcTaGjElewZJyeyBDENgsF5xOklXUYXd2dPZ+Hc5b70Xqy6iIts74REQBERAFFFhhwLXAEGwg6VKiA8/6TdDiKvgjObpZpbsxC4GbyfStR7he+lajK/R6DHtIzXeIX78Vr1KKecTkYrZin8VLJ9h4S+UpcSoj1g012r0HLPQ2LDqQM9uLb94vXLxpIjQtVxa1ONUjVpO00aUxTpZwX2HGYNBCvultSiMusXZDpY9hblJ+H4nDC0eqv8A8TNLHZy0sOVqbgttK5FzheFFpvRkt5yyiVZqOXXlw3E+S1z4QNzuK6mJ0XoO8f3rqtJPZMzPnJ4+6LfJOE49Yoslq6RxC3eT5ZgADreNi0XU6zxUkNpGl3EqT3nwCqtaM7F5gAWC3aVq55pPdbTXVQyGT4j6GpprPutnEyM1o7T66q+ywnLsJf6lRZJeJzzpV2k81j1LRe8K5lCRFQGCuKjl8jxHXAnUAT5LN2U7udiEPhjQXcl9+KcbGgDmuhkehUw/+WQMXUbyNq6KR+z7+pEA1NFTxPsrFTm+BsU8HXnpHnkefQpV7zbU7fZdj0f6FxIlHRPu2ax2jsGjeu5yZkCBAoWMGd4nWnnduW1V8KCXWOnh9lKOdV37ipk7J0OAzMhtoNJ0k4k6VcRFsJWOukkrIIiIZCIiAIiIAiIgCIiA+UVGeyRAjd+GCcbjxCvojVzEoqSszi8odBGG2E8jU63mFzOUOiseHWrCRi20cl60iplQi9MjnVtl0KmaVn3Hhj5Nw0L4yGQbKhe0TWTIMTvw2nXS3itNNdD4Du6XN5jnateWFlwObU2NUWcHf0PO4WfpLiNR91bhQJR3/I6Kw62Zw4tK6aP0KiD/AI4jTtq33VSJkSaZfDzhqzXKropR1iVxwdWn1oX8r+zuVZfIEg/uzQH90MjzK2zPs+h39bZ/YPdaaNLusa6E4EmlxtOgXL0uWbRjRgAOAV9KMJtpx9zoYShSq3UoLLxObh9CYIve7dmj0VmH0Slxfnu2uPougRbCpQXA31g6C+RGrgZBlmXQm7+15rYQ4TWijQANQAUiKaSWhfGEY9VWPi+0RFkkEREAREQBERAEREAREQBERAEREAREQBERAEREAXwhfUQCiIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID/9k=',
    name: 'PVC Short range',
    matirial: "PVC",
    size: "1/2 (12mm)",
    length: "30 meter",
    weight: "4kg-8kg"
  },
  {
    id: 1,
    imgae: green_pip.src,
    name: 'PVC Mid range',
    matirial: "PVC",
    size: "3/4 (20mm)",
    length: "30 meter",
    weight: "4kg-8kg"
  },
  {
    id: 2,
    imgae: img1.src,
    name: 'PVC Long range',
    matirial: "PVC",
    size: "1 inch (25mm)",
    length: "30 meter",
    weight: "4kg-8kg"
  }
  ]

  //Toast
  const [inquire, setInquire] = useState(false);

  const openContect = () => setInquire(!inquire);




  return (
    <div>

      <Navbar className="backnav fixed-top " >
        <Container>
          <Navbar.Brand href="#home" className="text-white footer-logo ">Nova Polymers</Navbar.Brand>
          <Nav
            className="me-auto nav">
            <Nav.Link className="nav_link active" href="#">Home</Nav.Link>
            <Nav.Link className="nav_link active" href="#garden_pip">Garden Pips</Nav.Link>
            <Nav.Link className="nav_link active" href="#category">Category</Nav.Link>
            <Nav.Link className="nav_link active" href="#color_pelette">Color Pelette</Nav.Link>
            <Nav.Link className="nav_link active" href="#about">About making</Nav.Link>
          </Nav>
          <Nav className=" w-25 d-flex justify-content-end align-items-center">
            <People></People>
            <Nav.Link href="#contectus" className="nav_link active">Contact us</Nav.Link>

          </Nav>
        </Container>
      </Navbar>

      <Row id="garden_pip" className="d-flex justify-content-center align-items-center mt-5 ">
        <Col xs={3} align="center" >
          <div className="scroll-div  overflow-auto">
            {CardList.map((item) => {
              const imageId = item.id;
              const imageUrl = item.imgae;

              return (
                <div key={imageId.toString()} className="scroll-div-image" onClick={() => onClicks(item)} >
                  <img id={imageId.toString()} className="img-border" src={imageUrl} />
                </div>
              );
            })}


          </div>
        </Col>

        <Col xs={4} className="d-flex align-items-center justify-content-center" >
          <div>
            <img id={imgId || id1.toString()} className="detail-img animate__animated animate__fadeInDown " src={imgUrl || image1} />
          </div>
        </Col>
        <Col xs={4}>
          <div >
            <div className="vertical-line">
              <Card id={imgId || id1.toString()} className="mt-5  vertical-line border-0" style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Title>{imgName || name1}</Card.Title>
                  <hr></hr>


                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td style={{ paddingRight: '10px' }}><b>Matirial</b></td>
                        <td>{imgDisc || "PVC"}</td>
                      </tr>
                      <tr>
                        <td style={{ paddingRight: '10px' }}><b>Size/Diameter</b></td>
                        <td>{imgSize || "1/2 (20mm)"}</td>
                      </tr>
                      <tr>
                        <td style={{ paddingRight: '10px' }}><b>Average Length</b></td>
                        <td>{imgLength || "30 meter"}</td>
                      </tr>
                      <tr>
                        <td style={{ paddingRight: '10px' }}><b>Weight</b></td>
                        <td>{imgWeight || "4kg-8kg"}</td>
                      </tr>
                    </tbody>
                  </Table>

                  <hr></hr>
                  <People></People>

                  <Card.Link onClick={openContect} className=" nav_link p-3 text-success" href="#">INQUIRY</Card.Link>


                </Card.Body>
              </Card>
            </div>
            <Toast show={inquire} onClose={openContect}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Contect us now!!</strong>

              </Toast.Header>
              <Toast.Body><p className="email-foot"><TelephoneFill className="icon-foot"></TelephoneFill>9664704817</p></Toast.Body>
            </Toast>
          </div>
        </Col>
      </Row>
      <Row id="about" className="mt-5 d-flex justify-content-around  discrip"  >
        <Col xs={5} className="discrip-img-col">
          <div className="discrip-img-div animate__animated animate__fadeInDown">

            <img className="discrip-img " src="https://5.imimg.com/data5/SELLER/Default/2023/2/IK/YH/WQ/3878258/pvc-pipe-plant-500x500.jpg" />
            <h1 className=" position-text">Nova Polymers</h1>
          </div>
        </Col>
        <Col xs={4} >
          <h1>About Menufacutring</h1>
          <p>Q: What are the raw materials for garden pipe making</p>
          <p>A: This multi-utility water pipe is made with lightweight basic PVC material making it long lasting and durable. The perfect PVC pipe for all your gardening and cleaning purposes.</p>
          <p>Q: what we make?</p>
          <p>All type of garden pips with design and has Hard & Soft resistent good for both Gardening and Farming. We use PVC for pip Menufacutring</p>
          <hr></hr>
          <h2>Dicription About Garden Pip</h2>
          <p>Pipe length : Garden pipes are generally available in various sizes ranging from 30 meter lengths</p>
          <p>Available in: Hard & Soft.</p>
        </Col>
      </Row>

      <hr id="category" className="container" style={{ marginBottom: "100px" }}></hr>
      <Row className="d-flex justify-content-center">
        <h1 className="footer-logo text-dark ">Catrgory</h1>
        <div className="containers">
          <div className="cards">
            <img className="more-img " src={perot_green.src} />
          </div>
          <div className="cards">
            <img className="more-img " src={orange_pip.src} />
          </div>
          <div className="cards">
            <img className="more-img " src={transperent.src} />
          </div>
          <div className="cards">
            <img className="more-img " src={shapes.src} />
          </div>
        </div>
      </Row>

      <hr id="color_pelette" className="container" style={{ marginBottom: "100px" }}></hr>

      <Row className="justify-content-center ">
        <h1 className="footer-logo text-dark">Color Pelette</h1>
        <Table striped  hover className="table_size mt-xl-5">
          <tbody>
            <tr>
              <td style={{ paddingRight: '5px' }}><b>Green</b></td>
              <td height="10px"><div className="solid-color text-white ps-3" style={{backgroundColor:'green'}}>#00ff00</div></td>
            </tr>
            <tr>
              <td style={{ paddingRight: '5px' }}><b>Parrot Green</b></td>
              <td height="10px"><div className="solid-color text-white ps-3" style={{backgroundColor:' #96CC39'}}>#96CC39</div></td>
            </tr>
            <tr>
              <td style={{ paddingRight: '5px' }}><b>Lemon Yellow</b></td>
              <td height="10px"><div className="solid-color text-dark ps-3" style={{backgroundColor:'#feff01'}}>#feff01</div></td>
            </tr>
            <tr>
              <td style={{ paddingRight: '5px' }}><b>Orange</b></td>
              <td height="10px"><div className="solid-color text-white ps-3" style={{backgroundColor:'#f96714'}}>#f96714</div></td>
            </tr>
            <tr>
              <td style={{ paddingRight: '5px' }}><b>White</b></td>
              <td height="10px"><div className="solid-color text-dark ps-3" style={{backgroundColor:'white'}}>#ffffff</div></td>
            </tr>
            <tr>
              <td style={{ paddingRight: '5px' }}><b>Pink</b></td>
              <td height="10px"><div className="solid-color text-dark ps-3" style={{backgroundColor:'pink'}}>#ffc0cb</div></td>
            </tr>
          </tbody>
        </Table>
      </Row>


      <Row id="contectus" xs={12} className="footer-parent">
        <Col xs={6} className="footer-logo">
          <h1>Nova Pips</h1>
        </Col>
        <Col xs={4}>
          <div>
            <h1 className="text-white">Address</h1>
            <hr ></hr>
            <p className="text-white">Nova Polymers Plot No 138, Golden Green Industrial Area, Khambha G.I.D.C, Tal:- Lodhika, Dist:- Rajkot, Pin 360311</p>


            <p className="text-white email-foot"><EnvelopeAt className="icon-foot"></EnvelopeAt>novapolymersrajkot@gmail.com</p>
            <p className="text-white email-foot"><TelephoneFill className="icon-foot"></TelephoneFill>9664704817</p>
          </div>
        </Col>
      </Row>

    </div>
  )


}
