import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { useSelector } from "react-redux";
import "./index.scss";

export default function Index() {
  const state = useSelector((state, action) => {
    return state.home.counter;
  });
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <Text>Hello world!{state}</Text>
    </View>
  );
}
