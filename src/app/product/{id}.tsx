import { View, Image, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";

export default function Product() {
    const { id } = useLocalSearchParams()


    const product = PRODUCTS.filter((item) => item.id === id)[0]
    
    console.log(id)

    return (
        <View className="flex-1">
            <Image source={product.cover}
                className="w-full h-52"
                resizeMode="cover"
            ></Image>

            <View className="p-5 mt-8 flex-1">
                <Text className="text-lime-400 text-2xl font-heading my-2"></Text>
            </View>
        </View>
    )
}