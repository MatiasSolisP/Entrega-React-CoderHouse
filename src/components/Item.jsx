import { use } from 'react'
import Button from 'react-boostrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router'

function Item ({item}) {
    const navigate = useNavigate()
    return ( 
        <Card>
            <Card.Img variante="top" src={item.thumbnail} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variante="primary" Onclick={() => navigate(`/item/${item.id}`)}> Comprar </Button>
            </Card.Body>
        </Card>
    )
}

export default Item