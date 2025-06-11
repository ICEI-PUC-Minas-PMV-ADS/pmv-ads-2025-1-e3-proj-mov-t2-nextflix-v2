import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import {
    Modal,
    Portal,
    Text,
    TextInput,
    Button,
    Provider as PaperProvider,
    RadioButton,
    List,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const Filtro = () => {
    const [visible, setVisible] = useState(false);
    const [genero, setGenero] = useState('acao');
    const [avaliacao, setAvaliacao] = useState('');
    const [date, setDate] = useState(new Date());
    const [date2, setDate2] = useState(new Date());
    const [showDate1, setShowDate1] = useState(false);
    const [showDate2, setShowDate2] = useState(false);
    const [duracao, setDuracao] = useState('');
    const [ordem, setOrdem] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [activeDateField, setActiveDateField] = useState(null);

    const formatDate = (date) => {
        return date.toLocaleDateString('pt-BR');
    };

    // criando JSON oara mandar para o BackEnd

    const aplicarFiltros = async () => {
        const filtros = {
            genero,
            avaliacao,
            dataLancamentoDe: moment(date).format('YYYY-MM-DD'),
            dataLancamentoAte: moment(date2).format('YYYY-MM-DD'),
            duracao,
            ordem,
        };

        console.log('Filtros a enviar:', filtros);

        fetch(' backEnd aqui - como vou fazer isso sem mexer no backEnd?', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(filtros),
        })
            .then((res) => res.json())
            .then((dados) => {
                console.log('Filmes recebidos do backend:', dados);
                
            })
            .catch((erro) => {
                console.error('Erro ao buscar filmes:', erro);
            });
    };

    return (
        <View style={styles.container}>
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={() => setVisible(false)}
                    contentContainerStyle={styles.modal}>
                    <KeyboardAvoidingView>
                          <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>

                    {/* G�nero */}
                     <Text style={styles.sectionTitle}>Gênero:</Text>
                                    <View style={styles.row}>
                                      {['acao', 'comedia', 'drama'].map((tipo) => (
                                        <TouchableOpacity
                                          key={tipo}
                                          style={[
                                            styles.generoButton,
                                            genero === tipo && styles.generoButtonSelected,
                                          ]}
                                          onPress={() => setGenero(tipo)}
                                        >
                                          <Text style={{ color: genero === tipo ? '#fff' : '#1B1F3B' }}>
                                            {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                                          </Text>
                                        </TouchableOpacity>
                                      ))}
                                    </View>

                    {/* Avalia��o m�nima */}
                    <List.Section title="Avalia��o m�nima" style={styles.sectionTitle}>
                        <List.Accordion title="Escolha">
                            {[1, 2, 3, 4, 5].map((n) => (
                                <Button key={n} mode="contained" style={styles.button} onPress={() => setAvaliacao(String(n))}>
                                    {n} estrela{n > 1 ? 's' : ''}
                                </Button>
                            ))}
                        </List.Accordion>
                    </List.Section>

                    {/* Data de lan�amento */}
                    <Text style={styles.sectionTitle}>Ano de Lan�amento:</Text>

                    <TouchableOpacity
                        onPress={() => {
                            setShowDatePicker(true);
                            setActiveDateField('from');
                        }}
                    >
                        <TextInput
                            label="De"
                            value={formatDate(date)}
                            left={<TextInput.Icon icon="calendar" />}
                            editable={false}
                            style={styles.input}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setShowDatePicker(true);
                            setActiveDateField('to');
                        }}
                    >
                        <TextInput
                            label="At�"
                            value={formatDate(date2)}
                            left={<TextInput.Icon icon="calendar" />}
                            editable={false}
                            style={styles.input}
                        />
                    </TouchableOpacity>

                    {showDatePicker && (
                        <DateTimePicker
                            value={activeDateField === 'from' ? date : date2}
                            mode="date"
                            display="default"
                            onChange={(event, selectedDate) => {
                                setShowDatePicker(false);
                                if (selectedDate) {
                                    activeDateField === 'from' ? setDate(selectedDate) : setDate2(selectedDate);
                                }
                            }}
                        />
                    )}

                    {/* Dura��o */}
                    <List.Section title="Dura��o" style={styles.sectionTitle}>
                        <List.Accordion>
                            <Button mode="contained" style={styles.button} onPress={() => setDuracao('1')}>
                                Menos que 1 hora
                            </Button>
                            <Button mode="contained" style={styles.button} onPress={() => setDuracao('2')}>
                                Entre 1 e 2 horas
                            </Button>
                            <Button mode="contained" style={styles.button} onPress={() => setDuracao('3')}>
                                Entre 2 e 3 horas
                            </Button>
                            <Button mode="contained" style={styles.button} onPress={() => setDuracao('4')}>
                                Mais que 3 horas
                            </Button>
                        </List.Accordion>
                    </List.Section>

                    {/* Ordenar por */}
                    <List.Section title="Ordenar por:" style={styles.sectionTitle}>
                        <List.Accordion>
                            <Button mode="contained" style={styles.button} onPress={() => setOrdem('relevancia')}>
                                Relev�ncia
                            </Button>
                            <Button mode="contained" style={styles.button} onPress={() => setOrdem('avaliacoes')}>
                                Avalia��es
                            </Button>
                            <Button mode="contained" style={styles.button} onPress={() => setOrdem('data')}>
                                Data de lan�amento
                            </Button>
                            <Button mode="contained" style={styles.button} onPress={() => setOrdem('duracao')}>
                                Dura��o
                            </Button>
                        </List.Accordion>
                    </List.Section>

                    {/* Bot�es finais */}
                    <Button
                        icon="check"
                        mode="contained"
                        style={styles.button}
                        onPress={aplicarFiltros}>
                        Aplicar
                    </Button>
                    <Button
                        icon="star"
                        mode="contained"
                        style={[styles.button, { backgroundColor: '#E50914', borderColor: '#E50914' }]}
                        rippleColor="#E50914"
                        onPress={() => console.log('Limpar filtros')}>
                        Limpar
                    </Button>
                    <Button style={styles.button} onPress={() => setVisible(false)}>Fechar</Button>
                    </ScrollView>
                    </KeyboardAvoidingView>
                </Modal>
            </Portal>

            <Button mode="contained" rippleColor="#1B1F3B" style={styles.button} onPress={() => setVisible(true)}>
                Abrir Filtro
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        flexWrap: 'wrap'
    },
    modal: {
        backgroundColor: '#fff',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 500,
        marginBottom: 8,
    },
    input: {
        marginBottom: 10,
        backgroundColor: '#F3F3F3',
    },
    button: {
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#1B1F3B',
        padding: 7,
        background: 'white',
        marginVertical: 5,
    },
});

        export default Filtro;