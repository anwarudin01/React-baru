// import { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import axios from 'axios';

// const News = () => {
//   let input = 'business';
//   const url = `https://newsapi.org/v2/top-headlines?country=id&category=${input}&apiKey=028c1940a72442bebade3e0b1d0dd0c9`;
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const loadNews = async () => {
//       const response = await axios.get(url);
//       setNews(response.data.articles);
//     };
//     loadNews();
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         <h1>Anwar News</h1>
//         <Tombol />
//         {news.map((n) => (
//           <div className="col-3">
//             <CardNews key={n.id} title={n.title} description={n.description} image={n.urlToImage} url={n.url} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// function Tombol() {
//   return (
//     <InputGroup className="mb-3">
//       <Form.Control type={'text'} placeholder="Cari Berita" aria-label="Recipient's username" aria-describedby="basic-addon2" />
//       <Button variant="outline-secondary" id="button-addon2">
//         Button
//       </Button>
//     </InputGroup>
//   );
// }

// function CardNews(props) {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={props.image} />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text>{props.description}</Card.Text>
//         <a href={props.url}>
//           <Button variant="primary">Lihat</Button>
//         </a>
//       </Card.Body>
//     </Card>
//   );
// }

// export default News;
