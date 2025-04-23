import { StyleSheet, Text, View } from "react-native"

function Subtitle(props){
    return(
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{props.children}</Text>
        </View>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitleContainer : {
        padding:6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderColor: "#744428",
        borderBottomWidth: 2
    },
    subtitle: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold"
    }
})