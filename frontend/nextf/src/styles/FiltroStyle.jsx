import { StyleSheet } from 'react-native';

const FiltroStyles = StyleSheet.create({
    container: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#fff',
            zIndex: 999,
            padding: 16,
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
export default FiltroStyles;