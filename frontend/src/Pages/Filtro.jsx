import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Modal, Portal, Text, TextInput, Button, PaperProvider, List, RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import * as estilo from '../styles/globals.css';
import * as estilo2 from '../styles/HomePage.css';

const Filtro = () => {

    const [visible, setVisible] = React.useState('false') ;
    const [expanded, setExpanded] = React.useState('false');
    const [genero, setGenero] = React.useState('acao');
    const [avaliacao, setAvaliacao] = React.useState('');
    const [date, setDate] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [duracao, setDuracao] = React.useState('');
    const [ordem, setOrdem] = React.useState('');

    const mostrarFiltro = () => setVisible(true);
    const mostrarFiltro = () => setVisible(false);
    const handlePress = () => { !expanded }

    return (
    
        <PaperProvider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>

                    //botões gênero dos filmes
                    <RadioButton.Group onValueChange={genero => setGenero(value)} value={genero}>
                        <RadioButton.Item label="Ação" genero="acao" />
                        <RadioButton.Item label="Comédia" genero="comedia" />
                        <RadioButton.Item label="Drama" genero="drama" />
                    </RadioButton.Group>

                    //lista das avaliações 
                    <List.Section title="Avaliação mínima">
                        <List.Accordion>
                            <Button icon="star" mode="contained" onPress={() => setAvaliacao('1')}>
                                1 estrela
                            </Button>
                            <Button icon="star" mode="contained" onPress={() => setAvaliacao('2')}>
                                2 estrelas
                            </Button>
                            <Button icon="star" mode="contained" onPress={() => setAvaliacao('3')}>
                                3 estrelas
                            </Button>
                            <Button icon="star" mode="contained" onPress={() => setAvaliacao('4')}>
                                4 estrelas
                            </Button>
                            <Button icon="star" mode="contained" onPress={() => setAvaliacao('5')}>
                                5 estrelas
                            </Button>
                        </List.Accordion>
                    </List.Section>

                    //Input ano de lançamento
                    {show && (                           
                        <DateTimePicker
                            value={date}
                            mode={'date'}
                            is24Hour={true}
                            display='default'
                            onTouchCancel={(e, date) => setShow(false)}
                            onChange={() => {
                                setshow(false);
                                setDate(moment(date).format('DD/MMM/YYYY'));

                            }}
                        />
                    )};

                    {show && (
                        <DateTimePicker
                            value={date2}
                            mode={'date'}
                            is24Hour={true}
                            display='default'
                            onTouchCancel={(e, date2) => setShow(false)}
                            onChange={() => {
                                setshow(false);
                                setDate2(moment(date2).format('DD/MMM/YYYY'));

                            }}
                        />
                    )};

                    <TouchableOpacity onPress={() => setShow(true) }>
                        <TextInput>
                            label="De"
                            value={date}
                            left={<TextInput.icon name='calendar' />}
                            editable ={false}
                        </TextInput>

                        <TextInput>
                            label="Até"
                            value={date2}
                            left={<TextInput.icon name='calendar' />}
                            editable ={false}
                        </TextInput>
                    </TouchableOpacity>

                    //Duração do filme
                    <List.Section title="Duração">
                        <List.Accordion>
                            <Button icon="" mode="contained" onPress={() => setDuracao('1')}>
                                Menos que 1 hora 
                            </Button>
                            <Button icon="" mode="contained" onPress={() => setDuracao('2')}>
                                Entre 1 e 2 horas 
                            </Button>
                            <Button icon="" mode="contained" onPress={() => setDuracao('3')}>
                                Entre 2 e 3 horas 
                            </Button>
                            <Button icon="" mode="contained" onPress={() => setDuracao('4')}>
                                Mais que 3 horas 
                            </Button>
                        </List.Accordion>
                    </List.Section>

                    //Ordenar por:
                    <List.Section title="Duração">
                        <List.Accordion>
                            <Button icon="" mode="contained" onPress={() => setOrdem('1')}>
                                Relevância
                            </Button>
                            <Button icon="" mode="contained" onPress={() => setOrdem('2')}>
                                Avaliações 
                            </Button>
                            <Button icon="" mode="contained" onPress={() => setOrdem('3')}>
                                Data de lançamento 
                            </Button>
                            <Button icon="" mode="contained" onPress={() => setOrdem('4')}>
                                Duração
                            </Button>
                        </List.Accordion>
                    </List.Section>

                    //botões aplicar e limpar
                    <Button icon="check" mode="contained" rippleColor="#1B1F3B" onPress={() => console.log("salve rpzd") /* para fazer - buscar no baco de dados os filmes que batem com filtro */}>
                        Aplicar
                    </Button>

                    <Button icon="star" mode="contained" rippleColor="#E50914" onPress={() => console.log("limpando filtro")}>
                        Limpar
                    </Button>

                </Modal>
            </Portal>
            //botão para teste do modal 
            <Button onPress={showModal}>
                Show
            </Button>
        </PaperProvider>

    );

};

export default Filtro();