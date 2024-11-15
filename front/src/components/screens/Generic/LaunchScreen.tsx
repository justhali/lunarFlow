import * as React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';


const LaunchScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.containerTop}>
                <Image source={require("../../../assets/icons/android/res/mipmap-hdpi/ic_launcher.png")} />
                <Text style={styles.title}>LunarFlow</Text>
            </View>
            {/* TODO ajouter caroussel par raport au texte pour dynamiser et illustrer le texte */}
            <Text style={styles.textContainer}>
                <Text style={styles.textIntroduction}>
                    LunarFlow est une application qui vous permettra de suivre votre cycle menstruel, mais surtout vos humeurs et vos symptômes (menstruels et prémenstruels).
                </Text>
                <Text>
                    Cette application vous aidera à maintenir votre foi même lorsque vous serez au plus bas. En fonction de vos humeurs, LunarFlow vous enverra des notifications de divers rappels et messages bienveillants et positifs pour vous aider à aller mieux et garder de bonnes habitudes religieuses même lorsque vous ne priez pas.
                </Text>
            </Text>
            {/* TODO ajouter deux boutons : Se connecter et Créer un compte */}
            <Button
                title="Créer un compte"
                accessibilityLabel="Bouton créer un compte"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: 80,
        textAlign: "justify",
    },
    textIntroduction: {
        marginBottom: 5,
    }
});
export default LaunchScreen;