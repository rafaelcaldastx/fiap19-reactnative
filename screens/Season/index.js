import React, { Component } from 'react';

import { View } from 'react-native';
import { Container, Header, Content, Accordion } from 'native-base';

class Season extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        //this.props.route.params.year
        fetch("http://ergast.com/api/f1/2010.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({                    
                        items: result.MRData.RaceTable.Races
                    });
                }        
            )
    }

    render() {
        const { items } = this.state;
        const dataArray = [];
        items.forEach(item => {
            dataArray.push({ title: item.raceName, content: `Round: ${item.round} \n
            Circuit: ${item.Circuit.circuitName} \n
            Date: ${item.date}
            ` })    
        });
                      
        return (            
        <Container>
            <Header />
            <Content padder>
            <Accordion dataArray={dataArray} expanded={0}/>
            </Content>
        </Container>
        );
    }
}

export default Season;