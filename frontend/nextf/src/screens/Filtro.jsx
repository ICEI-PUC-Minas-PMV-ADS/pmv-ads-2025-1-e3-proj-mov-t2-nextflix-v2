import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView, Platform, KeyboardAvoidingView, } from 'react-native';
import {
    Modal,
    Portal,
    Text,
    TextInput,
    Button,
    List,
    IconButton,
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

console.log('DEBUG:', Modal);
console.log('DEBUG:', KeyboardAvoidingView);


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
    const [avaOpen, setAvaOpen] = useState(false);
    const [duracaoOpen, setDuracaoOpen] = useState(false);
    const [ordenacaoOpen, setOrdenacaoOpen] = useState(false);

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

        fetch('https://jsonplaceholder.typicode.com/posts', {
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
                          <ScrollView
                          contentContainerStyle={{ paddingBottom: 20 }}
                           keyboardShouldPersistTaps="handled">

                    {/* G�nero */}
                     <Text style={styles.sectionTitle}>  Gênero:</Text>
                                    <View style={styles.row}>
                                      {['acao', 'comedia', 'drama'].map((tipo) => (
                                        <TouchableOpacity
                                          key={tipo}
                                          style={[
                                            styles.generoButton,
                                            genero === tipo && styles.generoButtonSelected,
                                          ]}
                                          onPress={() => {setGenero(tipo); console.log(tipo);}}
                                        >
                                          <Text style={{ color: genero === tipo ? '#fff' : '#1B1F3B' }}>
                                            {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                                          </Text>
                                        </TouchableOpacity>
                                      ))}
                                    </View>

                    {/* Avaliação mínima */}
                    <List.Section title="Avaliação mínima" titleStyle={styles.sectionTitle}>
                        <List.Accordion
                        title={avaliacao ? `${avaliacao} ⭐` : 'Escolha'}
                        style={styles.button}
                        expanded={avaOpen}
                        onPress={() => setAvaOpen(!avaOpen)}>
                            {[1, 2, 3, 4, 5].map((n) => (
                                <Button key={n} mode="contained" style={styles.button} labelStyle={styles.text} onPress={() => {setAvaliacao(String(n)); setAvaOpen(false); console.log(String(n));}}>
                                    {n} ⭐
                                </Button>
                            ))}
                        </List.Accordion>
                    </List.Section>

                    {/* Data de lançamento */}
                    <Text style={styles.sectionTitle}> Ano de Lançamento:</Text>

                    <TouchableOpacity
                        onPress={() => {
                             console.log('Abrindo DatePicker para De');
                            setShowDatePicker(true);
                            setActiveDateField('from');
                        }}
                    >
                        <TextInput
                            label="De"
                            value={formatDate(date)}
                            left={<TextInput.Icon icon="calendar-blank" disabled={true} />}
                            editable={false}
                            style={styles.input}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                             console.log('Abrindo DatePicker para Até');
                            setShowDatePicker(true);
                            setActiveDateField('to');
                        }}
                    >
                        <TextInput
                            label="Até"
                            value={formatDate(date2)}
                            left={<TextInput.Icon icon="calendar" disabled={true}/>}
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

                    {/* Duração */}
                    <List.Section title="Duração" titleStyle={styles.sectionTitle}>
                        <List.Accordion
                          style={styles.button}
                          title={duracao ? `${duracao} min` : 'Escolha'}
                          expanded={duracaoOpen}
                          onPress={() => setDuracaoOpen(!duracaoOpen)}>
                            {['-90', '90', '120', '150', '180+'].map((n) => (
                                <Button
                                  key={n}
                                  mode="contained"
                                  onPress={() => {
                                    setDuracao(n);
                                    setDuracaoOpen(false);
                                    console.log(n);
                                  }}
                                  style={styles.button}
                                  labelStyle={styles.text}
                                >
                                  {n} min
                                </Button>
                              ))}
                        </List.Accordion>
                    </List.Section>

                    {/* Ordenar por */}
                    <List.Section title="Ordenar por:" titleStyle={styles.sectionTitle}>
                        <List.Accordion
                        style={styles.button}
                        title={ordem || 'Escolha'}
                        expanded={ordenacaoOpen}
                        onPress={() => setOrdenacaoOpen(!ordenacaoOpen)}>
                            {['relevância', 'avaliações', 'data', 'duração'].map((opcao) => (
                                <Button
                                  key={opcao}
                                  mode="contained"
                                  onPress={() => {
                                    setOrdem(opcao);
                                    setOrdenacaoOpen(false);
                                    console.log(opcao);
                                  }}
                                  style={styles.button}
                                  labelStyle={styles.text}
                                >
                                  {opcao}
                                </Button>
                              ))}
                        </List.Accordion>
                    </List.Section>

                    {/* Bot�es finais */}
                    <Button
                        icon="check"
                        mode="contained"
                        style={styles.button}
                        labelStyle={styles.text}
                        onPress={() => {aplicarFiltros; setVisible(false);}}>
                        Aplicar
                    </Button>
                    <Button
                        icon="broom"
                        mode="contained"
                        style={[styles.button, { backgroundColor: '#E50914', borderColor: '#E50914',}]}
                        rippleColor="#E50914"
                        onPress={() => {
                            setGenero('acao');
                            setAvaliacao('');
                            setDate(new Date());
                            setDate2(new Date());
                            setDuracao('');
                            setOrdem('');}}>

                        Limpar
                    </Button>
                    <Button style={styles.button} labelStyle={styles.text} onPress={() => setVisible(false)}>Fechar</Button>
                    </ScrollView>
                    </KeyboardAvoidingView>
                </Modal>
            </Portal>

            <IconButton
            mode="contained"
            icon="filter-menu-outline"
            iconColor="#1B1F3B"
            rippleColor="#1B1F3B"
            size={20}
            onPress={() => setVisible(true)}/>

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
        fontSize: 20,
        fontWeight: '500',
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
        backgroundColor: 'white',
        marginVertical: 5,
    },
    text: {
        color: '#1B1F3B',
        fontSize: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    generoButton: {
        borderWidth: 1,
        borderColor: '#1B1F3B',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff',
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
  },
  generoButtonSelected: {
        backgroundColor: '#1B1F3B',
  },
});

        export default Filtro;