import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

class Newsbaru extends React.Component {
  state = {
    data: [],
    value: 'business',
  };

  onChangeHandler(e) {
    this.setState({ value: e.target.value });
  }

  async componentDidMount() {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=id&category=${this.state.value}&apiKey=028c1940a72442bebade3e0b1d0dd0c9`);
      const hasil = await response.json();
      const data = hasil.articles;
      console.log(data);
      this.setState({ data: data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row">
            <h1>Anwar News</h1>
            <input type={'text'} onChange={this.onChangeHandler.bind(this)} placeholder="Type something to search" />
            {data.map((n, index) => (
              <div key={n.id} className="col-3">
                <CardNews title={n.title} description={n.description} image={n.urlToImage} url={n.url} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

function CardNews(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <a href={props.url}>
          <Button variant="primary">Lihat</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

export default Newsbaru;
