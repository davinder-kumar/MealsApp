import { Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({title, color, onPressHandler}){
    return (
        <View style={[styles.gridItem]}>
            <Pressable onPress={onPressHandler}  android_ripple={{color: "light"}} style={({pressed}) => [styles.button , pressed ? styles.pressed : null] }>
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem : {
        flex: 1,
        margin : 16,
        height: 150,
        elevation: 8,
        borderRadius: 10,
        shadowRadius: 8, 
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {height : 5, width :0},
    },
    pressed : {
        opacity : 0.5,
    },
    title :{
        fontSize: 16,
        fontFamily: "open-sans"
    }, 
    button : {
        flex :1
    },
    innerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        borderRadius: 10      
        
    }
})

export default CategoryGridTile;