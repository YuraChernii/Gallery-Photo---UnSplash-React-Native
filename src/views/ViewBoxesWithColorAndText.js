import React from "react";
import { View, Text } from "react-native";

const ViewBoxesWithColorAndText = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                height: 10000,
                padding: 2000000
            }}
        >
            <View style={{ backgroundColor: "red", flex: 10 }} />
            <View style={{ backgroundColor: "red", flex: 0.5 }} />
            <Text>Hello World!</Text>
        </View>
    );
};

export default ViewBoxesWithColorAndText;