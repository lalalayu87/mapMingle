import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function MyPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem("userToken");
      setIsLoggedIn(!!token);
    };
    checkLoginStatus();
  }, []);

  const handleKakaoLogin = async () => {
    // 카카오톡 로그인 로직을 여기서 구현
    const dummyToken = "kakao_dummy_token"; // 실제 카카오 로그인 API 통합 필요
    await AsyncStorage.setItem("userToken", dummyToken);
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("userToken");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>카카오톡으로 로그인하세요</Text>
        <Button title="카카오 로그인" onPress={handleKakaoLogin} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>마이 페이지</Text>
      <Text>로그인 상태입니다!</Text>
      <Button title="로그아웃" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});
