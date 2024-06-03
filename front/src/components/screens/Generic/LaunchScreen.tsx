import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import Button from '../../common/Button'
import { useNavigation } from '@react-navigation/native';


const LaunchScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.containerTop}>
                <Image source={require("../../../assets/icons/android/res/mipmap-hdpi/ic_launcher.png")} />
                <Text style={styles.title}>LunarFlow</Text>
            </View>
            <Text style={styles.textContainer}>
                LunarFlow est une application qui vous permettra de suivre votre cycle menstruel, mais surtout vos humeurs et vos symptômes menstruels et prémenstruels.

                Cette application vous aidera à maintenir votre foi même lorsque vous serez au plus bas. En fonction de vos humeurs, LunarFlow vous enverra des notifications de divers rappels et messages bienveillants et positifs pour vous aider à aller mieux et garder de bonnes habitudes religieuses même lorsque vous ne priez pas.
            </Text>
            <Button onPress={() => navigation.navigate("Register")}>
                <Text>Let's do this</Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 26,
        backgroundColor: '#F2ECE4',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    containerTop: {
        alignItems: "center"
    },
    title: {
        color: '#2A3432',
        textAlign: 'center',
        fontSize: 20,
        letterSpacing: 5,
        textShadowColor: "black",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 8,
    },
    textContainer: {
        padding: 28,
        fontSize: 16,
        lineHeight: 24,
        justifyContent: "center",
        textAlign: 'center',
    },
});
export default LaunchScreen;