import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function MyPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        setIsLoggedIn(!!token);
      } catch (error) {
        console.error("로그인 상태 확인 중 오류 발생:", error);
      } finally {
        setIsLoading(false);
      }
    };
    checkLoginStatus();
  }, []);

  const handleKakaoLogin = async () => {
    try {
      const dummyToken = "kakao_dummy_token";
      await AsyncStorage.setItem("userToken", dummyToken);
      setIsLoggedIn(true);
      Alert.alert("로그인 성공", "카카오톡으로 로그인되었습니다.");
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      Alert.alert("로그인 실패", "문제가 발생했습니다. 다시 시도하세요.");
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      setIsLoggedIn(false);
      Alert.alert("로그아웃 성공", "성공적으로 로그아웃되었습니다.");
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
      Alert.alert("로그아웃 실패", "문제가 발생했습니다. 다시 시도하세요.");
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>로딩 중...</Text>
      </View>
    );
  }

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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  button: {
    marginVertical: 10,
  },
});
