import { Container, Row, Col, Form, Button } from 'react-bootstrap'


const ShowSongs = ({songs})=>{
    console.log(songs)

    return(
        <Row className='augh'>
          {songs.map((song) => (
            <Col key={song.id} xs={3} className="mb-3 francescoMissoriniLeccaPalle">
              <div className="text-center">
                  <img className="ao" src={song.album.cover_medium} alt={song.album.title} />               
                <p>       
                         
                    Album: {song.album.title.length ? song.album.title : `${song.album.title}...`}                 
                </p>
              </div>
            </Col>
          ))}
        </Row>
    )
}

export default ShowSongs