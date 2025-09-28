import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function Profile() {
  return <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/ProfilePictureNoBackground.png')}
            style={styles.profilePic}
          />
          <Text style={styles.profileText}>
            Baltazar Servín Riveroll
          </Text>
        </View>
}

function Matricula() {
  return <View style={styles.matriculaContainer}>
          <Text style={styles.matriculaText}>
            A01234567
          </Text>
        </View>
}

function Carrera() {
  return <View style={styles.carreraContainer}>
          <Text style={styles.carreraText}>
            Ingeniería en Tecnologías Computacionales
          </Text>
        </View>
}

function Hobbies() {
  return <View style={styles.hobbiesContainer}>
          <Text style={styles.hobbiesText}>
            Último libro leído: MAUS
          </Text>
          <Text style={styles.hobbiesText}>
            Deporte favorito: Tenis
          </Text>
          <Text style={styles.hobbiesText}>
            Último viaje: Tapalpa
          </Text>
          <Text style={styles.hobbiesText}>
            VideoJuego favorito: Firewatch
          </Text>
        </View>
}

export default function HomeScreen() { 
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider> 
      <View style={styles.background}>
        <View>
          <Profile />
        </View>
        <View style={styles.infoContainer}>
          <Matricula />
          <Carrera />
          <Hobbies />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 30,
    paddingHorizontal: 110,
    paddingTop: 90,
    paddingBottom: 50,
    backgroundColor: 'black',
  },
  profilePic: {
    width: 110,
    height: 110,
    borderRadius: 1000,
    borderColor: '#FFFAFA',
    borderWidth: 2,
  },
  profileText: {
    color: '#FFFAFA',
    fontSize: 30,
    fontWeight: '600'
  },
  infoContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a0d',
    padding: 20,
    borderRadius: 60,
    gap: 30
  },
  matriculaContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e202d',
    width: '95%',
    height: '20%',
    borderRadius: 30,
    borderColor: '#aab1d3',
    borderWidth: 2
  },
  matriculaText: {
    color: '#aab1d3',
    fontSize: 20,
    fontWeight: '600',
  },
  carreraContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e202d',
    width: '95%',
    height: '20%',
    borderRadius: 30,
    borderColor: '#aab1d3',
    borderWidth: 2,
  },
  carreraText: {
    color: '#aab1d3',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
  hobbiesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#1e202d',
    width: '95%',
    height: '40%',
    borderRadius: 30,
    borderColor: '#aab1d3',
    borderWidth: 2,
    gap: 10
  },
  hobbiesText: {
    color: '#aab1d3',
    fontSize: 20,
    fontWeight: '600',
  }
});
